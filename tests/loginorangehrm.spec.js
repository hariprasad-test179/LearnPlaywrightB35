import {test,expect} from '@playwright/test'; 
test('Login to orange HRM', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator('//input[@name="username"]').fill("Admin")
await page.locator('//input[@name="username"]').fill("Admin123")
await page.locator('//button[@type="submit"]').click()
await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
})