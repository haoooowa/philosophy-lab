import { useState, useRef } from 'react';
import { usePhilosophy } from '../../context/PhilosophyContext.jsx';
import styles from './DataManager.module.css';

export default function DataManager() {
  const { state, dispatch, interactionCount } = usePhilosophy();
  const fileInput = useRef(null);
  const [msg, setMsg] = useState(null);

  const exportData = () => {
    try {
      const blob = new Blob([JSON.stringify(state.interactions, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `philosophy-lab-backup-${new Date().toISOString().slice(0, 10)}.json`;
      a.click();
      URL.revokeObjectURL(url);
      showMsg('✅ 数据已导出', 'success');
    } catch {
      showMsg('❌ 导出失败', 'error');
    }
  };

  const importData = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const data = JSON.parse(ev.target.result);
        if (!Array.isArray(data)) throw new Error('格式错误');
        // Validate entries
        for (const item of data) {
          if (!item.experimentId || !item.choiceId || !item.schools) throw new Error('数据格式不符');
        }
        // Replace all interactions
        dispatch({ type: 'IMPORT_DATA', payload: data });
        showMsg(`✅ 已导入 ${data.length} 条记录`, 'success');
      } catch (err) {
        showMsg(`❌ 导入失败：${err.message}`, 'error');
      }
    };
    reader.readAsText(file);
    // Reset input so same file can be re-imported
    e.target.value = '';
  };

  const showMsg = (text, type) => {
    setMsg({ text, type });
    setTimeout(() => setMsg(null), 3000);
  };

  return (
    <div className={styles.wrap}>
      <h3 className={styles.heading}>💾 数据备份</h3>
      <p className={styles.desc}>
        你的所有选择保存在浏览器本地。导出 JSON 文件可以备份到其他位置，或迁移到另一台设备继续使用。
      </p>
      {msg && (
        <p className={`${styles.msg} ${msg.type === 'error' ? styles.msgErr : ''}`}>{msg.text}</p>
      )}
      <div className={styles.buttons}>
        <button onClick={exportData} className={styles.btnExport} disabled={interactionCount === 0}>
          📥 导出数据
        </button>
        <button onClick={() => fileInput.current?.click()} className={styles.btnImport}>
          📤 导入数据
        </button>
        <input
          ref={fileInput}
          type="file"
          accept=".json"
          onChange={importData}
          className={styles.fileInput}
        />
      </div>
      <p className={styles.hint}>
        当前共 {interactionCount} 条记录
      </p>
    </div>
  );
}
