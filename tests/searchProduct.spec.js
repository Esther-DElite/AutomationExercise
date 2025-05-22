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
  await page.locator('#search_product').fill('top')
  await expect(page.locator('.title')).toBeVisible()
})