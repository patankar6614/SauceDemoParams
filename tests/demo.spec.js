import { test, expect } from '@playwright/test';

test('SauceDemo Login Test', async ({ page }) => {

    // Open SauceDemo
    await page.goto('https://www.saucedemo.com/');

    // Enter Username
    await page.locator('//input[@id="user-name"]').fill('standard_user');

    // Enter Password
    await page.locator('//input[@id="password"]').fill('secret_sauce');

    // Click Login
    await page.locator('#login-button').click();

    // Verify successful login
    await expect(page).toHaveURL(/inventory.html/);

    // Verify Products page
    await expect(page.locator('.title')).toHaveText('Products');
});