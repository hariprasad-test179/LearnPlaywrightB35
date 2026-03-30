import {test,expect} from '@playwright/test';   
test('Login to sauce demo', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');//launch the url
  
  
  await page.locator('[data-test="username"]').fill('standard_user');
  
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  
  await expect(page.locator('[data-test="title"]')).toBeVisible();
});
