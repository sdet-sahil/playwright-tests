import { test } from '@playwright/test';

test('Broken Link Checker', async ({ page, request }) => {
    await page.goto('https://practice-automation.com/broken-links/');
    
    // Extract all links
    const elements = await page.getByRole('link').all();
    const urls = await Promise.all(elements.map(link => link.getAttribute('href')));
    const filteredUrls = urls.filter(href => href && href.startsWith('http'));
    
    console.log('URLs to check:', filteredUrls);
    const brokenUrls = [];

    for (const link of filteredUrls) {
        try {
            // Use the built-in 'request' fixture directly
            const response = await request.get(link, { timeout: 5000 });
            const status = response.status();
            
            if (!(status >= 200 && status < 400)) {
                brokenUrls.push({ link, reason: `Status code: ${status}` });
            }
        } catch (error) {
            // Catches SSL/EPROTO errors or connection timeouts so your script doesn't crash mid-loop
            brokenUrls.push({ link, reason: error.message });
        }
    }

    console.log("---------Broken URLs-----------");
    console.log(brokenUrls);
});
