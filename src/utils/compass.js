// School name → dimension key mapping
const SCHOOL_TO_DIMENSION = {
  '功利主义': '功利主义', '后果论': '功利主义',
  '道义论': '道义论',
  '美德伦理学': '美德伦理学',
  '存在主义': '存在主义',
  '怀疑论': '怀疑论',
  '理性主义': '理性主义',
  '经验主义': '经验主义',
  '唯物主义': '唯物主义',
  '唯心主义': '唯心主义',
  '契约论': '契约论',
};

export const DIMENSIONS = [
  { key: '功利主义', label: '功利主义', angle: 0 },
  { key: '道义论', label: '道义论', angle: 36 },
  { key: '美德伦理学', label: '美德伦理', angle: 72 },
  { key: '存在主义', label: '存在主义', angle: 108 },
  { key: '怀疑论', label: '怀疑论', angle: 144 },
  { key: '理性主义', label: '理性主义', angle: 180 },
  { key: '经验主义', label: '经验主义', angle: 216 },
  { key: '唯物主义', label: '唯物主义', angle: 252 },
  { key: '唯心主义', label: '唯心主义', angle: 288 },
  { key: '契约论', label: '契约论', angle: 324 },
];

export function calculateCompass(interactions) {
  const scores = {};
  for (const dim of DIMENSIONS) scores[dim.key] = 0;
  for (const interaction of interactions) {
    for (const school of interaction.schools) {
      const dimKey = SCHOOL_TO_DIMENSION[school.name];
      if (dimKey) scores[dimKey] += school.weight;
    }
  }
  const values = Object.values(scores);
  const min = Math.min(...values, 0);
  const max = Math.max(...values, 1);
  const range = max - min || 1;
  const normalized = {};
  for (const [key, value] of Object.entries(scores)) {
    normalized[key] = Math.round(((value - min) / range) * 100);
  }
  return normalized;
}

// ═══════════════════════════════════════════
// 16-Type Philosophical Personality System
// ═══════════════════════════════════════════

// 4 axes, each from 10-dimension scores
function getAxes(scores) {
  // Use nullish coalescing: 0 is a valid (neutral) score, not missing data
  return {
    ethics: (scores['功利主义'] ?? 0) - (scores['道义论'] ?? 0),
    knowledge: (scores['理性主义'] ?? 0) - (scores['经验主义'] ?? 0),
    reality: (scores['唯物主义'] ?? 0) - (scores['唯心主义'] ?? 0),
    freedom: (scores['存在主义'] ?? 0) - (scores['契约论'] ?? 0),
  };
}

// Generate 4-letter type code
function getTypeCode(axes) {
  const e = axes.ethics >= 0 ? 'U' : 'D';  // Utilitarian / Deontological
  const k = axes.knowledge >= 0 ? 'R' : 'E'; // Rationalist / Empiricist
  const r = axes.reality >= 0 ? 'M' : 'I';   // Materialist / Idealist
  const f = axes.freedom >= 0 ? 'X' : 'C';    // eXistentialist / Contractarian
  return e + k + r + f;
}

