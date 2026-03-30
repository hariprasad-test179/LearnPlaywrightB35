import { test, expect } from '@playwright/test';
import data from "../testdata/textbox.json"
test('Enter text in to textbox and verify the text displayed', async ({ page }) => {
await page.goto('https://demoqa.com/text-box')
await page.locator('#userName').fill(data.fullname)
await page.locator('#userEmail').fill(data.emailaddress)
await page.locator('#currentAddress').fill(data.currentaddress)
await page.locator('#permanentAddress').fill(data.Permanentaddress)
await page.locator('#submit').click();
});

