// @ts-check
import { test, expect } from '@playwright/test';
import { setTimeout } from 'timers/promises';
import path from 'node:path';

const authFile = './storageState/user.json';

test.use({
    storageState: './storageState/user.json'
});

test.skip('storage state', async ({ page }) => {
  await page.goto('https://www.instahyre.com/candidate/profile/');
  await expect(page.getByText('Sahil Kashyap')).toBeVisible();
  await setTimeout(5000);
});
