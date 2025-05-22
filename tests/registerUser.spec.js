import {test, expect} from '@playwright/test';

// Launch the URL
test('homepage', async({page})=> {  
 await page.goto('https://automationexercise.com/')
 await page.waitForLoadState('domcontentloaded')

 // verify homepage is visible
 const image = page.locator("img[alt='Website for automation practice']")
 await expect ('image').toBeVisible

 //verify successful signup
 await page.waitForLoadState('domcontentloaded')
 await page.locator("a[href='/login']").click()
 await expect ("//div[class='signup-form'] h2").toBeVisible
 await page.locator("input[placeholder='Name']").fill('Esther')
 await page.locator("input[data-qa='signup-email']").fill('enemchukwuesther@gmail.com')
 await page.locator("button[data-qa='signup-button']").click()
 await page.locator("//b[normalize-space()='Enter Account Information']").toBeVisible

 // Verify title is checked 
 const title= page.locator('#id_gender2')
 await title.click()
 await expect (title).toBeChecked()

 // Fill in required fields
 await page.fill('#name', 'Esther')
 const emailField= page.locator("#email")
 await expect(emailField).toHaveValue('enemchukwuesther@gmail.com')
 await page.fill('#password', 'Elite2024')
 await page.locator('#days').selectOption('27')
 await page.locator('#months').selectOption('9')
 await page.locator('#years').selectOption('2015')
 await page.locator('#newsletter').click()
 await expect ("page.locator('#newsletter')").toBeChecked

 //fill address information and verify successful registration/ account creation
 await page.fill('#first_name', 'Esther')
 await page.fill('#last_name', 'Enemchukwu')
 await page.fill('#company', 'Elite Delight')
 await page.fill('#address1', 'Jakande Estete')
 await page.fill('#address2', 'Ikeja GRA')
 await page.selectOption('#country', 'Canada')
 await page.fill('#state', 'Lagos')
 await page.fill('#city', 'Lagos')
 await page.fill('#zipcode', '100264')
 await page.fill('#mobile_number', '07036693751')
 await page.click("button[data-qa='create-account']")
 await expect("page.locator('.text-center')").toBeVisible
 await page.click('.btn-primary')

 //Verify that 'Logged in as username' is visible
 const text= page.locator('//li[10]//a[1]')
 await expect('text').toBeVisible

 // verify account is deleted successfully
 await page.click("a[href='/delete_account']")
 await expect("a[href='/delete_account']").toBeVisible
 await page.locator("//a[normalize-space()='Continue']").click()
})
