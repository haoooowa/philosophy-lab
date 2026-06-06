import { readFileSync, writeFileSync } from 'fs';

const exps = [
  ...JSON.parse(readFileSync('tools/final-exps.json', 'utf8')),
  ...JSON.parse(readFileSync('tools/final-exps2.json', 'utf8')),
];
let c = readFileSync('src/data/experiments.js', 'utf8');
const endIdx = c.lastIndexOf('];');

const entries = [];
for (const e of exps) {
  const esc = (s) => String(s).replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n');
  const ch = e.choices.map((ch, i) => {
    const comma = i < e.choices.length - 1 ? ',' : '';
    const schools = JSON.stringify(ch.schools);
    return '        { id: "' + ch.id + '", label: "' + esc(ch.label) + '", consequence: { title: "' + esc(ch.title) + '", description: "' + esc(ch.desc) + '", schools: ' + schools + ' }, analysis: "' + esc(ch.analysis) + '", quote: { text: "' + esc(ch.quote) + '", attribution: "' + esc(ch.attribution) + '" } }' + comma;
  }).join('\n');

  entries.push('  {\n    id: "' + e.id + '", title: "' + e.title + '", philosopher: "' + e.philosopher + '", era: "' + e.era + '", year: ' + e.year + ', difficulty: ' + e.difficulty + ',\n    categories: ' + JSON.stringify(e.categories) + ',\n    summary: "' + esc(e.summary) + '",\n    coverGradient: "' + e.coverGradient + '",\n    content: {\n      background: { title: "历史背景", body: "' + esc(e.bg) + '" },\n      description: { title: "思想实验", scenario: "' + esc(e.scenario) + '" },\n      interactive: { type: "choice", prompt: "' + esc(e.prompt) + '", choices: [\n' + ch + '\n      ] },\n      implications: [{ title: "' + esc(e.implTitle) + '", body: "' + esc(e.implBody) + '" }]\n    },\n    relatedIds: ' + JSON.stringify(e.related) + ',\n    stats: { totalResponses: 0, distribution: ' + JSON.stringify(e.distribution) + ' },\n    readingTime: ' + e.readingTime + ', featured: false\n  }');
}

c = c.substring(0, endIdx) + ',\n' + entries.join(',\n') + '\n];\n\nexport default experiments;\n';
writeFileSync('src/data/experiments.js', c);
console.log('Injected ' + exps.length + ' experiments');
