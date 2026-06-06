const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const ARTICLE_FILE = 'C:/Users/123456/Desktop/知乎文章-思想实验室.md';

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function main() {
  const rawMarkdown = fs.readFileSync(ARTICLE_FILE, 'utf-8');
  const articleText = rawMarkdown.replace(/> 📸.*\n/g, '').trim();
  const title = '做了103个哲学思想实验后，我建了一个网站来「测试你的哲学人格」';

  // Skip clipboard entirely - read article directly
  console.log('📋 Article loaded (' + articleText.length + ' chars)');

  const userDataDir = 'C:/Users/123456/AppData/Local/Google/Chrome/User Data';
  const context = await chromium.launchPersistentContext(
    path.join(userDataDir, 'Default'),
    { headless: false, channel: 'chrome', args: ['--disable-blink-features=AutomationControlled'] }
  );

  const page = await context.newPage();
  await page.setViewportSize({ width: 1280, height: 900 });

  // Step 1: Go to EXISTING article edit page
  const ARTICLE_URL = 'https://zhuanlan.zhihu.com/p/2044785985448326070/edit';
  console.log('🌐 Opening existing article editor...');
  await page.goto(ARTICLE_URL, { waitUntil: 'networkidle', timeout: 30000 });
  await sleep(5000);

  // Step 2: Select all existing content and type new content directly
  console.log('📄 Clearing old content and typing new content...');
  try {
    // Find editor and focus
    const editor = await page.$('.public-DraftEditor-content');
    if (editor) {
      await editor.click();
      await sleep(500);
    } else {
      await page.mouse.click(600, 400);
      await sleep(500);
    }

    // Select all and delete old content
    await page.keyboard.press('Control+a');
    await sleep(300);
    await page.keyboard.press('Backspace');
    await sleep(500);

    // Type the article using insertText (preserves Chinese chars and newlines correctly)
    await page.keyboard.insertText(articleText);
    await sleep(1000);
    console.log('   Typed ' + articleText.length + ' chars via insertText!');
  } catch(e) { console.log('   Type error: ' + e.message); }

  await sleep(2000);

  // Step 4: Take screenshot before publish
  await page.screenshot({ path: 'C:/Users/123456/Desktop/zhihu-before-publish.png', fullPage: true });
  console.log('📸 Pre-publish screenshot saved');

  // Step 5: Find and click publish button
  console.log('🔍 Finding publish button...');

  const findPublishBtns = async () => {
    return page.evaluate(() => {
      const results = [];
      const all = document.querySelectorAll('button, [role="button"]');
      for (const el of all) {
        const text = (el.textContent || '').replace(/\s+/g, ' ').trim();
        if (text.includes('发布') || text.includes('更新')) {
          const rect = el.getBoundingClientRect();
          if (rect.width > 0 && rect.height > 0) {
            results.push({
              text: text,
              top: Math.round(rect.top),
              left: Math.round(rect.left),
              width: Math.round(rect.width),
              height: Math.round(rect.height),
            });
          }
        }
      }
      return results;
    });
  };

  // Log ALL visible buttons (not just publish) for debugging
  const allVisibleBtns = await page.evaluate(() => {
    const results = [];
    const all = document.querySelectorAll('button');
    for (const el of all) {
      const rect = el.getBoundingClientRect();
      const text = (el.textContent || '').replace(/\s+/g, ' ').trim();
      if (rect.width > 0 && rect.height > 0 && rect.top > 0 && rect.top < 1000 && text.length > 0) {
        results.push({ text: text.slice(0, 20), top: Math.round(rect.top) });
      }
    }
    return results;
  });
  console.log('   All visible buttons: ' + JSON.stringify(allVisibleBtns));

  // Round 1: Click "发布"
  let btns = await findPublishBtns();
  console.log('   Publish buttons round 1: ' + JSON.stringify(btns));

  if (btns.length > 0) {
  // Pick the right button: "更新" for editing, "发布" for new articles
    const targetBtn = btns.find(b => b.text === '更新') || btns.find(b => b.text === '发布') || btns[0];
    console.log(`   Clicking: ${targetBtn.text}`);
    await page.mouse.click(targetBtn.left + targetBtn.width/2, targetBtn.top + targetBtn.height/2);
    await sleep(5000);

    // Screenshot after first click
    await page.screenshot({ path: 'C:/Users/123456/Desktop/zhihu-step1.png' });

    // Round 2: Check if more buttons appeared (dialog/panel)
    btns = await findPublishBtns();
    console.log('   Publish buttons round 2: ' + JSON.stringify(btns));

    // Click EACH "发布" button found (there might be multiple from dialog)
    for (const b of btns) {
      if (b.top > 0 && b.top < 1000) {
        console.log(`   Clicking round 2: ${b.text} at y=${b.top}`);
        await page.mouse.click(b.left + b.width/2, b.top + b.height/2);
        await sleep(5000);
        await page.screenshot({ path: 'C:/Users/123456/Desktop/zhihu-step2.png' });
      }
    }

    // Round 3: Final check
    btns = await findPublishBtns();
    console.log('   Publish buttons round 3: ' + JSON.stringify(btns));

    const finalUrl = page.url();
    console.log('   Final URL: ' + finalUrl);
    await page.screenshot({ path: 'C:/Users/123456/Desktop/zhihu-final.png' });

    // Check if we ended on a published article page (not edit page)
    if (finalUrl.includes('/p/') && !finalUrl.includes('/edit')) {
      console.log('✅ Article appears to be published!');
    } else if (finalUrl.includes('/edit')) {
      console.log('⚠️  Still on edit page - article may be draft only');
    }
  }

  console.log('\n👋 Done! Browser will close in 10s...');
  await sleep(10000);
  await context.close();
}

main().catch(err => { console.error('❌', err.message); process.exit(1); });
