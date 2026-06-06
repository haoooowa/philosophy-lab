import { useState } from 'react';

const G = '#d4b87a', R = '#c47282', S = '#92b0a0', M = '#8a8790', A = '#f0c060';
const box = { maxWidth:520, margin:'0 auto 20px', padding:14, border:'1px solid rgba(212,184,122,0.3)', borderRadius:10, background:'rgba(20,20,45,0.35)', overflow:'hidden' };

// ══ Interactive: Trolley Problem ══
function Trolley() {
  const [diverted, setDiverted] = useState(false);
  const [result, setResult] = useState(null);
  const pull = () => { setDiverted(true); setResult('pull'); };
  const noAct = () => { setDiverted(false); setResult('none'); };
  const reset = () => { setDiverted(false); setResult(null); };
  const trolleyX = diverted ? 120 : 260;
  return (
    <div style={box}>
      <div style={{textAlign:'center',fontSize:11,color:G,marginBottom:8}}>🚃 电车难题 · 交互图解</div>
      <svg viewBox="0 0 400 170" fill="none">
        <rect x="10" y="55" width="380" height="5" rx="3" fill={M} opacity=".3"/>
        <rect x="10" y="105" width="380" height="3" rx="2" fill={M} opacity=".15"/>
        <rect x="80" y="140" width="240" height="6" rx="3" fill={G} opacity=".4"/>
        {/* Trolley - animates position */}
        <g transform={`translate(${trolleyX-130},0)`}>
          <rect x="130" y="20" width="55" height="28" rx="5" fill={G} opacity=".85"/>
          <circle cx="145" cy="50" r="5" fill="#0d0d1a" stroke={G} strokeWidth="2"/>
          <circle cx="170" cy="50" r="5" fill="#0d0d1a" stroke={G} strokeWidth="2"/>
        </g>
        {/* People on tracks */}
        {!diverted && [1,2,3,4,5].map(i=>(<g key={i}><circle cx={260+i*22} cy="68" r="7" fill={R} opacity={result==='none'?.9:.7}/><line x1={260+i*22} y1="75" x2={260+i*22} y2="84" stroke={R} strokeWidth="2" opacity={result==='none'?.9:.7}/></g>))}
        {diverted && <g><circle cx="145" cy="118" r="7" fill={S} opacity={result==='pull'?.9:.7}/><line x1="145" y1="125" x2="145" y2="134" stroke={S} strokeWidth="2" opacity={result==='pull'?.9:.7}/></g>}
        {/* Result text */}
        {result==='none'&&<text x="310" y="45" fill={R} fontSize="10" fontWeight="bold">5人死亡</text>}
        {result==='pull'&&<text x="55" y="118" fill={S} fontSize="10" fontWeight="bold">1人死亡</text>}
      </svg>
      <div style={{display:'flex',gap:8,justifyContent:'center',marginTop:8}}>
        <button onClick={pull} disabled={!!result} style={{padding:'6px 16px',border:'1px solid '+G,borderRadius:20,background:result?'none':'rgba(210,184,122,0.1)',color:G,cursor:result?'default':'pointer',fontSize:13}}>扳道岔（救五人杀一人）</button>
        <button onClick={noAct} disabled={!!result} style={{padding:'6px 16px',border:'1px solid '+M,borderRadius:20,background:result?'none':'rgba(255,255,255,0.03)',color:M,cursor:result?'default':'pointer',fontSize:13}}>不干预（五人死亡）</button>
        <button onClick={reset} style={{padding:'6px 12px',border:'none',background:'none',color:M,cursor:'pointer',fontSize:11}}>重置</button>
      </div>
    </div>
  );
}

