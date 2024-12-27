const{test,expect}=require('@playwright/test');

test('AssertionTest', async({page})=>{


    await page.goto('https://testautomationpractice.blogspot.com/')

    await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/');

    await expect(page).toHaveTitle('Automation Testing Practice');

    const pagetitle=await page.locator('//h1[@class="title"]');

    await expect(pagetitle).toBeVisible();

    const radiobutton=await page.locator('//input[@id="male"]');

    await expect(radiobutton).not.toBeChecked();

    await page.pause();

    const text=await page.locator("//label[text()='Name:']");

    await expect(text).toHaveText('Name:');

    await expect(text).toContainText('Nam');

})