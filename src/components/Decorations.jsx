// Small decorative pieces used on several pages.

// Curvy divider between page sections
export const Wave = ({fill="#fff",flip=false}) => (
  <div style={{lineHeight:0,transform:flip?"scaleY(-1)":"none"}}>
    <svg viewBox="0 0 1440 60" style={{display:"block",width:"100%"}}>
      <path fill={fill} d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,20 1440,30 L1440,60 L0,60 Z"/>
    </svg>
  </div>
);

// Colorful paper pieces that fall when "Surprise Me!" is clicked
export const Confetti = ({on}) => {
  if(!on) return null;
  const items = Array.from({length:30},(_,i)=>({
    id:i, left:Math.random()*100, delay:Math.random()*1.5,
    dur:2+Math.random()*2, size:12+Math.random()*10,
    color:["#FF6BB5","#FFD700","#48DB71","#54A0FF","#FF9FF3","#FF9F43","#A55EEA"][i%7],
    shape:["●","★","♥","▲","■","◆"][i%6],
  }));
  return (
    <div style={{position:"fixed",inset:0,pointerEvents:"none",zIndex:9999,overflow:"hidden"}}>
      {items.map(p=>(
        <div key={p.id} style={{position:"absolute",left:`${p.left}%`,top:"-30px",color:p.color,fontSize:p.size,animation:`confettiFall ${p.dur}s ${p.delay}s linear forwards`}}>{p.shape}</div>
      ))}
    </div>
  );
};

// Faint floating emojis in page headers
export const FloatEmoji = () => {
  const e=["🌈","⭐","🎈","🎀","🦄","🍭","🎁","🌟","🦋","🎠","🌸","🎉"];
  return (
    <div style={{position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none",zIndex:1}}>
      {e.map((em,i)=>(
        <span key={i} style={{position:"absolute",left:`${4+i*8}%`,top:`${8+Math.sin(i)*18}%`,fontSize:22+Math.sin(i*1.5)*8,opacity:.3,animation:`float ${3+i*.35}s ease-in-out infinite`,animationDelay:`${i*.25}s`,display:"block",transform:`rotate(${i%2?12:-12}deg)`}}>{em}</span>
      ))}
    </div>
  );
};