// All 16 types with fun profiles
const TYPE_PROFILES = {
  'UREX': { code: 'UREX', name: '人间计算器', emoji: '🧮', subtitle: '功利·理性·唯物·存在',
    tagline: '你在脑子里给每个选择打了分——然后选了总分最高的那个。但别担心，你同时也深信"不自由毋宁死"。',
    traits: ['结果导向狂魔', '逻辑上瘾', '脚踏实地的叛逆者'],
    strengths: '你能把最复杂的道德困境简化成一个Excel表格。实用主义是你的人生操作系统，但你也拒绝被任何系统完全定义。',
    weaknesses: '有时你会过度计算——连"今晚吃什么"都要做成本收益分析。朋友们觉得你靠谱但偶尔有点"冷"。',
    philosopher: '杰里米·边沁 + 萨特的私生子',
    quote: '「最大多数人的最大幸福——但我保留随时推翻这个公式的自由。」',
    compatible: ['DRIX', 'UMEC'], clash: ['DREC', 'DIMC'],
    vibe: '效率驱动的自由灵魂——像一台装了摇滚音响的超级计算机。' },
  'UREC': { code: 'UREC', name: '社会工程师', emoji: '🏗️', subtitle: '功利·理性·唯物·契约',
    tagline: '你相信好制度比好人心更可靠。如果让你设计社会——你会写一份100页的说明书——附流程图。',
    traits: ['制度设计师', '逻辑至上', '秩序爱好者'],
    strengths: '你有罕见的将宏大伦理转化为可操作规则的能力。罗尔斯的无知之幕在你手里会变成一份可执行的合同。',
    weaknesses: '偶尔你会忘记——制度是为"人"服务的——而人不是流程图中的方框。你需要定期提醒自己"人是目的"。',
    philosopher: '罗尔斯和边沁组队开咨询公司',
    quote: '「给我一个足够好的制度，我可以不在乎里面的人是谁。」',
    compatible: ['DRIX', 'UMIX'], clash: ['DREX', 'DIMX'],
    vibe: '用逻辑和制度搭建理想国——先画流程图再谈感情。' },
  'URIX': { code: 'URIX', name: '浪漫主义革命家', emoji: '🎨', subtitle: '功利·理性·唯心·存在',
    tagline: '你的理想主义有Excel表格支撑。你一边用逻辑论证"爱是最优解"，一边为了自由烧掉所有规则书。',
    traits: ['理想主义工程师', '浪漫逻辑学家', '规则毁灭者'],
    strengths: '你有能力将最飘渺的理想翻译成可执行的计划。你的人道主义既有诗意又有可行性——这很罕见。',
    weaknesses: '你的内在矛盾有时会把你撕裂——你今天写了一份完美的计划，明天就推翻它因为"太无聊了"。',
    philosopher: '年轻马克思遇见加缪，在咖啡馆里谈了一整夜',
    quote: '「全世界的理想主义者联合起来——你们失去的只是锁链，得到的是Excel表格！」',
    compatible: ['DRIX', 'UMEX'], clash: ['DREC', 'DIMC'],
    vibe: '一边写革命宣言一边做甘特图——浪漫且有deadline。' },
  'URIC': { code: 'URIC', name: '乌托邦项目经理', emoji: '📋', subtitle: '功利·理性·唯心·契约',
    tagline: '你相信完美的世界是可以被设计出来的——而且你已经在脑子里画好了蓝图。你是一个带着甘特图的理想主义者。',
    traits: ['蓝图绘制者', '道德架构师', '完美主义者'],
    strengths: '你在理想主义和可操作性之间找到了罕见的平衡。你不但能看到"应该怎样"——还能规划出"如何达到"的路径。',
    weaknesses: '你的蓝图太完美了，以至于现实常常令人失望。当人类的不完美破坏了你精心设计的系统时——你会抓狂。',
    philosopher: '柏拉图的哲人王，但拿到了MBA学位',
    quote: '「给我足够的数据，我可以设计出天堂——但请确保人们准时参会。」',
    compatible: ['DRIX', 'UMEC'], clash: ['DREX', 'DIMX'],
    vibe: '怀揣理想国的蓝图，口袋里装着项目进度表。' },
  'UMEX': { code: 'UMEX', name: '街头智者', emoji: '🕶️', subtitle: '功利·经验·唯物·存在',
    tagline: '你不相信任何"高深的理论"——你相信亲身踩过的坑。规则是给那些不敢尝试的人准备的。',
    traits: ['实用主义冒险家', '经验至上', '规则免疫者'],
    strengths: '你是朋友圈里最靠谱的"现实检验者"。当一个理论听起来太美——你会说"我们试试看"。而你试了之后——你是对的。',
    weaknesses: '你的"先做再想"有时会变成"做了就再也不想"。计划能力有待提升——但你总能在最后一刻把事搞定。',
    philosopher: '威廉·詹姆斯和尼采在酒吧里碰杯',
    quote: '「真理？真理就是那些在实践中不会让你撞墙的东西。」',
    compatible: ['UReX', 'DREX'], clash: ['DRIC', 'DIMC'],
    vibe: '脚踩大地，眼望星空——但只在星空能导航的时候才看。' },
  'UMEC': { code: 'UMEC', name: '务实公民', emoji: '🤝', subtitle: '功利·经验·唯物·契约',
    tagline: '你相信"好政府"就像相信一个好用的APP——它不需要完美，它只需要能用。你是朋友圈里最可靠的那个。',
    traits: ['社区粘合剂', '经验主义信徒', '规则拥护者（好规则）'],
    strengths: '你是那个当所有人都在讨论"我们应该做什么"时——已经在默默做事的人。你对世界有一套基于经验的、稳健的判断力。',
    weaknesses: '你可能会过于保守——"之前这样做没问题"成为你拒绝尝试新方法的挡箭牌。偶尔需要有人推你一把。',
    philosopher: '约翰·杜威当上了居委会主任',
    quote: '「一个好的制度不需要成为完美的制度——它只需要比无政府状态好一点点。」',
    compatible: ['UREX', 'DREC'], clash: ['DREX', 'DIMX'],
    vibe: '稳定输出的靠谱人类——文明社会的无名英雄。' },
  'UMIX': { code: 'UMIX', name: '诗意的游牧者', emoji: '🌌', subtitle: '功利·经验·唯心·存在',
    tagline: '你在旅途中收集体验——像收集贝壳。你相信美和意义是真实的——但你得亲自去遇见它们——不能读别人写的指南。',
    traits: ['体验收藏家', '诗意浪人', '直觉导航者'],
    strengths: '你有将平凡的日常转化为深刻体验的天赋。你是那种可以一个人在陌生城市漫步八小时——然后带回一个哲学顿悟的人。',
    weaknesses: '"计划"这个词让你浑身不舒服。你的生活可能缺乏结构——但你觉得"结构"本身就是个监狱。',
    philosopher: '梭罗带着WiFi在瓦尔登湖旁写博客',
    quote: '「活着的意义不是被找到的——它是你在迷路的途中捡到的。」',
    compatible: ['UREX', 'DREX'], clash: ['DRIC', 'UREC'],
    vibe: '永远在路上的灵魂——不是为了到达某处——而是为了沿途的风景。' },
  'UMIC': { code: 'UMIC', name: '温柔的组织者', emoji: '🧶', subtitle: '功利·经验·唯心·契约',
    tagline: '你相信改变世界从改变邻里开始。你不是吼得最响的那个——你是做最多的那个。你以柔软的力量织起一张社区之网。',
    traits: ['社区编织者', '柔和的改革派', '实用理想主义者'],
    strengths: '你能看到每个人身上的光芒——并知道如何将不同的光芒汇聚成一束光。你的领导力是"让别人觉得自己重要"。',
    weaknesses: '你太在意每个人的感受——以至于有时无法做出必要的"不受欢迎的决定"。你需要学会说"这次不行"。',
    philosopher: '孟子加上邻里互助APP的创始人',
    quote: '「世界不需要被征服——世界需要被照顾。」',
    compatible: ['UMEC', 'DRIX'], clash: ['DREX', 'UREX'],
    vibe: '像一床手织的毯子——温暖、包容、但绝不脆弱。' },
  'DREX': { code: 'DREX', name: '道德孤狼', emoji: '🐺', subtitle: '道义·理性·唯物·存在',
    tagline: '你有自己的一套"绝对规则"——但它们是你自己制定的。你不服从任何外在权威——但你内在的道德指南针比任何人都严格。',
    traits: ['个人准则捍卫者', '独立的道德家', '反叛的道德主义者'],
    strengths: '你有令人敬畏的道德独立性。你不会因为"大家都这样做"而妥协——你只服从你经过理性审视后认可的规则。',
    weaknesses: '你的"个人准则"有时过于严苛——对自己也对别人。别人眼中的你可能是"固执"或"不近人情"——但你只是在坚守你认为正确的东西。',
    philosopher: '康德读了尼采后决定单干',
    quote: '「我有我的定言命令——它不需要任何人的批准。」',
    compatible: ['UREX', 'DIMX'], clash: ['UREC', 'UMEC'],
    vibe: '一匹有自己的道德律的狼——独行但不是因为没有方向。' },
  'DREC': { code: 'DREC', name: '秩序守护神', emoji: '⚖️', subtitle: '道义·理性·唯物·契约',
    tagline: '你对"公平"的理解是一套标准——不是因人而异的。如果世界是一个法庭——你是那个无论如何也要按法条判案的法官。',
    traits: ['规则至上主义者', '公平狂魔', '系统性思维'],
    strengths: '你是混乱世界中的一座灯塔。当别人在灰色地带迷失时——你的清晰标准让所有人知道"底线在哪里"。',
    weaknesses: '有时你会忘记——法律和规则是为"人"服务的——不是反过来。最公正的系统也可能产生不公正的结果——这让你非常痛苦。',
    philosopher: '康德当了最高法院大法官',
    quote: '「如果规则有例外——那它就不是规则——是建议。」',
    compatible: ['UREC', 'DIMC'], clash: ['UREX', 'UMEX'],
    vibe: '世界的稳定器——你不会为了讨好任何人而弯曲规则。' },
  'DRIX': { code: 'DRIX', name: '堂吉诃德学者', emoji: '📜', subtitle: '道义·理性·唯心·存在',
    tagline: '你的理想主义不是天真的——它是经过严格逻辑论证的。你会用三段论证明为什么"爱比恨好"——然后为这个结论赴汤蹈火。',
    traits: ['逻辑驱动的理想家', '形而上斗士', '殉道者预备役'],
    strengths: '你有不妥协的道德勇气——并辅以强大的理性论证能力。你不是"盲目地"相信——你已经把所有反驳都推演过了一遍。',
    weaknesses: '你可能会为一个原则牺牲一切——包括你自己——而忘了问"这个原则真的值得这个代价吗"。你需要一个务实的伙伴拉住你的马。',
    philosopher: '苏格拉底和堂吉诃德的合体——风车就是现代性',
    quote: '「未经审视的人生不值得过——经过审视后的理想值得为之而死。」',
    compatible: ['UREX', 'DIMX'], clash: ['UMEC', 'UREC'],
    vibe: '骑着一匹名叫"逻辑"的瘦马——冲向名叫"不义"的风车。' },
  'DRIC': { code: 'DRIC', name: '修道院院长', emoji: '🏛️', subtitle: '道义·理性·唯心·契约',
    tagline: '你相信道德需要体系——而体系需要维护者。你可能是最适合当"宪法起草人"的那种人——因为你会花三天争论一个逗号的道德意涵。',
    traits: ['道德立法者', '体系构建狂', '文字洁癖'],
    strengths: '你有罕见的将道德直觉转化为精确规则的能力。一个模糊的原则到了你手里——会变成一套可以被检验、被遵守的规范体系。',
    weaknesses: '你对"精确性"的追求可能会让你钻牛角尖。一个逗号的位置对你来说是一个道德事件——但别人可能觉得你有点"过度"。',
    philosopher: '阿奎那起草了联合国宪章',
    quote: '「给我道德的前提——我可以推出整个法律体系。包括标点符号。」',
    compatible: ['URIC', 'DIMC'], clash: ['UMEX', 'UREX'],
    vibe: '在道德与逻辑的交叉路口建了一座要塞——严密且不朽。' },
  'DMEX': { code: 'DMEX', name: '叛逆的良心', emoji: '🔥', subtitle: '道义·经验·唯物·存在',
    tagline: '你的道德感是"体验"出来的——不是"推导"出来的。你亲眼见过不公——所以你不会接受任何"理论上这样最有效率"的辩解。',
    traits: ['正义感驱动', '亲身经历至上', '不服从专业户'],
    strengths: '你的道德判断根植于真实的体验而非抽象理论——这让你的信念有不可动摇的力量。当你说"这是错的"——你亲眼见过它为什么错。',
    weaknesses: '你的强烈正义感有时会让你过于黑白分明。你很难接受"情况很复杂"——因为对你来说——对就是对——错就是错。',
    philosopher: '甘地参加了一个朋克乐队',
    quote: '「不要告诉我什么是『最大的善』——先让我看看它对最底层的人做了什么。」',
    compatible: ['DREX', 'UMEX'], clash: ['UREC', 'DRIC'],
    vibe: '愤怒的正义——但愤怒是有方向的——方向是弱者那一边。' },
  'DMEC': { code: 'DMEC', name: '道德中产阶级', emoji: '🏡', subtitle: '道义·经验·唯物·契约',
    tagline: '你不是那种会在广场上振臂高呼的人——但你是那个邻居需要帮忙时第一个出现的人。你的道德感没有宏大叙事——只有日常的坚持。',
    traits: ['日常道德的守护者', '可靠先生/女士', '不走极端的善良'],
    strengths: '你让"道德"这个宏大的词——变得可操作、可触摸。按时还钱、不骗人、帮邻居提东西——你让文明在毛细血管层面运转。',
    weaknesses: '你可能太"安全"了——太不愿意冒风险去做"正确但困难"的事。伟大的道德举动有时需要超越日常的可靠性。',
    philosopher: '亚里士多德在现代郊区过着体面的生活',
    quote: '「做一个好人不需要是英雄——它只需要你每天都做正确的小事。」',
    compatible: ['DREC', 'UMEC'], clash: ['UREX', 'DIMX'],
    vibe: '社区的定海神针——不显眼——但不可或缺。' },
  'DIMX': { code: 'DIMX', name: '深空漫游者', emoji: '🔮', subtitle: '道义·经验·唯心·存在',
    tagline: '你在自己的内心宇宙中漫游——发现那里的道德法则比任何宪法都精妙。你相信直觉、灵性和内在之光是比逻辑更可靠的向导。',
    traits: ['神秘主义道德家', '内心宇宙探险家', '直觉至上主义者'],
    strengths: '你有深入自己内心并带回深刻洞见的天赋。你对"正确"有一种直觉般的感知——无法用语言完全解释——但几乎总是对的。',
    weaknesses: '你很难向别人"解释"你的道德立场——因为它来自直觉——不是三段论。这让你在争论中感到挫败——因为你"知道"但说不清。',
    philosopher: '庄子读了克尔凯郭尔后开始写俳句',
    quote: '「道德不是被论证的——道德是在静默中被感知的。」',
    compatible: ['DREX', 'UMIX'], clash: ['UREC', 'DRIC'],
    vibe: '在内心的太空中漂浮——看到了比"对与错"更深的维度。' },
  'DIMC': { code: 'DIMC', name: '圣殿的守夜人', emoji: '🕯️', subtitle: '道义·经验·唯心·契约',
    tagline: '你守护着某种比你自己更古老、更重要的东西。你相信传统中蕴含着智慧——而你的角色是确保这些智慧不被遗忘。',
    traits: ['传统守护者', '仪式感信徒', '时间的学徒'],
    strengths: '你有连接过去与现在的天赋——你能看到百年大树下的根系——而别人只看到枝叶。你为快速变化的世界提供了"慢下来"的智慧。',
    weaknesses: '你可能过于崇敬传统——以至于抵制了有益的变革。"以前一直这样"在你看来是强有力的论据——但有时前进也是必要的。',
    philosopher: '孔子守护着一座古老的图书馆——允许人在里面辩论',
    quote: '「不是所有的旧东西都是好的——但它们至少经过了时间的检验。」',
    compatible: ['DRIC', 'UMIC'], clash: ['UREX', 'DMEX'],
    vibe: '在喧嚣的时代里——做一根安静的柱子——承载着前人的重量。' },
};

export function getScoresArray(scores) {
  return DIMENSIONS.map((dim) => ({ ...dim, score: scores[dim.key] || 0 }));
}

export function getPhilosophicalType(scores) {
  if (!scores || Object.keys(scores).length === 0) return null;
  const axes = getAxes(scores);
  const code = getTypeCode(axes);
  const profile = TYPE_PROFILES[code] || TYPE_PROFILES['UREX'];

  return {
    ...profile,
    axes,
    scores,
    interactionCount: 0, // will be filled from outside
  };
}

// Get a comparison between user and average
export function getTypeStats(scores) {
  const axes = getAxes(scores);
  const strongest = Object.entries(axes).sort(([,a], [,b]) => Math.abs(b) - Math.abs(a))[0];
  return {
    strongestAxis: strongest[0],
    strongestDirection: strongest[1] >= 0 ? 'positive' : 'negative',
    strength: Math.abs(strongest[1]),
    typeCode: getTypeCode(axes),
    profile: TYPE_PROFILES[getTypeCode(axes)],
  };
}
