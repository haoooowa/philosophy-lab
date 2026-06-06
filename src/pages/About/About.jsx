import { Link } from 'react-router-dom';
import styles from './About.module.css';

export default function About() {
  return (
    <div className={`container ${styles.page}`}>
      <header className={styles.header}>
        <h1 className={styles.title}>关于思想实验室</h1>
        <p className={styles.subtitle}>一个面向哲学爱好者的互动式思想实验平台</p>
      </header>

      <section className={styles.section}>
        <h2>什么是思想实验？</h2>
        <div className={styles.prose}>
          <p>
            思想实验是哲学中最古老也最有魅力的工具之一。它是一种'实验室中的实验'——不需要仪器、不需要数据，只需要在想象中构建一个场景，然后跟随逻辑推理，揭示隐藏的直觉、悖论和洞见。
          </p>
          <p>
            从柏拉图的洞穴寓言到庄子的梦蝶，从笛卡尔的恶魔到普特南的缸中之脑，思想实验跨越了文明和时代，持续地挑战着我们对世界、自我、知识和道德的理解。
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2>这个网站的初衷</h2>
        <div className={styles.prose}>
          <p>
            思想实验室旨在将哲学思想实验以互动的方式呈现给每一位好奇的探索者。你不仅仅是阅读——你将做出选择，而这些选择将揭示你与不同哲学传统的共鸣。
          </p>
          <p>
            通过'哲学罗盘'功能，你可以看到自己的选择如何勾勒出一幅哲学倾向的图谱。这是一个了解自己的旅程——很多时候，我们以为自己所相信的，与我们在思想实验中的选择并不一致。
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2>哲学罗盘解析</h2>
        <div className={styles.prose}>
          <p>哲学罗盘涵盖十个核心维度：</p>
          <ul className={styles.list}>
            <li><strong>功利主义</strong>——以最大多数人的最大幸福为判断标准</li>
            <li><strong>道义论</strong>——强调道德规则和义务的绝对性</li>
            <li><strong>美德伦理学</strong>——关注人的品格和德性培养</li>
            <li><strong>存在主义</strong>——强调个人自由与意义创造</li>
            <li><strong>怀疑论</strong>——对知识的确定性保持审慎</li>
            <li><strong>理性主义</strong>——以理性为知识的最可靠来源</li>
            <li><strong>经验主义</strong>——以感官经验为知识的基础</li>
            <li><strong>唯物主义</strong>——认为物质是基本的实在</li>
            <li><strong>唯心主义</strong>——强调心灵或意识的首要地位</li>
            <li><strong>契约论</strong>——以社会契约的角度思考正义</li>
          </ul>
          <p>请注意：哲学罗盘只是一个启发性的工具，旨在引导你反思自己的直觉和信念。它不是一个严格的性格测试，每一个思想实验和每一种哲学传统都比一个标签要丰富和复杂得多。</p>
        </div>
      </section>

      <section className={styles.section}>
        <h2>致谢</h2>
        <div className={styles.prose}>
          <p>感谢古往今来的哲学家们，他们的思想穿越时空，持续地启发着我们。特别感谢：</p>
          <p>
            柏拉图、亚里士多德、庄子、笛卡尔、休谟、康德、边沁、密尔、尼采、罗尔斯、普特南、塞尔、诺齐克、汤姆逊——以及所有那些用思想实验邀请我们'与哲学一起思考'的人们。
          </p>
        </div>
      </section>

      <div className={styles.cta}>
        <Link to="/browse" className={styles.ctaBtn}>
          开始探索思想实验 →
        </Link>
      </div>
    </div>
  );
}
