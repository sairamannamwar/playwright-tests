const {test, expect} = require('@playwright/test')

test.only('Browser context playwright test', async ({browser})=>
{
//chrome - plugins/cookies
const browserContext = await browser.newContext();
const page = await browserContext.newPage();
await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

const title= await page.title()
console.log(title)

// css xpath
await page.locator('#username').fill('rahulshettyacadem');
await page.locator('[type="password"]').fill('learning');
await page.locator('#signInBtn').click();
// pop message using text content
const message = await page.locator("[style*='block']").textContent();
console.log(message);
// check waether text correct or not textcontains
await expect(page.locator("[style*='block']")).toContainText('Incorrect');

//locater with extract multiple element




})
test('page playwright test', async ({page})=>
	
{
await page.goto('https://google.com');
// get title of the page - assertion
const title = await page.title()
console.log(title)

// assertion - to check if the title is correct
await expect(page).toHaveTitle('Google');
})

