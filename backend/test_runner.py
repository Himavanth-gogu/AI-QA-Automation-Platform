from playwright.sync_api import sync_playwright

def run_test(url):

    with sync_playwright() as p:

        browser = p.chromium.launch(headless=True)

        page = browser.new_page()

        page.goto(url)

        title = page.title()

        screenshot = "report.png"

        page.screenshot(path=screenshot)

        browser.close()

        return {
            "status": "success",
            "title": title,
            "screenshot": screenshot
        }