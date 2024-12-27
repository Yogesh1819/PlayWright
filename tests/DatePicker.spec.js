import{test,expect} from '@playwright/test';

test('Handle Date Picker', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

   /* await page.locator('//input[@id="datepicker"]').fill('12/25/2024');

   const Year='2025'
   const Month='February'
   const Date='19'

   while(true)
   {

      const CurrentYear=await page.locator('//span[@class="ui-datepicker-year"]').textContent();
      const CurrentMonth=await page.locator('//span[@class="ui-datepicker-month"]').textContent();

      if(CurrentYear == Year && CurrentMonth == Month)
      {
         break;
      }

      await page.locator('//a[@title="Next"]').click();
   }

     const SelectDate=await page.$$('//a[@class="ui-state-default"]')

     for (let dt of SelectDate)
     {
       const A= await dt.textContent();
        if(A == Date)
        {
            await dt.click()
        }
     }
   */


    // Below code is for selecting previous date 
    /*
     const Year ='2023'
     const Month='April'
     const Date='19'

     await page.locator('//input[@id="datepicker"]').click();

     while(true)
     {
        const CurrentYear=await page.locator('//span[@class="ui-datepicker-year"]').textContent();
        const CurrentMonth= await page.locator('//span[@class="ui-datepicker-month"]').textContent();

        if(CurrentYear == Year && CurrentMonth == Month)
        {
            break;
        }

        await page.locator('//a[@title="Prev"]').click();
     }

     const CaptureDate=await page.$$('//a[@class="ui-state-default"]')

     for (let dt of CaptureDate)
     {
        const RecieveDate=await dt.textContent();

        if(RecieveDate == Date)
        {
           await dt.click();
        }
     }
   */
     await page.locator('//input[@id="datepicker"]').click() 
    const Year='2025'
    const Month='April'
    const Date='19'

    while(true)
    {
      const CurrentYear= await page.locator('//span[@class="ui-datepicker-year"]').textContent();
      const CurrentMonth= await page.locator('//span[@class="ui-datepicker-month"]').textContent();

      if( CurrentYear == Year && CurrentMonth == Month)
      {
         break;
      }
      
           await page.locator('//a[@title="Next"]').click();  
    }

    const SelectDate=await page.$$('//a[@class="ui-state-default"]')

    for( let dt of SelectDate)
    {
       const ab=await dt.textContent()
       if( ab == Date)
       {
          await dt.click()
       }
    }


    

    await page.pause();

})