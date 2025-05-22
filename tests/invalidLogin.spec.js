import {test, expect} from '@playwright/test';

//Launch the URL
test('homepage', async({page})=> {  
 await page.goto('https://automationexercise.com/')
 await page.waitForLoadState('domcontentloaded')

 //verify homepage is visible
 const image = page.locator("img[alt='Website for automation practice']")
 await expect ('image').toBeVisible

 //verify unsuccessful login by filling invalid email and password
 await page.waitForLoadState('domcontentloaded')
 await page.locator("a[href='/login']").click()
 await expect ("div[class='login-form'] h2").toBeVisible

 //fill invalid email and password
 await page.locator("input[data-qa='login-email']").fill('enemchukwuesther@gmail')
 await page.locator("input[placeholder='Password']").fill('Eli224')
 await page.locator("button[data-qa='login-button']").click()
  const text= page.locator('p').nth(0)
 await expect('text').toBeVisible
})