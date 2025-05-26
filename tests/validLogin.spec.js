import {test, expect} from '@playwright/test';

// Launch the URL
test('homepage', async({page})=> {  
 await page.goto('https://automationexercise.com/')
 await page.waitForLoadState('domcontentloaded')

 //verify homepage is visible
 const image = page.locator("img[alt='Website for automation practice']")
 await expect (image).toBeVisible()

 //verify successful login
 await page.waitForLoadState('domcontentloaded')
 await page.locator("a[href='/login']").click()
 await expect ("div[class='login-form'] h2").toBeVisible
 await page.locator("input[data-qa='login-email']").fill('enemchukwuesther@gmail.com')
 await page.locator("input[placeholder='Password']").fill('Elite2024')
 await page.locator("button[data-qa='login-button']").click()
  const text= page.locator('//li[10]//a[1]')
 await expect('text').toBeVisible
 await page.click("a[href='/delete_account']")
 await expect("a[href='/delete_account']").toBeVisible
})
