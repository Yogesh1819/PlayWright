const{test,expect}=require('@playwright/test');


test('Create Account', async({page})=>{


    await page.goto('https://app.datainspiredliving.co.uk/')

    await page.locator('//input[@name="username"]').fill('test1hccadmin1@arthtechltd.com');
    await page.locator('//input[@name="password"]').fill('Pass@123');
    await page.locator("//button[text()='Sign in']").click();

    await page.locator("(//p[text()='Home'])[2]").click();

    await page.locator('//button[@class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1zbqai"]').click();
     await page.pause();

})