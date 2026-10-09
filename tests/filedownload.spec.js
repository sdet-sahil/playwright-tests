// @ts-check
import { test, expect } from '@playwright/test';
import { setTimeout } from 'timers/promises';
import path from 'node:path';
const fs = require('node:fs'); 

test('has title', async ({ page }) => {
  const fileDownloadPromise = page.waitForEvent('download');
  const expected_text = 'This is my sample file.';
  await page.goto('https://testing.qaautomationlabs.com/file-download.php');
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
