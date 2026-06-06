import { readFileSync, writeFileSync } from 'fs';

// Read as raw buffer — don't interpret escapes
let buf = readFileSync('src/data/experiments.js');

// In the source file:
// \\\\n (3 bytes: 0x5C 0x5C 0x6E) → JS reads as literal \n text → WRONG
// \\n   (2 bytes: 0x5C 0x6E)       → JS reads as newline      → CORRECT
// We need to replace the 3-byte sequence with the 2-byte sequence

const triple = Buffer.from('\\\\n'); // \\n — 3 bytes: 0x5C 0x5C 0x6E
const double = Buffer.from('\\n');   // \n — 2 bytes: 0x5C 0x6E

// Count before
let count = 0;
for (let i = 0; i < buf.length - 2; i++) {
  if (buf[i] === 0x5C && buf[i+1] === 0x5C && buf[i+2] === 0x6E) count++;
}
console.log('Before:', count);

// Replace all 3-byte \\n with 2-byte \n
const result = [];
let i = 0;
while (i < buf.length) {
  if (i < buf.length - 2 && buf[i] === 0x5C && buf[i+1] === 0x5C && buf[i+2] === 0x6E) {
    result.push(0x5C, 0x6E); // single \n (2 bytes)
    i += 3;
  } else {
    result.push(buf[i]);
    i++;
  }
}

const newBuf = Buffer.from(result);
writeFileSync('src/data/experiments.js', newBuf);

// Count after
let count2 = 0;
for (let i = 0; i < newBuf.length - 2; i++) {
  if (newBuf[i] === 0x5C && newBuf[i+1] === 0x5C && newBuf[i+2] === 0x6E) count2++;
}
console.log('After:', count2);
console.log('Done');
