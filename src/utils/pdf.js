const Puppeteer = require('puppeteer');

module.exports = async function buildPdf(inputFile, outputFile) {
  const browser = await Puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`file://${inputFile}`, {
    waitUntil: 'networkidle0'
  });

  const defaultMargins = {
    top: '2.54cm',
    right: '2.54cm',
    bottom: '2.54cm',
    left: '2.54cm',
  };
  
  const narrowMargins = {
    top: '1.27cm',
    right: '1.27cm',
    bottom: '1.27cm',
    left: '1.27cm',
  };

  await page.pdf({
    path: outputFile,
    format: 'A4',
    border: 0,
    margin: narrowMargins,
  });
  await browser.close();
};