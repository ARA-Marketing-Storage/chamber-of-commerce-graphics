import { fileURLToPath } from 'url';
import path from 'path';
import puppeteer from 'puppeteer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const url   = process.argv[2] || 'http://localhost:3000/chamber-of-commerce/';
const label = process.argv[3] || 'screenshot';

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
const page    = await browser.newPage();
await page.setViewport({ width: 1400, height: 900, deviceScaleFactor: 1 });
await page.goto(url, { waitUntil: 'networkidle2', timeout: 20000 });
await new Promise(r => setTimeout(r, 2500)); // wait for canvas + font + image load

const outPath = path.join(__dirname, `${label}.png`);
await page.screenshot({ path: outPath, fullPage: true });
console.log(`✅ Saved: ${outPath}`);
await browser.close();
