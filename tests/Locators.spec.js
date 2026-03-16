//locater with extract multiple element
const {test, expect} = require('@playwright/test')

test('locator with extract multiple element', async ({page})=>
{
await page.goto('https://rahulshettyacademy.com/loginpagePractise');
const userName = page.locator('#username');
const password = page.locator('#password');
const signInBtn = page.locator('#signInBtn');
const cardTitles = page.locator('.card-title a');

await userName.fill('rahulshettyacademy');
await password.fill('Learning@830$3mK2');
await signInBtn.click();
console.log(await cardTitles.nth(0).textContent());
console.log(await cardTitles.allTextContents());
});