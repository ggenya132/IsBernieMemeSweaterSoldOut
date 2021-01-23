const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(
    "https://store.berniesanders.com/products/chairman-sanders-crewneck?variant=32787050004551"
  );

  await page.waitForSelector("#AddToCartText");

  const textContent = await page.evaluate(() => {
    return document.querySelector("#AddToCartText").innerText;
  });

  console.log({ textContent });
  console.log(
    textContent === "Sold Out"
      ? "It's sold out :("
      : "It's in stock buy it now!... \n https://store.berniesanders.com/products/chairman-sanders-crewneck?variant=32787050004551"
  );
  await page.close();
  process.exit(1);
})();
