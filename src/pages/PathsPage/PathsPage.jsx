import { Link } from 'react-router-dom';
import styles from './PathsPage.module.css';

const paths = [
  { title: '怀疑论之旅', icon: '🔍', desc: '我们能知道任何事吗？从庄子的蝴蝶梦到笛卡尔的恶魔，从缸中之脑到皮浪的悬搁——跟随怀疑论者一路追问知识的根基。', ids: ['brain-in-vat','evil-demon','pyrrho-skepticism','dream-argument'], count: 4 },
  { title: '正义的边界', icon: '⚖️', desc: '什么是公平？牺牲一人救五人合理吗？无知之幕背后的正义原则是什么？从电车难题到能力进路——探索正义的极限。', ids: ['trolley-problem','veil-of-ignorance','wilt-chamberlain','sen-capability'], count: 4 },
  { title: '意识之谜', icon: '🧠', desc: '物理过程为什么会产生主观体验？蝙蝠的感觉、玛丽的黑白屋、哲学僵尸、中文屋——意识科学最大的谜题。', ids: ['nagel-bat','marys-room','philosophical-zombies','chinese-room','explanatory-gap'], count: 5 },
  { title: '自由意志', icon: '🔓', desc: '我们真的有选择吗？布里丹的驴、法兰克福的芯片、后果论证和利贝特的实验——决定论与自由的终极对撞。', ids: ['buridans-ass','frankfurt-cases','van-inwagen-consequence','libet-experiment'], count: 4 },
  { title: '东方智慧', icon: '🏯', desc: '庄子梦见蝴蝶、公孙龙的白马非马、孟子的恻隐之心、墨子的兼爱与佛陀的无我——东方哲学独有的思想实验。', ids: ['zhuangzi-butterfly','white-horse','mencius-child-well','mozi-universal-love','buddha-self-no'], count: 5 },
  { title: '合作与博弈', icon: '🤝', desc: '囚徒困境、猎鹿博弈、公地悲剧、最后通牒——从博弈论视角理解道德和合作的进化根源。', ids: ['prisoner-dilemma','stag-hunt','tragedy-of-commons','ultimatum-game','reciprocal-altruism'], count: 5 },
  { title: '自我同一性', icon: '🪞', desc: '什么使我成为我？忒修斯之船、记忆移植、分裂大脑、叙事自我——个人同一性的谜题。', ids: ['ship-of-theseus','ship-of-theseus-v2','parfits-fission','narrative-self','animalism-personal-id'], count: 5 },
  { title: '语言与意义', icon: '💬', desc: '词语如何指向世界？从公孙龙的白马到弗雷格的晨星、普特南的孪生地球、伽达默尔的视域融合。', ids: ['white-horse','frege-sense-reference','twin-earth','davidson-radical-interp','gadamer-horizon'], count: 5 },
  { title: '权力与正义', icon: '🏛️', desc: '自然状态到利维坦、全景监狱到无知之幕、平庸之恶——政府合法性的根源与权力的边界。', ids: ['state-of-nature','hobbes-leviathan','panopticon','veil-of-ignorance','arendt-banality-evil'], count: 5 },
  { title: '生命的意义', icon: '🌌', desc: '体验机器、永恒轮回、伊壁鸠鲁论死亡、尼采的末人——关于为什么活着的终极追问。', ids: ['experience-machine','nietzsche-eternal-return','epicurus-death','nietzsche-last-man'], count: 5 },
  { title: '科学与真理', icon: '🔬', desc: '可证伪性、范式转移、悲观归纳、实用主义真理——科学知识如何积累？我们如何辨别真伪？', ids: ['falsifiability','kuhn-paradigm','pessimistic-induction','james-pragmatic-truth'], count: 4 },
  { title: '因果之谜', icon: '⛓️', desc: '休谟说因果只是习惯、刘易斯用反事实定义因果、珀尔建因果图——什么是因果关系？', ids: ['hume-causation','lewis-counterfactual-causation','pearl-causal-models','manipulability-causation','anscombe-causation'], count: 5 },
];

export default function PathsPage() {
  return (
    <div className={`container ${styles.page}`}>
      <header className={styles.header}>
        <h1>思想之旅</h1>
        <p>12 条精选学习路径，每条路径按顺序引导你系统探索一个哲学主题</p>
      </header>
      <div className={styles.grid}>
        {paths.map((path) => (
          <Link key={path.title} to={`/browse?path=${path.ids.join(',')}`} className={styles.card}>
            <span className={styles.icon}>{path.icon}</span>
            <div>
              <h2>{path.title}</h2>
              <p className={styles.desc}>{path.desc}</p>
              <span className={styles.count}>{path.count} 个实验</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
