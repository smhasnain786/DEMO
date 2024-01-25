// const express = require('express');
const puppeteer = require('puppeteer');

// const app = express();
// const port = 3000;

// let browserInstance;

// app.listen(port, async () => {
//   console.log(`Browser CLI is running at http://localhost:${port}`)
(async () => {;
  browserInstance = await puppeteer.launch();
// });

// app.get('/connect', async (req, res) => {
//   try {
    const browserWSEndpoint = browserInstance.wsEndpoint();
    console.log('Browser CLI connected:', browserWSEndpoint);
//     res.json({ success: true, browserWSEndpoint });
//   } catch (error) {
//     console.error('Error connecting to browser:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });
})();
// app.on('exit', () => {
//   if (browserInstance) {
//     browserInstance.close();
//     console.log('Browser CLI closed.');
//   }
// });
