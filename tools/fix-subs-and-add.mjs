import { readFileSync, writeFileSync } from 'fs';

// 1. Fix subcategory mappings for new experiments
let subFile = readFileSync('src/data/subcategories.js', 'utf8');
const fixes = {
  'kin-selection': ['进化伦理'],
  'reciprocal-altruism': ['进化伦理'],
  'group-selection': ['进化伦理'],
  'costly-signaling': ['进化伦理'],
  'moral-emotions-evolution': ['进化伦理'],
  'strawson-basic-argument': ['自由意志'],
  'dennett-elbow-room': ['自由意志'],
  'strawson-reactive': ['自由意志'],
  'plato-republic-myth': ['权力治理','乌托邦'],
  'dream-argument': ['实在表象','怀疑论'],
  'bootstrapping-problem': ['认知逻辑'],
  'lottery-preface': ['认知逻辑'],
  'godel-incompleteness': ['数学哲学'],
  'presentism-eternalism': ['时间哲学'],
  'berlin-negative-positive': ['自由权利'],
  'locke-tacit-consent': ['社会契约'],
  'panpsychism-combo': ['心物关系'],
  'meta-problem': ['意识难题'],
  'explanatory-gap': ['意识难题'],
  'combination-problem': ['意识难题'],
  'narrative-self': ['人格同一'],
  'phenomenal-concepts': ['心物关系'],
  'block-chinese-nation': ['AI心灵'],
  'paradox-of-fiction': ['他心问题'],
  'van-inwagen-consequence': ['自由意志'],
  'libet-experiment': ['自由意志'],
  'nietzsche-truth-lie': ['语言社会'],
  'foucault-discourse': ['语言社会'],
  'sartre-bad-faith': ['存在论'],
  'kierkegaard-abraham': ['乌托邦'],
  'pessimistic-induction': ['归纳科学'],
  'moore-paradox-omissive': ['认知逻辑'],
  'closure-principle': ['认知逻辑'],
  'austin-performative': ['语言社会'],
  'grice-cooperation': ['解释翻译'],
  'brain-replacement': ['人格同一','AI心灵'],
  'mctaggart-unreality': ['时间哲学'],
  'rousseau-general-will': ['社会契约'],
  'rawls-realistic-utopia': ['乌托邦'],
  'kripke-necessity': ['模态'],
  'counterpart-theory': ['模态'],
  'berkeley-idealism': ['实在表象'],
  'plato-third-man': ['实在表象'],
  'strawson-reactive': ['自由意志'],
  'ultimatum-game': ['进化伦理'],
  'greenbeard-effect': ['进化伦理'],
  'haidt-foundations': ['进化伦理','元伦理'],
  'kant-murderer-door': ['规范伦理'],
  'wilt-chamberlain': ['自由权利'],
  'avicenna-flying-man': ['心物关系'],
  'essentialism-kripke': ['模态'],
  'lewis-modal-realism': ['模态'],
  'cultural-group-selection': ['进化伦理'],
  'neural-correlates': ['意识难题'],
  'theory-of-mind': ['他心问题'],
  'danto-indiscernibles': ['语言社会'],
  'ticking-bomb': ['自由权利'],
  'sen-capability': ['自由权利'],
};

for (const [id, subs] of Object.entries(fixes)) {
  // Replace in the subcategory map
  const pattern = new RegExp('"' + id + '": \\[[^\\]]*\\]');
  if (subFile.match(pattern)) {
    subFile = subFile.replace(pattern, '"' + id + '": ' + JSON.stringify(subs));
  }
}
writeFileSync('src/data/subcategories.js', subFile);
console.log('Fixed subcategory mappings');