// ══ Interactive: Prisoner's Dilemma ══
function Prisoner() {
  const [a, setA] = useState(null);
  const [b, setB] = useState(null);
  const reset = () => { setA(null); setB(null); };
  const result = a && b ? (a==='c'&&b==='c'?'各1年（最优合作）':a==='b'&&b==='b'?'各5年（最差）':(a==='b'?'A背叛B合作:A释放B判10年':'B背叛A合作:A判10年B释放')):'选择双方策略';
  return (
    <div style={box}>
      <div style={{textAlign:'center',fontSize:11,color:G,marginBottom:8}}>🔐 囚徒困境 · 交互图解</div>
      <svg viewBox="0 0 400 140" fill="none">
        <rect x="5" y="5" width="390" height="130" rx="6" stroke={M} strokeWidth=".5" opacity=".3"/>
        <line x1="180" y1="20" x2="180" y2="120" stroke={G} strokeWidth="1"/>
        <line x1="20" y1="75" x2="380" y2="75" stroke={G} strokeWidth="1"/>
        <text x="100" y="14" fill={M} fontSize="9" textAnchor="middle">A沉默（合作）</text>
        <text x="290" y="14" fill={M} fontSize="9" textAnchor="middle">A背叛</text>
        <text x="12" y="50" fill={M} fontSize="8">B沉默</text>
        <text x="12" y="112" fill={M} fontSize="8">B背叛</text>
        <text x="100" y="50" fill="#86c990" fontSize="13" textAnchor="middle">各1年 ✓</text>
        <text x="290" y="50" fill={R} fontSize="10" textAnchor="middle">A:0 B:10年</text>
        <text x="100" y="108" fill={R} fontSize="10" textAnchor="middle">A:10年 B:0</text>
        <text x="290" y="108" fill="#d49090" fontSize="13" textAnchor="middle">各5年 ✗</text>
      </svg>
      <div style={{display:'flex',gap:8,justifyContent:'center',marginTop:8,flexWrap:'wrap'}}>
        <select value={a||''} onChange={e=>setA(e.target.value||null)} style={{padding:'4px 8px',background:'#111122',border:'1px solid '+G,borderRadius:6,color:G,fontSize:12}}>
          <option value="">A的策略</option><option value="c">A: 沉默合作</option><option value="b">A: 背叛</option></select>
        <select value={b||''} onChange={e=>setB(e.target.value||null)} style={{padding:'4px 8px',background:'#111122',border:'1px solid '+G,borderRadius:6,color:G,fontSize:12}}>
          <option value="">B的策略</option><option value="c">B: 沉默合作</option><option value="b">B: 背叛</option></select>
        <button onClick={reset} style={{padding:'4px 12px',border:'none',background:'none',color:M,cursor:'pointer',fontSize:11}}>重置</button>
      </div>
      <div style={{textAlign:'center',marginTop:8,fontSize:13,color:a&&b?A:M}}>{result}</div>
    </div>
  );
}

