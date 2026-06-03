import { test, expect } from '@playwright/test';

test('Click on Product Page', async ({ page }) => {
    await test.step('Go to the page', async () => {
        await page.goto('https://material.playwrightvn.com/');
    })
    await test.step('Click on Product page', async () => {
        await page.locator('a', { hasText: 'Bài học 3: Todo page' }).click();
    })
    await test.step('Add Product 1', async () => {
        const newTaskField = page.locator("input#new-task");
        const addTaskBtn = page.locator("button#add-task");

        const todos = Array.from({ length: 4 }, (_, i) => i);

        for (let i = 0; i < todos.length; i++) {
            await newTaskField.fill(`Todo ${i}`);
            await addTaskBtn.click();
        }

        for (const i of todos) {
            if (i % 2 !== 0) {
                page.once('dialog', dialog => dialog.accept());
                await page.locator(`#todo-${i}-delete`).click();
            }
        }
    })

})