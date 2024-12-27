const{test,expect}=require('@playwright/test');

test('Test Alerts', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
     
    await page.on('dialog', async dialog=>{

       await expect(dialog.type()).toContain('prompt')
       await expect(dialog.message()).toContain('Please enter your name:')
       await expect(dialog.defaultValue()).toContain('Harry Potter')
       await dialog.accept('Yogesh');

    })

    await page.locator('//button[@id="promptBtn"]').click();
    await expect(page.locator('//p[@id="demo"]')).toHaveText('Hello Yogesh! How are you today?')

    if (await expect(page.locator('//p[@id="demo"]')).toHaveText('Hello Yogesh! How are you today?'))
    {
        console.log("Text is pass")
    
    }
    else(await expect(page.locator('//p[@id="demo"]')).toHaveText('Hello Yogesh! How are you today?'))

    await page.pause();


})