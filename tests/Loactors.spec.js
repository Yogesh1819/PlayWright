import {test,expect} from '@playwright/test'

test('locators', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.fill('//input[@id="name"]','Yogesh')

    await page.fill('//input[@id="email"]','tejinkar@gmail.com')

    await page.fill('//input[@id="phone"]','8766553388')
    await page.fill('//textarea[@id="textarea"]','Chh.Sambhajinagar')

       const pageTitle= await page.title();
       console.log(pageTitle);
       await expect(page).toHaveTitle('Automation Testing Practice');

       console.log('Test Script Done Successfully');
       

   await page.pause();

})