// @ts-check
import { test, expect } from '@playwright/test';
import { setTimeout } from 'timers/promises';
import path from 'node:path';

const authFile = './storageState/user.json';

test.skip('storage state', async ({ page }) => {
  await page.goto('https://www.instahyre.com/login/');
  await page.getByLabel("Email").fill("");
  await page.getByLabel("Password").fill("");
  await page.getByRole('button', {name: 'Log in'}).click();
  await page.getByRole('link', { name: 'Profile' }).click();
  await expect(page.getByText('Sahil Kashyap')).toBeVisible();
   await setTimeout(5000);
  await page.context().storageState({ path: authFile });
});
