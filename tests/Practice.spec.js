import{test,expect} from '@playwright/test';

test('Handle Table', async({page})=>
{
  await page.goto('https://testautomationpractice.blogspot.com/')

  const Table=await page.locator('//table[@id="taskTable"]')

  const coloumn=await Table.locator('thead tr th')
  console.log('Number of coloumn ', await coloumn.count())

  const row=await Table.locator('//tbody[@id="rows"]/child::tr')
  console.log('Number of rows', await row.count())


  for (let i=0;i< await row.count();i++)
  {
    const rows=row.nth(i)
    const tds=rows.locator('td')
    for ( let j=0;j< await tds.count();j++)
    {
       console.log(await tds.nth(j).textContent())
    }
  }
})