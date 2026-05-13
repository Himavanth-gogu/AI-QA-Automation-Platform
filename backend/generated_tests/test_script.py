
from playwright.sync_api import sync_playwright

with sync_playwright() as p:

    browser = p.chromium.launch(headless=False)

    page = browser.new_page()


from playwright import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(url="https://example.com")
    page = browser.new_page()
    page.goto("https://example.com")
    
    # Add any additional actions here if needed before closing the browser/page
    
    browser.close()


    page.screenshot(path="screenshots/result.png")

    browser.close()
