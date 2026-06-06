const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const ANSWER_FILE = 'C:/Users/123456/Desktop/知乎回答-思想实验.md';
const QID = '20167030';

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function main() {
  const answerText = fs.readFileSync(ANSWER_FILE, 'utf-8');
  console.log('Answer: ' + answerText.length + ' chars');

  const userDataDir = 'C:/Users/123456/AppData/Local/Google/Chrome/User Data';
  const context = await chromium.launchPersistentContext(
    path.join(userDataDir, 'Default'),
    { headless: false, channel: 'chrome', args: ['--disable-blink-features=AutomationControlled'] }
  );
  const page = await context.newPage();
  await page.setViewportSize({ width: 1280, height: 900 });

  // Go to question page and click answer button
  console.log('1. Opening question...');
  await page.goto('https://www.zhihu.com/question/' + QID, { waitUntil: 'networkidle', timeout: 30000 });
  await sleep(3000);

  console.log('2. Clicking write answer...');
  // Click via Playwright's locator (handles hidden chars)
  try {
    await page.locator('button').filter({ hasText: /写回答/ }).first().click({ timeout: 5000 });
    console.log('   Clicked via locator');
  } catch(e) {
    console.log('   Locator failed, trying page.evaluate...');
    await page.evaluate(() => {
      for (const b of document.querySelectorAll('button')) {
        if (b.textContent.includes('写回答')) { b.click(); return; }
      }
    });
  }

  // Wait for editor page to load (URL should change to /answer or /write)
  await sleep(3000);
  let url = page.url();
  console.log('   URL: ' + url);

  // If still on question page, navigate directly
  if (!url.includes('/write') && !url.includes('/answer?')) {
    console.log('   Not on editor, navigating to /write...');
    await page.goto('https://www.zhihu.com/question/' + QID + '/write', { waitUntil: 'networkidle' });
    await sleep(5000);
    url = page.url();
    console.log('   URL: ' + url);
  }

  // Type answer
  console.log('3. Typing answer...');
  // Try to find and click the editor
  const editorFound = await page.evaluate(() => {
    const sel = '.public-DraftEditor-content, [contenteditable="true"], .RichEditor-editor';
    const el = document.querySelector(sel);
    if (el) { el.click(); return true; }
    return false;
  });
  console.log('   Editor found: ' + editorFound);

  if (editorFound) { await sleep(500); }
  await page.keyboard.insertText(answerText);
  console.log('   Typed ' + answerText.length + ' chars');
  await sleep(2000);

  // Screenshot
  await page.screenshot({ path: 'C:/Users/123456/Desktop/zhihu-answer.png' });
  console.log('4. Screenshot saved');

  // Log buttons and click publish
  console.log('5. Publishing...');
  const btns = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('button'))
      .map(b => { const t = (b.textContent||'').replace(/\s+/g,''); return t || ''; })
      .filter(t => t.length > 0 && t.length < 10);
  });
  console.log('   Buttons: ' + JSON.stringify([...new Set(btns)]));

  const result = await page.evaluate(() => {
    for (const b of document.querySelectorAll('button')) {
      const t = (b.textContent||'').replace(/\s+/g,'');
      if (t === '发布' || t === '提交回答' || t === '发布回答' || t === '发表') {
        b.click();
        return t;
      }
    }
    return null;
  });

  if (result) {
    console.log('   Clicked: ' + result);
    await sleep(4000);
    console.log('6. Final URL: ' + page.url());
  } else {
    console.log('   Publish button not found! Check screenshot.');
    await sleep(10000);
  }

  console.log('Done!');
  await sleep(3000);
  await context.close();
}

main().catch(err => { console.error('Error:', err.message); process.exit(1); });
