import {test, expect} from '@playwright/test';

// Launch the URL
test('homepage', async({page})=> {  
 await page.goto('https://automationexercise.com/')
 await page.waitForLoadState('domcontentloaded')

 //verify homepage is visible
 const image = page.locator("img[alt='Website for automation practice']")
 await expect (image).toBeVisible()

 //verify functionality of products and add to cart button 
 await page.locator("a[href='/products']").click()
 await page.locator('a').nth(0).click()
 await page.locator('button').nth(1).click()
 await page.locator('a').nth(1).click()
 await page.locator("//u[normalize-space()='View Cart']").click()
 await expect("a[href='/product_details/1']").toBeVisible
 await expect("a[href='/product_details/2']").toBeVisible
 await expect('.price').toBeVisible
 await expect('.quantity').toBeVisible
 await expect('.total').toBeVisible
})