import { useState } from 'react';
import styles from './DailyQuestion.module.css';

const questions = [
  '你今天有没有做过明知是错但认为值得的事？',
  '如果可以完全隐身一整天，你会做什么？',
  '你上一次改变主意是什么时候——关于一个重要的问题？',
  '如果幸福可以量化，你会愿意知道自己的"幸福分数"吗？',
  '有一个按钮可以让你忘记最痛苦的记忆——你会按吗？',
  '你是否曾经因为"大家都这样做"而做了自己觉得不对的事？',
  '如果死后有来生，你希望记得这一世的什么？',
  '你认为自己是一个自由的人吗？为什么？',
  '有一个人工智能完美模拟了你——它——是你吗？',
  '你做过的最不符合"你自己"的事是什么？',
  '如果可以问任何一个已故哲学家一个问题——你问谁，问什么？',
  '你认为宇宙在乎正义吗？',
  '你为陌生人做过的最好的事是什么——为什么？',
  '如果你能知道自己确切的死亡日期——你会想知道吗？',
  '你上一次感到真正的敬畏是什么时候？',
  '有一个机器可以让你体验任何人的生活一小时——你会试吗？',
  '你认为"诚实"和"善良"冲突时应该选哪个？',
  '如果可以撤销你人生中一个决定——你会撤销哪个？',
  '你对未来最深的恐惧是什么？',
  '你认为自己是一个好人吗——你的标准是什么？',
];

export default function DailyQuestion() {
  const [idx] = useState(() => Math.floor(Math.random() * questions.length));

  return (
    <div className={styles.card}>
      <span className={styles.label}>今日哲思</span>
      <p className={styles.question}>{questions[idx]}</p>
    </div>
  );
}
