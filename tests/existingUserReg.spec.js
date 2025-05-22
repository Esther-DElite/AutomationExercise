import {test, expect} from '@playwright/test';

//Launch the URL
test('homepage', async({page})=> {  
 await page.goto('https://automationexercise.com/')
 await page.waitForLoadState('domcontentloaded')

 //verify homepage is visible
 const image = page.locator("img[alt='Website for automation practice']")
 await expect ('image').toBeVisible

 //verify existing user cannot register more than once
 await page.waitForLoadState('domcontentloaded')
 await page.locator("a[href='/login']").click()
 await expect ("//div[class='signup-form'] h2").toBeVisible
 await page.locator("input[placeholder='Name']").fill('Esther')
 await page.locator("input[data-qa='signup-email']").fill('enemchukwuesther@gmail.com')
 await page.locator("button[data-qa='signup-button']").click()
 const text= page.locator('p').nth(0)
 await expect('text').toBeVisible
})