import {test} from '@playwright/test'
import env from '../env/env.config.js'

test("sauce Demo",async({page})=>{
  await page.goto(env.BASE_URL);
  await page.locator("//input[@name='user-name']").fill(env.USERNAME);
  await page.locator("//input[@name='password']").fill(env.PASSWORD);
  await page.waitForTimeout(3000)
  await page.locator("//input[@name='login-button']").click();
  await page.waitForTimeout(7000)
  await page.title();
});