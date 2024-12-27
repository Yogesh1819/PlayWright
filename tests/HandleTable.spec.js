
const{test,expect}=require('@playwright/test')

test('Handle Tables', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')


    const table=await page.locator('//table[@id="productTable"]')

   // Counts The Coloumn
    const cloumn=await table.locator('thead tr th')
    console.log('Number of coloumn', await cloumn.count())

    // Counts The Row
    const row=await table.locator('tbody tr')
    console.log('Number of rows', await row.count())

/*
        const matchrow=await row.filter({

            has: page.locator('td'),
            hasText: 'Laptop'

        })
        await matchrow.locator('input').check();
*/   


        await Selectoption(row,page,'Laptop')
        await Selectoption(row,page,'Tablet')

        await page.waitForTimeout(3000);

      // Print All Product Details 
/*
   for ( let i=0; i< await row.count();i++)
   {
        const Rows=row.nth(i)
        const tds=Rows.locator('td')
       for (let j=0; j< await tds.count()-1;j++)
        {
             console.log(await tds.nth(j).textContent())
        }    
   }
*/

// Print Number Of Pages in Table
const pages=await page.locator('//ul[@id="pagination"]/child::li')
console.log('Number of pages in the table',await pages.count());

// Print all pages data

for ( let p=0;p< await pages.count();p++)
{
    if(p>0)
    {
        await pages.nth(p).click();
    }
    for ( let i=0; i< await row.count();i++)
        {
             const Rows=row.nth(i)
             const tds=Rows.locator('td')
            for (let j=0; j< await tds.count()-1;j++)
             {
                  console.log(await tds.nth(j).textContent())
             }    
        }

        await page.waitForTimeout(3000);

}

})

// below function is used for selecting partiular product checkbox from table
async function Selectoption(row,page,name){
            
    const matchrow=await row.filter({

        has: page.locator('td'),
        hasText: name

    })
    await matchrow.locator('input').check();
    }



