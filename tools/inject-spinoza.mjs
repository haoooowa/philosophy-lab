import { readFileSync, writeFileSync } from 'fs';

let c = readFileSync('src/data/experiments.js', 'utf8');
let clean = readFileSync('tools/spinoza-clean.txt', 'utf8').trim();

// Escape for JS source: \ → \\, " → \", newline → \n
clean = clean.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n');

const idIdx = c.indexOf('id: "spinoza-conatus"');
const braceIdx = c.lastIndexOf('{', idIdx);
let depth = 0, inStr = false, esc = false, endPos = 0;
const after = c.substring(braceIdx);
for (let i = 0; i < after.length; i++) {
  const ch = after[i];
  if (esc) { esc = false; continue; }
  if (ch === '\\') { esc = true; continue; }
  if (ch === '"' && !esc) { inStr = !inStr; continue; }
  if (inStr) continue;
  if (ch === '{') depth++;
  if (ch === '}') { depth--; if (depth === 0) { endPos = i + 1; break; } }
}

c = c.substring(0, braceIdx) + clean + c.substring(braceIdx + endPos);
writeFileSync('src/data/experiments.js', c);
console.log('Injected spinoza-conatus');
