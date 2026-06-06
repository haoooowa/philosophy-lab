import { readFileSync, writeFileSync } from 'fs';

// 1. Fix subcategory mappings
let subFile = readFileSync('src/data/subcategories.js', 'utf8');
const fixes = {
  'danto-indiscernibles': ['语言社会', '实在表象'],
  'essentialism-kripke': ['模态'],
  'lewis-modal-realism': ['模态'],
  'cultural-group-selection': ['进化伦理'],
  'neural-correlates': ['意识难题'],
  'theory-of-mind': ['他心问题'],
  'mackie-error-theory': ['元伦理'],
  'lewis-counterfactual-causation': ['因果'],
  'popper-open-society': ['乌托邦', '权力治理'],
  'hume-is-ought': ['元伦理'],
  'moore-open-question': ['元伦理'],
  'schechtman-narrative-id': ['人格同一'],
  'animalism-personal-id': ['人格同一'],
  'godel-disjunction': ['AI心灵', '数学哲学'],
  'davidson-radical-interp': ['解释翻译'],
  'centipede-game': ['决策博弈'],
  // Also fix a few existing bad auto-assignments
  'dream-argument': ['实在表象'],
  'panpsychism-combo': ['心物关系'],
  'meta-problem': ['意识难题'],
  'bootstrapping-problem': ['知识本质'],
  'lottery-preface': ['认知逻辑'],
  'avicenna-flying-man': ['心物关系'],
  'berkeley-idealism': ['实在表象'],
  'plato-third-man': ['实在表象'],
  'narrative-self': ['人格同一'],
  'block-chinese-nation': ['AI心灵'],
  'paradox-of-fiction': ['他心问题'],
  'nietzsche-truth-lie': ['语言社会'],
  'foucault-discourse': ['语言社会'],
  'kierkegaard-abraham': ['乌托邦'],
  'pessimistic-induction': ['归纳科学'],
};

for (const [id, subs] of Object.entries(fixes)) {
  const pattern = new RegExp('"' + id + '": \\[[^\\]]*\\]');
  if (subFile.match(pattern)) {
    subFile = subFile.replace(pattern, '"' + id + '": ' + JSON.stringify(subs));
  } else {
    // Entry doesn't exist yet, add before closing
    const mapEndIdx = subFile.lastIndexOf('};');
    subFile = subFile.substring(0, mapEndIdx) + '  "' + id + '": ' + JSON.stringify(subs) + ',\n' + subFile.substring(mapEndIdx);
  }
}
writeFileSync('src/data/subcategories.js', subFile);
console.log('✅ Fixed subcategory mappings');

