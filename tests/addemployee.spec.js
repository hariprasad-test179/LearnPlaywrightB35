import {test,expect} from '@playwright/test';
import data from "../testdata/addemployee.json"  
test('Login to sauce demo', async ({ page }) => {
    test.setTimeout(60000);
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
await page.locator("button[type='submit']").click();
await page.waitForLoadState('networkidle');

await page.locator("input[placeholder='Username']").fill("Admin")
await page.locator("input[name='password']").fill("admin123")
await page.locator("button[type='submit']").click()
 await page.waitForSelector("//h6[text()='Dashboard']", { timeout: 60000 });
await page.locator("(//span[contains(@class,'oxd-text oxd-text--span')])[2]").click()
await page.locator("//a[normalize-space(text())='Add Employee']").click()
await page.locator("input[name='firstName']").fill(data.firstname)
await page.locator("input[name='lastName']").fill(data.lastname)
await page.locator("(//label[normalize-space(text())='Employee Id']/following::input)[1]").fill('1058')
await page.locator("//button[@type='submit']").click()
await page.locator(page.locator("//h6[text()='Personal Details']")).toBeVisible
})
        
