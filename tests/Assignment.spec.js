const { test, expect } = require('@playwright/test');

test('assignment test', async ({ page }) => {
// login page
    await page.goto('https://rahulshettyacademy.com/client')
    await page.locator('#userEmail').fill("anshika@gmail.com")
    await page.locator('#userPassword').fill("Iamking@000")
    await page.locator("[value='Login']").click();
// verify title
    const title = await page.title()
    console.log(title)

    await expect(page).toHaveTitle("Let's Shop");

// verify url
    const url =await page.url()
    console.log(url)

    await expect(page).toHaveURL("https://rahulshettyacademy.com/client/#/dashboard/dash")
    


// get all the products
   // await page.waitForLoadState('networkidle');
    console.log(await page.locator('.card-body h5').first().textContent());

    console.log(await page.locator('.card-body h5').allTextContents());

})