// @ts-check
import { test, expect } from '../fixtures/logger-fixture.js'
import { setTimeout } from 'timers/promises';
import { LoginPage } from '../pages/LoginPage.js';


const authFile = './storageState/user.json';

test('user is able to Log in', async ({ page, logger }) => {
  const email = process.env.TEST_EMAIL;
  const password = process.env.TEST_PASSWORD;

  if (!email || !password) {
    throw new Error('TEST_EMAIL or TEST_PASSWORD is not configured');
  }
  const loginPage = new LoginPage(page, logger);
  await test.step('Navigating to login page', async () => {
  await loginPage.goto('https://www.instahyre.com/login/');
  });
 
  const homePage = await test.step('Enter credentials and submit', async () => {
  return await loginPage.login(email, password);
    
  });
   await test.step('Verify dashboard is displayed', async () => {
    homePage.navigateTo('Profile');
    await expect(page.getByText('Sahil Kashyap')).toBeVisible();
  });

   await setTimeout(5000);
   await page.context().storageState({ path: authFile });

});