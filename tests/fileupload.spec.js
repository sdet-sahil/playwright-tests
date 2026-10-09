// @ts-check
import { test, expect } from '@playwright/test';
import { setTimeout } from 'timers/promises';
import config from './../config/config.js';
import path from 'node:path';

test('has title', async ({ page }) => {
  const fileChooserPromise = page.waitForEvent('filechooser');
  const uploadEndpoint = config.get('endpoints.upload')
  await page.goto(uploadEndpoint);
  await page.getByTestId('upload-browse-btn').click();
  const fileChooser = await fileChooserPromise;
   await setTimeout(10000);
  await fileChooser.setFiles(path.join(__dirname, '../files/Lead_Tech_QTE_SDET_JD.pdf'));
  const fileInfo = page.getByTestId('upload-file-info');
  await expect(fileInfo).toHaveText('Selected File: Lead_Tech_QTE_SDET_JD.pdf & File Size is 141.52 KB');
  await setTimeout(10000);

});
