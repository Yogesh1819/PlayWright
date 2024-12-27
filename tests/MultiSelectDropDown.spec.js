const{test,expect}=require('@playwright/test');
const { copyFileSync } = require('fs');

test('MultiSelectDropDown', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    // Select multiple value from drop down
    await page.selectOption('#colors',['Blue','Red','Green']);


    // Assertion

    // 1) Check number of option in dropdown
    const count=await page.locator('#colors option');
    await expect(count).toHaveCount(7);

    // 2) check number of option in dropdown using JS array
    const counts=await page.$$('#colors option');
   // console.log(counts.length);
   await expect(counts.length).toBe(7);
    await page.pause();

})