import { test, expect } from '@playwright/test';

test('Enter text in to textbox and verify the text displayed', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Full Name' }).fill('V');
  await page.getByRole('textbox', { name: 'Full Name' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Full Name' }).fill('Vidya');
  await page.getByRole('textbox', { name: 'name@example.com' }).click();
  await page.getByRole('textbox', { name: 'name@example.com' }).click();
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('vidyarh2@gmail.com');
  await page.getByRole('textbox', { name: 'Current Address' }).click();
  await page.getByRole('textbox', { name: 'Current Address' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Current Address' }).fill('B');
  await page.getByRole('textbox', { name: 'Current Address' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Current Address' }).fill('Bangalore');
  await page.locator('#permanentAddress').click();
  await page.locator('#permanentAddress').press('CapsLock');
  await page.locator('#permanentAddress').fill('B');
  await page.locator('#permanentAddress').press('CapsLock');
  await page.locator('#permanentAddress').fill('Bangalore');
  await page.getByRole('button', { name: 'Submit' }).click();
});