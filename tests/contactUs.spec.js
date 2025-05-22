import {test, expect} from '@playwright/test';

// Launch the URL
test('homepage', async({page})=> {  
 await page.goto('https://automationexercise.com/')
 await page.waitForLoadState('domcontentloaded')

 //verify homepage is visible
 const image = page.locator("img[alt='Website for automation practice']")
 await expect (image).toBeVisible()
 // verify 'contact us' button
 await page.locator("a[href='/contact_us']").click()
 const text= page.locator('.title.text-center').nth(1)
 await expect(text).toBeVisible()
 // fill in required fields
 await page.locator("input[placeholder='Name']").fill('Esther')
 await page.locator("input[placeholder='Email']").fill('enemchukwuesther@gmail.com')
 await page.locator("input[placeholder='Subject']").fill('Registration issue')
 await page.locator('#message').fill('Invalid email gets registered successfully')
 await page.locator("input[name='upload_file']").click()
 // upload file from system folder
 const filePath = 'C:/Users/USER/Pictures/Typo screenshots/image.jpg'
 await page.setInputFiles('input[type="file"]', filePath)
 await page.locator('.submit_form').click()
  // Handle dialog box that pops up after clicking submit
   page.once('dialog', async (dialog) => {
    console.log('Dialog says:', dialog.message('Press OK to proceed!'));
    await dialog.accept();
  })
  //verify that the 'home' button is visible and user is directed to homepage when clicked
 const success = page.locator('.status')
 await expect(success).toBeHidden()
 await page.getByText('Home').click()
 await expect(page).toHaveURL('https://automationexercise.com/')
})

