// const express = require('express');
// const puppeteer = require('puppeteer');
// const IS_PRODUCTION = process.env.NODE_ENV === 'production';

// const { default: puppeteer } = require("puppeteer");

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
app.set('trust proxy', true);

app.get('/', (req, res) => {
    // Get the server's IP address
    const serverIP = req.socket.remoteAddress;

    res.send(`Server's IP address is: ${serverIP}`);
    

async function getChromeInstanceURL() {
  const browser = await puppeteer.launch({ headless: true, args: ['--remote-debugging-port=9222'] });
  const browserURL = browser.wsEndpoint();
  console.log(`Chrome Instance URL: ${browserURL}`);

  // Perform tasks using the new Puppeteer instance...


}

getChromeInstanceURL();

    // Example: Launch Puppeteer after sending the response
    // (async () => {
    //     const browser = await puppeteer.launch({ headless: true });
    //     // Perform other actions with Puppeteer
       
    // })();
});
app.get('/connect-to-browser', async (req, res) => {
    try {
        // Extract browserWSEndpoint from query parameter
        const browserWSEndpoint = req.query.browserWSEndpoint;
console.log(browserWSEndpoint);
        // Connect to the browser on the client side
        const browser = await puppeteer.connect({ browserWSEndpoint: 'ws://172.17.0.1:9222/devtools/browser' });

        // Perform Puppeteer actions (e.g., open a new page)
        const page = await browser.newPage();
        await page.goto('https://example.com');

        // Send a response to the client
        res.send('Connected to the browser on the client side.');

        // Close the browser after performing actions
        // await browser.close();
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});








