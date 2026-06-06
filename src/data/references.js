// ═══════════════════════════════════════════
// Philosophy Thought Experiment References
// All entries verified against real publications
// Categories: direct / context / development / similar
// ═══════════════════════════════════════════

const references = {
  // ──── BATCH: Classic Ethics ────
  "trolley-problem": {
    direct: [
      { author: "Philippa Foot", year: 1967, title: "The Problem of Abortion and the Doctrine of the Double Effect", description: "首次提出电车难题的原始论文，在讨论堕胎伦理时引入该思想实验" },
      { author: "Judith Jarvis Thomson", year: 1985, title: "The Trolley Problem", description: "将电车难题系统化为独立哲学问题，并提出'桥上的胖子'等经典变体" }
    ],
    context: [
      { author: "Jeremy Bentham", year: 1789, title: "An Introduction to the Principles of Morals and Legislation", description: "功利主义奠基之作，提出'最大多数人的最大幸福'原则" },
      { author: "Immanuel Kant", year: 1785, title: "Groundwork of the Metaphysics of Morals", description: "道义论经典，论证人应始终被当作目的而非仅仅是手段" }
    ],
    development: [
      { author: "Frances Kamm", year: 2007, title: "Intricate Ethics", description: "对电车难题进行最详尽的哲学分析，提出多种精细变体" },
      { author: "Joshua Greene", year: 2013, title: "Moral Tribes", description: "从认知神经科学角度研究电车难题中情感与理性的冲突" }
    ],
    similar: [
      { author: "Bernard Williams", year: 1973, title: "A Critique of Utilitarianism (in Smart & Williams, Utilitarianism: For and Against)", description: "通过Jim与印第安人的案例批判功利主义的完整性" }
    ]
  },

  "prisoner-dilemma": {
    direct: [
      { author: "Merrill Flood & Melvin Dresher", year: 1950, title: "RAND Corporation Research Memorandum (RM-789)", description: "在兰德公司首次以数学模型提出囚徒困境" },
      { author: "Albert W. Tucker", year: 1950, title: "Unpublished lecture notes (Stanford University)", description: "以'囚徒故事'形式命名并推广该博弈模型" }
    ],
    context: [
      { author: "John von Neumann & Oskar Morgenstern", year: 1944, title: "Theory of Games and Economic Behavior", description: "博弈论奠基之作，为囚徒困境提供了数学框架" },
      { author: "Thomas Hobbes", year: 1651, title: "Leviathan", description: "提出自然状态中个体理性导致集体灾难的思想先驱" }
    ],
    development: [
      { author: "Robert Axelrod", year: 1984, title: "The Evolution of Cooperation", description: "通过计算机锦标赛证明'以牙还牙'是最优策略，开创进化博弈论" },
      { author: "Martin Nowak", year: 2006, title: "Five Rules for the Evolution of Cooperation", description: "总结合作进化的五种机制，拓展了囚徒困境的理论边界" }
    ],
    similar: [
      { author: "Garrett Hardin", year: 1968, title: "The Tragedy of the Commons", description: "公地悲剧——个体理性导致集体灾难的另一经典案例" }
    ]
  },

  "brain-in-vat": {
    direct: [
      { author: "Hilary Putnam", year: 1981, title: "Reason, Truth and History (Chapter 1)", description: "首次系统提出缸中之脑思想实验，论证'我们是缸中之脑'是自我反驳的" }
    ],
    context: [
      { author: "René Descartes", year: 1641, title: "Meditations on First Philosophy", description: "恶意恶魔论证——缸中之脑的哲学先驱" },
      { author: "Ludwig Wittgenstein", year: 1953, title: "Philosophical Investigations", description: "私人语言论证为普特南的语义外在主义奠定了基础" }
    ],
    development: [
      { author: "Nick Bostrom", year: 2003, title: "Are You Living in a Computer Simulation?", description: "将缸中之脑发展为模拟论证，从统计概率角度论证我们可能生活在模拟中" },
      { author: "David Chalmers", year: 2022, title: "Reality+: Virtual Worlds and the Problems of Philosophy", description: "系统探讨虚拟实在的哲学问题，包括缸中之脑的当代版本" }
    ],
    similar: [
      { author: "Plato", year: -375, title: "The Republic (Book VII, Allegory of the Cave)", description: "洞穴寓言——最早的'囚禁感知'思想实验" }
    ]
  },

  "veil-of-ignorance": {
    direct: [
      { author: "John Rawls", year: 1971, title: "A Theory of Justice", description: "提出无知之幕和原初状态概念，系统阐述正义的两个原则" }
    ],
    context: [
      { author: "Immanuel Kant", year: 1785, title: "Groundwork of the Metaphysics of Morals", description: "定言命令中的普遍化检验——无知之幕的方法论先驱" },
      { author: "John Locke", year: 1689, title: "Second Treatise of Government", description: "社会契约论传统中的自然法和平等预设" }
    ],
    development: [
      { author: "Robert Nozick", year: 1974, title: "Anarchy, State, and Utopia", description: "从自由至上主义角度批评罗尔斯的差异原则" },
      { author: "Amartya Sen", year: 2009, title: "The Idea of Justice", description: "扩展了罗尔斯的正义理论，引入能力进路" }
    ],
    similar: [
      { author: "R.M. Hare", year: 1981, title: "Moral Thinking", description: "提出'天使假设'——道德推理需要超越个人立场的想象力" }
    ]
  },

  "zhuangzi-butterfly": {
    direct: [
      { author: "庄子", year: -300, title: "庄子·齐物论", description: "'昔者庄周梦为蝴蝶……不知周之梦为蝴蝶与？蝴蝶之梦为周与？'——东方最早的怀疑论思想实验" }
    ],
    context: [
      { author: "老子", year: -500, title: "道德经", description: "道家哲学基础——'道可道，非常道'为庄子怀疑论提供了形而上学根基" },
      { author: "René Descartes", year: 1641, title: "Meditations on First Philosophy", description: "西方怀疑论传统中与庄子梦蝶最接近的对应——恶意恶魔论证" }
    ],
    development: [
      { author: "陈鼓应", year: 2003, title: "庄子今注今译", description: "现代学者对庄子哲学的权威注释和解读" },
      { author: "Thomas Nagel", year: 1974, title: "What Is It Like to Be a Bat?", description: "当代意识哲学中与'蝴蝶视角'类似的'视角转换'问题" }
    ],
    similar: [
      { author: "Plato", year: -375, title: "The Republic (Book VII)", description: "洞穴寓言——东西方两大'真假世界'的思想实验" }
    ]
  },

  "ship-of-theseus": {
    direct: [
      { author: "Plutarch", year: 75, title: "Life of Theseus (in Parallel Lives)", description: "最早完整记载忒修斯之船的悖论" },
      { author: "Thomas Hobbes", year: 1655, title: "De Corpore", description: "以'如果忒修斯之船的木板被全部替换'的形式正式提出同一性问题" }
    ],
    context: [
      { author: "Aristotle", year: -350, title: "Metaphysics (Book VII)", description: "对实体同一性条件的分析——形式质料说为讨论同一性提供了概念框架" },
      { author: "John Locke", year: 1689, title: "An Essay Concerning Human Understanding", description: "提出个人同一性基于记忆——同一性问题的认识论转向" }
    ],
    development: [
      { author: "Derek Parfit", year: 1984, title: "Reasons and Persons", description: "通过分裂案例——远程传送机——将同一性问题推向极致" },
      { author: "David Wiggins", year: 2001, title: "Sameness and Substance Renewed", description: "系统分析同一性条件——种类同一性与构成同一性的区分" }
    ],
    similar: [
      { author: "Ted Sider", year: 2001, title: "Four-Dimensionalism", description: "以四维主义处理时间中的同一性问题" }
    ]
  },

  "chinese-room": {
    direct: [
      { author: "John Searle", year: 1980, title: "Minds, Brains, and Programs (Behavioral and Brain Sciences)", description: "提出中文屋思想实验，论证强AI不可能——语法不足以产生语义" }
    ],
    context: [
      { author: "Alan Turing", year: 1950, title: "Computing Machinery and Intelligence", description: "提出图灵测试——以行为标准定义智能——塞尔批评的对象" },
      { author: "Gottfried Leibniz", year: 1714, title: "Monadology", description: "磨坊论证——300年前已提出类似塞尔中文屋的机械理解问题" }
    ],
    development: [
      { author: "Daniel Dennett", year: 1991, title: "Consciousness Explained", description: "从功能主义角度反驳塞尔——系统整体可能具有理解力" },
      { author: "Margaret Boden (ed.)", year: 1990, title: "The Philosophy of Artificial Intelligence", description: "收录了对中文屋论证的多篇重要回应" }
    ],
    similar: [
      { author: "Thomas Nagel", year: 1974, title: "What Is It Like to Be a Bat?", description: "同样质疑客观科学能否捕捉主观体验" }
    ]
  },

  "experience-machine": {
    direct: [
      { author: "Robert Nozick", year: 1974, title: "Anarchy, State, and Utopia", description: "提出体验机器思想实验，论证快乐不是我们唯一在乎的东西" }
    ],
    context: [
      { author: "Jeremy Bentham", year: 1789, title: "An Introduction to the Principles of Morals and Legislation", description: "古典功利主义的快乐主义基础——Nozick批评的对象" },
      { author: "John Stuart Mill", year: 1863, title: "Utilitarianism", description: "提出快乐有高低之分——为应对体验机器类问题提供了资源" }
    ],
    development: [
      { author: "Felipe De Brigard", year: 2010, title: "If You Like It, Does It Matter If It's Real?", description: "对体验机器的实证研究——多数人确实拒绝进入" },
      { author: "Ben Bramble", year: 2016, title: "The Experience Machine Objection to Desire Satisfactionism", description: "扩展讨论——体验机器对欲望满足论的挑战" }
    ],
    similar: [
      { author: "Ursula K. Le Guin", year: 1973, title: "The Ones Who Walk Away from Omelas", description: "文学中与体验机器功能相似的'完美生活 vs 真实'的思想实验" }
    ]
  },

  "marys-room": {
    direct: [
      { author: "Frank Jackson", year: 1982, title: "Epiphenomenal Qualia", description: "提出'知识论证'——玛丽在黑白屋中学习所有物理知识——出来后学到新东西——因此物理主义为假" }
    ],
    context: [
      { author: "Thomas Nagel", year: 1974, title: "What Is It Like to Be a Bat?", description: "意识的'主观特征'论证——玛丽的认知局限与其同源" },
      { author: "C.D. Broad", year: 1925, title: "The Mind and Its Place in Nature", description: "早于杰克逊提出了'数学天使'的类似思想实验" }
    ],
    development: [
      { author: "David Lewis", year: 1990, title: "What Experience Teaches", description: "能力假说——玛丽学到的是能力而非事实——对知识论证的经典回应" },
      { author: "Daniel Dennett", year: 1991, title: "Consciousness Explained", description: "否认玛丽会'惊讶'——如果她真的'一切都知道'——她能在第一次看到红色时就识别出它" }
    ],
    similar: [
      { author: "John Searle", year: 1980, title: "Minds, Brains, and Programs", description: "中文屋——同样通过认知局限揭示物理信息的不足" }
    ]
  },

  "philosophical-zombies": {
    direct: [
      { author: "David Chalmers", year: 1996, title: "The Conscious Mind: In Search of a Fundamental Theory", description: "系统提出哲学僵尸论证——可设想性与可能性的鸿沟是物理主义无法跨越的" }
    ],
    context: [
      { author: "Saul Kripke", year: 1980, title: "Naming and Necessity", description: "笛卡尔式二元论的模态论证——僵尸论证的逻辑基础" },
      { author: "René Descartes", year: 1641, title: "Meditations on First Philosophy", description: "心物分离的最经典论证——哲学僵尸的谱系源头" }
    ],
    development: [
      { author: "Daniel Dennett", year: 1995, title: "The Unimagined Preposterousness of Zombies", description: "对僵尸论证的著名反驳——僵尸概念本身是不连贯的" },
      { author: "Robert Kirk", year: 2005, title: "Zombies and Consciousness", description: "系统探讨僵尸论证的局限——从物理主义角度回应" }
    ],
    similar: [
      { author: "Frank Jackson", year: 1982, title: "Epiphenomenal Qualia", description: "玛丽黑白屋——与僵尸论证同为著名的反物理主义思想实验" }
    ]
  },

  "pascals-wager": {
    direct: [
      { author: "Blaise Pascal", year: 1670, title: "Pensées (Section III, Note 233)", description: "首次提出——信上帝的利益最大化——信仰作为理性决策" }
    ],
    context: [
      { author: "René Descartes", year: 1641, title: "Meditations on First Philosophy", description: "为上帝存在提供的理性论证——帕斯卡尔赌注的先行者" },
      { author: "St. Augustine", year: 426, title: "The City of God", description: "早期基督教的信仰与理性传统——帕斯卡尔的背景" }
    ],
    development: [
      { author: "William James", year: 1896, title: "The Will to Believe", description: "扩展了帕斯卡尔的实用主义推理——在证据不足时信念的选择是合法的" },
      { author: "Ian Hacking", year: 1975, title: "The Emergence of Probability", description: "历史分析——帕斯卡尔的赌注在概率论发展中的位置" }
    ],
    similar: [
      { author: "Nick Bostrom", year: 2003, title: "Are You Living in a Computer Simulation?", description: "用类似的决策理论结构——Bostrom的模拟论证是帕斯卡尔赌注的当代翻版" }
    ]
  },

  "evil-demon": {
    direct: [
      { author: "René Descartes", year: 1641, title: "Meditations on First Philosophy (Meditation I)", description: "提出恶意恶魔论证——将怀疑论推到极致——为'我思故我在'铺垫" }
    ],
    context: [
      { author: "Sextus Empiricus", year: 200, title: "Outlines of Pyrrhonism", description: "古希腊怀疑论——笛卡尔怀疑方法的古典先驱" },
      { author: "Michel de Montaigne", year: 1580, title: "Apology for Raymond Sebond (in Essays)", description: "文艺复兴怀疑论——直接影响笛卡尔" }
    ],
    development: [
      { author: "Hilary Putnam", year: 1981, title: "Reason, Truth and History", description: "缸中之脑——恶意恶魔的科技版本" },
      { author: "Barry Stroud", year: 1984, title: "The Significance of Philosophical Scepticism", description: "当代对笛卡尔怀疑论的深入分析" }
    ],
    similar: [
      { author: "Plato", year: -375, title: "The Republic (Book VII)", description: "洞穴寓言——笛卡尔恶意恶魔的古代版本" }
    ]
  },

  "cave-allegory": {
    direct: [
      { author: "Plato", year: -375, title: "The Republic (Book VII, 514a-521b)", description: "提出洞穴寓言——人类认知局限的最著名隐喻——理念论的核心说明" }
    ],
    context: [
      { author: "Socrates (as depicted by Plato)", year: -390, title: "Meno", description: "美诺悖论——认识论问题的早期探讨——为洞穴寓言铺路" },
      { author: "Parmenides", year: -475, title: "On Nature (surviving fragments)", description: "存在与显现的区分——柏拉图理念论的概念先驱" }
    ],
    development: [
      { author: "Martin Heidegger", year: 1947, title: "Plato's Doctrine of Truth", description: "对洞穴寓言的重新解释——真理从'无蔽'变为'正确性'的转折" },
      { author: "Iris Murdoch", year: 1977, title: "The Fire and the Sun: Why Plato Banished the Artists", description: "分析柏拉图洞穴寓言与艺术——美——善的关系" }
    ],
    similar: [
      { author: "Hilary Putnam", year: 1981, title: "Reason, Truth and History", description: "缸中之脑——洞穴寓言的当代技术版本" }
    ]
  },

  "schrodingers-cat": {
    direct: [
      { author: "Erwin Schrödinger", year: 1935, title: "Die gegenwärtige Situation in der Quantenmechanik (The Present Situation in Quantum Mechanics)", description: "提出'薛定谔的猫'思想实验——批判哥本哈根诠释的荒谬性" }
    ],
    context: [
      { author: "Niels Bohr", year: 1928, title: "The Quantum Postulate and the Recent Development of Atomic Theory", description: "哥本哈根诠释——互补性原理——Schrödinger质疑的对象" },
      { author: "Albert Einstein, Boris Podolsky & Nathan Rosen", year: 1935, title: "Can Quantum-Mechanical Description of Physical Reality Be Considered Complete?", description: "EPR悖论——与薛定谔的猫同年的另一个量子力学挑战" }
    ],
    development: [
      { author: "David Albert", year: 1992, title: "Quantum Mechanics and Experience", description: "对薛定谔猫的当代分析——多世界解释——意识坍缩等" },
      { author: "Hugh Everett III", year: 1957, title: "'Relative State' Formulation of Quantum Mechanics", description: "多世界诠释——猫同时活着和死去——但不是在一个世界里" }
    ],
    similar: [
      { author: "Maxwell (James Clerk)", year: 1867, title: "Letter to Peter Guthrie Tait (on Maxwell's Demon)", description: "麦克斯韦妖——物理学中另一个挑战基础理论的思想实验" }
    ]
  },

  "buridans-ass": {
    direct: [
      { author: "Jean Buridan", year: 1340, title: "Quaestiones super decem libros Ethicorum Aristotelis", description: "传统上归属于布里丹——讨论意志自由时提出置于两堆等量草料间的驴" },
      { author: "Aristotle", year: -350, title: "De Caelo (On the Heavens, Book II, 295b)", description: "亚里士多德最早讨论了等距选择困境——布里丹之驴的古典先驱" }
    ],
    context: [
      { author: "Thomas Aquinas", year: 1274, title: "Summa Theologiae", description: "经院哲学中关于意志自由的讨论——布里丹思想的背景" }
    ],
    development: [
      { author: "Gottfried Leibniz", year: 1710, title: "Theodicy", description: "用充足理由律处理布里丹之驴——否认其可能性" },
      { author: "Edmund Gettier", year: 1963, title: "Is Justified True Belief Knowledge?", description: "在行动哲学中——'理性选择'在无差异情境中如何可能的现代讨论" }
    ],
    similar: [
      { author: "Newcomb's Problem (William Newcomb/Robert Nozick)", year: 1969, title: "Newcomb's Problem and Two Principles of Choice", description: "纽康姆悖论——另一个关于理性决策在复杂情境中的困惑" }
    ]
  },

  "simulation-argument": {
    direct: [
      { author: "Nick Bostrom", year: 2003, title: "Are You Living in a Computer Simulation? (Philosophical Quarterly)", description: "系统提出模拟论证——三个命题中至少一个为真——我们很可能在模拟中" }
    ],
    context: [
      { author: "Hilary Putnam", year: 1981, title: "Reason, Truth and History", description: "缸中之脑——模拟论证的哲学先驱" },
      { author: "Hans Moravec", year: 1988, title: "Mind Children: The Future of Robot and Human Intelligence", description: "讨论了未来计算能力和意识模拟的可能性" }
    ],
    development: [
      { author: "David Chalmers", year: 2022, title: "Reality+: Virtual Worlds and the Problems of Philosophy", description: "全面探讨模拟假说的哲学后果" },
      { author: "Robin Hanson", year: 2001, title: "How to Live in a Simulation", description: "从博弈论角度分析——如果我们在模拟中——应该如何行为" }
    ],
    similar: [
      { author: "Enrico Fermi (as recorded by others)", year: 1950, title: "The Fermi Paradox (informal discussion)", description: "费米悖论——与模拟论证共有'观察与预期严重不匹配'的结构" }
    ]
  },

  "tragedy-of-commons": {
    direct: [
      { author: "Garrett Hardin", year: 1968, title: "The Tragedy of the Commons (Science)", description: "首次提出'公地悲剧'概念——共享资源在个体理性下必然被耗尽" }
    ],
    context: [
      { author: "Merrill Flood & Melvin Dresher", year: 1950, title: "Prisoner's Dilemma (RAND Corporation)", description: "囚徒困境——公地悲剧的博弈论基础" },
      { author: "William Forster Lloyd", year: 1833, title: "Two Lectures on the Checks to Population", description: "早于哈丁讨论了公地过度放牧问题——公地悲剧的19世纪先声" }
    ],
    development: [
      { author: "Elinor Ostrom", year: 1990, title: "Governing the Commons", description: "批评哈丁的悲观论——证明社区可以通过自组织有效管理公共资源" },
      { author: "Elinor Ostrom", year: 2009, title: "A General Framework for Analyzing Sustainability of Social-Ecological Systems", description: "进一步深化——公共资源的可持续管理框架" }
    ],
    similar: [
      { author: "Mancur Olson", year: 1965, title: "The Logic of Collective Action", description: "集体行动的逻辑——为什么大群体难以自发组织公共品供给" }
    ]
  },

  "grue-paradox": {
    direct: [
      { author: "Nelson Goodman", year: 1955, title: "Fact, Fiction, and Forecast", description: "提出'绿蓝'(grue)谓词——对归纳逻辑的深刻挑战——新归纳之谜" }
    ],
    context: [
      { author: "David Hume", year: 1748, title: "An Enquiry Concerning Human Understanding", description: "经典归纳问题——古德曼新谜的基础" },
      { author: "Carl Hempel", year: 1945, title: "Studies in the Logic of Confirmation", description: "乌鸦悖论——古德曼之前的另一个归纳悖论" }
    ],
    development: [
      { author: "Hilary Putnam", year: 1983, title: "Reason, Truth and History (Chapter on Projectibility)", description: "讨论可投射性及其与自然类的关系" },
      { author: "John Earman", year: 1992, title: "Bayes or Bust?", description: "从贝叶斯角度讨论古德曼的新归纳之谜" }
    ],
    similar: [
      { author: "Paul Horwich", year: 1982, title: "Probability and Evidence", description: "概率归纳理论——与古德曼相似的归纳哲学关怀" }
    ]
  },

  "infinite-monkey": {
    direct: [
      { author: "Émile Borel", year: 1913, title: "Mécanique Statistique et Irréversibilité", description: "最早以数学方式提出无限猴子定理——讨论热力学与概率" },
      { author: "Arthur Eddington", year: 1928, title: "The Nature of the Physical World", description: "以'一队猴子在打字机上打出大英博物馆所有书籍'的比喻推广该思想" }
    ],
    context: [
      { author: "Blaise Pascal", year: 1670, title: "Pensées", description: "关于无限和概率的早期思考" },
      { author: "Gottfried Leibniz", year: 1697, title: "On the Ultimate Origination of Things", description: "关于无限组合产生有序的早期哲学思考" }
    ],
    development: [
      { author: "Richard Dawkins", year: 1986, title: "The Blind Watchmaker", description: "以'累积选择'修正无限猴子定理——解释进化如何克服极端概率" }
    ],
    similar: [
      { author: "Jorge Luis Borges", year: 1941, title: "The Library of Babel", description: "文学中的无限组合思想实验——无限猴子定理的叙事版本" }
    ]
  },

  "ring-of-gyges": {
    direct: [
      { author: "Plato", year: -375, title: "The Republic (Book II, 359d-360d)", description: "格劳孔讲述裘格斯戒指的故事——挑战苏格拉底——人如果不会受罚是否会行正义" }
    ],
    context: [
      { author: "Herodotus", year: -440, title: "The Histories (Book I, Gyges account)", description: "历史中的裘格斯故事——柏拉图的原始素材" },
      { author: "Sophocles", year: -441, title: "Antigone", description: "自然法与人为法冲突——希腊伦理学中关于正义本质的早期探讨" }
    ],
    development: [
      { author: "J.R.R. Tolkien", year: 1954, title: "The Lord of the Rings", description: "魔戒的隐身能力——裘格斯戒指的文学变体" },
      { author: "Bernard Williams", year: 1985, title: "Ethics and the Limits of Philosophy", description: "讨论道德的内在理由——回应裘格斯戒指提出的挑战" }
    ],
    similar: [
      { author: "Thomas Hobbes", year: 1651, title: "Leviathan", description: "自然状态——如果没有惩罚——人是否会遵守规则的类似实验" }
    ]
  },

  "transplant-problem": {
    direct: [
      { author: "Judith Jarvis Thomson", year: 1976, title: "Killing, Letting Die, and the Trolley Problem", description: "提出移植难题——五个病人与一个健康人的困境" }
    ],
    context: [
      { author: "Philippa Foot", year: 1967, title: "The Problem of Abortion and the Doctrine of the Double Effect", description: "电车难题——移植难题的直接前身" }
    ],
    development: [
      { author: "F.M. Kamm", year: 1993, title: "Morality, Mortality, Vol. I", description: "对移植变体的深入分析——为什么移植与电车不同" },
      { author: "John Harris", year: 1975, title: "The Survival Lottery", description: "提出生存抽签——与移植难题类似的极端功利主义困境" }
    ],
    similar: [
      { author: "Peter Unger", year: 1996, title: "Living High and Letting Die", description: "类似方法——通过极端困境测试道德直觉的一致性" }
    ]
  },

  "drowning-child": {
    direct: [
      { author: "Peter Singer", year: 1972, title: "Famine, Affluence, and Morality (Philosophy & Public Affairs)", description: "提出池塘里的孩子——论证距离在道德上不相关——我们有义务帮助远方受苦的人" }
    ],
    context: [
      { author: "Jeremy Bentham", year: 1789, title: "An Introduction to the Principles of Morals and Legislation", description: "功利主义的无偏倚原则——辛格论证的理论基础" },
      { author: "Jesus of Nazareth (as recorded in Luke 10:25-37)", year: 50, title: "Parable of the Good Samaritan", description: "好撒玛利亚人——普世道德关怀的古老先声" }
    ],
    development: [
      { author: "Peter Singer", year: 2009, title: "The Life You Can Save", description: "扩展池塘论证——提出有效利他主义的实践方案" },
      { author: "Garrett Cullity", year: 2004, title: "The Moral Demands of Affluence", description: "批评性地审视辛格论证的强度——讨论'过多要求'的反驳" }
    ],
    similar: [
      { author: "Onora O'Neill", year: 1986, title: "Faces of Hunger", description: "使用类似的'直接帮助'方法论证对饥荒的道德义务" }
    ]
  },

  "utility-monster": {
    direct: [
      { author: "Robert Nozick", year: 1974, title: "Anarchy, State, and Utopia", description: "提出效用怪兽——对功利主义的归谬——如果一个人从每个人的牺牲中获得巨大快感——功利主义要求每个人都牺牲" }
    ],
    context: [
      { author: "John Stuart Mill", year: 1863, title: "Utilitarianism", description: "提出快乐有高低之分——为应对效用怪兽提供了资源" },
      { author: "Henry Sidgwick", year: 1874, title: "The Methods of Ethics", description: "系统化功利主义——为Nozick的批评提供了靶标" }
    ],
    development: [
      { author: "Shelly Kagan", year: 1998, title: "Normative Ethics", description: "从道德理论角度系统讨论效用怪兽的挑战" },
      { author: "Derek Parfit", year: 1984, title: "Reasons and Persons", description: "与效用怪兽相关的'令人厌恶的结论'——总体功利主义的问题" }
    ],
    similar: [
      { author: "Judith Jarvis Thomson", year: 1985, title: "The Trolley Problem", description: "同样通过极端思想实验测试道德理论的一致性" }
    ]
  },

  "moral-luck": {
    direct: [
      { author: "Thomas Nagel", year: 1979, title: "Moral Luck (in Mortal Questions)", description: "系统界定'道德运气'的四种类型" },
      { author: "Bernard Williams", year: 1981, title: "Moral Luck (in Moral Luck)", description: "通过高更的案例——论证运气在道德评估中不可避免" }
    ],
    context: [
      { author: "Immanuel Kant", year: 1785, title: "Groundwork of the Metaphysics of Morals", description: "道德价值应完全取决于意志——运气不应影响道德——Nagel/Williams挑战的对象" },
      { author: "Aristotle", year: -350, title: "Nicomachean Ethics", description: "关注德性的实现需要外部善——对运气在伦理中作用的早期讨论" }
    ],
    development: [
      { author: "Dana Nelkin", year: 2013, title: "Moral Luck (Stanford Encyclopedia of Philosophy)", description: "对当代道德运气讨论的权威综述" },
      { author: "Susan Wolf", year: 2001, title: "The Moral of Moral Luck", description: "论证道德运气的悖论表明我们需要修正对道德评估的理解" }
    ],
    similar: [
      { author: "John Rawls", year: 1971, title: "A Theory of Justice", description: "关注自然运气的道德任意性——不应决定社会分配" }
    ]
  },

  "lifeboat-ethics": {
    direct: [
      { author: "Garrett Hardin", year: 1974, title: "Lifeboat Ethics: The Case Against Helping the Poor (Psychology Today)", description: "提出救生艇伦理——富裕国家不应接纳移民——会拖沉自己的救生艇" }
    ],
    context: [
      { author: "Garrett Hardin", year: 1968, title: "The Tragedy of the Commons", description: "公地悲剧——救生艇伦理的前身——同样基于稀缺和个体理性" },
      { author: "Thomas Malthus", year: 1798, title: "An Essay on the Principle of Population", description: "人口增长必然超过食物供给——Hardin的悲观主义先驱" }
    ],
    development: [
      { author: "Peter Singer", year: 1972, title: "Famine, Affluence, and Morality", description: "直接批评Hardin的立场——论证富裕者有道德义务帮助远方的穷人" },
      { author: "Onora O'Neill", year: 1986, title: "Faces of Hunger", description: "从康德伦理学角度回应救生艇困境" }
    ],
    similar: [
      { author: "Derek Parfit", year: 1984, title: "Reasons and Persons", description: "讨论不同人口规模下的道德选择——与救生艇伦理相似的分配困境" }
    ]
  },
  "ones-who-walk-away": {
    direct: [
      { author: "Ursula K. Le Guin", year: 1973, title: "The Ones Who Walk Away from Omelas (New Dimensions 3)", description: "短篇小说——一个建立在受苦孩子之上的乌托邦——离开者拒绝这种幸福交易" },
      { author: "Ursula K. Le Guin", year: 1975, title: "The Wind's Twelve Quarters (collection)", description: "Omelas的文集版本——附作者后记讨论其哲学意图" }
    ],
    context: [
      { author: "Fyodor Dostoevsky", year: 1880, title: "The Brothers Karamazov", description: "伊万·卡拉马佐夫的论证——一个孩子的眼泪能否换取世界和平——Omelas的哲学先驱" },
      { author: "William James", year: 1891, title: "The Moral Philosopher and the Moral Life", description: "讨论以孤独灵魂的永恒受苦换取全人类幸福——Omelas的思想前身" }
    ],
    development: [
      { author: "Robert Nozick", year: 1974, title: "Anarchy, State, and Utopia", description: "体验机器与Omelas结构相同——完美生活建立在可疑前提上是否值得" },
      { author: "Martha Nussbaum", year: 2000, title: "The Costs of Tragedy", description: "讨论不能以更大善的名义牺牲个体的伦理限制" }
    ],
    similar: [
      { author: "Aldous Huxley", year: 1932, title: "Brave New World", description: "另一个建立在牺牲真实人性之上的'完美世界'文学实验" }
    ]
  },

  "repugnant-conclusion": {
    direct: [
      { author: "Derek Parfit", year: 1984, title: "Reasons and Persons (Part IV, Ch.17)", description: "提出令人厌恶的结论——总功利主义导致Z世界优于其他世界的荒谬结果" }
    ],
    context: [
      { author: "Henry Sidgwick", year: 1907, title: "The Methods of Ethics (7th ed.)", description: "最早系统讨论人口伦理中的平均效用与总效用之争" }
    ],
    development: [
      { author: "Gustaf Arrhenius", year: 2000, title: "An Impossibility Theorem for Welfarist Axiologies", description: "证明人口伦理学中多个合理要求无法同时满足" },
      { author: "Hilary Greaves", year: 2017, title: "Population Axiology", description: "当代人口伦理学的权威综述" }
    ],
    similar: [
      { author: "Robert Nozick", year: 1974, title: "Anarchy, State, and Utopia", description: "效用怪兽——与令人厌恶的结论同为对总效用最大化的挑战" }
    ]
  },

  "thomsons-violinist": {
    direct: [
      { author: "Judith Jarvis Thomson", year: 1971, title: "A Defense of Abortion (Philosophy & Public Affairs)", description: "小提琴家论证——即使胎儿是完整的人——身体自主权也可为堕胎辩护" }
    ],
    context: [
      { author: "Philippa Foot", year: 1967, title: "The Problem of Abortion and the Doctrine of the Double Effect", description: "双重效果原则——Thomson论证的方法论背景" }
    ],
    development: [
      { author: "Don Marquis", year: 1989, title: "Why Abortion Is Immoral", description: "从剥夺未来角度批评Thomson的论证" },
      { author: "David Boonin", year: 2003, title: "A Defense of Abortion", description: "扩充并系统化Thomson的论证——回应各方批评" }
    ],
    similar: [
      { author: "Peter Singer", year: 1972, title: "Famine, Affluence, and Morality", description: "同样通过资源使用义务问题挑战道德直觉" }
    ]
  },

  "speciesism": {
    direct: [
      { author: "Peter Singer", year: 1975, title: "Animal Liberation", description: "系统提出物种歧视概念——将动物伦理纳入主流哲学讨论" }
    ],
    context: [
      { author: "Jeremy Bentham", year: 1789, title: "An Introduction to the Principles of Morals and Legislation", description: "关于动物的著名段落：问题不是它们能否推理，而是它们能否受苦" }
    ],
    development: [
      { author: "Tom Regan", year: 1983, title: "The Case for Animal Rights", description: "从权利角度而非功利角度论证动物的道德地位" },
      { author: "Christine Korsgaard", year: 2018, title: "Fellow Creatures", description: "从康德伦理学出发论证动物伦理——与Singer不同的进路" }
    ],
    similar: [
      { author: "Lori Gruen", year: 2011, title: "Ethics and Animals", description: "系统介绍动物伦理学的多种范式" }
    ]
  },

  "state-of-nature": {
    direct: [
      { author: "Thomas Hobbes", year: 1651, title: "Leviathan (Chapters 13-14)", description: "经典的自然状态——所有人对抗所有人的战争" }
    ],
    context: [
      { author: "Hugo Grotius", year: 1625, title: "De Jure Belli ac Pacis", description: "现代自然法奠基——Hobbes的理论背景" }
    ],
    development: [
      { author: "John Locke", year: 1689, title: "Second Treatise of Government", description: "不同于Hobbes的自然状态——和平、互助而非战争" },
      { author: "Jean-Jacques Rousseau", year: 1755, title: "Discourse on Inequality", description: "第三种自然状态——原始人的善良与私有制的堕落" }
    ],
    similar: [
      { author: "Robert Axelrod", year: 1984, title: "The Evolution of Cooperation", description: "从进化博弈论分析自然状态中合作如何涌现" }
    ]
  },

  "panopticon": {
    direct: [
      { author: "Jeremy Bentham", year: 1787, title: "Panopticon; or, The Inspection-House", description: "全景监狱设计——以最少看守实现最大监控——权力的建筑化" }
    ],
    context: [
      { author: "Thomas Hobbes", year: 1651, title: "Leviathan", description: "主权者的监视权力——全景监狱的理论前驱" }
    ],
    development: [
      { author: "Michel Foucault", year: 1975, title: "Surveiller et punir (Discipline and Punish)", description: "将全景监狱升华为现代社会无处不在的规训权力隐喻" },
      { author: "Gilles Deleuze", year: 1992, title: "Postscript on the Societies of Control", description: "从全景监狱到控制社会——数字时代权力新形态" }
    ],
    similar: [
      { author: "George Orwell", year: 1949, title: "Nineteen Eighty-Four", description: "极权监视的文学实验——'老大哥在看着你'" }
    ]
  },

  "nonidentity-problem": {
    direct: [
      { author: "Derek Parfit", year: 1984, title: "Reasons and Persons (Part IV, Ch.16)", description: "系统提出非同一性问题——改变人口政策改变了谁出生——受影响者是否可以说被伤害？" }
    ],
    context: [
      { author: "Gregory Kavka", year: 1982, title: "The Paradox of Future Individuals", description: "在Parfit前讨论未来世代的道德问题" }
    ],
    development: [
      { author: "David Boonin", year: 2014, title: "The Non-Identity Problem and the Ethics of Future People", description: "对非同一性问题的全面当代分析" },
      { author: "Melinda Roberts", year: 2013, title: "The Nonidentity Problem (SEP)", description: "斯坦福哲学百科的权威综述" }
    ],
    similar: [
      { author: "Derek Parfit", year: 1984, title: "Reasons and Persons", description: "令人厌恶的结论——与同一性相关的另一人口伦理悖论" }
    ]
  },

  "gettier-problem": {
    direct: [
      { author: "Edmund Gettier", year: 1963, title: "Is Justified True Belief Knowledge? (Analysis)", description: "仅三页的论文——用两个反例摧毁了知识=确证的真信念这一两千年的定义" }
    ],
    context: [
      { author: "Plato", year: -380, title: "Theaetetus", description: "最早讨论知识的定义——确证的真信念——Gettier反驳的对象" },
      { author: "Roderick Chisholm", year: 1957, title: "Perceiving: A Philosophical Study", description: "对知识条件的当代分析——Gettier问题的直接前身" }
    ],
    development: [
      { author: "Alvin Goldman", year: 1967, title: "A Causal Theory of Knowing", description: "提出因果知识论——对Gettier问题的第一个系统回应" },
      { author: "Linda Zagzebski", year: 1994, title: "The Inescapability of Gettier Problems", description: "论证Gettier问题几乎不可避免——激发德性知识论的转向" }
    ],
    similar: [
      { author: "Keith Lehrer & Thomas Paxson", year: 1969, title: "Knowledge: Undefeated Justified True Belief", description: "提出可废止条件——对Gettier问题的另一回应路径" }
    ]
  },

  "ravens-paradox": {
    direct: [
      { author: "Carl G. Hempel", year: 1945, title: "Studies in the Logic of Confirmation (Mind)", description: "提出乌鸦悖论——观察非黑色的非乌鸦如何确证'所有乌鸦都是黑色的'" }
    ],
    context: [
      { author: "David Hume", year: 1748, title: "An Enquiry Concerning Human Understanding", description: "归纳问题——Hempel悖论的哲学背景" },
      { author: "John Maynard Keynes", year: 1921, title: "A Treatise on Probability", description: "逻辑概率论——Hempel归纳确证理论的背景" }
    ],
    development: [
      { author: "Nelson Goodman", year: 1955, title: "Fact, Fiction, and Forecast", description: "新归纳之谜——与乌鸦悖论同为归纳逻辑的深层挑战" },
      { author: "Branden Fitelson & James Hawthorne", year: 2010, title: "How Bayesian Confirmation Theory Handles the Paradox of the Ravens", description: "用贝叶斯主义化解乌鸦悖论" }
    ],
    similar: [
      { author: "Karl Popper", year: 1934, title: "Logik der Forschung", description: "证伪主义——对归纳确证问题的根本替代方案" }
    ]
  },

  "sleeping-beauty": {
    direct: [
      { author: "Adam Elga", year: 2000, title: "Self-locating Belief and the Sleeping Beauty Problem (Analysis)", description: "提出并系统讨论睡美人问题——引发关于自定位信念的大量文献" }
    ],
    context: [
      { author: "Arnold Zuboff", year: 1990, title: "One Self: The Logic of Experience", description: "在Elga之前讨论了类似的自定位信念问题" }
    ],
    development: [
      { author: "David Lewis", year: 2001, title: "Sleeping Beauty: Reply to Elga", description: "为1/2答案辩护——Lewis-Elga争论成为核心文献" },
      { author: "Nick Bostrom", year: 2007, title: "Sleeping Beauty and Self-Location: A Hybrid Model", description: "提出混合模型试图解决这一悖论" }
    ],
    similar: [
      { author: "John Leslie", year: 1996, title: "The End of the World", description: "末日论证——与睡美人类似的自定位概率问题" }
    ]
  },
  "lottery-paradox": {
    direct: [
      { author: "Henry Kyburg Jr.", year: 1961, title: "Probability and the Logic of Rational Belief", description: "提出彩票悖论——你理性地相信每张彩票会输——但又不理性地相信至少一张会赢" }
    ],
    context: [
      { author: "Carl G. Hempel", year: 1945, title: "Studies in the Logic of Confirmation", description: "归纳确证的逻辑——彩票悖论的问题背景" }
    ],
    development: [
      { author: "John Pollock", year: 1995, title: "Cognitive Carpentry", description: "提出可废止推理系统——尝试解决彩票悖论" },
      { author: "Igor Douven", year: 2002, title: "A New Solution to the Paradoxes of Rational Acceptability", description: "对彩票悖论的新解决方案" }
    ],
    similar: [
      { author: "David Makinson", year: 1965, title: "The Paradox of the Preface", description: "序言悖论——与彩票悖论同为关于理性信念聚合的悖论" }
    ]
  },

  "newcombs-paradox": {
    direct: [
      { author: "Robert Nozick", year: 1969, title: "Newcomb's Problem and Two Principles of Choice (in Essays in Honor of Carl G. Hempel)", description: "首次在学术文献中引入并命名纽康姆悖论——激发大量决策论讨论" }
    ],
    context: [
      { author: "William Newcomb", year: 1960, title: "Unpublished (informal problem)", description: "最初的非正式问题描述——Nozick将其引入学术界" },
      { author: "Leonard Savage", year: 1954, title: "The Foundations of Statistics", description: "经典决策论框架——纽康姆悖论暴露其内部的张力" }
    ],
    development: [
      { author: "David Lewis", year: 1979, title: "Prisoners' Dilemma Is a Newcomb Problem", description: "论证囚徒困境是纽康姆悖论的一种类型——统一两种困境" },
      { author: "Causal Decision Theory (collective)", year: 1980, title: "Various papers by Gibbard/Harper, Skyrms, Lewis", description: "因果决策论——为处理纽康姆悖论而发展的理论分支" }
    ],
    similar: [
      { author: "Gregory Kavka", year: 1983, title: "The Toxin Puzzle", description: "毒药难题——另一个关于意图与决策合理性的悖论" }
    ]
  },

  "swampman": {
    direct: [
      { author: "Donald Davidson", year: 1987, title: "Knowing One's Own Mind (Proceedings of the APA)", description: "提出沼泽人——闪电随机重组分子产生的你的复制品——有思想吗？" }
    ],
    context: [
      { author: "Hilary Putnam", year: 1975, title: "The Meaning of 'Meaning'", description: "语义外在主义——Davidson沼泽人论证的理论基础" },
      { author: "Derek Parfit", year: 1984, title: "Reasons and Persons", description: "远程传送机——沼泽人的'复制品'主题先驱" }
    ],
    development: [
      { author: "Ruth Millikan", year: 1984, title: "Language, Thought, and Other Biological Categories", description: "目的论语义学——部分回应了沼泽人的挑战" },
      { author: "Fred Dretske", year: 1988, title: "Explaining Behavior", description: "从信息论角度讨论表征和思想——沼泽人不能思想的原因" }
    ],
    similar: [
      { author: "Derek Parfit", year: 1984, title: "Reasons and Persons", description: "远程传送机——同样探讨复制品与原品的同一性问题" }
    ]
  },

  "menos-paradox": {
    direct: [
      { author: "Plato", year: -385, title: "Meno (80d-e)", description: "美诺悖论——'如果不知道你要找什么——你如何找到它？如果你知道——为什么还需要找？'" }
    ],
    context: [
      { author: "Socrates (as recorded by Plato)", year: -395, title: "Euthyphro", description: "苏格拉底式追问——美诺悖论的对话方法背景" }
    ],
    development: [
      { author: "Plato", year: -375, title: "Phaedo", description: "回忆说——柏拉图对美诺悖论的解答——学习就是回忆先天知识" },
      { author: "Gottfried Leibniz", year: 1704, title: "New Essays on Human Understanding", description: "先天观念论——对美诺悖论的早期现代回应" }
    ],
    similar: [
      { author: "Ludwig Wittgenstein", year: 1953, title: "Philosophical Investigations", description: "对私人遵循规则的讨论——与美诺悖论相似的'已有知识条件'问题" }
    ]
  },

  "swan-black": {
    direct: [
      { author: "Karl Popper", year: 1934, title: "Logik der Forschung (The Logic of Scientific Discovery)", description: "以黑天鹅为例论证可证伪性——'所有天鹅都是白的'只需一只黑天鹅即可被推翻" }
    ],
    context: [
      { author: "John Stuart Mill", year: 1843, title: "A System of Logic", description: "讨论了归纳和因果关系——提出了'黑天鹅'在归纳推理中的逻辑地位" },
      { author: "David Hume", year: 1748, title: "An Enquiry Concerning Human Understanding", description: "归纳问题——Popper证伪主义的出发点" }
    ],
    development: [
      { author: "Nassim Nicholas Taleb", year: 2007, title: "The Black Swan", description: "将黑天鹅概念扩展到金融和风险管理——不可预测的低概率高影响事件" },
      { author: "Imre Lakatos", year: 1970, title: "Falsification and the Methodology of Scientific Research Programmes", description: "精致的证伪主义——对Popper理论的修正" }
    ],
    similar: [
      { author: "Thomas Kuhn", year: 1962, title: "The Structure of Scientific Revolutions", description: "与Popper对立的科学哲学——范式而非证伪驱动科学变革" }
    ]
  },

  "moores-paradox": {
    direct: [
      { author: "G.E. Moore", year: 1942, title: "A Reply to My Critics (in The Philosophy of G.E. Moore)", description: "提出摩尔悖论——'下雨了但我不相信下雨了'这种说法的荒谬性" }
    ],
    context: [
      { author: "Ludwig Wittgenstein", year: 1953, title: "Philosophical Investigations (Part II, Section x)", description: "对摩尔悖论的著名讨论——'摩尔悖论'一词的推广" }
    ],
    development: [
      { author: "Jaakko Hintikka", year: 1962, title: "Knowledge and Belief", description: "从认知逻辑角度分析摩尔悖论" },
      { author: "Jane Heal", year: 1994, title: "Moore's Paradox: A Wittgensteinian Approach", description: "从维特根斯坦式进路解释摩尔悖论的深层意义" }
    ],
    similar: [
      { author: "Saul Kripke", year: 1979, title: "A Puzzle about Belief", description: "与摩尔悖论同为关于信念与断言的逻辑悖论" }
    ]
  },

  "molyneux-problem": {
    direct: [
      { author: "William Molyneux", year: 1688, title: "Letter to John Locke (included in Locke's Essay, 2nd ed., 1694)", description: "天生盲人恢复视力后能否仅凭视觉分辨立方体和球体——最早的系统跨感官认知问题" }
    ],
    context: [
      { author: "John Locke", year: 1689, title: "An Essay Concerning Human Understanding (2nd ed. 1694)", description: "收录并讨论了Molyneux的问题" }
    ],
    development: [
      { author: "George Berkeley", year: 1709, title: "An Essay Towards a New Theory of Vision", description: "论证视觉与触觉是不同的感官——需要通过经验建立关联" },
      { author: "Oliver Sacks", year: 1995, title: "To See and Not See (in An Anthropologist on Mars)", description: "记录了一个实际恢复视力的案例——提供了经验证据" }
    ],
    similar: [
      { author: "Frank Jackson", year: 1982, title: "Epiphenomenal Qualia", description: "玛丽黑白屋——与Molyneux问题同为跨感官认知的思想实验" }
    ]
  },

  "preface-paradox": {
    direct: [
      { author: "David Makinson", year: 1965, title: "The Paradox of the Preface (Analysis)", description: "作者在序言中感谢帮助但为剩余错误道歉——理性地相信书中每个陈述都为真——但理性地相信书中至少有一个错误" }
    ],
    context: [
      { author: "Henry Kyburg", year: 1961, title: "Probability and the Logic of Rational Belief", description: "彩票悖论——序言悖论的直接前身和同伴" }
    ],
    development: [
      { author: "Richard Foley", year: 1993, title: "Working Without a Net", description: "对理性信念的讨论——处理聚合悖论" },
      { author: "Christoph Kelp", year: 2017, title: "Lottery and Preface Paradoxes", description: "当代对两个悖论的联合分析" }
    ],
    similar: [
      { author: "Henry Kyburg", year: 1961, title: "The Lottery Paradox", description: "彩票悖论——与序言悖论结构相似——关于理性信念聚合的两个经典挑战" }
    ]
  },

  "achilles-tortoise": {
    direct: [
      { author: "Zeno of Elea", year: -450, title: "Zeno's Paradoxes (as recorded by Aristotle, Physics VI, 9)", description: "阿基里斯永远追不上乌龟——揭示无限分割带来的运动悖论" }
    ],
    context: [
      { author: "Aristotle", year: -350, title: "Physics (Book VI)", description: "最早记录并批评Zeno悖论的文献——区分了潜无限与实无限" },
      { author: "Parmenides", year: -475, title: "On Nature (fragments)", description: "Zeno的老师——存在是一、运动是幻象——Zeno悖论的形而上背景" }
    ],
    development: [
      { author: "Bertrand Russell", year: 1903, title: "The Principles of Mathematics", description: "用现代数学解决Zeno悖论——极限和级数收敛" },
      { author: "Adolf Grünbaum", year: 1967, title: "Modern Science and Zeno's Paradoxes", description: "从现代物理学角度系统分析Zeno悖论" }
    ],
    similar: [
      { author: "David Hilbert", year: 1924, title: "On the Infinite (lecture)", description: "希尔伯特旅馆——同样探讨无限概念带来的悖论" }
    ]
  },

  "sorites-paradox": {
    direct: [
      { author: "Eubulides of Miletus", year: -350, title: "Paradoxes of the Sorites (as recorded by Diogenes Laertius, Lives of Eminent Philosophers)", description: "提出谷堆悖论——一粒谷子不形成谷堆——但连续加一粒最终形成——边界在哪？" }
    ],
    context: [
      { author: "Aristotle", year: -350, title: "Metaphysics (on vagueness)", description: "对模糊谓词的早期讨论" }
    ],
    development: [
      { author: "Timothy Williamson", year: 1994, title: "Vagueness", description: "从认知主义角度处理谷堆悖论——实际上存在一个精确边界但我们无法知道" },
      { author: "Rosanna Keefe & Peter Smith (eds.)", year: 1996, title: "Vagueness: A Reader", description: "关于模糊性的重要论文集——包含多种对Sorites的回应" }
    ],
    similar: [
      { author: "Bertrand Russell", year: 1923, title: "Vagueness", description: "早期对模糊性的逻辑分析——Sorites传统中的重要作品" }
    ]
  },

  "problem-of-evil": {
    direct: [
      { author: "David Hume", year: 1779, title: "Dialogues Concerning Natural Religion (Part X)", description: "通过Philo之口系统陈述恶的问题——'神愿意阻止恶但不能吗？那么他是无能的。他能但不愿意吗？那么他是恶意的。'" },
      { author: "Epicurus (attributed)", year: -300, title: "As quoted by Lactantius (De Ira Dei, ~300CE)", description: "最早的口头表述——'神要么不能去除恶——要么不愿——要么既不能也不愿'" }
    ],
    context: [
      { author: "St. Augustine", year: 400, title: "Confessions (Book VII)", description: "从基督教角度处理恶的问题——引入自由意志辩护" },
      { author: "Gottfried Leibniz", year: 1710, title: "Theodicy", description: "'神义论'——为'这个最好的可能世界中恶的存在'辩护" }
    ],
    development: [
      { author: "J.L. Mackie", year: 1955, title: "Evil and Omnipotence", description: "现代对'恶的逻辑问题'的经典重述——从逻辑上论证恶与全善全能的神不兼容" },
      { author: "Alvin Plantinga", year: 1974, title: "God, Freedom, and Evil", description: "用自由意志辩护回应恶的逻辑问题——被广泛认为解决了逻辑版本" }
    ],
    similar: [
      { author: "Ivan Karamazov (via Dostoevsky)", year: 1880, title: "The Brothers Karamazov (Rebellion chapter)", description: "文学中恶的问题的最动人表达——以儿童苦难为中心" }
    ]
  },

  "teletransporter": {
    direct: [
      { author: "Derek Parfit", year: 1984, title: "Reasons and Persons (Part III, Ch.10)", description: "提出远程传送机——扫描并复制你的身体——原来的你'死了'——复制品是'你'吗？" }
    ],
    context: [
      { author: "Sydney Shoemaker", year: 1963, title: "Self-Knowledge and Self-Identity", description: "个人同一性的心理学理论——Parfit论证的理论基础" },
      { author: "John Locke", year: 1689, title: "An Essay Concerning Human Understanding", description: "记忆作为同一性的标准——远程传送问题的古典先驱" }
    ],
    development: [
      { author: "David Wiggins", year: 2001, title: "Sameness and Substance Renewed", description: "对同一性条件的深入分析——回应Parfit的挑战" },
      { author: "Simon Blackburn", year: 1999, title: "Think (Ch. on the Self)", description: "大众哲学中对远程传送机问题的清晰讨论" }
    ],
    similar: [
      { author: "Donald Davidson", year: 1987, title: "Knowing One's Own Mind", description: "沼泽人——与远程传送机同为复制品与原品同一性的实验" }
    ]
  },

  "growing-block": {
    direct: [
      { author: "C.D. Broad", year: 1923, title: "Scientific Thought", description: "提出'增长的块宇宙'——过去和现在是真实的——未来尚未存在" }
    ],
    context: [
      { author: "J.M.E. McTaggart", year: 1908, title: "The Unreality of Time (Mind)", description: "提出时间的A系列和B系列之区分——Broad理论的概念基础" },
      { author: "Henri Bergson", year: 1889, title: "Time and Free Will", description: "绵延观念——对'块宇宙'式静态时间的批判" }
    ],
    development: [
      { author: "David Lewis", year: 1986, title: "On the Plurality of Worlds", description: "模态实在论中'实际世界'的时间维度——与Growing Block相关" },
      { author: "Craig Callender", year: 2017, title: "What Makes Time Special?", description: "当代物理学哲学中的时间理论——包括对Growing Block的评估" }
    ],
    similar: [
      { author: "Hilary Putnam", year: 1967, title: "Time and Physical Geometry", description: "讨论了相对论对时间形而上学的影响" }
    ]
  },

  "possible-worlds": {
    direct: [
      { author: "David Lewis", year: 1986, title: "On the Plurality of Worlds", description: "全面辩护'极端模态实在论'——可能世界是与实际世界同类的具体实体" }
    ],
    context: [
      { author: "Gottfried Leibniz", year: 1710, title: "Theodicy", description: "最早提出可能世界概念——上帝在无数可能世界中选择最好的一个创造" },
      { author: "Saul Kripke", year: 1963, title: "Semantical Considerations on Modal Logic", description: "可能世界语义学——模态逻辑的标准语义" }
    ],
    development: [
      { author: "Alvin Plantinga", year: 1974, title: "The Nature of Necessity", description: "'温和实在论'——可能世界是抽象实体——不像Lewis那样是具体实体" },
      { author: "Robert Stalnaker", year: 2012, title: "Mere Possibilities", description: "从更精简的形而上学角度讨论可能世界" }
    ],
    similar: [
      { author: "Thomas Kuhn", year: 1962, title: "The Structure of Scientific Revolutions", description: "不同范式构成不同的'可能世界'——不可通约性" }
    ]
  },

  "time-travel-grandfather": {
    direct: [
      { author: "Various (popularized by science fiction)", year: 1930, title: "The Grandfather Paradox (informal origin)", description: "如果你回到过去杀死自己的祖父——你如何存在来杀死他——最早的非正式讨论" },
      { author: "David Lewis", year: 1976, title: "The Paradoxes of Time Travel (American Philosophical Quarterly)", description: "从分析哲学角度系统分析时间旅行悖论——提出'个人时间'与'外部时间'的区分" }
    ],
    context: [
      { author: "J.M.E. McTaggart", year: 1908, title: "The Unreality of Time", description: "时间的哲学悖论——时间旅行概念的理论基础" }
    ],
    development: [
      { author: "Paul Horwich", year: 1987, title: "Asymmetries in Time", description: "讨论时间的方向性和时间旅行的可能性条件" },
      { author: "Kurt Gödel", year: 1949, title: "An Example of a New Type of Cosmological Solutions of Einstein's Field Equations of Gravitation", description: "发现了允许闭合类时曲线的爱因斯坦方程解——时间旅行的物理可能性" }
    ],
    similar: [
      { author: "David Lewis", year: 1986, title: "On the Plurality of Worlds", description: "Lewis的模态哲学与他的时间旅行哲学共享对'矛盾'的精细处理方法" }
    ]
  },
  "monads": {
    direct: [
      { author: "Gottfried Wilhelm Leibniz", year: 1714, title: "Monadology", description: "系统阐述单子论——世界由不可分的——非物质的——具有知觉的简单实体（单子）构成" }
    ],
    context: [
      { author: "René Descartes", year: 1641, title: "Meditations on First Philosophy", description: "心物二元论——Leibniz单子论回应的对象" },
      { author: "Baruch Spinoza", year: 1677, title: "Ethics", description: "实体一元论——Leibniz试图以单子论的多元实体避开Spinoza的一元论" }
    ],
    development: [
      { author: "Immanuel Kant", year: 1781, title: "Critique of Pure Reason", description: "对Leibniz理性主义的批判——空间与时间作为直观形式而非单子属性" },
      { author: "Bertrand Russell", year: 1900, title: "A Critical Exposition of the Philosophy of Leibniz", description: "现代分析哲学对Leibniz的经典解读" }
    ],
    similar: [
      { author: "David Chalmers", year: 1996, title: "The Conscious Mind", description: "泛心论——Leibniz单子的知觉性在当代意识哲学中的复兴" }
    ]
  },

  "unexpected-hanging": {
    direct: [
      { author: "Michael Scriven", year: 1951, title: "Paradoxical Announcements (Mind)", description: "首次在学术文献中提出意外绞刑悖论" }
    ],
    context: [
      { author: "W.V.O. Quine", year: 1953, title: "On a So-Called Paradox (Mind)", description: "对意外绞刑悖论的早期回应——指出推理中的错误" }
    ],
    development: [
      { author: "Martin Gardner", year: 1963, title: "The Unexpected Hanging and Other Mathematical Diversions", description: "将这个悖论推广给大众——引发更广泛的讨论" },
      { author: "Timothy Chow", year: 1998, title: "The Surprise Examination or Unexpected Hanging Paradox", description: "对悖论逻辑结构的当代详细分析" }
    ],
    similar: [
      { author: "Raymond Smullyan", year: 1978, title: "What Is the Name of This Book?", description: "包含多种自指性悖论的经典读物" }
    ]
  },

  "russells-chicken": {
    direct: [
      { author: "Bertrand Russell", year: 1912, title: "The Problems of Philosophy (Ch.6, On Induction)", description: "以鸡的故事说明归纳问题——每天被喂养的鸡——直到圣诞节被宰——提醒归纳不能从理性上辩护" }
    ],
    context: [
      { author: "David Hume", year: 1748, title: "An Enquiry Concerning Human Understanding", description: "经典归纳问题——Russell鸡故事的哲学源头" }
    ],
    development: [
      { author: "Nelson Goodman", year: 1955, title: "Fact, Fiction, and Forecast", description: "新归纳之谜——Russell归纳问题的深化" },
      { author: "Karl Popper", year: 1934, title: "The Logic of Scientific Discovery", description: "证伪主义——对归纳问题的替代方案" }
    ],
    similar: [
      { author: "Nassim Nicholas Taleb", year: 2007, title: "The Black Swan", description: "黑天鹅——Russell的鸡的当代金融版本" }
    ]
  },

  "masterslave-dialectic": {
    direct: [
      { author: "G.W.F. Hegel", year: 1807, title: "Phänomenologie des Geistes (Ch.4, Independence and Dependence of Self-Consciousness)", description: "主奴辩证法的原始阐述——自我意识通过被另一个自我意识承认而实现" }
    ],
    context: [
      { author: "Immanuel Kant", year: 1787, title: "Critique of Pure Reason (2nd ed.)", description: "先验统觉的统一——Hegel自我意识理论的概念源头" },
      { author: "Johann Gottlieb Fichte", year: 1794, title: "Grundlage der gesamten Wissenschaftslehre", description: "主体通过'非我'来设定自身——Hegel的直接先驱" }
    ],
    development: [
      { author: "Alexandre Kojève", year: 1947, title: "Introduction à la lecture de Hegel", description: "对主奴辩证法的著名解读——影响了20世纪法国哲学" },
      { author: "Frantz Fanon", year: 1952, title: "Black Skin, White Masks", description: "将主奴辩证法应用于殖民主义和种族关系的分析" }
    ],
    similar: [
      { author: "Karl Marx", year: 1844, title: "Economic and Philosophic Manuscripts of 1844", description: "劳动异化——将Hegel的主奴结构应用于经济领域" }
    ]
  },

  "white-horse": {
    direct: [
      { author: "公孙龙", year: -300, title: "公孙龙子·白马论", description: "'白马非马'——展示概念与实在的分离——中国先秦的语言哲学典范" }
    ],
    context: [
      { author: "墨子", year: -450, title: "墨子·经说下", description: "墨家逻辑与语言分析——公孙龙的思想背景" },
      { author: "惠施", year: -320, title: "惠子·历物十事（残篇，见于《庄子·天下》）", description: "名家的另一代表——与公孙龙同为'辨者'" }
    ],
    development: [
      { author: "胡适", year: 1922, title: "先秦名学史 (The Development of the Logical Method in Ancient China)", description: "现代学者对公孙龙逻辑思想的系统解读" },
      { author: "A.C. Graham", year: 1989, title: "Disputers of the Tao", description: "西方学者对公孙龙辩论的系统分析" }
    ],
    similar: [
      { author: "Gottlob Frege", year: 1892, title: "Über Sinn und Bedeutung", description: "意义与指称的区分——与公孙龙'白马非马'类似的概念分析" }
    ]
  },

  "zhuangzi-fish": {
    direct: [
      { author: "庄子", year: -300, title: "庄子·秋水", description: "'子非鱼，安知鱼之乐？'——庄子与惠施的濠梁之辩——关于他者心灵与认知界限的经典对话" }
    ],
    context: [
      { author: "庄子", year: -300, title: "庄子·齐物论", description: "万物一体的视角——'鱼之乐'辩论的理论背景" },
      { author: "惠施", year: -320, title: "惠子·历物十事", description: "名家的逻辑训练——提供了挑战庄子的方法论工具" }
    ],
    development: [
      { author: "Thomas Nagel", year: 1974, title: "What Is It Like to Be a Bat?", description: "作为蝙蝠是什么感觉——与'知鱼之乐'相同的他者心灵问题" },
      { author: "A.C. Graham", year: 1989, title: "Disputers of the Tao", description: "对道家哲学的系统西方解读" }
    ],
    similar: [
      { author: "Ludwig Wittgenstein", year: 1953, title: "Philosophical Investigations", description: "关于他者心灵和私人经验的讨论——与庄子-惠施之辩类似" }
    ]
  },

  "twin-earth": {
    direct: [
      { author: "Hilary Putnam", year: 1975, title: "The Meaning of 'Meaning' (Minnesota Studies in the Philosophy of Science)", description: "提出孪生地球——同一大脑状态指称不同物质——'意义不在头脑中'" }
    ],
    context: [
      { author: "Gottlob Frege", year: 1892, title: "Über Sinn und Bedeutung", description: "意义与指称的区分——Putnam论证的历史背景" },
      { author: "Saul Kripke", year: 1972, title: "Naming and Necessity", description: "刚性指称理论——与Putnam的外在主义相呼应" }
    ],
    development: [
      { author: "Tyler Burge", year: 1979, title: "Individualism and the Mental", description: "关节炎案例——独立论证外在主义——强化了Putnam的理论" },
      { author: "Jerry Fodor", year: 1987, title: "Psychosemantics", description: "对广义内容的批评——为狭义内容辩护" }
    ],
    similar: [
      { author: "Donald Davidson", year: 1987, title: "Knowing One's Own Mind", description: "沼泽人——与孪生地球同为外在主义的论证" }
    ]
  },

  "private-language": {
    direct: [
      { author: "Ludwig Wittgenstein", year: 1953, title: "Philosophical Investigations (§§243-271)", description: "私人语言论证——不可能存在仅说话者自己理解的私人语言——意义必然是公共的" }
    ],
    context: [
      { author: "René Descartes", year: 1641, title: "Meditations on First Philosophy", description: "笛卡尔式的私人经验——Wittgenstein批评的对象" }
    ],
    development: [
      { author: "Saul Kripke", year: 1982, title: "Wittgenstein on Rules and Private Language", description: "对Wittgenstein私人语言论证的系统解释——引入'克里普克斯坦'" },
      { author: "Crispin Wright", year: 1989, title: "Wittgenstein on Rules and Private Language: A Critical Notice", description: "对Kripke解读的批评性回应" }
    ],
    similar: [
      { author: "Hilary Putnam", year: 1975, title: "The Meaning of 'Meaning'", description: "语义外在主义——与Wittgenstein共享'意义不在私人的头脑中'的洞见" }
    ]
  },

  "inverted-spectrum": {
    direct: [
      { author: "John Locke", year: 1689, title: "An Essay Concerning Human Understanding (Book II, Ch.32, §15)", description: "'颠倒光谱'——可能一个人看到的红色是另一个人的蓝色——但词语用法一致——光谱颠倒提供了反物理主义的直觉" }
    ],
    context: [
      { author: "René Descartes", year: 1641, title: "Meditations on First Philosophy", description: "感官的欺骗性——洛克光谱颠倒的怀疑论背景" }
    ],
    development: [
      { author: "Sydney Shoemaker", year: 1982, title: "The Inverted Spectrum", description: "对颠倒光谱的当代分析——批评功能主义" },
      { author: "David Chalmers", year: 1996, title: "The Conscious Mind", description: "在当代物理主义与反物理主义争论中使用光谱颠倒" }
    ],
    similar: [
      { author: "Frank Jackson", year: 1982, title: "Epiphenomenal Qualia", description: "玛丽黑白屋——与颠倒光谱同为反物理主义的重要'qualia'思想实验" }
    ]
  },
  "kripke-puzzle": {
    direct: [{ author: "Saul Kripke", year: 1979, title: "A Puzzle about Belief", description: "Pierre同时理性地相信Londres是美丽的和London不是美丽的——信念归属的逻辑谜题" }],
    context: [{ author: "Saul Kripke", year: 1972, title: "Naming and Necessity", description: "刚性指称理论——信念之谜的理论前提" }],
    development: [{ author: "Nathan Salmon", year: 1986, title: "Frege's Puzzle", description: "从Millian指称论角度系统处理信念之谜" }],
    similar: [{ author: "Hilary Putnam", year: 1975, title: "The Meaning of 'Meaning'", description: "孪生地球——与信念之谜同属语义外在主义" }]
  },
  "falsifiability": {
    direct: [{ author: "Karl Popper", year: 1934, title: "Logik der Forschung", description: "可证伪性作为科学与非科学的划界标准" }],
    context: [{ author: "David Hume", year: 1748, title: "An Enquiry Concerning Human Understanding", description: "归纳问题——Popper理论的出发点" }],
    development: [{ author: "Thomas Kuhn", year: 1962, title: "The Structure of Scientific Revolutions", description: "范式理论——批评Popper不符合科学史实际" }, { author: "Imre Lakatos", year: 1970, title: "Falsification and the Methodology of Scientific Research Programmes", description: "精致的证伪主义" }],
    similar: [{ author: "Carl Hempel", year: 1945, title: "Studies in the Logic of Confirmation", description: "确证逻辑——与Popper的证伪主义对立的科学方法论" }]
  },
  "round-bellows": {
    direct: [{ author: "老子", year: -500, title: "道德经·第五章", description: "'天地之间，其犹橐籥乎？虚而不屈，动而愈出'" }],
    context: [{ author: "庄子", year: -300, title: "庄子·齐物论", description: "道家的虚无哲学——与老子橐籥之喻一脉相承" }],
    development: [{ author: "王弼", year: 250, title: "老子道德经注", description: "阐发'以无为本'的哲学体系" }],
    similar: [{ author: "Martin Heidegger", year: 1927, title: "Sein und Zeit", description: "与道家对虚无的关注有跨文化共鸣" }]
  },
  "useless-tree": {
    direct: [{ author: "庄子", year: -300, title: "庄子·人间世", description: "匠人见栎社树——因'不材'而长存——'无用之用'" }],
    context: [{ author: "庄子", year: -300, title: "庄子·逍遥游", description: "樗树之辩——庄子'无用'主题的另一表述" }],
    development: [{ author: "A.C. Graham", year: 1989, title: "Disputers of the Tao", description: "分析庄子'无用'观念的哲学意涵" }],
    similar: [{ author: "Henry David Thoreau", year: 1854, title: "Walden", description: "简约生活与反功利主义——与庄子精神呼应" }]
  },
  "arrow-impossibility": {
    direct: [{ author: "Kenneth Arrow", year: 1951, title: "Social Choice and Individual Values", description: "阿罗不可能定理——无投票制度能同时满足所有合理条件" }],
    context: [{ author: "Marquis de Condorcet", year: 1785, title: "Essai sur l'application de l'analyse à la probabilité", description: "孔多塞悖论——Arrow定理的先驱" }],
    development: [{ author: "Amartya Sen", year: 1970, title: "Collective Choice and Social Welfare", description: "扩展社会选择理论" }],
    similar: [{ author: "Duncan Black", year: 1958, title: "The Theory of Committees and Elections", description: "中位选民定理——公共选择理论另一基石" }]
  },
  "harm-principle": {
    direct: [{ author: "John Stuart Mill", year: 1859, title: "On Liberty", description: "伤害原则——合法权力的唯一目的是防止对他人的伤害" }],
    context: [{ author: "John Locke", year: 1689, title: "A Letter Concerning Toleration", description: "个人自由的古典源头" }],
    development: [{ author: "Joel Feinberg", year: 1984, title: "The Moral Limits of the Criminal Law", description: "对伤害原则最详尽的当代阐述" }],
    similar: [{ author: "Isaiah Berlin", year: 1958, title: "Two Concepts of Liberty", description: "消极自由与积极自由——与Mill一脉相承" }]
  },
  "hedgehogs-fox": {
    direct: [{ author: "Isaiah Berlin", year: 1953, title: "The Hedgehog and the Fox", description: "狐狸知很多小事，刺猬知一件大事——区分两种思想类型" }],
    context: [{ author: "Archilochus", year: -650, title: "Fragment 201", description: "'狐狸知许多事，而刺猬知一件大事'——古希腊残篇" }],
    development: [{ author: "Philip Tetlock", year: 2005, title: "Expert Political Judgment", description: "实证研究——狐狸比刺猬更擅长预测" }],
    similar: [{ author: "William James", year: 1907, title: "Pragmatism", description: "柔和与刚硬心灵的区分" }]
  },
  "hilberts-hotel": {
    direct: [{ author: "David Hilbert", year: 1924, title: "Über das Unendliche", description: "希尔伯特旅馆——无限集合的反直觉性质" }],
    context: [{ author: "Georg Cantor", year: 1895, title: "Beiträge zur Begründung der transfiniten Mengenlehre", description: "超限集合论——Hilbert旅馆的数学背景" }],
    development: [{ author: "William Lane Craig", year: 1979, title: "The Kalām Cosmological Argument", description: "用Hilbert旅馆论证物理世界不可能无限" }],
    similar: [{ author: "Zeno", year: -450, title: "Achilles and the Tortoise", description: "与Hilbert同为揭示无限悖论的思想实验" }]
  },
  "alienation": {
    direct: [{ author: "Karl Marx", year: 1844, title: "Ökonomisch-philosophische Manuskripte", description: "劳动异化的四个维度" }],
    context: [{ author: "G.W.F. Hegel", year: 1807, title: "Phänomenologie des Geistes", description: "主奴辩证法——异化的哲学源头" }],
    development: [{ author: "Herbert Marcuse", year: 1964, title: "One-Dimensional Man", description: "消费社会的异化批评" }],
    similar: [{ author: "Émile Durkheim", year: 1893, title: "De la division du travail social", description: "失范——另一种社会病理分析" }]
  },
  "parfits-fission": {
    direct: [{ author: "Derek Parfit", year: 1984, title: "Reasons and Persons (Part III, Ch.12)", description: "大脑两半球分裂——同一性不是全有或全无" }],
    context: [{ author: "Sydney Shoemaker", year: 1963, title: "Self-Knowledge and Self-Identity", description: "心理连续性作为同一性标准" }],
    development: [{ author: "Mark Johnston", year: 1989, title: "Fission and the Facts", description: "回应Parfit——同一性可能更重要" }],
    similar: [{ author: "Derek Parfit", year: 1984, title: "Reasons and Persons (Ch.10)", description: "远程传送机——与分裂同为同一性实验" }]
  },
  "popper-demarcation": {
    direct: [{ author: "Karl Popper", year: 1934, title: "Logik der Forschung", description: "可证伪性作为科学与非科学的划界标准" }],
    context: [{ author: "Vienna Circle", year: 1929, title: "Wissenschaftliche Weltauffassung", description: "逻辑实证主义的可证实性" }],
    development: [{ author: "Thomas Kuhn", year: 1962, title: "The Structure of Scientific Revolutions", description: "批评Popper忽略常规科学" }],
    similar: [{ author: "Pierre Duhem", year: 1906, title: "La théorie physique", description: "整体论——与划界问题相关" }]
  },
  "quine-gavagai": {
    direct: [{ author: "W.V.O. Quine", year: 1960, title: "Word and Object (Ch.2)", description: "翻译的不确定性——gavagai可能指兔、白、动物等" }],
    context: [{ author: "Ludwig Wittgenstein", year: 1953, title: "Philosophical Investigations", description: "语言规范——Quine思想的背景" }],
    development: [{ author: "Donald Davidson", year: 1984, title: "Inquiries into Truth and Interpretation", description: "激进解释——发展Quine的主题" }],
    similar: [{ author: "Hilary Putnam", year: 1981, title: "Reason, Truth and History", description: "概念相对性与翻译不确定性共鸣" }]
  },
  "block-universe": {
    direct: [{ author: "Hermann Minkowski", year: 1908, title: "Raum und Zeit", description: "四维时空——过去现在未来同等实在" }],
    context: [{ author: "Albert Einstein", year: 1905, title: "Zur Elektrodynamik bewegter Körper", description: "狭义相对论——Minkowski的物理学基础" }],
    development: [{ author: "Huw Price", year: 1996, title: "Time's Arrow and Archimedes' Point", description: "从物理学辩护块宇宙" }],
    similar: [{ author: "C.D. Broad", year: 1923, title: "Scientific Thought", description: "增长块宇宙——另一时间形而上学" }]
  },
  "kant-categorical-imperative": {
    direct: [{ author: "Immanuel Kant", year: 1785, title: "Grundlegung zur Metaphysik der Sitten", description: "定言命令的三个公式" }],
    context: [{ author: "Jean-Jacques Rousseau", year: 1762, title: "Du contrat social", description: "公意——对康德的影响" }],
    development: [{ author: "Christine Korsgaard", year: 1996, title: "The Sources of Normativity", description: "当代康德主义的旗帜" }],
    similar: [{ author: "John Rawls", year: 1971, title: "A Theory of Justice", description: "无知之幕是定言命令的方法论当代化" }]
  },
  "parfit-identity": {
    direct: [{ author: "Derek Parfit", year: 1984, title: "Reasons and Persons (Part III)", description: "个人同一性不重要——重要的是关系R" }],
    context: [{ author: "David Hume", year: 1739, title: "A Treatise of Human Nature", description: "自我只是一束知觉" }],
    development: [{ author: "Christine Korsgaard", year: 1989, title: "Personal Identity and the Unity of Agency", description: "康德式反Parfit——同一性对实践不可缺" }],
    similar: [{ author: "佛陀", year: -500, title: "Anattā Doctrine (无我教义)", description: "无我——与Parfit的'自我不重要'共鸣" }]
  },
  "nagel-bat": {
    direct: [{ author: "Thomas Nagel", year: 1974, title: "What Is It Like to Be a Bat? (Philosophical Review)", description: "客观科学在原则上无法捕捉意识的主观特征" }],
    context: [{ author: "René Descartes", year: 1641, title: "Meditations on First Philosophy", description: "心物区分——Nagel问题的历史根源" }],
    development: [{ author: "David Chalmers", year: 1996, title: "The Conscious Mind", description: "困难问题——Nagel蝙蝠论证的深化" }, { author: "Daniel Dennett", year: 1991, title: "Consciousness Explained", description: "从异类现象学角度回应Nagel" }],
    similar: [{ author: "Frank Jackson", year: 1982, title: "Epiphenomenal Qualia", description: "玛丽黑白屋——与蝙蝠同为反物理主义意识论证" }]
  },
  "goodmans-new-riddle": {
    direct: [{ author: "Nelson Goodman", year: 1955, title: "Fact, Fiction, and Forecast (Ch.3)", description: "新归纳之谜——绿蓝谓词——归纳的逻辑基础问题" }],
    context: [{ author: "David Hume", year: 1748, title: "An Enquiry Concerning Human Understanding", description: "经典归纳问题" }, { author: "Carl Hempel", year: 1945, title: "Studies in the Logic of Confirmation", description: "乌鸦悖论——Goodman的前驱" }],
    development: [{ author: "W.V.O. Quine", year: 1969, title: "Natural Kinds (in Ontological Relativity)", description: "自然类——为Goodman的投射问题提供实在论回答" }],
    similar: [{ author: "Hilary Putnam", year: 1983, title: "Reason, Truth and History", description: "可投射性与自然类" }]
  },
  "buddha-self-no": {
    direct: [{ author: "佛陀 (as recorded in Pali Canon)", year: -500, title: "Anattalakkhana Sutta (无我相经, SN 22.59)", description: "五蕴非我——无我教义的核心经典" }],
    context: [{ author: "Upanishads (Anonymous)", year: -700, title: "Brihadaranyaka Upanishad", description: "印度哲学中'自我'(ātman)的传统——佛陀批评的对象" }],
    development: [{ author: "David Hume", year: 1739, title: "A Treatise of Human Nature (Book I, Part IV, §6)", description: "自我是知觉束——与佛陀的分析惊人相似" }, { author: "Derek Parfit", year: 1984, title: "Reasons and Persons", description: "自我不重要——佛教无我的当代版本" }],
    similar: [{ author: "Derek Parfit", year: 1984, title: "Reasons and Persons (Part III)", description: "同一性不是全有或全无——与无我教义一致" }]
  },
  "putnam-brains-vat-semantic": {
    direct: [{ author: "Hilary Putnam", year: 1981, title: "Reason, Truth and History (Ch.1)", description: "缸中之脑是自我反驳的——通过语义外在主义回应怀疑论" }],
    context: [{ author: "Hilary Putnam", year: 1975, title: "The Meaning of 'Meaning'", description: "孪生地球——语义外在主义基础" }],
    development: [{ author: "Crispin Wright", year: 1992, title: "On Putnam's Proof That We Are Not Brains in a Vat", description: "批评Putnam的自我反驳论证" }],
    similar: [{ author: "René Descartes", year: 1641, title: "Meditations on First Philosophy", description: "恶意恶魔——与缸中之脑同为怀疑论挑战" }]
  },
  "frege-sense-reference": {
    direct: [{ author: "Gottlob Frege", year: 1892, title: "Über Sinn und Bedeutung", description: "晨星与昏星——区分意义(Sinn)与指称(Bedeutung)——现代分析哲学奠基之作" }],
    context: [{ author: "John Stuart Mill", year: 1843, title: "A System of Logic", description: "名称只有指称没有内涵——Frege批评的对象" }],
    development: [{ author: "Bertrand Russell", year: 1905, title: "On Denoting", description: "限定描述词理论——发展Frege的区分" }, { author: "Saul Kripke", year: 1972, title: "Naming and Necessity", description: "刚性指称——批评Frege的描述词理论" }],
    similar: [{ author: "Hilary Putnam", year: 1975, title: "The Meaning of 'Meaning'", description: "孪生地球——与Frege共为语言哲学基石" }]
  },
  "kuhn-paradigm": {
    direct: [{ author: "Thomas Kuhn", year: 1962, title: "The Structure of Scientific Revolutions", description: "范式转移——科学通过革命而非累积进步——不可通约性" }],
    context: [{ author: "Ludwig Fleck", year: 1935, title: "Entstehung und Entwicklung einer wissenschaftlichen Tatsache", description: "思维集体和思维风格——Kuhn思想的前驱" }, { author: "Karl Popper", year: 1934, title: "Logik der Forschung", description: "Kuhn批评的对象——科学进步并非不断证伪" }],
    development: [{ author: "Imre Lakatos", year: 1970, title: "Falsification and the Methodology of Scientific Research Programmes", description: "科学研究纲领——综合Popper与Kuhn" }, { author: "Paul Feyerabend", year: 1975, title: "Against Method", description: "方法论的无政府主义——将Kuhn的洞见推向极致" }],
    similar: [{ author: "Larry Laudan", year: 1977, title: "Progress and Its Problems", description: "研究传统——另一科学变革理论" }]
  },
  "confucius-rectification": {
    direct: [{ author: "孔子 (as recorded in 论语)", year: -500, title: "论语·子路", description: "'必也正名乎'——名不正则言不顺——社会秩序始于语言规范" }],
    context: [{ author: "Plato", year: -375, title: "Cratylus", description: "名称的自然性vs约定性——东西方共有的语言哲学关怀" }],
    development: [{ author: "John Searle", year: 1995, title: "The Construction of Social Reality", description: "制度事实——社会实在通过语言建构——与正名论共鸣" }, { author: "Herbert Fingarette", year: 1972, title: "Confucius: The Secular as Sacred", description: "西方对孔子正名思想的系统解读" }],
    similar: [{ author: "J.L. Austin", year: 1962, title: "How to Do Things with Words", description: "以言行事——与正名论同为'语言建构实在'的理论" }]
  },
  "mozi-universal-love": {
    direct: [{ author: "墨子 (as recorded in 墨子)", year: -450, title: "墨子·兼爱（上中下三篇）", description: "'兼相爱，交相利'——普遍的——无差等的爱——拯救世界的方案" }],
    context: [{ author: "孔子", year: -500, title: "论语·学而", description: "孝——有差等的爱——墨子批评的对象" }],
    development: [{ author: "孟子", year: -320, title: "孟子·滕文公下", description: "直接批评墨家的兼爱——'墨氏兼爱，是无父也'" }, { author: "Chris Fraser", year: 2016, title: "The Philosophy of the Mòzi", description: "当代对墨子哲学的系统解读" }],
    similar: [{ author: "Peter Singer", year: 1972, title: "Famine, Affluence, and Morality", description: "无偏倚关怀——与墨子兼爱同为普世关怀伦理" }]
  },
  "nietzsche-genealogy": {
    direct: [{ author: "Friedrich Nietzsche", year: 1887, title: "Zur Genealogie der Moral", description: "道德谱系——'好'从贵族的自我命名变为弱者的反叛——道德价值是历史权力的产品" }],
    context: [{ author: "Paul Rée", year: 1877, title: "Der Ursprung der moralischen Empfindungen", description: "自然主义的道德起源论——Nietzsche批评的出发点" }],
    development: [{ author: "Michel Foucault", year: 1975, title: "Surveiller et punir", description: "将谱系学方法应用于惩罚史——Nietzsche方法的制度化" }, { author: "Bernard Williams", year: 2002, title: "Truth and Truthfulness", description: "对系谱学的当代反思——'发生的起源不等于有效性的论据'" }],
    similar: [{ author: "David Hume", year: 1739, title: "A Treatise of Human Nature (Book III)", description: "道德感的自然起源——Nietzsche的先驱" }]
  },
  "arendt-banality-evil": {
    direct: [{ author: "Hannah Arendt", year: 1963, title: "Eichmann in Jerusalem: A Report on the Banality of Evil", description: "平庸之恶——Eichmann不是恶魔——而是无思想的官僚——恶可以是最普通的" }],
    context: [{ author: "Immanuel Kant", year: 1785, title: "Groundwork of the Metaphysics of Morals", description: "根本恶的概念——Arendt重新思考恶的本质" }, { author: "Stanley Milgram", year: 1974, title: "Obedience to Authority", description: "服从实验——普通人也能做出可怕的事——实证验证Arendt" }],
    development: [{ author: "David Cesarani", year: 2004, title: "Eichmann: His Life and Crimes", description: "历史学家挑战Arendt——Eichmann可能比表面更恶毒" }, { author: "Susan Neiman", year: 2002, title: "Evil in Modern Thought", description: "分析了Arendt思想在恶的哲学史中的位置" }],
    similar: [{ author: "Philip Zimbardo", year: 2007, title: "The Lucifer Effect", description: "斯坦福监狱实验——普通人如何变恶——与Arendt共鸣" }]
  },
  "james-pragmatic-truth": {
    direct: [{ author: "William James", year: 1907, title: "Pragmatism: A New Name for Some Old Ways of Thinking", description: "实用主义真理观——真理是'在实践中有效'的信念" }],
    context: [{ author: "Charles Sanders Peirce", year: 1878, title: "How to Make Our Ideas Clear", description: "实用主义的起源——'考虑信念的实践后果'——James-实用主义的源头" }],
    development: [{ author: "Bertrand Russell", year: 1910, title: "William James's Conception of Truth", description: "从实在论角度批评实用主义真理观——混淆了真与有用" }, { author: "Richard Rorty", year: 1979, title: "Philosophy and the Mirror of Nature", description: "复兴实用主义——真理作为'可辩护性'而非'对应实在'" }],
    similar: [{ author: "John Dewey", year: 1938, title: "Logic: The Theory of Inquiry", description: "工具主义——发展James的真理观" }]
  },
  "leibniz-mill": {
    direct: [{ author: "Gottfried Wilhelm Leibniz", year: 1714, title: "Monadology (§17)", description: "磨坊论证——走进放大版'思考机器'——只看到齿轮的咬合——永远看不到思想本身" }],
    context: [{ author: "René Descartes", year: 1641, title: "Meditations on First Philosophy", description: "思维是不可分的——Leibniz磨坊论证的灵感" }],
    development: [{ author: "John Searle", year: 1980, title: "Minds, Brains, and Programs", description: "中文屋——Leibniz磨坊的当代版本" }],
    similar: [{ author: "Thomas Nagel", year: 1974, title: "What Is It Like to Be a Bat?", description: "与Leibniz同为'物质过程无法产生主观体验'的论证" }]
  },
  "zhuangzi-useless-tree": {
    direct: [{ author: "庄子", year: -320, title: "庄子·逍遥游", description: "樗树之辩——'无所可用，安所困苦哉'——无用即大用" }],
    context: [{ author: "老子", year: -500, title: "道德经", description: "弱之胜强，柔之胜刚——庄子的思想基础" }],
    development: [{ author: "A.C. Graham", year: 1981, title: "Chuang-tzu: The Inner Chapters", description: "庄子核心篇章的权威英译和注释" }],
    similar: [{ author: "Robert Nozick", year: 1974, title: "Anarchy, State, and Utopia", description: "对功利主义'有用'标准的批判——与庄子异曲同工" }]
  },
  "pyrrho-skepticism": {
    direct: [{ author: "Sextus Empiricus", year: 200, title: "Outlines of Pyrrhonism (Πυρρώνειοι ὑποτυπώσεις)", description: "系统阐述皮浪派怀疑论——悬搁判断以获得心灵平静" }],
    context: [{ author: "Socrates", year: -395, title: "Plato's Apology", description: "'我知道我一无所知'——怀疑论的精神先声" }],
    development: [{ author: "David Hume", year: 1739, title: "A Treatise of Human Nature", description: "温和怀疑论——将皮浪的方法应用于现代哲学" }, { author: "Robert Fogelin", year: 1994, title: "Pyrrhonian Reflections on Knowledge and Justification", description: "当代复兴皮浪怀疑论" }],
    similar: [{ author: "Michel de Montaigne", year: 1580, title: "Apologie de Raimond Sebond", description: "文艺复兴怀疑论的巅峰——'Que sais-je?'" }]
  },
  "anselm-ontological": {
    direct: [{ author: "Anselm of Canterbury", year: 1078, title: "Proslogion (Chapters 2-4)", description: "本体论论证——'那无法设想比之更伟大的东西'——从概念推导出存在" }],
    context: [{ author: "St. Augustine", year: 400, title: "De Trinitate", description: "三位一体中的完美存在——Anslem论证的教父背景" }, { author: "Plato", year: -375, title: "The Republic", description: "善的理念——最完美的存在——Anslem论证的柏拉图根源" }],
    development: [{ author: "Immanuel Kant", year: 1781, title: "Critique of Pure Reason", description: "存在不是谓词——对本体论论证的经典反驳" }, { author: "Alvin Plantinga", year: 1974, title: "The Nature of Necessity", description: "用模态逻辑复兴本体论论证——如果最大完美的存在是可能的——它就是必然的" }],
    similar: [{ author: "René Descartes", year: 1641, title: "Meditations on First Philosophy (Meditation V)", description: "另一个著名的本体论论证版本" }]
  },
  "russell-barber": {
    direct: [{ author: "Bertrand Russell", year: 1901, title: "Letter to Frege (June 16, 1902)", description: "罗素悖论——所有不属于自身的集合的集合——自指导致矛盾——动摇了Frege的逻辑系统" }],
    context: [{ author: "Gottlob Frege", year: 1893, title: "Grundgesetze der Arithmetik", description: "Frege的逻辑系统——Russell悖论发现时Frege著作即将出版" }],
    development: [{ author: "Ernst Zermelo", year: 1908, title: "Untersuchungen über die Grundlagen der Mengenlehre", description: "Zermelo的公理化集合论——限制集合的形成以防止Russell悖论" }, { author: "Kurt Gödel", year: 1931, title: "Über formal unentscheidbare Sätze", description: "不完全性定理——从自指性悖论中产生的更深刻洞见" }],
    similar: [{ author: "Epimenides", year: -600, title: "The Liar Paradox", description: "说谎者悖论——'这句话是假的'——最古老的自指悖论" }]
  },
  "turing-test": {
    direct: [{ author: "Alan Turing", year: 1950, title: "Computing Machinery and Intelligence (Mind)", description: "模仿游戏/图灵测试——以行为标准定义智能——AI哲学的诞生" }],
    context: [{ author: "René Descartes", year: 1637, title: "Discours de la méthode", description: "动物是机械——Turing问题的哲学前身" }],
    development: [{ author: "John Searle", year: 1980, title: "Minds, Brains, and Programs", description: "中文屋——对图灵测试的行为主义标准的著名反驳" }, { author: "Margaret Boden", year: 1990, title: "The Philosophy of Artificial Intelligence (edited volume)", description: "收录了对图灵测试的多角度探讨" }],
    similar: [{ author: "René Descartes", year: 1637, title: "Discours de la méthode (Part V)", description: "语言是区分人与机器的关键——Turing测试的17世纪版本" }]
  },
  "sen-capability": {
    direct: [{ author: "Amartya Sen", year: 1979, title: "Equality of What? (The Tanner Lectures)", description: "提出能力进路——发展不在商品而在'人能做什么和成为什么'" }],
    context: [{ author: "John Rawls", year: 1971, title: "A Theory of Justice", description: "基本善——Sen批评的出发点——善不是最终目标而是手段" }, { author: "Aristotle", year: -350, title: "Nicomachean Ethics", description: "繁荣(eudaimonia)——Sen能力进路的古典根源" }],
    development: [{ author: "Martha Nussbaum", year: 2000, title: "Women and Human Development: The Capabilities Approach", description: "扩展能力进路——提出十项核心能力清单" }],
    similar: [{ author: "Amartya Sen", year: 1999, title: "Development as Freedom", description: "发展即自由——能力进路的全面展开" }]
  },
  "mere-addition": {
    direct: [{ author: "Derek Parfit", year: 1984, title: "Reasons and Persons (Part IV, Ch.19)", description: "仅加人的悖论——100亿非常幸福的人vs200亿中半勉强幸福——总效用增加但直觉认为是坏的" }],
    context: [{ author: "Henry Sidgwick", year: 1907, title: "The Methods of Ethics", description: "宇宙的幸福总和应最大化" }],
    development: [{ author: "Gustaf Arrhenius", year: 2000, title: "Future Generations: A Challenge for Moral Theory", description: "证明相关悖论的无解性" }],
    similar: [{ author: "Derek Parfit", year: 1984, title: "Reasons and Persons (Ch.17)", description: "令人厌恶的结论——与仅加人悖论配套" }]
  },
  "euthyphro-dilemma": {
    direct: [{ author: "Plato", year: -395, title: "Euthyphro (10a)", description: "虔敬是因为本身是虔敬而被神爱——还是因为被神爱才虔敬？" }],
    context: [{ author: "Sophocles", year: -441, title: "Antigone", description: "神法与人法的冲突——游叙弗伦困境的文学背景" }],
    development: [{ author: "William of Ockham", year: 1320, title: "Ordinatio (Commentary on the Sentences)", description: "神圣命令论的经典表述" }, { author: "Robert M. Adams", year: 1999, title: "Finite and Infinite Goods", description: "当代神圣命令论的辩护——修正版神圣命令论" }],
    similar: [{ author: "Søren Kierkegaard", year: 1843, title: "Frygt og Bæven (Fear and Trembling)", description: "亚伯拉罕的伦理悬置——神命令超越伦理——Euthyphro的极端版本" }]
  },
  "epicurus-death": {
    direct: [{ author: "Epicurus", year: -300, title: "Letter to Menoeceus (as recorded by Diogenes Laertius, Lives X.124-127)", description: "死亡与我们无关——当我们存在时死亡不在——当死亡来临时我们不在" }],
    context: [{ author: "Democritus", year: -400, title: "On the Nature of Man (fragments)", description: "原子论——灵魂由原子构成——死后散开——Epicurus论证的物理学基础" }],
    development: [{ author: "Thomas Nagel", year: 1970, title: "Death (Noûs)", description: "死亡是坏的不是因为它是痛苦的经历——而是因为它剥夺了本可活的生命" }, { author: "Jeff McMahan", year: 2002, title: "The Ethics of Killing", description: "当代生命伦理中对Epicurus论证的系统评估" }],
    similar: [{ author: "Lucretius", year: -50, title: "De Rerum Natura (Book III)", description: "以诗的形式扩展Epicurus的死亡论证——'出生前的不存在'与'死后的不存在'对称" }]
  },
  "frankfurt-cases": {
    direct: [{ author: "Harry Frankfurt", year: 1969, title: "Alternate Possibilities and Moral Responsibility (Journal of Philosophy)", description: "芯片场景——琼斯没有替代可能但仍负责任——反对替代可能性原则" }],
    context: [{ author: "Aristotle", year: -350, title: "Nicomachean Ethics (Book III)", description: "自愿行为与道德责任——西方哲学中的经典讨论" }],
    development: [{ author: "John Martin Fischer & Mark Ravizza", year: 1998, title: "Responsibility and Control", description: "半相容论——将法兰克福案例推向更系统的理论" }, { author: "David Widerker", year: 1995, title: "Libertarianism and Frankfurt's Attack on the Principle of Alternative Possibilities", description: "批评法兰克福案例——'闪烁自由策略'" }],
    similar: [{ author: "Peter van Inwagen", year: 1983, title: "An Essay on Free Will", description: "后果论证——与法兰克福案例同为自由意志辩论的核心" }]
  },
  "boltzmann-brain": {
    direct: [{ author: "Ludwig Boltzmann", year: 1896, title: "Vorlesungen über Gastheorie", description: "统计力学基础——波兹曼大脑问题的物理学根源" }],
    context: [{ author: "René Descartes", year: 1641, title: "Meditations on First Philosophy", description: "恶意恶魔——波兹曼大脑的哲学先驱" }],
    development: [{ author: "Sean Carroll", year: 2017, title: "Why Boltzmann Brains Are Bad", description: "论证含有大量波兹曼大脑的宇宙学模型应为假" }, { author: "Alan Guth", year: 2007, title: "Eternal Inflation and Its Implications", description: "暴胀宇宙学中波兹曼大脑问题的当代分析" }],
    similar: [{ author: "Nick Bostrom", year: 2003, title: "Are You Living in a Computer Simulation?", description: "模拟论证——与波兹曼大脑同为'最可能的解释是幻觉'的恐怖" }]
  },
  "fermi-paradox": {
    direct: [{ author: "Enrico Fermi", year: 1950, title: "Informal lunch discussion (as recounted by various, including Eric Jones, 1985)", description: "'他们都在哪儿？'——高概率的推断与零证据的观测之间的矛盾" }],
    context: [{ author: "Giordano Bruno", year: 1584, title: "De l'infinito universo e mondi", description: "无限宇宙中有无数有人居住的世界——Fermi悖论的早期直觉" }],
    development: [{ author: "Michael Hart", year: 1975, title: "An Explanation for the Absence of Extraterrestrials on Earth", description: "最早正式讨论——没有外星人来过地球的事实" }, { author: "Robin Hanson", year: 1998, title: "The Great Filter — Are We Almost Past It?", description: "提出大过滤器概念——解释Fermi悖论" }],
    similar: [{ author: "Nick Bostrom", year: 2003, title: "Are You Living in a Computer Simulation?", description: "模拟论证——与Fermi同为'预期与观察不匹配'的推理" }]
  },
  "toxin-puzzle": {
    direct: [{ author: "Gregory Kavka", year: 1983, title: "The Toxin Puzzle (Analysis)", description: "你能在知道明天会反悔的情况下——真诚地形成喝毒药的意图吗？" }],
    context: [{ author: "Thomas Schelling", year: 1960, title: "The Strategy of Conflict", description: "承诺和威胁的策略逻辑——毒药难题的前提" }],
    development: [{ author: "Michael Bratman", year: 1987, title: "Intention, Plans, and Practical Reason", description: "意图作为行动的计划——为处理毒药难题提供框架" }],
    similar: [{ author: "Robert Nozick", year: 1969, title: "Newcomb's Problem and Two Principles of Choice", description: "纽康姆悖论——与毒药难题同为决策理论的经典测试" }]
  },
  "mencius-child-well": {
    direct: [{ author: "孟子", year: -320, title: "孟子·公孙丑上", description: "'今人乍见孺子将入于井，皆有怵惕恻隐之心'——人性本善的著名论证" }],
    context: [{ author: "孔子", year: -500, title: "论语·阳货", description: "'性相近也，习相远也'——孟子性善论的出发点" }],
    development: [{ author: "荀子", year: -250, title: "荀子·性恶篇", description: "直接反对孟子——'人之性恶，其善者伪也'" }, { author: "Paul Bloom", year: 2013, title: "Just Babies: The Origins of Good and Evil", description: "婴儿天生有道德直觉——实证支持孟子的性善论" }],
    similar: [{ author: "Jean-Jacques Rousseau", year: 1762, title: "Émile", description: "人性本善——社会使人堕落——与孟子相同的自然性善论" }]
  },
  "descartes-wax": {
    direct: [{ author: "René Descartes", year: 1641, title: "Meditations on First Philosophy (Meditation II)", description: "蜡块论证——感官全变但理智识别为同一块蜡——认识事物的是心灵不是感官" }],
    context: [{ author: "Aristotle", year: -350, title: "De Anima (On the Soul)", description: "感觉与理智的区分——Descartes蜡块论证的概念背景" }],
    development: [{ author: "John Locke", year: 1689, title: "An Essay Concerning Human Understanding", description: "从经验论角度回应——同一性认知来自感性连续而非纯粹理智" }],
    similar: [{ author: "Maurice Merleau-Ponty", year: 1945, title: "Phénoménologie de la perception", description: "知觉现象学——批评Descartes对感官的忽视" }]
  },
  "ticking-bomb": {
    direct: [{ author: "Michael Walzer", year: 1973, title: "Political Action: The Problem of Dirty Hands (Philosophy & Public Affairs)", description: "肮脏之手——政治领袖有时必须做道德上错的事" }, { author: "Henry Shue", year: 1978, title: "Torture (Philosophy & Public Affairs)", description: "首次以定时炸弹形式系统讨论酷刑的伦理" }],
    context: [{ author: "Niccolò Machiavelli", year: 1532, title: "Il Principe", description: "君主必须学会'不善'——肮脏之手的古典先声" }],
    development: [{ author: "David Luban", year: 2005, title: "Liberalism, Torture, and the Ticking Bomb", description: "批评定时炸弹场景——实际中永远不具备理想条件" }, { author: "Fritz Allhoff", year: 2012, title: "Terrorism, Ticking Time-Bombs, and Torture", description: "从专业伦理角度分析——某些情况下酷刑可能是道德必要的" }],
    similar: [{ author: "Judith Jarvis Thomson", year: 1985, title: "The Trolley Problem", description: "与定时炸弹同为极端情境下的道德两难" }]
  },
  "nietzsche-last-man": {
    direct: [{ author: "Friedrich Nietzsche", year: 1883, title: "Also sprach Zarathustra (Prologue §5)", description: "末人——'我们发明了幸福'——失去所有伟大渴望的安全人类" }],
    context: [{ author: "Arthur Schopenhauer", year: 1819, title: "Die Welt als Wille und Vorstellung", description: "意志的否定——Nietzsche末人诊断的前驱" }],
    development: [{ author: "Gilles Deleuze", year: 1962, title: "Nietzsche et la philosophie", description: "末人与Nietzsche的批判性生命哲学" }, { author: "Alexander Nehamas", year: 1985, title: "Nietzsche: Life as Literature", description: "文学的Nietzsche——末人作为叙事批评" }],
    similar: [{ author: "Aldous Huxley", year: 1932, title: "Brave New World", description: "舒适但没有伟大的世界——末人的文学实现" }]
  },
  "kant-murderer-door": {
    direct: [{ author: "Immanuel Kant", year: 1797, title: "On a Supposed Right to Lie from Philanthropy", description: "回应康斯坦特——坚称对门口凶手也不应说谎" }],
    context: [{ author: "Benjamin Constant", year: 1797, title: "Des réactions politiques", description: "批评康德——引发康德写出回应" }],
    development: [{ author: "Christine Korsgaard", year: 1986, title: "The Right to Lie: Kant on Dealing with Evil", description: "当代康德主义者的双层理论回应" }],
    similar: [{ author: "Judith Jarvis Thomson", year: 1985, title: "The Trolley Problem", description: "同为测试绝对道德规则在极限情境中是否成立的实验" }]
  },
  "wilt-chamberlain": {
    direct: [{ author: "Robert Nozick", year: 1974, title: "Anarchy, State, and Utopia (Ch.7)", description: "张伯伦论证——自由颠覆模式——批评模式化分配正义" }],
    context: [{ author: "John Rawls", year: 1971, title: "A Theory of Justice", description: "差异原则——Nozick的主要批评对象" }],
    development: [{ author: "G.A. Cohen", year: 1995, title: "Self-Ownership, Freedom, and Equality", description: "从马克思主义角度批评Nozick的自我所有权预设" }],
    similar: [{ author: "John Rawls", year: 1971, title: "A Theory of Justice", description: "无知之幕——与张伯伦论证是分配正义辩论的两极" }]
  },
  "avicenna-flying-man": {
    direct: [{ author: "Ibn Sina (Avicenna)", year: 1020, title: "Al-Shifa: Kitab al-Nafs (De Anima)", description: "飞人论证原始出处——悬浮人的自我意识独立于身体" }],
    context: [{ author: "Aristotle", year: -350, title: "De Anima", description: "灵魂与身体——阿维森纳的哲学基础" }],
    development: [{ author: "René Descartes", year: 1641, title: "Meditations on First Philosophy", description: "我思故我在——与飞人论证惊人相似的独立发现" }],
    similar: [{ author: "René Descartes", year: 1641, title: "Meditations (Meditation II)", description: "蜡块论证——与飞人同为从自我确定性推导心灵本质" }]
  },
  "block-chinese-nation": {
    direct: [{ author: "Ned Block", year: 1978, title: "Troubles with Functionalism", description: "中国国民论证——功能主义不能解释意识" }],
    context: [{ author: "Hilary Putnam", year: 1967, title: "Psychological Predicates", description: "早期功能主义提出者——Block批评的对象" }],
    development: [{ author: "John Searle", year: 1980, title: "Minds, Brains, and Programs", description: "中文屋——与Block共同构成对功能主义的两大挑战" }],
    similar: [{ author: "Gottfried Leibniz", year: 1714, title: "Monadology (§17)", description: "磨坊论证——放大到可见规模仍找不到思维" }]
  },
  "paradox-of-fiction": {
    direct: [{ author: "Colin Radford", year: 1975, title: "How Can We Be Moved by the Fate of Anna Karenina?", description: "正式提出虚构悖论" }],
    context: [{ author: "Aristotle", year: -335, title: "Poetics", description: "最早讨论卡塔西斯——观看悲剧为何引起情感" }],
    development: [{ author: "Kendall Walton", year: 1990, title: "Mimesis as Make-Believe", description: "假装理论——虚构情感是准情感" }],
    similar: [{ author: "David Hume", year: 1757, title: "Of Tragedy", description: "悲剧悖论——与虚构悖论同属美学情感悖论" }]
  },
  "danto-indiscernibles": {
    direct: [{ author: "Arthur Danto", year: 1964, title: "The Artworld", description: "提出艺术世界概念" }, { author: "Arthur Danto", year: 1981, title: "The Transfiguration of the Commonplace", description: "系统阐述不可区分物问题" }],
    context: [{ author: "Marcel Duchamp", year: 1917, title: "Fountain (readymade)", description: "现成物艺术——丹托思想的案例基础" }],
    development: [{ author: "George Dickie", year: 1974, title: "Art and the Aesthetic", description: "进一步发展为艺术体制论" }],
    similar: [{ author: "Andy Warhol", year: 1964, title: "Brillo Boxes", description: "直接启发丹托写作的实物" }]
  },
  "van-inwagen-consequence": {
    direct: [{ author: "Peter van Inwagen", year: 1983, title: "An Essay on Free Will", description: "提出后果论证——决定论与自由意志不相容的最强论证" }],
    context: [{ author: "Carl Ginet", year: 1966, title: "Might We Have No Choice?", description: "早期版本的后果论证" }],
    development: [{ author: "David Lewis", year: 1981, title: "Are We Free to Break the Laws?", description: "对后果论证的相容论回应" }],
    similar: [{ author: "Harry Frankfurt", year: 1969, title: "Alternate Possibilities and Moral Responsibility", description: "法兰克福反例——自由意志辩论的核心文本" }]
  },
  "sartre-bad-faith": {
    direct: [{ author: "Jean-Paul Sartre", year: 1943, title: "L'Être et le néant (Part I, Ch.2)", description: "坏信念概念——咖啡店侍者的经典分析" }],
    context: [{ author: "Martin Heidegger", year: 1927, title: "Sein und Zeit", description: "本真性——萨特坏信念的存在论先驱" }],
    development: [{ author: "Iris Murdoch", year: 1953, title: "Sartre: Romantic Rationalist", description: "早期对萨特伦理学的批评" }],
    similar: [{ author: "Søren Kierkegaard", year: 1849, title: "The Sickness Unto Death", description: "绝望——与坏信念同为逃避自我的分析" }]
  },
  "kierkegaard-abraham": {
    direct: [{ author: "Søren Kierkegaard", year: 1843, title: "Frygt og Bæven (Fear and Trembling)", description: "以亚伯拉罕探索信仰对伦理的目的论悬置" }],
    context: [{ author: "Immanuel Kant", year: 1793, title: "Religion within the Boundaries of Mere Reason", description: "理性宗教——Kierkegaard批判的对象" }],
    development: [{ author: "Jacques Derrida", year: 1995, title: "The Gift of Death", description: "对Kierkegaard亚伯拉罕的解构式解读" }],
    similar: [{ author: "Plato", year: -395, title: "Euthyphro", description: "游叙弗伦困境——神命超越伦理的古代版本" }]
  },
  "pessimistic-induction": {
    direct: [{ author: "Larry Laudan", year: 1981, title: "A Confutation of Convergent Realism", description: "系统提出悲观归纳——过去的理论都是错的" }],
    context: [{ author: "Hilary Putnam", year: 1975, title: "The 'No Miracles' Argument", description: "科学实在论核心辩护——Laudan批评的对象" }],
    development: [{ author: "Stathis Psillos", year: 1999, title: "Scientific Realism: How Science Tracks Truth", description: "区分理论核心与辅助假设——回应悲观归纳" }],
    similar: [{ author: "Thomas Kuhn", year: 1962, title: "The Structure of Scientific Revolutions", description: "范式转移——科学历史不积累而是变革" }]
  }
};

export default references;
