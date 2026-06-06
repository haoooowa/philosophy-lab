import {
  ScalesIcon, CompassIcon, EyeIcon, BrainIcon,
  DiamondIcon, PillarsIcon, BookIcon, PhilosopherIcon,
} from './PhilosopherSymbols.jsx';

// Category → Symbol mapping
export const CATEGORY_SYMBOLS = {
  '伦理学':     { Component: ScalesIcon,    label: '道德天平' },
  '形而上学':   { Component: CompassIcon,   label: '存在星盘' },
  '认识论':     { Component: EyeIcon,       label: '真理之眼' },
  '心灵哲学':   { Component: BrainIcon,     label: '意识之脑' },
  '逻辑学':     { Component: DiamondIcon,   label: '逻辑公理' },
  '政治哲学':   { Component: PillarsIcon,   label: '秩序之柱' },
  '语言哲学':   { Component: BookIcon,      label: '语言之书' },
};

// Fallback for unknown categories
export const DEFAULT_SYMBOL = { Component: PhilosopherIcon, label: '哲学' };

// Get symbol for a single category string
export function getSymbolForCategory(category) {
  return CATEGORY_SYMBOLS[category] || DEFAULT_SYMBOL;
}

// Get philosopher initials (first Chinese character) for avatar
const INITIALS_SPECIAL = {
  '菲利帕·福特': '福',
  '梅里尔·弗勒德 & 梅尔文·德雷希尔': '囚',
  '朱迪斯·贾维斯·汤姆逊': '汤',
  '希拉里·普特南': '普',
  '约翰·罗尔斯': '罗',
  '罗伯特·诺齐克': '诺',
  '德里克·帕菲特': '帕',
  '托马斯·内格尔': '内',
  '约翰·洛克': '洛',
  '大卫·休谟': '休',
  '伊曼努尔·康德': '康',
  '勒内·笛卡尔': '笛',
  '路德维希·维特根斯坦': '维',
  '弗里德里希·尼采': '尼',
  '卡尔·马克思': '马',
  '伯特兰·罗素': '罗',
  '哥特洛布·弗雷格': '弗',
  '戈特弗里德·威廉·莱布尼茨': '莱',
  '托马斯·霍布斯': '霍',
  '让-雅克·卢梭': '卢',
  '索尔·克里普克': '克',
  '彼得·辛格': '辛',
  '汉娜·阿伦特': '阿',
  '迈克尔·沃尔泽': '沃',
  '艾伦·图灵': '图',
  '纳尔逊·古德曼': '古',
  '威廉·詹姆斯': '詹',
  '恩里科·费米': '费',
  '路德维希·波兹曼': '波',
  '大卫·希尔伯特': '希',
  '哈里·法兰克福': '法',
  '格雷戈里·卡夫卡': '卡',
  '约翰·塞尔': '塞',
  '托马斯·库恩': '库',
  '阿马蒂亚·森': '森',
  '雅克·德里达': '德',
  '尼克·博斯特罗姆': '博',
  '以赛亚·伯林': '伯',
  '安瑟尔谟': '安',
  '皮浪': '皮',
  '佛陀（乔达摩·悉达多）': '佛',
  '孔子': '孔',
  '孟子': '孟',
  '庄子': '庄',
  '墨子': '墨',
  '伊壁鸠鲁': '伊',
  '柏拉图': '柏',
};

export function getPhilosopherInitials(name) {
  if (INITIALS_SPECIAL[name]) return INITIALS_SPECIAL[name];
  // Default: first Chinese character of the name
  return name.charAt(0);
}
