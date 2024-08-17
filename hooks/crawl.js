const puppeteer = require('puppeteer');

async function fetchWebsiteData(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  try {
    // Visit the URL
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    
    // Extract the text content of the page
    const text = await page.evaluate(() => {
      return document.body.innerText;
    });

    // Split the text into words and get the first 100
    const words = text.split(/\s+/).slice(0, 1000);
    
    // Join the words into a string
    const first100Words = words.join(' ');
    
    return first100Words;
  } catch (error) {
    console.error('Error scraping the site:', error);
    throw error;
  } finally {
    // Close the browser
    await browser.close();
  }
}

export default fetchWebsiteData;

