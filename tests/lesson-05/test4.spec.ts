import { test, expect } from '@playwright/test';

test('Bài 4: Personal notes', async ({ page }) => {
    await test.step('Go to the page', async () => {
        await page.goto('https://material.playwrightvn.com/');
    })
    await test.step('Click on Product page', async () => {
        await page.locator('a', { hasText: 'Bài học 4: Personal notes' }).click();
    })

    const titleInputField = page.locator('input#note-title');
    const contentInputField = page.locator('textarea#note-content');
    const searchField = page.locator('input#search');
    const addNoteBtn = page.locator('button#add-note');
    const noteCountTxt = page.locator('div.note-count');


    await test.step('Add title and content 1', async () => {
        await titleInputField.fill('click');
        await contentInputField.fill('Hàm click dùng để thực hiện click vào các phần tử trên trang web');
        await addNoteBtn.click({delay: 1_000})
    })
    await test.step('Add title and content 2', async () => {
        await titleInputField.fill('fill');
        await contentInputField.fill('Hàm fill dùng để điền văn bản vào các trường input hoặc textarea trên trang web');
        await addNoteBtn.click({delay: 1_000})
    })
    await test.step('Add title and content 3', async () => {
        await titleInputField.fill('type');
        await contentInputField.fill('Hàm type dùng để nhập từng ký tự một vào phần tử, mô phỏng hành vi gõ phím thực tế của người dùng');
        await addNoteBtn.click({delay: 1_000})
    })
    await test.step('Add title and content 4', async () => {
        await titleInputField.fill('check');
        await contentInputField.fill('Hàm check dùng để đánh dấu checkbox hoặc radio button, đảm bảo phần tử ở trạng thái checked');
        await addNoteBtn.click({delay: 1_000})
    })
    await test.step('Add title and content 5', async () => {
        await titleInputField.fill('hover');
        await contentInputField.fill('Hàm hover dùng để di chuyển con trỏ chuột đến vị trí của phần tử, kích hoạt các hiệu ứng hover');
        await addNoteBtn.click({delay: 1_000})
    })
    await test.step('Add title and content 6', async () => {
        await titleInputField.fill('uncheck');
        await contentInputField.fill('Hàm uncheck dùng để bỏ đánh dấu checkbox, đảm bảo phần tử ở trạng thái unchecked');
        await addNoteBtn.click({delay: 1_000})
    })
    await test.step('Add title and content 7', async () => {
        await titleInputField.fill('selectOption');
        await contentInputField.fill('Hàm selectOption dùng để chọn một hoặc nhiều option trong thẻ select dropdown');
        await addNoteBtn.click({delay: 1_000})
    })
    await test.step('Add title and content 8', async () => {
        await titleInputField.fill('press');
        await contentInputField.fill('Hàm press dùng để mô phỏng việc nhấn phím bàn phím như Enter, Tab, Escape hoặc các phím khác');
        await addNoteBtn.click({delay: 1_000})
    })
    await test.step('Add title and content 9', async () => {
        await titleInputField.fill('dblclick');
        await contentInputField.fill('Hàm dblclick dùng để thực hiện double click (nhấp đúp chuột) vào phần tử trên trang web');
        await addNoteBtn.click({delay: 1_000})
    })
    await test.step('Add title and content 10', async () => {
        await titleInputField.fill('dragAndDrop');
        await contentInputField.fill('Hàm dragAndDrop dùng để kéo một phần tử từ vị trí nguồn và thả vào vị trí đích trên trang web');
        await addNoteBtn.click({delay: 1_000})
    })

    await test.step('Search the input', async () => {
        await searchField.fill('một hoặc nhiều');
        await expect(noteCountTxt).toHaveText('Total Notes: 1');
    })
})