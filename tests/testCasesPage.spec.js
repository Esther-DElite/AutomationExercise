import {test, expect} from '@playwright/test';

 // Launch the URL 
test('homepage', async({page})=> { 
 await page.goto('https://automationexercise.com/')
 await page.waitForLoadState('domcontentloaded')

 //verify homepage is visible
 const image = page.locator("img[alt='Website for automation practice']")
 await expect (image).toBeVisible()

 // Succesful navigation to 'test case' homepage
 await page.click("//a[contains(text(),'Test Cases')]")
 await expect(page).toHaveURL("https://automationexercise.com/test_cases")
 const testCases = page.locator("h2[class='title text-center'] b")
 await expect(testCases).toBeVisible()
})