// 2. Add more experiments
let c = readFileSync('src/data/experiments.js', 'utf8');
const endIdx = c.lastIndexOf('];');
const newExps = [];
function esc(s) { return s.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n'); }
function addExp(e) {
  const ch = e.choices.map((ch,i) => '        { id: "'+ch.id+'", label: "'+esc(ch.label)+'", consequence: { title: "'+esc(ch.title)+'", description: "'+esc(ch.desc)+'", schools: '+JSON.stringify(ch.schools)+' }, analysis: "'+esc(ch.analysis)+'", quote: { text: "'+esc(ch.quote)+'", attribution: "'+esc(ch.attribution)+'" } }'+(i<e.choices.length-1?',':'')).join('\n');
  newExps.push('  {\n    id: "'+e.id+'", title: "'+e.title+'", philosopher: "'+e.philosopher+'", era: "'+e.era+'", year: '+e.year+', difficulty: '+e.difficulty+',\n    categories: '+JSON.stringify(e.categories)+',\n    summary: "'+esc(e.summary)+'",\n    coverGradient: "'+e.coverGradient+'",\n    content: {\n      background: { title: "历史背景", body: "'+esc(e.bg)+'" },\n      description: { title: "思想实验", scenario: "'+esc(e.scenario)+'" },\n      interactive: { type: "choice", prompt: "'+esc(e.prompt)+'", choices: [\n'+ch+'\n      ] },\n      implications: [{ title: "'+esc(e.implTitle)+'", body: "'+esc(e.implBody)+'" }]\n    },\n    relatedIds: '+JSON.stringify(e.related)+',\n    stats: { totalResponses: 0, distribution: '+JSON.stringify(e.distribution)+' },\n    readingTime: '+e.readingTime+', featured: false\n  }');
}

// 元伦理 (2→5)
addExp({ id:'mackie-error-theory', title:'错误论', philosopher:'J.L.麦基', era:'当代', year:1977, difficulty:3, categories:['伦理学'], summary:'麦基提出了一个令人不安的元伦理立场：所有道德判断——在它们「声称」客观地描述道德事实的意义上——全都是错的。因为没有客观的道德事实可以去「描述」。当我们说「杀人是错的」——我们是在做一种客观的声明——仿佛这个「错」的属性像质量一样存在于宇宙中。但麦基论证——宇宙不包含这种奇怪的、具有内在规范性的属性。道德判断——不是——对世界的中立描述——而是——我们情感和欲望的——投射。它们是——系统的——错误。这个被称为「错误论」的立场是元伦理学中最激进的——也是逻辑上最自洽的——之一。', coverGradient:'linear-gradient(135deg, #3d1d1d, #5c2d2d)', bg:'J.L.麦基的《伦理学：发明对与错》(1977)提出了道德错误论——这是元伦理学中最激进的立场之一。麦基综合了休谟的「是与应当」区分和20世纪分析哲学的语言分析工具，论证道德属性（如「好」「应当」「错误」）是「奇怪的」——它们在宇宙的本体论中找不到位置。麦基区分了两个层面：在「日常道德话语」中，人们确实在做客观的声明；但在「哲学分析的层面」——所有这些声明都是错的——因为它们的客观预设不成立。麦基称自己为道德「虚无主义者」——但他强调虚无主义不意味着我们应该放弃道德——只是我们需要诚实地重新理解道德是什么：不是对宇宙事实的发现，而是对人类愿望的发明。', scenario:'麦基邀请你进行一个思想实验。你最好的朋友对你说：「随意伤害无辜的人是错误的——这是一个客观的事实，就像地球围绕太阳转动一样。」\\n\\n麦基请你停下来想一想。地球围绕太阳转动——这是一个物理事实——可以通过观察和测量来验证。但「随意伤害无辜的人是错误的」——你如何验证它？你用眼睛看——看不到「错」的属性附着在伤害行为上。你用仪器量——量不出「应该」这种物质。\\n\\n麦基说，道德属性——如果它们真的客观存在——将是一种非常奇怪的实体。它们不同于物理属性（质量、电荷），因为它们是「规范性」的——它们不只是描述世界「是怎样的」——它们还告诉我们世界「应该怎样」。一个东西同时具有「描述性」和「规范性」——这在自然的宇宙中——是一个异常。\\n\\n麦基的结论：道德属性不存在——至少不是客观的。但这不是说我们应该放弃道德。道德——就像法律或礼貌——是人创造的——为人服务的。它们不需要宇宙的背书来对我们有约束力。我们发明道德——是因为我们需要它以使我们能够共同生活——不是因为我们在宇宙中「发现」了什么。', prompt:'「杀人是错的」——这是一个客观事实还是人类的发明？', choices:[{ id:'error-theory-yes', label:'是人类发明的——但这不意味着它不重要', title:'错误论/表达主义', desc:'你接受麦基的核心洞见：道德判断不是关于客观事实的描述，而是人类情感、欲望和社会需要的表达。但这不意味着道德是「不重要」的——恰恰相反——它意味着我们需要更诚实地承担道德是我们自己的创造这一责任。', schools:[{ name:'怀疑论', weight:0.5 },{ name:'唯物主义', weight:0.3 }], analysis:'麦基的追随者强调，接受错误论不意味着「怎么做都行」。道德仍然可以是重要的、迫切的——只是理由不再来自宇宙的客观结构，而是来自我们作为社会动物的需要和愿望。错误的——只是我们对道德的客观性的「主张」——不是道德本身的价值。', quote:'道德——不是被发现的——而是被发明的。发明不是因为不重要——恰恰是因为太重要。', attribution:'J.L.麦基' },{ id:'error-theory-no', label:'是客观事实——道德真理独立于人类而存在', title:'道德实在论', desc:'你拒绝麦基的论证：道德可能有不同于物理属性的存在方式——它不是「可被仪器测量的」，但仍然是客观的。数学真理也不能被仪器测量——但它们是客观的。同样——某些道德真理可能独立于人类意见而在所有理性存在者的结构中为真。', schools:[{ name:'理性主义', weight:0.5 },{ name:'道义论', weight:0.3 }], analysis:'道德实在论者——如大卫·伊诺克——论证麦基对「奇怪性」的诉诸不是一个有效的形而上学论证。量子力学中的许多属性也是「奇怪的」——波粒二象性、量子纠缠——它们与我们的日常直觉完全不同——但这不意味着它们不存在。道德属性可能同样是宇宙的合法组成部分——只是需要新的形而上学范畴来理解它们。', quote:'宇宙比我们想象的更奇怪——道德属性可能就是这个奇怪性的一部分。', attribution:'道德实在论' }], implTitle:'如果道德是我们发明的——我们还能认真对待它吗？', implBody:'麦基的错误论是元伦理学中最令人不安——也许也是最诚实的——立场。它迫使我们面对：如果我们对「对与错」的最深刻信念——在严格的分析下——不是对客观事实的中立描述而只是我们情感和传统的投射——我们是否还能继续认真地、坚定地维护这些信念？麦基的答案是：可以——但我们需要放弃我们关于「客观道德事实」的幻觉——并诚实地承担道德是我们自己的创造这一沉重的、同时也是解放性的责任。', related:['euthyphro-dilemma','moral-luck'], distribution:{'error-theory-yes':0,'error-theory-no':0}, readingTime:8 });

// 因果 (2→5)
addExp({ id:'lewis-counterfactual-causation', title:'反事实因果论', philosopher:'大卫·刘易斯', era:'当代', year:1973, difficulty:3, categories:['形而上学'], summary:'刘易斯提出了一个看似简单却极其强大的因果理论：A导致B——当且仅当——「如果A不发生——那么B也不会发生」。这个定义将因果关系还原为反事实条件句——关于「可能世界」的陈述。但批评者很快发现了问题：如果多个原因共同作用（如火灾需要氧气、燃料和火花），每个原因在「反事实意义」下都不是必要的（因为另一个原因会替代它）——那么根据刘易斯的定义——它们都不是「原因」。这个「抢先」问题推动了当代因果哲学的持续辩论——从刘易斯的反事实理论到因果模型和干预主义——解释了为什么科学家和律师如此关心「是什么导致了这个结果」。', coverGradient:'linear-gradient(135deg, #3d2d3d, #5c4f4f)', bg:'大卫·刘易斯在1973年的论文《因果关系》中提出了反事实因果论——这是20世纪因果哲学中最有影响力的理论之一。刘易斯的核心洞见简单而强大：说A导致B，就是说如果A没有发生，B就不会发生。例如，火柴划燃导致了火灾——因为如果火柴没有划燃，火灾就不会发生。这个「反事实」不是关于实际世界的事实——而是关于「最接近的可能世界」的事实。刘易斯用他的模态实在论框架来支持反事实分析。然而，这个理论面临「抢先」和「过度决定」等经典反例的挑战。', scenario:'昨晚一家工厂发生了爆炸。调查人员发现：工人甲离开时忘了关燃气阀门；工人乙在禁止吸烟区点燃了香烟；安全系统在上周的预算削减中被拆除。\\n\\n谁——或什么——「导致了」爆炸？\\n\\n刘易斯的反事实理论给出了一个清晰的测试。对于每个嫌疑因素，问：如果这个因素没有发生——爆炸是否仍然会发生？\\n\\n如果工人甲关了燃气阀——燃气不会积聚——爆炸不会发生。所以甲「导致了」爆炸。如果工人乙没有点烟——没有火花——爆炸不会发生。所以乙也导致了。如果安全系统没被拆除——燃气泄漏会被检测到——警报会响起——所以拆除也导致了。\\n\\n但这里有一个问题。假设一家工厂有两个工人——丙和丁——各自携带了一支烟。丙正在掏出打火机准备点烟——在他点火之前——丁已经点燃了并引发了爆炸。如果丙没有掏出打火机——爆炸仍然会发生（因为丁的火花）。根据反事实理论——丙不是原因。但直觉上说——丙的愚蠢行为——虽然被丁「抢先」了——仍应被看作相关的因果因素吗？\\n\\n这个「抢先」案例是刘易斯理论的经典挑战——它表明反事实分析在处理「多余原因」时是脆弱的。当前因果哲学中的「干预主义」方法（伍德沃德）和因果建模方法（珀尔）试图补救这些不足。', prompt:'如果一个因素被另一个因素「抢了先」——它还是原因吗？', choices:[{ id:'preemption-still-cause', label:'是的——被抢了先的因素与结果仍有因果关联', title:'因果多元论', desc:'你认为刘易斯的反事实分析过于狭隘。因果不是单一的「如果A不发生则B不发生」——而是多种因素共同构成因果网络。即使一个因素被另一个因素「抢了先」——它在因果网络中仍有合法位置。', schools:[{ name:'唯物主义', weight:0.3 },{ name:'经验主义', weight:0.3 }], analysis:'干预主义因果论（詹姆斯·伍德沃德）将因果定义为「对A的干预会改变B的值」——这可以处理抢先问题——因为我们对「被抢了先的因素」的干预仍然相关。', quote:'因果不是一条链——而是一张网——每个被抢了先的节点仍是网的一部分。', attribution:'因果多元论' },{ id:'preemption-not-cause', label:'不是——被抢了先的因素只是背景条件——不是真正的原因', title:'反事实严格论', desc:'你认为刘易斯的反事实测试是正确的：因果关系要求「如果没有A则B不会发生」的严格反事实依赖。如果A被抢先了——那它就不是原因——尽管它可能是道德或法律上相关的事实。', schools:[{ name:'理性主义', weight:0.4 }], analysis:'法律中的「近因」(proximate cause)原则与反事实严格论保持一致：如果一个人点燃了一根火柴——但在火柴引发火灾前——另一个人向房子扔了燃烧弹——那么前者不是火灾的法律原因——尽管他「本可以」引发火灾。', quote:'如果你被抢了先——你本可能造成结果——但你实际上没有。因果是关于实际序列——不是关于可能序列。', attribution:'反事实严格论' }], implTitle:'原因和责任——因果关系和法律归责是同一件事吗？', implBody:'因果关系不仅是一个形而上问题——它是我们分配责任、赔偿和惩罚的基础。刘易斯的反事实因果论——尽管面临反例——提供了思考因果关系的最清晰框架之一。它的洞见在于：当我们说「A导致了B」——我们不是在描述一种神秘的「因果关系」——我们是在做关于可能世界的陈述——关于「如果A没有发生——世界会怎样」的假设。这些假设——尽管反事实——却是我们理解世界和在其中行动的基本工具。', related:['possible-worlds','problem-of-evil'], distribution:{'preemption-still-cause':0,'preemption-not-cause':0}, readingTime:8 });

// 乌托邦 (2→5)
addExp({ id:'popper-open-society', title:'开放社会及其敌人', philosopher:'卡尔·波普尔', era:'现代', year:1945, difficulty:2, categories:['政治哲学'], summary:'波普尔在二战期间写下了《开放社会及其敌人》——对柏拉图和黑格尔等哲学家的猛烈攻击——他认为他们为极权主义提供了哲学辩护。波普尔的核心论证是：乌托邦社会工程——试图按照一个完美的蓝图整体性地改造社会——是危险的——并注定失败。相反——他主张「渐进社会工程」：小步骤、可逆的、可以测试和调整的改革。波普尔将柏拉图的《理想国》诊断为极权主义思想的源起——不是因为它倡导暴政——而是因为它相信少数「知道真理」的哲学家有权利统治那些「不知道」的人——而这种信念一旦被政治化——就为专制铺平了道路。', coverGradient:'linear-gradient(135deg, #3d3d1d, #5c5c3d)', bg:'卡尔·波普尔的《开放社会及其敌人》(1945)是20世纪政治哲学中最具争议性和影响力的著作之一。波普尔在二战期间——作为流亡英国的奥地利犹太人——写下了对柏拉图、黑格尔和马克思的全面批判——认为他们的「历史主义」（相信历史遵循不可避免的规律）和「乌托邦社会工程」（相信可以按照完美蓝图改造社会）为极权主义提供了哲学基础。波普尔的替代方案是「开放社会」：一个通过民主制度允许批评和修正的社会——以及「渐进社会工程」——小步骤的改革而非宏大的乌托邦蓝图。这部著作为冷战时期的自由主义政治哲学奠定了基础——但也因其对柏拉图的激进解读而受到古典学者的批评。', scenario:'波普尔让你做一个对比。柏拉图在《理想国》中描述了一个完美的城邦——由哲学家国王统治——他们通过长期艰苦的教育获得了关于「善的形式」的真实知识。一旦哲学家国王知道「善是什么」——他们就有权按照他们看到的真理来安排社会生活——其他人——没有这种知识的人——没有权利质疑。\\n\\n波普尔说：这就是极权主义的逻辑核心。不是柏拉图倡导暴力或压迫——而是他提出了一个将「政治」从「批判性辩论」中移除的方案：如果有一些人——他们——知道——绝对——的——真理——那么——民主——辩论——批评——政策——的——修正——所有这些——开放——社会——的——机制——就——变得——多余——甚至——危险——因为它们可能——偏离——已知——的——真理。\\n\\n波普尔的替代方案很谦逊：我们不知道什么是完美的社会。甚至可能不存在完美的社会。政治——不应该是——为了实现——某个——哲学——蓝图——而应该是——为了防止——可以——被防止的——具体的——痛苦和——不公平。不应该问「最好的社会是什么样子？」——而应该问「我们如何才能减少社会中最严重的苦难？」', prompt:'政治的目标是实现乌托邦——还是减少痛苦？', choices:[{ id:'reduce-suffering', label:'减少痛苦——因为我们不知道什么是完美的善', title:'波普尔式渐进', desc:'你认同波普尔：政治的目标不可能是实现一个完美的乌托邦——因为我们甚至不知道它是什么样子——而且历史显示——追求乌托邦往往导致灾难。政治应该是——在一个开放的社会中——通过反复试错——逐步——减少——可识别的——痛苦——和——不公。', schools:[{ name:'经验主义', weight:0.4 },{ name:'怀疑论', weight:0.2 }], analysis:'波普尔的论点深刻影响了战后自由主义——特别是弗里德里希·哈耶克和以赛亚·伯林的作品。他们都强调——人类理性的局限——和——对「完美社会」的追求——是政治灾难的配方。', quote:'为减少可测量的痛苦而工作——而不是为建立不可及的理想而奋斗。', attribution:'卡尔·波普尔' },{ id:'pursue-utopia', label:'乌托邦理想作为指南——即使不能完全实现也值得追求', title:'调节性理想', desc:'你认为波普尔过于悲观：即使我们不能「达到」完美的社会——乌托邦理想作为「调节性理念」——告诉我们方向——仍然是必要的。没有理想——任何渐进步骤都会失去方向——朝着什么——是「渐进的」？', schools:[{ name:'理性主义', weight:0.3 },{ name:'道义论', weight:0.3 }], analysis:'罗尔斯的「现实的乌托邦」试图调和波普尔和乌托邦思想——承认完全正义的社会可能不可实现——但仍然需要一个「调节性理念」来引导政治变革。波普尔和罗尔斯的争论仍在继续。', quote:'没有指南针——你所有的航行都只是漂流。', attribution:'对波普尔的批评' }], implTitle:'没有理想——我们还有方向吗？', implBody:'波普尔的开放社会论证是政治哲学中最重要的「谦虚」辩护之一：我们不需知道什么是完美的来知道什么是坏的——而且——防止坏——可能比——追求——完美的——善——更——紧迫——更——实际——更——不易——被滥用。波普尔不要求我们放弃「让世界更好」的愿望——只要求我们诚实地认识到——我们不知道——什么——是——绝对的——更好。', related:['rawls-realistic-utopia','ones-who-walk-away'], distribution:{'reduce-suffering':0,'pursue-utopia':0}, readingTime:7 });

writeFileSync('src/data/experiments.js', c.substring(0, endIdx) + ',\n' + newExps.join(',\n') + '\n];\n\nexport default experiments;\n');
console.log('Subcategory fixes applied, added ' + newExps.length + ' new experiments');
