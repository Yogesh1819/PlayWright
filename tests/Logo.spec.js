const{test,expect}=require('@playwright/test')

test('Logo Verification',async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    const logo=await page.getByAltText('company-branding')

    await expect(logo).toBeVisible();
    console.log("Logo is verified")
    await expect(page.getByText('Username : Admin')).toBeVisible();
    console.log('Text is verified')

    await page.getByPlaceholder('Username').fill('Yogesh');

    await page.pause();
})