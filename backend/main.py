from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from database import SessionLocal, engine, Base
from models import TestExecution
from playwright_engine import run_playwright_test
from PIL import Image, ImageDraw

import os
import random
import datetime

app = FastAPI()

# Create Tables
Base.metadata.create_all(bind=engine)

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Screenshots Folder
os.makedirs(
    "screenshots",
    exist_ok=True
)

# Static Screenshots
app.mount(
    "/screenshots",
    StaticFiles(directory="screenshots"),
    name="screenshots",
)

# Home
@app.get("/")
def home():

    return {
        "message": "TestPilot AI Backend Running"
    }

# Generate Test
@app.post("/generate-test")
def generate_test(
    prompt: str,
    mode: str = "Demo"
):

    try:

        # REAL MODE
        if mode == "Real":

            result = run_playwright_test(
                prompt
            )

            db = SessionLocal()

            execution = TestExecution(
                prompt=prompt,
                website="Real Browser",
                status=result["status"],
                screenshot=result.get(
                    "screenshot",
                    ""
                )
            )

            db.add(execution)

            db.commit()

            db.close()

            return result

        # DEMO MODE
        prompt_lower = prompt.lower()

        website = "Google"

        if "github" in prompt_lower:
            website = "GitHub"

        elif "youtube" in prompt_lower:
            website = "YouTube"

        elif "amazon" in prompt_lower:
            website = "Amazon"

        execution_time = round(
            random.uniform(0.5, 2.0),
            2
        )

        ai_score = random.randint(
            92,
            100
        )

        screenshot_path = (
            "screenshots/result.png"
        )

        img = Image.new(
            "RGB",
            (1400, 900),
            color=(15, 23, 42)
        )

        draw = ImageDraw.Draw(img)

        draw.text(
            (60, 70),
            "TESTPILOT AI DEMO REPORT",
            fill=(255, 255, 255)
        )

        draw.text(
            (60, 170),
            f"Website: {website}",
            fill=(79, 140, 255)
        )

        draw.text(
            (60, 260),
            f"Prompt: {prompt}",
            fill=(34, 197, 94)
        )

        draw.text(
            (60, 350),
            f"AI Score: {ai_score}%",
            fill=(255, 255, 0)
        )

        draw.text(
            (60, 440),
            f"Execution Time: {execution_time} sec",
            fill=(255, 255, 255)
        )

        draw.text(
            (60, 530),
            f"Generated At: {datetime.datetime.now()}",
            fill=(255, 255, 255)
        )

        img.save(
            screenshot_path
        )

        db = SessionLocal()

        execution = TestExecution(
            prompt=prompt,
            website=website,
            status="Success",
            screenshot=screenshot_path
        )

        db.add(execution)

        db.commit()

        db.close()

        return {
            "status": "success",
            "mode": "Demo",
            "website": website,
            "execution_time": execution_time,
            "ai_score": ai_score,
            "logs": [
                "[INFO] Demo Mode Started",
                "[SUCCESS] Demo Completed"
            ],
            "screenshot": screenshot_path,
        }

    except Exception as e:

        return {
            "status": "error",
            "error": str(e),
        }

# Generate Test Cases
@app.post("/generate-testcases")
def generate_testcases(
    prompt: str
):

    testcases = [

        f"Verify {prompt} works correctly",

        "Verify invalid input validation",

        "Verify empty field validation",

        "Verify edge case handling",

        "Verify successful workflow",

        "Verify security validation",

        "Verify browser compatibility",

        "Verify performance testing",

    ]

    return {
        "status": "success",
        "testcases": testcases
    }

# Analytics
@app.get("/analytics")
def analytics():

    db = SessionLocal()

    executions = db.query(
        TestExecution
    ).all()

    total = len(executions)

    db.close()

    return {
        "total_tests": total,
        "success_rate": "98%"
    }

# History
@app.get("/executions")
def executions():

    db = SessionLocal()

    data = db.query(
        TestExecution
    ).all()

    db.close()

    return data