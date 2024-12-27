const{test,expect}=require('@playwright/test');

test('SoftAssertion', async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await expect.soft(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await expect.soft(page).toHaveTitle('OrangeH');

    const login=await page.locator("//button[text()=' Login ']")
    await expect.soft(login).toBeVisible();

    await page.pause();

})