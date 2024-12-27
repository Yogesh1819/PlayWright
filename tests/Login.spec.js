const {test,expect}=require('@playwright/test')

test('Test Script', async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await page.locator('//input[@name="username"]').fill('Admin');
    await page.locator('//input[@name="password"]').fill('admin123')

    await page.locator("//button[text()=' Login ']").click();


        await page.pause();

})