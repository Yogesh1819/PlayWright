const{test, expect}=require('@playwright/test');
const { off } = require('process');

test('Home page', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    // input field
    /*
   await page.locator('//input[@id="name"]').isEnabled();
    await page.locator('//input[@id="name"]').isVisible();
    await page.locator('//input[@id="name"]').isEditable();
   //  await page.locator('//input[@id="name"]').toBeEmpty();

    await page.waitForTimeout(3000);

    await page.locator('//input[@id="name"]').fill('Yogesh');
    */

   // Radio button
/*
   await page.locator('//input[@id="male"]').check();
    
   await expect(page.locator('//input[@id="male"]')).toBeChecked();
   await expect(page.locator('//input[@id="male"]').isChecked()).toBeTruthy();
*/
   // Checkboxses
/*
   await page.locator('//input[@id="sunday" and @type="checkbox"]').check();

   await expect(await page.locator('//input[@id="sunday" and @type="checkbox"]')).toBeChecked();
   await expect(await page.locator('//input[@id="sunday" and @type="checkbox"]').isChecked()).toBeTruthy();

   // Select Multiple Checkboxses
   
   const checkboxarray=[
                       '//input[@id="sunday" and @type="checkbox"]',
                       '//input[@id="monday" and @type="checkbox"]',
                       '//input[@id="tuesday" and @type="checkbox"]'
                       
   ];

   for(const locators of checkboxarray)
   {
       await page.locator(locators).check();
   }

   await page.waitForTimeout(3000);
   // Unselect Selected Checkboxses and Then Selecet Again

   for (const locators of checkboxarray)
   {
    if (await page.locator(locators).isChecked())
    {
       await page.locator(locators).uncheck();
       await page.locator(locators).check();
    }
   }

  await page.waitForTimeout(4000);
  */

// Handle Drop Down

// await page.locator('//select[@id="country"]').selectOption('Canada');  // Select value by visible text
// await page.locator('//select[@id="country"]').selectOption({value:'uk'});  // Select value by value
// await page.locator('//select[@id="country"]').selectOption({label:'Germany'}); // Select by label
// await page.locator('//select[@id="country"]').selectOption({index:4}); // Select by index

// Check particular value is present in drop down or not
const options= await page.$$('#country option')
let Status=false
for(const option of options)
{
  // console.log(await option.textContent());
  let value = await option.textContent();
   if(value.includes('India'))
   {
      Status=true
      break;
   }
}
expect(Status).toBeTruthy();







    await page.pause();

    



     


})
