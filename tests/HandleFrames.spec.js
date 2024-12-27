const{test,expect}=require('@playwright/test');

test('Handle Frames', async({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames/')

    // Counting How Many Frames in The Page (Length/Number Of Frames)
    const frame=await page.frames(); 
    console.log(frame.length);

    // Frame 1
    const frame1=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
    await frame1.locator('//input[@name="mytext1"]').fill('Tejinkar')

    // Frame2
    const frame2=await page.frameLocator('//frame[@src="frame_2.html"]')
    await frame2.locator('//input[@name="mytext2"]').fill('Yogesh')

   // Frame3
    const frame3=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
    await frame3.locator('//input[@name="mytext3"]').fill('Tejas')

   const childframe= await frame3.childFrames();
  // await childframe[0].locator('//div[@class="MocG8c HZ3kWc mhLiyf LMgvRb KKjvXb DEh1R"]').click();
   await childframe[0].locator("//span[text()='Next']").click();
   await childframe[0].locator('//input[@class="whsOnd zHQkBf"]').fill('Yogesh Tejinkar')
   await childframe[0].locator('//textarea[@class="KHxj8b tL9Q4c"]').fill('ABCD')

    // Frame4
    const frame4=await page.frameLocator('//frame[@src="frame_4.html"]')
    await frame4.locator('//input[@name="mytext4"]').fill('Amol')
    

    await page.pause();
})