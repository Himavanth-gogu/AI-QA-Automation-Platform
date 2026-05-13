from playwright.sync_api import sync_playwright
import time
import os

def run_playwright_test(prompt):

    logs = []

    screenshot_path = "screenshots/real_result.png"

    os.makedirs(
        "screenshots",
        exist_ok=True
    )

    try:

        logs.append(
            "[INFO] Starting Playwright..."
        )

        with sync_playwright() as p:

            browser = p.chromium.launch(
                headless=True
            )

            logs.append(
                "[INFO] Chromium browser launched"
            )

            page = browser.new_page()

            website = "https://google.com"

            prompt_lower = prompt.lower()

            if "github" in prompt_lower:
                website = "https://github.com"

            elif "youtube" in prompt_lower:
                website = "https://youtube.com"

            elif "amazon" in prompt_lower:
                website = "https://amazon.in"

            elif "linkedin" in prompt_lower:
                website = "https://linkedin.com"

            logs.append(
                f"[INFO] Opening {website}"
            )

            start_time = time.time()

            page.goto(
                website,
                timeout=60000
            )

            logs.append(
                "[INFO] Website loaded"
            )

            page.screenshot(
                path=screenshot_path
            )

            logs.append(
                "[SUCCESS] Screenshot captured"
            )

            browser.close()

            end_time = time.time()

            execution_time = round(
                end_time - start_time,
                2
            )

            logs.append(
                "[SUCCESS] Browser closed"
            )

            return {
                "status": "success",
                "logs": logs,
                "execution_time": execution_time,
                "screenshot": screenshot_path,
            }

    except Exception as e:

        logs.append(
            f"[ERROR] {str(e)}"
        )

        return {
            "status": "error",
            "logs": logs,
            "error": str(e),
        }