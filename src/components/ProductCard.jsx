import { useState } from "react";
import Stars from "./Stars";

// One product tile (used on Home and Shop). Click it to open the product page.
const ProductCard = ({p,onView,onAdd}) => {
  const [added,setAdded]=useState(false);
  const [liked,setLiked]=useState(false);
  return (
    <div className="card3d" onClick={onView} style={{background:p.bg,borderRadius:28,overflow:"hidden",cursor:"pointer",border:`3px solid ${p.ac}33`,boxShadow:`0 8px 24px ${p.ac}18`,position:"relative"}}>
      {p.badge&&<div style={{position:"absolute",top:12,left:12,zIndex:2,background:`linear-gradient(135deg,${p.ac},${p.ac}CC)`,color:"#fff",borderRadius:50,padding:"4px 14px",fontFamily:"'Bubblegum Sans',cursive",fontSize:12,boxShadow:`0 4px 12px ${p.ac}55`}}>{p.badge}</div>}
      <button onClick={e=>{e.stopPropagation();setLiked(!liked);}} style={{position:"absolute",top:12,right:12,zIndex:2,background:"#fff",border:"none",borderRadius:"50%",width:36,height:36,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:19,boxShadow:"0 2px 8px rgba(0,0,0,.1)"}}>
        <span style={{color:liked?"#FF6BB5":"#ccc"}}>{liked?"♥":"♡"}</span>
      </button>
      <div style={{height:200,overflow:"hidden",position:"relative"}}>
        <img src={p.img} alt={p.name} style={{width:"100%",height:"100%",objectFit:"cover",transition:"transform .5s"}}
          onMouseEnter={e=>e.target.style.transform="scale(1.12)"}
          onMouseLeave={e=>e.target.style.transform="scale(1)"}/>
        <div style={{position:"absolute",bottom:0,left:0,right:0,height:64,background:`linear-gradient(transparent,${p.bg})`}}/>
      </div>
      <div style={{padding:"14px 18px 20px"}}>
        <div style={{fontFamily:"'Bubblegum Sans',cursive",fontSize:12,color:p.ac,letterSpacing:1,marginBottom:4}}>{p.cat} • Ages {p.age}</div>
        <div style={{fontFamily:"'Boogaloo',cursive",fontSize:19,color:"#222",marginBottom:6,lineHeight:1.3}}>{p.name}</div>
        <Stars r={p.rating} ac={p.ac}/>
        <div style={{fontFamily:"'Nunito',sans-serif",fontSize:12,color:"#aaa",margin:"4px 0 14px"}}>{p.rev} happy reviews 🌟</div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:8,flexWrap:"wrap"}}>
          <div><span style={{fontFamily:"'Boogaloo',cursive",fontSize:26,color:"#222"}}>₹{p.price}</span><span style={{fontFamily:"'Nunito',sans-serif",fontSize:13,color:"#bbb",textDecoration:"line-through",marginLeft:6}}>₹{(p.price*1.3).toFixed(2)}</span></div>
          <button className="btnpop" onClick={e=>{e.stopPropagation();onAdd(p);setAdded(true);setTimeout(()=>setAdded(false),1800);}} style={{background:added?`linear-gradient(135deg,#48DB71,#00B894)`:`linear-gradient(135deg,${p.ac},${p.ac}CC)`,color:"#fff",border:"none",borderRadius:50,padding:"9px 18px",fontFamily:"'Bubblegum Sans',cursive",fontSize:13,boxShadow:`0 4px 14px ${p.ac}44`,whiteSpace:"nowrap",transition:"background .3s"}}>
            {added?"✓ Added! 🎉":"🛒 Add"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