// ══ Interactive: Veil of Ignorance ══
function Veil() {
  const [revealed, setRevealed] = useState(false);
  return (
    <div style={box}>
      <div style={{textAlign:'center',fontSize:11,color:G,marginBottom:8}}>🎭 无知之幕 · 交互图解</div>
      <svg viewBox="0 0 400 130" fill="none">
        <path d="M150 15 Q200 70 150 115" stroke={G} strokeWidth="2" fill="none" opacity={revealed?.4:.6}/>
        <path d="M250 15 Q200 70 250 115" stroke={G} strokeWidth="2" fill="none" opacity={revealed?.4:.6}/>
        <line x1="200" y1="15" x2="200" y2="125" stroke={G} strokeWidth=".8" opacity={revealed?.1:.25}/>
        <circle cx="200" cy="80" r="13" fill={G} opacity={revealed?.1:.25}/>
        <text x="200" y="85" textAnchor="middle" fontSize="13">🧑</text>
        {!revealed?<text x="200" y="55" fill="#f0c060" fontSize="8" textAnchor="middle">我不知道我的身份…</text>:<text x="200" y="55" fill={G} fontSize="8" textAnchor="middle">幕布揭开——我是富人!</text>}
        {revealed&&<><rect x="60" y="103" width="40" height="22" rx="4" fill={G} opacity=".2"/><text x="80" y="118" textAnchor="middle" fontSize="13">💰</text><rect x="160" y="103" width="40" height="22" rx="4" fill={R} opacity=".2"/><text x="180" y="118" textAnchor="middle" fontSize="13">🏚️</text><rect x="260" y="103" width="40" height="22" rx="4" fill={S} opacity=".2"/><text x="280" y="118" textAnchor="middle" fontSize="13">🏥</text></>}
      </svg>
      <div style={{textAlign:'center',marginTop:8}}>
        <button onClick={()=>setRevealed(!revealed)} style={{padding:'6px 20px',border:'1px solid '+G,borderRadius:20,background:'rgba(210,184,122,0.1)',color:G,cursor:'pointer',fontSize:13}}>
          {revealed?'回到幕布后':'揭开无知之幕'}
        </button>
      </div>
      <div style={{textAlign:'center',marginTop:6,fontSize:12,color:revealed?R:M}}>
        {revealed?'幕布揭开后——你发现自己恰好是富人。你设计的社会规则——对你公平吗？':'在不知道你社会身份的情况下——你会为所有人设计什么样的规则？'}
      </div>
    </div>
  );
}

// ══ Simple animated: Brain in Vat ══
function Brain() {
  const [signal, setSignal] = useState(false);
  return (
    <div style={box} onClick={()=>setSignal(!signal)}>
      <div style={{textAlign:'center',fontSize:11,color:G,marginBottom:8,cursor:'pointer'}}>🧪 缸中之脑 · 点击发送信号</div>
      <svg viewBox="0 0 400 140" fill="none">
        <rect x="130" y="35" width="130" height="70" rx="10" stroke={G} strokeWidth="2.5"/>
        <rect x="130" y="55" width="130" height="50" fill={G} opacity=".08"/>
        <ellipse cx="195" cy="50" rx="22" ry="15" fill={R} opacity=".4"/>
        <line x1="195" y1="35" x2="195" y2="18" stroke={G} strokeWidth="1.5"/>
        <rect x="160" y="6" width="70" height="16" rx="3" stroke={M} strokeWidth="1"/>
        <text x="195" y="17" textAnchor="middle" fontSize="7" fill={M}>超级计算机</text>
        <path d="M165 12 Q170 7 175 12 T185 12 T195 12" stroke={G} strokeWidth="1" fill="none"/>
        {signal&&<><circle cx="195" cy="90" r="18" fill={G} opacity=".15" stroke={G} strokeWidth="1" strokeDasharray="4 2"/><text x="195" y="95" textAnchor="middle" fontSize="8" fill={G}>信号已发送</text><text x="195" y="107" textAnchor="middle" fontSize="7" fill={M}>大脑体验到了"看到一棵树"</text></>}
        {!signal&&<text x="195" y="100" textAnchor="middle" fontSize="8" fill={M}>点击大脑发送信号</text>}
      </svg>
    </div>
  );
}

const MAP = {
  'trolley-problem': Trolley,
  'prisoner-dilemma': Prisoner,
  'brain-in-vat': Brain,
  'veil-of-ignorance': Veil,
};

export default function ExperimentIllustration({ experiment }) {
  if (!experiment) return null;
  const Comp = MAP[experiment.id];
  if (Comp) return <Comp/>;
  // Fallback: simple abstract diagram
  return (
    <div style={box}>
      <svg viewBox="0 0 400 50" fill="none">
        <circle cx="200" cy="25" r="18" stroke={G} strokeWidth="1" opacity=".3"/>
        <circle cx="200" cy="25" r="8" stroke={G} strokeWidth=".5" opacity=".2" strokeDasharray="3 3"/>
        <circle cx="200" cy="25" r="2" fill={G} opacity=".4"/>
      </svg>
    </div>
  );
}
