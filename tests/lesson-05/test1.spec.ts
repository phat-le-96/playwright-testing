import { test, expect } from "@playwright/test";
test("Input all fields", async ({ page }) => {

    await test.step("Step 1", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Step 2", async () => {
        await page.locator("//a[contains(text(), 'Bài học 1: Register Page (có đủ các element)')]").click();
    });

    await test.step("Step 3", async () => {
        await page.locator("//input[@id='username']").fill("thanh phat");
        await page.locator("//input[@id='email']").fill("thanhphat@example.com");
    });

    await test.step("Radio Button", async () => {
        await page.locator("//input[@id='male']").check();
    });

    await test.step("Checkbox Button", async () => {
        await page.locator("//label[text() = 'Traveling']/preceding-sibling::input").check();
    });

    await test.step("Select Option", async () => {
        await page.locator("//select[@id='interests']").selectOption("Art");
    });

    await test.step("Select Country Option", async () => {
        await page.locator("//select[@id='country']").selectOption("United Kingdom");
    });

    await test.step("Upload File", async () => {
        await page.locator("input#dob").pressSequentially("25/11/1990", { delay: 1_000 });
    });

    await test.step("Click on Register Button", async () => {
        await page.locator("button[type='submit']").click();
    });
});