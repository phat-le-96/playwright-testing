import { test } from "@playwright/test";


test("Basic Actions", async ({ page }) => {
    await test.step("Step 1", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Step 2", async () => {
        await page.locator("//a[contains(text(), 'Bài học 1: Register Page (có đủ các element)')]").click();
    });

    await test.step("Step 3", async () => {
        await page.locator("//input[@id='username']").fill("thanh phat");
        await page.locator("//input[@id='email']").pressSequentially("phat@example.com", { delay: 1_000 });
    });

    await test.step("Radio Button", async () => {
        const isChecked = await page.locator("//input[@id='male']").isChecked();
        console.log("isChecked: ", isChecked);
        await page.locator("//input[@id='male']").check();
    });

    await test.step("Checkbox Button", async () => {
         const isChecked = await page.locator("//label[text() = 'Traveling']/preceding-sibling::input").isChecked();
        console.log("isChecked: ", isChecked);
        await page.locator("//label[text() = 'Traveling']/preceding-sibling::input").check();
    });

    await test.step("Select Option", async () => {
        await page.locator("//select[@id='interests']").selectOption("Art");
    });

    await test.step("Select Country Option", async () => {
        await page.locator("//select[@id='country']").selectOption("United Kingdom");
    });

    await test.step("Upload File", async () => {
        await page.locator("//input[@type='file']").setInputFiles("lesson-2/01-lythuyet-git.txt");
    });
})