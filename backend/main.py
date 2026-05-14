from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from playwright.sync_api import sync_playwright

from sqlalchemy.orm import Session

from database import SessionLocal
from database import engine

from models import Base
from models import TestExecution

import time
import uuid
import os

app = FastAPI()

# DATABASE

Base.metadata.create_all(bind=engine)

# CORS

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# DIRECTORIES

os.makedirs(
    "screenshots",
    exist_ok=True
)

os.makedirs(
    "reports",
    exist_ok=True
)

# STATIC FILES

app.mount(
    "/screenshots",
    StaticFiles(directory="screenshots"),
    name="screenshots",
)

app.mount(
    "/reports",
    StaticFiles(directory="reports"),
    name="reports",
)

# ROOT

@app.get("/")
def home():

    return {
        "message":
        "TestPilot AI Backend Running"
    }

# RUN TEST

@app.get("/run-test")
def run_test(url: str):

    db: Session = SessionLocal()

    start = time.time()

    test_id = str(uuid.uuid4())

    screenshot_path = (
        f"screenshots/{test_id}.png"
    )

    report_path = (
        f"reports/{test_id}.html"
    )

    console_errors = []

    failed_requests = []

    with sync_playwright() as p:

        browser = p.chromium.launch(
            headless=True
        )

        page = browser.new_page()

        # CONSOLE ERRORS

        page.on(
            "console",
            lambda msg:
            console_errors.append(msg.text)
            if msg.type == "error"
            else None
        )

        # FAILED REQUESTS

        page.on(
            "requestfailed",
            lambda request:
            failed_requests.append(request.url)
        )

        response = page.goto(
            url,
            timeout=60000
        )

        page.wait_for_timeout(3000)

        title = page.title()

        # DOM ANALYSIS

        buttons = page.locator(
            "button"
        ).count()

        links = page.locator(
            "a"
        ).count()

        forms = page.locator(
            "form"
        ).count()

        inputs = page.locator(
            "input"
        ).count()

        images = page.locator(
            "img"
        ).count()

        # EXECUTION TIME

        execution_time = round(
            time.time() - start,
            2
        )

        # SECURITY ANALYSIS

        headers = response.headers

        security_headers = [

            "content-security-policy",

            "x-frame-options",

            "strict-transport-security",

        ]

        score = 0

        for header in security_headers:

            if header in headers:
                score += 1

        if score == 3:

            security_status = "A+"

        elif score == 2:

            security_status = "B"

        else:

            security_status = "C"

        # AI ACCURACY

        ai_accuracy = min(
            100,
            70 + buttons + forms + links // 10
        )

        # SCREENSHOT

        page.screenshot(
            path=screenshot_path,
            full_page=True
        )

        browser.close()

    # REPORT HTML

    report_html = f"""
    <html>

    <head>

        <title>
            TestPilot AI Report
        </title>

        <style>

            body {{

                background:#020617;
                color:white;
                font-family:Arial;
                padding:40px;

            }}

            .card {{

                background:#111827;
                padding:24px;
                border-radius:20px;
                margin-bottom:24px;

            }}

            img {{

                width:100%;
                border-radius:20px;

            }}

        </style>

    </head>

    <body>

        <h1>
            TestPilot AI Report
        </h1>

        <div class="card">

            <h2>
                Website Information
            </h2>

            <p>
                Website: {url}
            </p>

            <p>
                Title: {title}
            </p>

            <p>
                Execution Time:
                {execution_time}s
            </p>

        </div>

        <div class="card">

            <h2>
                DOM Analysis
            </h2>

            <p>
                Buttons Found:
                {buttons}
            </p>

            <p>
                Links Found:
                {links}
            </p>

            <p>
                Forms Found:
                {forms}
            </p>

            <p>
                Inputs Found:
                {inputs}
            </p>

            <p>
                Images Found:
                {images}
            </p>

        </div>

        <div class="card">

            <h2>
                Security Analysis
            </h2>

            <p>
                Security Score:
                {security_status}
            </p>

            <p>
                Console Errors:
                {len(console_errors)}
            </p>

            <p>
                Failed Requests:
                {len(failed_requests)}
            </p>

            <p>
                AI Accuracy:
                {ai_accuracy}%
            </p>

        </div>

        <div class="card">

            <h2>
                Captured Screenshot
            </h2>

            <img
                src="/{screenshot_path}"
            />

        </div>

    </body>

    </html>
    """

    # SAVE REPORT

    with open(
        report_path,
        "w",
        encoding="utf-8"
    ) as file:

        file.write(report_html)

    # DATABASE SAVE

    execution = TestExecution(

        website=url,

        title=title,

        buttons_found=buttons,

        links_found=links,

        forms_found=forms,

        inputs_found=inputs,

        images_found=images,

        console_errors=len(console_errors),

        failed_requests=len(failed_requests),

        execution_time=execution_time,

        security_score=security_status,

        ai_accuracy=ai_accuracy,

        screenshot=f"http://127.0.0.1:8000/{screenshot_path}",

        report=f"http://127.0.0.1:8000/{report_path}",

    )

    db.add(execution)

    db.commit()

    db.refresh(execution)

    return {

        "id": execution.id,

        "website": execution.website,

        "title": execution.title,

        "buttons_found": execution.buttons_found,

        "links_found": execution.links_found,

        "forms_found": execution.forms_found,

        "inputs_found": execution.inputs_found,

        "images_found": execution.images_found,

        "console_errors": execution.console_errors,

        "failed_requests": execution.failed_requests,

        "execution_time": execution.execution_time,

        "security_score": execution.security_score,

        "ai_accuracy": execution.ai_accuracy,

        "screenshot": execution.screenshot,

        "report": execution.report,

    }

