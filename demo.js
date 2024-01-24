// const express = require('express');
// const puppeteer = require('puppeteer');
// const IS_PRODUCTION = process.env.NODE_ENV === 'production';

// const app = express();

// const getBrowser = () =>{
//     puppeteer.connect({ browserWSEndpoint: 'wss://192.168.1.6:9222/devtools/browser' })
// }
      

// app.get('/image', async (req, res) => {
//   let browser = null;

//   try {
//     browser = await getBrowser();
//     const page = await browser.newPage();

//     await page.goto('http://www.example.com/');
//     const screenshot = await page.screenshot();

//     res.end(screenshot, 'binary');
//   } catch (error) {
//     if (!res.headersSent) {
//       res.status(400).send(error.message);
//     }
//   } finally {
//     if (browser) {
//       browser.close();
//     }
//   }
// });

// app.listen(8080, () => console.log('Listening on PORT: 8080'));
const express = require('express');
const puppeteer = require('puppeteer');

const app = express();
const port = 3000;

app.get('/connect-to-browser', async (req, res) => {
    try {
        // Extract browserWSEndpoint from query parameter
        const browserWSEndpoint = req.query.browserWSEndpoint;
console.log(browserWSEndpoint);
        // Connect to the browser on the client side
        const browser = await puppeteer.connect({ browserWSEndpoint: 'wss://192.168.1.6:9222/devtools/browser' });

        // Perform Puppeteer actions (e.g., open a new page)
        const page = await browser.newPage();
        await page.goto('https://example.com');

        // Send a response to the client
        res.send('Connected to the browser on the client side.');

        // Close the browser after performing actions
        await browser.close();
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
