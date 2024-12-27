import { test, expect } from '@playwright/test';

test('Handle Child Frames', async({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames/')

    // Switch to Parent Frames
    const ParentFrame= page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})

   // Switch to Child Frames
    const Childframe= ParentFrame.childFrames();
    await Childframe[0].locator("//span[text()='I am a human']/parent::div/parent::div/parent::div/child::div[1]").click();

    await page.pause();

})