import {test, expect} from '@playwright/test';

// Launch the URL
test('homepage', async({page})=> {  
 await page.goto('https://automationexercise.com/')
 await page.waitForLoadState('domcontentloaded')

 //verify homepage is visible
 const image = page.locator("img[alt='Website for automation practice']")
 await expect (image).toBeVisible()

 //verify cart button functionality
 await page.locator("//a[normalize-space()='Cart']").click()
 
 //scroll down to footer
 await expect (page.getByText('Subscription')).toBeVisible()
 await page.fill('#susbscribe_email','enemchukwuesther@gmail.com')
 await page.locator('.fa-arrow-circle-o-right').click()
})