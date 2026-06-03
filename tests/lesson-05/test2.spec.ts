import { test, expect } from 'playwright/test';

test('Click on Product Page', async ({ page }) => {
    await test.step('Go to the page', async () => {
        await page.goto('https://material.playwrightvn.com/');
    })
    await test.step('Click on Product page', async () => {
        await page.locator('a', { hasText: 'Bài học 2: Product page' }).click();
    })
    await test.step('Add Product 1', async () => {
        const btnAddToCart = page.locator("//div[text()='Product 1']/following-sibling::button");
        for (let i = 1; i < 3; i++) {
            await btnAddToCart.click();
        }
    })
    await test.step('Add Product 2', async () => {
        const btnAddToCart = page.locator("//div[text()='Product 2']/following-sibling::button");
        for (let i = 1; i <= 3; i++) {
            await btnAddToCart.click();
        }
    })
    await test.step('Add Product 2', async () => {
        await page.locator("//div[text()='Product 3']/following-sibling::button").click();
    })
    await test.step('Verify quanity of product 1', async () => {
        const quantityProduct = page.locator("//td[text()='Product 1']/following-sibling::td[2]");
        await expect(quantityProduct).toHaveText('2');
    })
    await test.step('Verify quanity of product 2', async () => {
        const quantityProduct = page.locator("//td[text()='Product 2']/following-sibling::td[2]");
        await expect(quantityProduct).toHaveText('3');
    })
    await test.step('Verify quanity of product 3', async () => {
        const quantityProduct = page.locator("//td[text()='Product 3']/following-sibling::td[2]");
        await expect(quantityProduct).toHaveText('1');
    })
})