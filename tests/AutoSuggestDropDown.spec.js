const{test,expect}=require('@playwright/test');

test('Handling Auto Suggest Drop Down', async({page})=>{

    await page.goto('https://www.redbus.in/');

    await page.locator('#src').fill('Delhi');

    await page.waitForSelector('//li[@class="sc-iwsKbI jTMXri"]');

    const value=await page.$$('//li[@class="sc-iwsKbI jTMXri"]');

    for(const option of value)
    {
        const ABC=await option.textContent();
        console.log(ABC);
        if(ABC.includes('Dhaula Kuan Delhi'))
        {
            option.click();
        }
    }
    
    await page.waitForTimeout(2000);

    await page.locator('#dest').fill('Aurangabad');

    await page.waitForSelector('//li[@class="sc-iwsKbI jTMXri"]');

    const dest=await page.$$('//li[@class="sc-iwsKbI jTMXri"]');

    for(const destination of dest)
    {
        const destvalue=await destination.textContent();
        console.log(destvalue);

        if(destvalue.includes('Central Bus Stand Aurangabad (Maharashtra)'))
        {
            destination.click();
        }
    }

    await page.pause();
})