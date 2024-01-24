const puppeteer = require("puppeteer");

const captchaLogic = async (res, url) => {
  console.log(url);
  const address=url
  
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      "--disable-setuid-sandbox",
      "--no-sandbox",
      "--single-process",
      "--no-zygote",
      '--disable-gpu',
      '--remote-debugging-port=9222'
    ],
    executablePath:
      process.env.NODE_ENV === "production"
        ? process.env.PUPPETEER_EXECUTABLE_PATH
        : puppeteer.executablePath(),
  });

  captchaLogic()
};
