import {test, expect} from '@playwright/test';

// Launch the URL
test('homepage', async({page})=> {  
 await page.goto('https://automationexercise.com/')
 await page.waitForLoadState('domcontentloaded')

 //verify homepage is visible
 const image = page.locator("img[alt='Website for automation practice']")
 await expect (image).toBeVisible()

 // verify successful navigation to all products page
  await page.locator("a[href='/products']").click()
  const title= page.locator('.title')
  await expect(title).toBeVisible()
  await expect (page.getByText('All Products')).toBeVisible()
  await page.click("a[href='/product_details/1']")
  await expect(page).toHaveURL('https://automationexercise.com/product_details/1')
//   const products= await page.$$('a')
//   for(const product of products)
//   {
//     const productText= await product.textContent()
//     console.log(productText)
//   }
  await expect (page.locator("div[class='product-information'] h2")).toBeVisible()
  await expect (page.locator("//p[normalize-space()='Category: Women > Tops']")).toBeVisible()
  await expect (page.locator("//span[normalize-space()='Rs. 500']")).toBeVisible()
  await expect (page.getByText("Condition:")).toBeVisible()
  await expect (page.getByText("Brand:")).toBeVisible()
 })
 