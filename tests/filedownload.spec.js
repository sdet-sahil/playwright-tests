// @ts-check
import { test, expect } from '@playwright/test';
import config from './../config/config.js';
const fs = require('node:fs'); 

test('user is able to download file', async ({ page }) => {
  const fileDownloadPromise = page.waitForEvent('download');
  const expected_text = 'This is my sample file.';
  const downloadEndpoint = config.get('endpoints.download')
  await page.goto(downloadEndpoint);
  await page.getByTestId('download-text-input').fill(expected_text)
  await page.getByTestId('download-generate-btn').click();
   await page.getByTestId('download-link').click();
  const download = await fileDownloadPromise;
 // Save to a temporary path
  const filePath = await download.path();

  if (filePath) {
    // Get file statistics
    const stats = await fs.promises.stat(filePath);
    console.log('File Stats:', JSON.stringify(stats, null, 2));
    
    // OR assert it is within a non-zero range
    expect(stats.size).toBeGreaterThan(0);
  }

});
