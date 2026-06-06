// ═══════════════════════════════════════════
// School Enrichment — additional dimension coverage per choice
// Ensures each experiment choice touches 3-4 philosophical schools
// for richer compass diversity (16 types instead of 4)
// ═══════════════════════════════════════════

const enrichment = {
  "trolley-problem": {
    "pull-lever": [{ name: "理性主义", weight: 0.3 }, { name: "唯物主义", weight: 0.2 }],
    "do-nothing": [{ name: "美德伦理学", weight: 0.3 }, { name: "唯心主义", weight: 0.2 }],
    "push-man": [{ name: "唯物主义", weight: 0.4 }, { name: "经验主义", weight: 0.2 }]
  },
  "prisoner-dilemma": {
    "cooperate": [{ name: "美德伦理学", weight: 0.3 }, { name: "唯心主义", weight: 0.2 }],
    "betray": [{ name: "唯物主义", weight: 0.3 }, { name: "经验主义", weight: 0.2 }]
  },
  "brain-in-vat": {
    "high-certainty": [{ name: "唯物主义", weight: 0.3 }, { name: "理性主义", weight: 0.2 }],
    "medium-certainty": [{ name: "怀疑论", weight: 0.4 }, { name: "经验主义", weight: 0.2 }],
    "low-certainty": [{ name: "唯心主义", weight: 0.3 }, { name: "怀疑论", weight: 0.3 }]
  },
  "veil-of-ignorance": {
    "maximin": [{ name: "美德伦理学", weight: 0.3 }, { name: "经验主义", weight: 0.2 }],
    "total-utility": [{ name: "理性主义", weight: 0.3 }, { name: "唯物主义", weight: 0.2 }],
    "liberty-first": [{ name: "存在主义", weight: 0.4 }]
  },
  "zhuangzi-butterfly": {
    "unity": [{ name: "唯心主义", weight: 0.4 }, { name: "怀疑论", weight: 0.2 }],
    "reason": [{ name: "理性主义", weight: 0.3 }, { name: "唯物主义", weight: 0.2 }]
  },
  "ship-of-theseus": {
    "same-ship": [{ name: "唯物主义", weight: 0.3 }, { name: "经验主义", weight: 0.2 }],
    "not-same": [{ name: "唯心主义", weight: 0.3 }, { name: "理性主义", weight: 0.2 }]
  },
  "chinese-room": {
    "no-understanding": [{ name: "唯物主义", weight: 0.3 }, { name: "经验主义", weight: 0.2 }],
    "system-understands": [{ name: "理性主义", weight: 0.3 }, { name: "唯心主义", weight: 0.2 }]
  },
  "experience-machine": {
    "refuse-machine": [{ name: "存在主义", weight: 0.4 }, { name: "美德伦理学", weight: 0.3 }],
    "accept-machine": [{ name: "唯物主义", weight: 0.2 }]
  },
  "marys-room": {
    "new-knowledge": [{ name: "唯心主义", weight: 0.4 }, { name: "理性主义", weight: 0.2 }],
    "no-new-knowledge": [{ name: "唯物主义", weight: 0.3 }, { name: "经验主义", weight: 0.3 }]
  },
  "philosophical-zombies": {
    "conceivable": [{ name: "唯心主义", weight: 0.4 }, { name: "理性主义", weight: 0.2 }],
    "inconceivable": [{ name: "唯物主义", weight: 0.3 }, { name: "经验主义", weight: 0.3 }]
  },
  "pascals-wager": {
    "persuaded": [{ name: "怀疑论", weight: -0.3 }, { name: "经验主义", weight: 0.2 }],
    "unpersuaded": [{ name: "理性主义", weight: 0.3 }, { name: "唯物主义", weight: 0.2 }]
  },
  "evil-demon": {
    "cogito-true": [{ name: "理性主义", weight: 0.4 }, { name: "唯心主义", weight: 0.2 }],
    "cogito-limited": [{ name: "怀疑论", weight: 0.4 }, { name: "经验主义", weight: 0.2 }]
  },
  "cave-allegory": {
    "return-and-teach": [{ name: "美德伦理学", weight: 0.3 }, { name: "经验主义", weight: 0.2 }],
    "stay-outside": [{ name: "唯心主义", weight: 0.3 }, { name: "理性主义", weight: 0.2 }]
  },
  "schrodingers-cat": {
    "superposition": [{ name: "唯心主义", weight: 0.3 }, { name: "怀疑论", weight: 0.2 }],
    "cat-definite": [{ name: "唯物主义", weight: 0.3 }, { name: "经验主义", weight: 0.2 }]
  },
  "buridans-ass": {
    "free-will": [{ name: "存在主义", weight: 0.3 }, { name: "唯心主义", weight: 0.2 }],
    "randomness": [{ name: "唯物主义", weight: 0.3 }, { name: "经验主义", weight: 0.2 }]
  },
  "simulation-argument": {
    "great-filter": [{ name: "唯物主义", weight: 0.2 }, { name: "理性主义", weight: 0.2 }],
    "no-interest": [{ name: "怀疑论", weight: 0.3 }]
  },
  "tragedy-of-commons": {
    "regulation": [{ name: "理性主义", weight: 0.2 }],
    "community": [{ name: "美德伦理学", weight: 0.3 }, { name: "经验主义", weight: 0.2 }]
  },
  "grue-paradox": {
    "entrenchment": [{ name: "经验主义", weight: 0.3 }, { name: "怀疑论", weight: 0.2 }],
    "natural-kinds": [{ name: "理性主义", weight: 0.3 }, { name: "唯物主义", weight: 0.2 }]
  },
  "infinite-monkey": {
    "no-meaning": [{ name: "唯物主义", weight: 0.2 }, { name: "怀疑论", weight: 0.2 }],
    "has-meaning": [{ name: "唯心主义", weight: 0.2 }, { name: "理性主义", weight: 0.2 }]
  },
  "ring-of-gyges": {
    "unjust": [{ name: "唯物主义", weight: 0.3 }, { name: "经验主义", weight: 0.2 }],
    "just-choice": [{ name: "美德伦理学", weight: 0.3 }, { name: "唯心主义", weight: 0.2 }]
  },
  "transplant-problem": {
    "kill-one": [{ name: "唯物主义", weight: 0.2 }, { name: "理性主义", weight: 0.2 }],
    "dont-kill": [{ name: "美德伦理学", weight: 0.3 }, { name: "唯心主义", weight: 0.2 }]
  },
  "drowning-child": {
    "save": [{ name: "美德伦理学", weight: 0.3 }, { name: "经验主义", weight: 0.2 }],
    "dont-save": [{ name: "唯物主义", weight: 0.3 }]
  },
  "utility-monster": {
    "reject": [{ name: "美德伦理学", weight: 0.3 }, { name: "唯心主义", weight: 0.2 }],
    "accept": [{ name: "唯物主义", weight: 0.2 }, { name: "经验主义", weight: 0.2 }]
  },
  "moral-luck": {
    "luck-matters": [{ name: "经验主义", weight: 0.3 }, { name: "怀疑论", weight: 0.2 }],
    "luck-doesnt": [{ name: "理性主义", weight: 0.3 }, { name: "唯心主义", weight: 0.2 }]
  },
  "lifeboat-ethics": {
    "dont-help": [{ name: "唯物主义", weight: 0.3 }, { name: "经验主义", weight: 0.2 }],
    "help": [{ name: "美德伦理学", weight: 0.3 }, { name: "唯心主义", weight: 0.2 }]
  },
  "ones-who-walk-away": {
    "stay": [{ name: "唯物主义", weight: 0.2 }],
    "walk-away": [{ name: "存在主义", weight: 0.4 }, { name: "美德伦理学", weight: 0.3 }]
  },
  "repugnant-conclusion": {
    "no-better": [{ name: "美德伦理学", weight: 0.3 }, { name: "唯心主义", weight: 0.2 }],
    "yes-better": [{ name: "唯物主义", weight: 0.2 }]
  },
  "thomsons-violinist": {
    "right-to-disconnect": [{ name: "存在主义", weight: 0.3 }, { name: "理性主义", weight: 0.2 }],
    "duty-to-keep": [{ name: "美德伦理学", weight: 0.3 }, { name: "唯心主义", weight: 0.2 }]
  },
  "speciesism": {
    "yes-speciesism": [{ name: "唯物主义", weight: 0.2 }, { name: "经验主义", weight: 0.2 }],
    "no-speciesism": [{ name: "美德伦理学", weight: 0.3 }, { name: "理性主义", weight: 0.2 }]
  },
  "state-of-nature": {
    "hobbes-right": [{ name: "唯物主义", weight: 0.3 }, { name: "经验主义", weight: 0.2 }],
    "locke-right": [{ name: "唯心主义", weight: 0.2 }, { name: "美德伦理学", weight: 0.2 }]
  },
  "panopticon": {
    "surveillance-ok": [{ name: "唯物主义", weight: 0.3 }],
    "surveillance-bad": [{ name: "存在主义", weight: 0.3 }, { name: "唯心主义", weight: 0.2 }]
  },
  "nonidentity-problem": {
    "no-harm": [{ name: "理性主义", weight: 0.3 }],
    "yes-harm": [{ name: "经验主义", weight: 0.3 }, { name: "美德伦理学", weight: 0.2 }]
  },
  "gettier-problem": {
    "jtb-insufficient": [{ name: "经验主义", weight: 0.3 }, { name: "怀疑论", weight: 0.2 }],
    "jtb-sufficient": [{ name: "理性主义", weight: 0.3 }]
  },
  "ravens-paradox": {
    "paradoxical": [{ name: "怀疑论", weight: 0.3 }, { name: "经验主义", weight: 0.2 }],
    "resolved": [{ name: "理性主义", weight: 0.3 }]
  },
  "sleeping-beauty": {
    "half": [{ name: "经验主义", weight: 0.3 }, { name: "怀疑论", weight: 0.2 }],
    "third": [{ name: "理性主义", weight: 0.3 }]
  },
  "lottery-paradox": {
    "skeptical": [{ name: "怀疑论", weight: 0.3 }, { name: "经验主义", weight: 0.2 }],
    "dogmatic": [{ name: "理性主义", weight: 0.2 }]
  },
  "newcombs-paradox": {
    "one-box": [{ name: "理性主义", weight: 0.4 }],
    "two-box": [{ name: "经验主义", weight: 0.3 }, { name: "唯物主义", weight: 0.2 }]
  },
  "swampman": {
    "no-thought": [{ name: "唯物主义", weight: 0.3 }, { name: "经验主义", weight: 0.2 }],
    "has-thought": [{ name: "唯心主义", weight: 0.3 }, { name: "理性主义", weight: 0.2 }]
  },
  "menos-paradox": {
    "recollection": [{ name: "理性主义", weight: 0.4 }, { name: "唯心主义", weight: 0.3 }],
    "no-recollection": [{ name: "经验主义", weight: 0.3 }, { name: "唯物主义", weight: 0.2 }]
  },
  "swan-black": {
    "falsification": [{ name: "经验主义", weight: 0.3 }, { name: "唯物主义", weight: 0.2 }],
    "confirmation": [{ name: "理性主义", weight: 0.3 }]
  },
  "moores-paradox": {
    "paradoxical": [{ name: "怀疑论", weight: 0.3 }, { name: "唯心主义", weight: 0.2 }],
    "resolved": [{ name: "理性主义", weight: 0.2 }, { name: "唯物主义", weight: 0.2 }]
  },
  "molyneux-problem": {
    "empiricist": [{ name: "经验主义", weight: 0.4 }, { name: "唯物主义", weight: 0.2 }],
    "rationalist": [{ name: "理性主义", weight: 0.3 }, { name: "唯心主义", weight: 0.2 }]
  },
  "preface-paradox": {
    "paradoxical": [{ name: "怀疑论", weight: 0.3 }, { name: "经验主义", weight: 0.2 }],
    "resolved": [{ name: "理性主义", weight: 0.2 }]
  },
  "achilles-tortoise": {
    "paradox-real": [{ name: "理性主义", weight: 0.3 }, { name: "唯心主义", weight: 0.2 }],
    "math-solves": [{ name: "唯物主义", weight: 0.2 }, { name: "经验主义", weight: 0.2 }]
  },
  "sorites-paradox": {
    "vague": [{ name: "怀疑论", weight: 0.3 }, { name: "经验主义", weight: 0.2 }],
    "sharp": [{ name: "理性主义", weight: 0.3 }]
  },
  "problem-of-evil": {
    "incompatible": [{ name: "唯物主义", weight: 0.3 }, { name: "经验主义", weight: 0.2 }],
    "compatible": [{ name: "唯心主义", weight: 0.3 }, { name: "理性主义", weight: 0.2 }]
  },
  "teletransporter": {
    "same-person": [{ name: "唯物主义", weight: 0.3 }, { name: "经验主义", weight: 0.2 }],
    "different-person": [{ name: "唯心主义", weight: 0.3 }, { name: "理性主义", weight: 0.2 }]
  },
  "growing-block": {
    "growing": [{ name: "经验主义", weight: 0.2 }],
    "static": [{ name: "理性主义", weight: 0.2 }, { name: "唯心主义", weight: 0.2 }]
  },
  "possible-worlds": {
    "concrete": [{ name: "唯物主义", weight: 0.3 }],
    "abstract": [{ name: "理性主义", weight: 0.3 }, { name: "唯心主义", weight: 0.2 }]
  },
  "time-travel-grandfather": {
    "impossible": [{ name: "理性主义", weight: 0.2 }],
    "possible": [{ name: "经验主义", weight: 0.2 }, { name: "唯物主义", weight: 0.2 }]
  },
  "monads": {
    "monad-yes": [{ name: "唯心主义", weight: 0.4 }, { name: "理性主义", weight: 0.3 }],
    "monad-no": [{ name: "唯物主义", weight: 0.3 }, { name: "经验主义", weight: 0.2 }]
  },
  "unexpected-hanging": {
    "paradox-real": [{ name: "怀疑论", weight: 0.3 }, { name: "理性主义", weight: 0.2 }],
    "flawed-logic": [{ name: "经验主义", weight: 0.2 }]
  },
  "russells-chicken": {
    "induction-problem": [{ name: "怀疑论", weight: 0.3 }, { name: "经验主义", weight: 0.3 }],
    "induction-works": [{ name: "理性主义", weight: 0.2 }]
  },
  "masterslave-dialectic": {
    "hegel-right": [{ name: "唯心主义", weight: 0.3 }, { name: "存在主义", weight: 0.2 }],
    "hegel-wrong": [{ name: "唯物主义", weight: 0.3 }]
  },
  "white-horse": {
    "language-matters": [{ name: "理性主义", weight: 0.3 }, { name: "唯心主义", weight: 0.2 }],
    "language-convention": [{ name: "经验主义", weight: 0.3 }, { name: "唯物主义", weight: 0.2 }]
  },
  "zhuangzi-fish": {
    "know": [{ name: "唯心主义", weight: 0.3 }, { name: "美德伦理学", weight: 0.2 }],
    "cant-know": [{ name: "怀疑论", weight: 0.3 }, { name: "唯物主义", weight: 0.2 }]
  },
  "twin-earth": {
    "semantic-ext": [{ name: "唯物主义", weight: 0.2 }],
    "semantic-int": [{ name: "理性主义", weight: 0.2 }, { name: "唯心主义", weight: 0.2 }]
  },
  "private-language": {
    "no-private": [{ name: "唯物主义", weight: 0.2 }, { name: "经验主义", weight: 0.2 }],
    "private-possible": [{ name: "唯心主义", weight: 0.3 }, { name: "理性主义", weight: 0.2 }]
  },
  "inverted-spectrum": {
    "possible": [{ name: "唯心主义", weight: 0.3 }],
    "impossible": [{ name: "唯物主义", weight: 0.2 }, { name: "理性主义", weight: 0.2 }]
  },
  "kripke-puzzle": {
    "puzzle-real": [{ name: "怀疑论", weight: 0.3 }, { name: "理性主义", weight: 0.2 }],
    "puzzle-resolved": [{ name: "经验主义", weight: 0.2 }]
  },
  "falsifiability": {
    "popper-right": [{ name: "经验主义", weight: 0.3 }, { name: "唯物主义", weight: 0.2 }],
    "popper-wrong": [{ name: "理性主义", weight: 0.2 }, { name: "怀疑论", weight: 0.2 }]
  },
  "round-bellows": {
    "taoist": [{ name: "唯心主义", weight: 0.3 }, { name: "怀疑论", weight: 0.2 }],
    "materialist": [{ name: "唯物主义", weight: 0.2 }]
  },
  "useless-tree": {
    "freedom-true": [{ name: "存在主义", weight: 0.4 }, { name: "唯心主义", weight: 0.2 }],
    "balance-needed": [{ name: "经验主义", weight: 0.2 }, { name: "唯物主义", weight: 0.2 }]
  },
  "arrow-impossibility": {
    "arrow-right": [{ name: "理性主义", weight: 0.3 }, { name: "怀疑论", weight: 0.2 }],
    "democracy-works": [{ name: "经验主义", weight: 0.2 }]
  },
  "harm-principle": {
    "mill-right": [{ name: "存在主义", weight: 0.3 }, { name: "经验主义", weight: 0.2 }],
    "mill-too-much": [{ name: "美德伦理学", weight: 0.2 }]
  },
  "hedgehogs-fox": {
    "fox": [{ name: "经验主义", weight: 0.4 }, { name: "怀疑论", weight: 0.2 }],
    "hedgehog": [{ name: "理性主义", weight: 0.3 }]
  },
  "hilberts-hotel": {
    "mathematical-only": [{ name: "唯物主义", weight: 0.2 }, { name: "经验主义", weight: 0.2 }],
    "real-infinity": [{ name: "理性主义", weight: 0.3 }, { name: "唯心主义", weight: 0.2 }]
  },
  "alienation": {
    "still-relevant": [{ name: "存在主义", weight: 0.2 }, { name: "经验主义", weight: 0.2 }],
    "different-now": [{ name: "理性主义", weight: 0.2 }]
  },
  "parfits-fission": {
    "identity-not-important": [{ name: "怀疑论", weight: 0.2 }, { name: "经验主义", weight: 0.2 }],
    "identity-remains-important": [{ name: "唯心主义", weight: 0.2 }, { name: "理性主义", weight: 0.2 }]
  },
  "kant-categorical-imperative": {
    "kant-right": [{ name: "理性主义", weight: 0.3 }, { name: "唯心主义", weight: 0.2 }],
    "kant-too-rigid": [{ name: "经验主义", weight: 0.2 }]
  },
  "parfit-identity": {
    "liberating": [{ name: "怀疑论", weight: 0.2 }, { name: "经验主义", weight: 0.2 }],
    "frightening": [{ name: "唯心主义", weight: 0.2 }, { name: "理性主义", weight: 0.2 }]
  },
  "nagel-bat": {
    "irreducible-gap": [{ name: "唯心主义", weight: 0.3 }, { name: "怀疑论", weight: 0.2 }],
    "science-catch-up": [{ name: "唯物主义", weight: 0.3 }, { name: "经验主义", weight: 0.2 }]
  },
  "goodmans-new-riddle": {
    "entrenchment-exp": [{ name: "经验主义", weight: 0.3 }, { name: "怀疑论", weight: 0.2 }],
    "natural-kinds-exp": [{ name: "理性主义", weight: 0.3 }, { name: "唯物主义", weight: 0.2 }]
  },
  "buddha-self-no": {
    "no-self-true": [{ name: "怀疑论", weight: 0.2 }, { name: "经验主义", weight: 0.3 }],
    "self-real-true": [{ name: "唯心主义", weight: 0.3 }, { name: "理性主义", weight: 0.2 }]
  },
  "putnam-brains-vat-semantic": {
    "putnam-success": [{ name: "理性主义", weight: 0.3 }],
    "putnam-fails": [{ name: "怀疑论", weight: 0.3 }, { name: "经验主义", weight: 0.2 }]
  },
  "frege-sense-reference": {
    "frege-key": [{ name: "理性主义", weight: 0.3 }, { name: "唯心主义", weight: 0.2 }],
    "frege-historical": [{ name: "经验主义", weight: 0.3 }, { name: "唯物主义", weight: 0.2 }]
  },
  "kuhn-paradigm": {
    "kuhn-right": [{ name: "怀疑论", weight: 0.3 }, { name: "经验主义", weight: 0.2 }],
    "kuhn-exaggerated": [{ name: "理性主义", weight: 0.2 }]
  },
  "confucius-rectification": {
    "language-matters-yes": [{ name: "唯心主义", weight: 0.2 }, { name: "美德伦理学", weight: 0.2 }],
    "material-first": [{ name: "唯物主义", weight: 0.3 }, { name: "经验主义", weight: 0.2 }]
  },
  "mozi-universal-love": {
    "universal-yes": [{ name: "理性主义", weight: 0.2 }],
    "graded-love": [{ name: "经验主义", weight: 0.2 }, { name: "美德伦理学", weight: 0.3 }]
  },
  "nietzsche-genealogy": {
    "genealogy-profound": [{ name: "存在主义", weight: 0.3 }, { name: "怀疑论", weight: 0.3 }],
    "genealogy-flawed": [{ name: "理性主义", weight: 0.2 }, { name: "经验主义", weight: 0.2 }]
  },
  "arendt-banality-evil": {
    "arendt-right": [{ name: "经验主义", weight: 0.2 }],
    "arendt-debatable": [{ name: "理性主义", weight: 0.2 }, { name: "唯物主义", weight: 0.2 }]
  },
  "james-pragmatic-truth": {
    "pragmatism-yes": [{ name: "经验主义", weight: 0.4 }, { name: "唯物主义", weight: 0.2 }],
    "pragmatism-flaw": [{ name: "理性主义", weight: 0.3 }, { name: "唯心主义", weight: 0.2 }]
  },
  "leibniz-mill": {
    "leibniz-insight": [{ name: "唯心主义", weight: 0.3 }, { name: "理性主义", weight: 0.2 }],
    "leibniz-flawed": [{ name: "唯物主义", weight: 0.3 }, { name: "经验主义", weight: 0.2 }]
  },
  "zhuangzi-useless-tree": {
    "freedom-true": [{ name: "存在主义", weight: 0.4 }, { name: "怀疑论", weight: 0.2 }],
    "balance-needed-true": [{ name: "经验主义", weight: 0.2 }]
  },
  "pyrrho-skepticism": {
    "suspension-peace": [{ name: "怀疑论", weight: 0.4 }, { name: "唯心主义", weight: 0.2 }],
    "suspension-impractical": [{ name: "经验主义", weight: 0.3 }, { name: "唯物主义", weight: 0.2 }]
  },
  "anselm-ontological": {
    "kant-objection": [{ name: "经验主义", weight: 0.3 }, { name: "唯物主义", weight: 0.2 }],
    "intriguing": [{ name: "理性主义", weight: 0.4 }, { name: "唯心主义", weight: 0.2 }]
  },
  "russell-barber": {
    "no-such-barber": [{ name: "理性主义", weight: 0.3 }],
    "vague-language": [{ name: "经验主义", weight: 0.3 }, { name: "怀疑论", weight: 0.2 }]
  },
  "turing-test": {
    "turing-yes": [{ name: "唯物主义", weight: 0.3 }, { name: "经验主义", weight: 0.2 }],
    "turing-no": [{ name: "唯心主义", weight: 0.2 }, { name: "理性主义", weight: 0.2 }]
  },
  "sen-capability": {
    "capability-yes": [{ name: "美德伦理学", weight: 0.2 }, { name: "经验主义", weight: 0.2 }],
    "capability-list": [{ name: "怀疑论", weight: 0.2 }, { name: "理性主义", weight: 0.2 }]
  },
  "mere-addition": {
    "no-better": [{ name: "美德伦理学", weight: 0.2 }, { name: "唯心主义", weight: 0.2 }],
    "yes-better": [{ name: "唯物主义", weight: 0.2 }, { name: "理性主义", weight: 0.2 }]
  },
  "euthyphro-dilemma": {
    "independent-ethics": [{ name: "理性主义", weight: 0.3 }],
    "divine-command": [{ name: "唯心主义", weight: 0.3 }, { name: "道义论", weight: 0.2 }]
  },
  "epicurus-death": {
    "epicurus-convinced": [{ name: "怀疑论", weight: 0.2 }, { name: "唯物主义", weight: 0.3 }],
    "epicurus-missed": [{ name: "存在主义", weight: 0.2 }, { name: "唯心主义", weight: 0.2 }]
  },
  "frankfurt-cases": {
    "frankfurt-right": [{ name: "唯物主义", weight: 0.2 }, { name: "理性主义", weight: 0.2 }],
    "frankfort-flawed": [{ name: "唯心主义", weight: 0.2 }]
  },
  "boltzmann-brain": {
    "cosmology-solves": [{ name: "唯物主义", weight: 0.3 }, { name: "经验主义", weight: 0.2 }],
    "philosophical-absurd": [{ name: "怀疑论", weight: 0.3 }, { name: "理性主义", weight: 0.2 }]
  },
  "fermi-paradox": {
    "filter-ahead": [{ name: "经验主义", weight: 0.2 }, { name: "怀疑论", weight: 0.2 }],
    "filter-behind": [{ name: "理性主义", weight: 0.2 }]
  },
  "toxin-puzzle": {
    "cannot-intend": [{ name: "理性主义", weight: 0.3 }],
    "can-intend": [{ name: "唯物主义", weight: 0.2 }, { name: "经验主义", weight: 0.2 }]
  },
  "mencius-child-well": {
    "mencius-right": [{ name: "美德伦理学", weight: 0.4 }, { name: "唯心主义", weight: 0.2 }],
    "mencius-nature": [{ name: "唯物主义", weight: 0.2 }, { name: "经验主义", weight: 0.2 }]
  },
  "descartes-wax": {
    "rationalist": [{ name: "理性主义", weight: 0.4 }, { name: "唯心主义", weight: 0.3 }],
    "empiricist-wax": [{ name: "经验主义", weight: 0.4 }, { name: "唯物主义", weight: 0.2 }]
  },
  "ticking-bomb": {
    "yes-torture-extreme": [{ name: "唯物主义", weight: 0.2 }, { name: "经验主义", weight: 0.2 }],
    "no-torture-absolute": [{ name: "唯心主义", weight: 0.2 }, { name: "美德伦理学", weight: 0.2 }]
  },
  "nietzsche-last-man": {
    "defy-last-man": [{ name: "存在主义", weight: 0.4 }, { name: "唯心主义", weight: 0.2 }],
    "defend-last-man": [{ name: "唯物主义", weight: 0.2 }, { name: "经验主义", weight: 0.2 }]
  }
};

export default enrichment;
