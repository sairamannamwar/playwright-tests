const { test, expect } = require('@playwright/test');

test('handling dropdown and radio button', async ({ page }) => {

await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

const userName = await page.locator('#username');
const password = await page.locator('[type="password"]');
// dropdown
const dropdown = await page.locator('select.form-control');
await dropdown.selectOption('consult');
await expect(dropdown).toHaveValue('consult');


// radio button
await page.locator('.radiotextsty').last().click();
// assertion for radio button
await expect(page.locator('.radiotextsty').last()).toBeChecked();
await page.locator('#okayBtn').click();

//checkbox

await page.locator('#terms').click();
await expect(page.locator('#terms')).toBeChecked();

await page.locator('#terms').uncheck();
await expect(page.locator('#terms')).not.toBeChecked();

// blink link
await page.locator('//a[contains(@class, "blink")]').first().click();

   






});