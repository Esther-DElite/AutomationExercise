import {test, expect} from '@playwright/test';

// Launch the URL
test('homepage', async({page})=> {  
 await page.goto('https://automationexercise.com/')
 await page.waitForLoadState('domcontentloaded')

 //verify homepage is visible
 const image = page.locator("img[alt='Website for automation practice']")
 await expect (image).toBeVisible()

 //verify product page is visible
 await page.locator("a[href='/product_details/1']").click()
 await expect (page).toHaveURL("https://automationexercise.com/product_details/1")
 await page.fill('#quantity', '4')
 await page.locator("button[type='button']").click()
 await page.locator("//u[normalize-space()='View Cart']").click()
 await expect('product-1').toBeVisible
 await expect('.cart_quantity').toBeVisible
})