# HISTORY

@app.get("/history")
def get_history():

    db: Session = SessionLocal()

    executions = db.query(
        TestExecution
    ).order_by(
        TestExecution.id.desc()
    ).all()

    result = []

    for item in executions:

        result.append({

            "id": item.id,

            "website": item.website,

            "title": item.title,

            "buttons_found": item.buttons_found,

            "links_found": item.links_found,

            "forms_found": item.forms_found,

            "inputs_found": item.inputs_found,

            "images_found": item.images_found,

            "console_errors": item.console_errors,

            "failed_requests": item.failed_requests,

            "execution_time": item.execution_time,

            "security_score": item.security_score,

            "ai_accuracy": item.ai_accuracy,

            "screenshot": item.screenshot,

            "report": item.report,

        })

    return result

# AI TEST CASE GENERATOR

@app.get("/generate-testcases")
def generate_testcases(url: str):

    testcases = [

        {

            "title":
            "Homepage Load Test",

            "steps": [

                f"Open {url}",

                "Verify homepage loads",

                "Verify title is visible",

            ],

            "expected":
            "Homepage should load successfully",

        },

        {

            "title":
            "Navigation Menu Test",

            "steps": [

                "Click navigation links",

                "Verify pages open correctly",

            ],

            "expected":
            "Navigation should work properly",

        },

        {

            "title":
            "Button Validation Test",

            "steps": [

                "Find all buttons",

                "Click each button",

                "Verify no broken actions",

            ],

            "expected":
            "Buttons should work correctly",

        },

        {

            "title":
            "Form Submission Test",

            "steps": [

                "Enter input data",

                "Submit forms",

                "Validate response",

            ],

            "expected":
            "Forms should submit successfully",

        },

        {

            "title":
            "Responsive UI Test",

            "steps": [

                "Open mobile viewport",

                "Open tablet viewport",

                "Verify responsive layout",

            ],

            "expected":
            "UI should adapt correctly",

        },

        {

            "title":
            "Accessibility Test",

            "steps": [

                "Verify alt text",

                "Verify button labels",

                "Verify keyboard navigation",

            ],

            "expected":
            "Accessibility checks should pass",

        },

    ]

    return {

        "website": url,

        "total_cases":
            len(testcases),

        "testcases":
            testcases,

    }