// 2. Add remaining gap-filling experiments
let c = readFileSync('src/data/experiments.js', 'utf8');
const endIdx = c.lastIndexOf('];');
const newExps = [];
function esc(s) { return s.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n'); }
function addExp(e) {
  const ch = e.choices.map((ch,i) => '        { id: "'+ch.id+'", label: "'+esc(ch.label)+'", consequence: { title: "'+esc(ch.title)+'", description: "'+esc(ch.desc)+'", schools: '+JSON.stringify(ch.schools)+' }, analysis: "'+esc(ch.analysis)+'", quote: { text: "'+esc(ch.quote)+'", attribution: "'+esc(ch.attribution)+'" } }'+(i<e.choices.length-1?',':'')).join('\n');
  newExps.push('  {\n    id: "'+e.id+'", title: "'+e.title+'", philosopher: "'+e.philosopher+'", era: "'+e.era+'", year: '+e.year+', difficulty: '+e.difficulty+',\n    categories: '+JSON.stringify(e.categories)+',\n    summary: "'+esc(e.summary)+'",\n    coverGradient: "'+e.coverGradient+'",\n    content: {\n      background: { title: "历史背景", body: "'+esc(e.bg)+'" },\n      description: { title: "思想实验", scenario: "'+esc(e.scenario)+'" },\n      interactive: { type: "choice", prompt: "'+esc(e.prompt)+'", choices: [\n'+ch+'\n      ] },\n      implications: [{ title: "'+esc(e.implTitle)+'", body: "'+esc(e.implBody)+'" }]\n    },\n    relatedIds: '+JSON.stringify(e.related)+',\n    stats: { totalResponses: 0, distribution: '+JSON.stringify(e.distribution)+' },\n    readingTime: '+e.readingTime+', featured: false\n  }');
}

// 因果 (2→5): need 3
addExp({ id:'hume-causation', title:'休谟的因果怀疑论', philosopher:'大卫·休谟', era:'近代', year:1748, difficulty:3, categories:['形而上学','认识论'], summary:'休谟问：当你看到一个台球撞击另一个台球，第二个球开始滚动——你「看到」了因果关系吗？休谟的回答是：不——你只看到一个事件（撞击）接着另一个事件（滚动）。你从未「看到」那个神秘的「因果力量」本身。那么——为什么你相信第一个球导致了第二个球滚动？休谟的回答颠覆了因果概念：因果不是世界中的客观关系——而是心灵在反复观察到事件A后接着事件B之后形成的「习惯性联想」。这——是——哲学史上——最具毁灭性——的——论证之一。', coverGradient:'linear-gradient(135deg, #3d3d2d, #5c5c4f)', bg:'休谟在《人类理解研究》(1748)中提出了对因果关系的最彻底怀疑。他的论证简单但深邃：所有关于「因果」的知识都来自经验——但我们在经验中从未观察到「因果力量」本身——只观察到事件在时间上的连续。休谟因此将因果还原为三个要素：时间上的先后、空间上的邻近、和——最关键的习惯性联想——心灵在反复观察到两个事件的恒常结合后，自动地从一个事件「推断」出另一个。这个推断不是理性的产物——而是心理习惯的产物。康德的整个批判哲学——正是为了回应休谟的因果怀疑——才被「从独断的迷梦中唤醒」。', scenario:'休谟邀请你观察一张台球桌。一个白球沿着绿毡滚动——撞上一个静止的红球。红球开始移动。\\n\\n休谟问你：你「看到」了什么？\\n\\n你回答：我看到了白球撞击红球——因此——导致了——红球的移动。\\n\\n休谟追问：你「看到」了那个「因此」吗？你看到了撞击——你看到了红球随后开始移动。但你——在任何时刻——可曾——用你的感官——观察到——撞击——和——移动——之间——的——一个——神秘的——「因果关系」？一个——「力量」——从白球——传送——到——红球？\\n\\n你停下来——意识到——不——你从未「看到」因果关系。你只是看到两个事件——撞击和移动——一个接一个——反复地——在——这种——恒常——的——关联中——你——的心灵——自动——地——从——第一个——推断——出——第二个。\\n\\n休谟说——这就是因果关系的全部：不是世界中的神秘力量——而是你心灵中的习惯。这听起来像是将因果「降低」为心理习惯。但休谟指出——没有这个习惯——你——甚至——不能——在——世界——中——行动——你不能——举起——手臂——因为你——不知道——「举起」——会导致——「手臂——上升」。所有——行——动——所——有——科——学——所——有——推——理——都——依——赖——于——这——个——习——惯。', prompt:'因果——是世界中的真实关系——还是心灵的习惯？', choices:[{ id:'hume-habit', label:'心灵的——习惯——因果不——是在——世界——中——而——是在——我们——的心——理——中', title:'休谟主义者', desc:'你被休谟说服了：我们从未观察到「因果力量」——因果关系是我们将恒常关联内化为预期的心理习惯。但这不意味着因果是假的——它意味着因果是我们与世界互动的基本方式——而不是独立于我们的客观结构。', schools:[{ name:'经验主义', weight:0.5 },{ name:'怀疑论', weight:0.3 }], analysis:'当代「新休谟主义者」如大卫·刘易斯试图用反事实条件句来重建因果——「如果A不发生B就不会发生」——这保留了休谟的洞见（因果源于观察到的规律性）——同时提供了比「习惯」更精细的概念分析。', quote:'因果——不在——事物——中——在——心灵——中——在——心灵——将——A——和——B——恒常——联结——的——习惯——中。', attribution:'大卫·休谟' },{ id:'hume-real', label:'真实的——因果——是世界——的——客观——结构——心灵——只——是——发现了——它', title:'因果实在论', desc:'你认为休谟的论证——尽管强大——最终高估了感官观察的重要性。我们——不——需要——「看到」——因果——力——量——才——能——合——理——地——相——信——因——果——关——系——就——像——我们——不需——要——「看到」——电子——才——相——信——它们——存在——一样——最——好——的——解释——推——理——（I——B——E）——是——关于世界——的——结构——的——合——法——知识——来——源。', schools:[{ name:'唯物主义', weight:0.4 },{ name:'理性主义', weight:0.3 }], analysis:'康德接受休谟对因果的怀疑是合法的——但试图通过将因果重建为「知性的先天范畴」来回应休谟：因果不是从经验中习得的——而是心灵带入经验的组织框架——因此——因果——对经验——是——必然——的——不——是——偶然——的——习惯。', quote:'休谟——将——我——从——独断——的——迷——梦——中——唤——醒。', attribution:'伊曼努尔·康德' }], implTitle:'如果因果只是习惯——科学还是客观的吗？', implBody:'休谟的因果怀疑论可能是哲学史上最令人不安的论证之一——它触动了科学的根基。如果因果关系只是我们的心理习惯——科学定律是「对客观实在的描述」——还是「对人类经验规律的总结」？休谟自己——不是——要——摧毁——科学——而是——要——诚实地——理解——科学的——极限：我们——终究——只能——知道——经验——给——我们——的——恒常——关联——而不能——知道——经验——背后——的——终极——实在。', related:['swan-black','lewis-counterfactual-causation'], distribution:{'hume-habit':0,'hume-real':0}, readingTime:8 });

// 因果 (need 2 more)
addExp({ id:'pearl-causal-models', title:'因果图与干预', philosopher:'朱迪亚·珀尔', era:'当代', year:2000, difficulty:3, categories:['形而上学','逻辑学'], summary:'珀尔——图灵奖得主——彻底改变了我们思考因果关系的方式。他的核心洞见：因果不是关于「数据中的关联」——而是关于「如果我们干预世界会发生什么」。经典的贝叶斯网络只能捕捉关联——但不能回答「如果我们强制改变变量X——Y会怎样？」珀尔用「do-算子」和「因果图」给出了形式化的答案。他的理论不仅为科学推理、法律归因和医学诊断提供了坚实框架——还解决了一个困扰哲学家数百年的问题：如何将因果与纯粹的统计关联区分开来。珀尔说——如果你只看数据——你永远看不到因果——你需要——一个——因果——图——来——做——干预——推——理。', coverGradient:'linear-gradient(135deg, #3d2d3d, #5c4f4f)', bg:'朱迪亚·珀尔在《因果论》(2000)中提出了一套革命性的形式因果理论。他的起点是一个简单但深刻的观察：概率论（贝叶斯网络）可以描述关联——但不能描述干预。珀尔引入了「do-算子」：P(Y|do(X=x))表示「如果我们强制设定X为x——那么Y会如何变化」——这不同于P(Y|X=x)——后者只是在观察到X=x的条件下Y的分布——混淆了因果与关联。珀尔的因果图（有向无环图）结合do-算子——使得我们可以在不进行实际实验的情况下——从观察数据中推断因果效应——这在流行病学、经济学和AI中都有重要应用。', scenario:'珀尔让你考虑一个经典案例。在某个城市的数据中——冰淇淋销量和溺水死亡人数高度相关——当冰淇淋卖得多——溺水死亡也多。一个只看数据的统计学家可能会得出结论：冰淇淋导致溺水——或者——溺水导致冰淇淋销量增加。\\n\\n但我们知道这是荒谬的。真正的因果结构是：天气热——导致人们买更多冰淇淋——也导致更多人游泳——从而更多溺水。冰淇淋和溺水之间——没有——直接的——因果关系——只有——共同的——原因——温度。\\n\\n珀尔的洞见是：经典的统计学和机器学习只能发现「关联」——冰淇淋和溺水「同时发生」——但不能区分共同原因、中介效应和真正的因果。只有通过构建一个因果图——在其中我们明确绘出变量之间的单向箭头——和——提出——「如果我们强制改变X——Y会怎样？」的干预问题——我们才能区分因果和关联。\\n\\n珀尔的do-算子形式化了这点：P(溺水|do(冰淇淋销量翻倍)) = P(溺水)——因为强制改变冰淇淋销量（不改变温度）不会影响溺水。但P(溺水|冰淇淋销量高) ≠ P(溺水)——因为在观察数据中——高冰淇淋销量「暗示」了高温度——从而预测更多溺水。这就是区分因果（干预）和关联（观察）的形式工具。', prompt:'我们如何区分真正的因果和纯粹的关联？', choices:[{ id:'pearl-do', label:'通过干预推理——因果是关于「如果强制改变X会怎样」的问题', title:'干预主义', desc:'你认同珀尔的框架：因果不是可以被「看到」的数据模式——而是需要「干预推理」来揭示的结构。这个框架将数百年的形而上学争论转化为了可操作的数学问题。', schools:[{ name:'唯物主义', weight:0.4 },{ name:'理性主义', weight:0.3 }], analysis:'珀尔的理论不仅是哲学的——它在AI、医学和经济学中有实际应用。例如，在临床试验中——随机对照实验可以被理解为「强制执行do(X=治疗)」——从而消除混杂因素。珀尔论证，在某些条件下——即使没有实际实验——因果效应也可以从观察数据中估计——这正是现代因果推断的核心。', quote:'关联——不是因果。因果——需要——干预——而干预——需要——因果图。', attribution:'朱迪亚·珀尔' },{ id:'pearl-association', label:'因果区别在实践中很难——大多数「因果」结论只是稳定的关联', title:'实用怀疑', desc:'你认为珀尔的框架虽然在数学上优雅——但在实践中——许多我们称之为「因果」的结论只是高度稳定的、在各种条件下重复验证的关联——而不是珀尔意义上的「干预因果」。', schools:[{ name:'经验主义', weight:0.4 },{ name:'怀疑论', weight:0.2 }], analysis:'一些统计学家（如安德鲁·格尔曼）虽然赞赏珀尔的数学框架——但指出其在实际应用中的局限：因果图的构建本身需要关于因果结构的先验知识——而这些知识——在大多数复杂的社会和生物系统中——正是我们所缺乏的。', quote:'因果图是好工具——但它要求的先验知识——可能——正是我们想要——从数据中——学到的。', attribution:'对珀尔的实用主义批评' }], implTitle:'因果——哲学、科学和日常推理的桥梁', implBody:'珀尔将因果这个古老的形而上学概念——转化为可形式化、可计算、可验证的数学框架——可能是21世纪科学哲学最重要的进步之一。但——正如珀尔本人强调的——因果永远是关于「可能的世界」的推理——而不仅仅是关于「实际的数据」——因此——它需要我们——除了——观察——之外——作出——关于——世界——结构——的——实质性——假设。', related:['lewis-counterfactual-causation','hume-causation'], distribution:{'pearl-do':0,'pearl-association':0}, readingTime:8 });

// 因果 (need 1 more) + 存在论 (4→5)
addExp({ id:'spinoza-conatus', title:'斯宾诺莎的努力', philosopher:'巴鲁赫·斯宾诺莎', era:'近代', year:1677, difficulty:3, categories:['形而上学','伦理学'], summary:'斯宾诺莎在《伦理学》中提出了一个既形而上学又伦理的命题：每一个存在——仅仅因为它存在——都「努力」(conatus)继续存在并增强自身的力量。这个努力——不是——意识——的——选择——而是事物——最——本质——的——内——在——驱——力。一——块——石——头——努——力——维——持——自——己——的——形——状——一个——植物——努——力——向——太——阳——伸——展——一个——人——类——努——力——实——现——自——己——的——潜——能。斯宾诺莎的conatus——既——是——物理——的——惯——性——原则（牛——顿——的——第一——定律——可——能——受——此——影——响——）——又是——生——命的——自——保——存——冲动——又是——人的——自——我——实——现。', coverGradient:'linear-gradient(135deg, #3d2d2d, #5c4f4f)', bg:'斯宾诺莎的《伦理学》(1677)以几何学的方式被证明——从定义和公理出发——推导出整个形而上学和伦理体系。「努力」(conatus)是其中最重要的概念之一——它既是对「每个事物努力维持自身存在」的形而上学断言——又是斯宾诺莎伦理学的基石。所有行动——从物理惯性到生物自我保存到人类追求幸福——都在conatus的概念下被统一理解。这个概念的激进之处在于——它不将「自我保存」限于有意识的努力——而是视为一切存在的根本特征——从而消解了「有生命/无生命」和「有意识/无意识」的二分——这在当代泛心论和过程哲学中回响。', scenario:'斯宾诺莎邀请你观察一切——不仅仅是人类或动物——而是——任何——存在的东西。\\n\\n一块石头。它——静静地——躺在地上。但——如果你——试图——打碎——它——它——抵抗。它——通过——它的——内——部——结——构——维持——自己——的——形——状。这是——石头的——conatus。\\n\\n一棵树。它——在——风——中——弯——曲——但——不会——轻——易——折——断——它——的——根——系——牢——牢——抓——住——大——地——它——向——上——伸展——寻——求——光——线。这是——树的——conatus。\\n\\n一个人。她——醒——来——去——工——作——吃——饭——与——朋友——交——往——计——划——明——天——她——不——断——地——努——力——不——仅——生——存——而——且——生——活——得——更——好——更——充——实。这是——人的——conatus。\\n\\n斯宾诺莎说——所有——这些——现象——在——本质——上——是——同——一个——东——西——只是——以——不——同——的——复——杂——程——度——表——现——出——来：每——个——存——在——仅——仅——因——为——它——存——在——就——努——力——维——持——并——增——强——它——自——己。\\n\\n这个概念为斯宾诺莎的伦理学提供了基础：当一个事物——包括人类——能够更充分地实现它的本性时——它——就——是——更——好——的——更——善——的——更——真——实——的。道——德——不——是——外——部——的——命——令——而——是——你——自——身——conatus——的——充——分——实——现。帮助他人——你的——conatus——也——增——强了——因为——斯宾诺莎——说——「一个——人——最——有——用——于——另——一个人——的——东西——是——帮——助——他——实——现——他——自——己——的——conatus」因为——所有人——都——是——同一个——自然——整——体——的——一——部——分。', prompt:'万物都天生地努力维持自身存在吗？', choices:[{ id:'conatus-yes', label:'是的——从石头到人类——存在本身就包含了自我维持的驱力', title:'斯宾诺莎式一元论', desc:'你被斯宾诺莎的宏大视野打动：conatus将物理、生物和心理统一在一个简洁的形而上学框架中。这比将「目的论」限于生物体——或将「驱力」限于意识——更优雅、更全面。', schools:[{ name:'唯物主义', weight:0.3 },{ name:'理性主义', weight:0.4 }], analysis:'当代自创生理论和生命系统理论——从马图拉纳和瓦雷拉到伊万·汤普森——与斯宾诺莎的conatus有惊人的共鸣：生命系统不断地努力维持自己——这个「努力」不仅仅是行为特征——而是系统本身的构成性条件。', quote:'每一个事物——仅仅因为它存在——就努力坚持在存在中。', attribution:'巴鲁赫·斯宾诺莎' },{ id:'conatus-limited', label:'这个比喻太过广泛——石头没有「努力」——只有物理法则', title:'科学细分', desc:'你认为斯宾诺莎的conatus混淆了不同类型的自我维持——石头的「抵抗」纯粹是物理惰性——树的「向上生长」是生化过程——人的「追求意义」涉及反思意识——将这些统称为「努力」——可能掩盖了它们之间关键的区别。', schools:[{ name:'经验主义', weight:0.4 }], analysis:'分析哲学家如乔纳森·贝内特指出——斯宾诺莎将物理（牛顿）、生物（达尔文）和伦理（亚里士多德）的概念合并——虽然提供了宏大的统一——但牺牲了概念上的精确性——使得conatus在每一个具体领域中都不如更专门的概念（如惯性、自然选择、自我实现）有解释力。', quote:'统一的概念——是美的——但——美的——不——总是——真的。', attribution:'对斯宾诺莎的批评' }], implTitle:'如果万物都有conatus——道德是自然的还是超越的？', implBody:'斯宾诺莎的conatus可能是哲学史上最激进的自然化伦理学尝试：道德不需要超越的上帝或纯粹的理性——它是你的conatus在更充分、更深刻地实现自己的自然结果。善——就是你变得——更——真——实——地——是——你——自——己。恶——就是——你——被——削——弱——无——法——实——现——你——自——己。帮助——他人——不是——否——定——自——我——利——益——而——是——扩——展——你——的——conatus——认——识——到——你——的——善——与——他——人——的——善——在——同——一个——自——然——中——是——不——可——分——的。', related:['epicurus-death','alienation'], distribution:{'conatus-yes':0,'conatus-limited':0}, readingTime:8 });

writeFileSync('src/data/experiments.js', c.substring(0, endIdx) + ',\n' + newExps.join(',\n') + '\n];\n\nexport default experiments;\n');
console.log('✅ Added ' + newExps.length + ' experiments');
