import { useState } from "react";
import { useLocation, useNavigate } from "../router";

// Top announcement bar + sticky navigation with cart button
const Navbar = ({cnt}) => {
  const [open,setOpen]=useState(false);
  const navigate=useNavigate();
  const { pathname }=useLocation();
  const page={"/":"home","/shop":"shop","/about":"about","/contact":"contact","/cart":"cart"}[pathname] || "";
  const setPage=(next)=>navigate({home:"/",shop:"/shop",about:"/about",contact:"/contact",cart:"/cart"}[next] || "/");
  const links=[["🏠","Home","home"],["🛍️","Shop","shop"],["💛","About","about"],["📬","Contact","contact"]];
  return (
    <>
      <div style={{background:"linear-gradient(90deg,#FF6BB5,#9B5FE0,#54A0FF,#48DB71,#FF9F43,#FF6BB5)",backgroundSize:"200%",padding:"7px 0",overflow:"hidden",animation:"marqueeGrad 6s linear infinite"}}>
        <div style={{animation:"marquee 20s linear infinite",whiteSpace:"nowrap",display:"inline-block"}}>
          {["🎉 FREE SHIPPING on orders 3355+","🌈 NEW ARRIVALS weekly","⭐ 50K+ happy families","🎁 Code KIDSDAY30 = 30% OFF","🦄 Safe & certified products","🎠 Fun for ages 0–10"].concat(["🎉 FREE SHIPPING on orders ₹3355+","🌈 NEW ARRIVALS weekly","⭐ 50K+ happy families"]).map((t,i)=><span key={i} style={{fontFamily:"'Nunito',sans-serif",fontWeight:800,fontSize:13,color:"#fff",margin:"0 36px"}}>{t}</span>)}
        </div>
      </div>
      <nav style={{background:"rgba(255,255,255,.97)",backdropFilter:"blur(20px)",borderBottom:"4px solid",borderImage:"linear-gradient(90deg,#FF6BB5,#FFD700,#54A0FF,#48DB71) 1",padding:"0 28px",position:"sticky",top:0,zIndex:100}}>
        <div style={{maxWidth:1200,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",height:70}}>
          <div onClick={()=>setPage("home")} className="btnpop" style={{cursor:"pointer",display:"flex",alignItems:"center",gap:10}}>
            <span className="wiggle" style={{fontSize:36,display:"block"}}>🌟</span>
            <div>
              <div style={{fontFamily:"'Boogaloo',cursive",fontSize:26,background:"linear-gradient(135deg,#FF6BB5,#9B5FE0)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",lineHeight:1}}>LittleKids</div>
              <div style={{fontFamily:"'Nunito',sans-serif",fontSize:9,color:"#FF9F43",fontWeight:900,letterSpacing:3,textTransform:"uppercase"}}>✨ STORE ✨</div>
            </div>
          </div>
          <div className="desklinks" style={{display:"flex",gap:4}}>
            {links.map(([ic,l,pg])=>(
              <button key={pg} onClick={()=>setPage(pg)} className="btnpop" style={{background:page===pg?"linear-gradient(135deg,#FF6BB5,#FF9F43)":"transparent",border:"none",cursor:"pointer",padding:"8px 20px",borderRadius:50,fontFamily:"'Bubblegum Sans',cursive",fontSize:16,color:page===pg?"#fff":"#555",boxShadow:page===pg?"0 4px 16px #FF6BB555":"none",transition:"all .2s"}}>{ic} {l}</button>
            ))}
          </div>
          <div style={{display:"flex",alignItems:"center",gap:10}}>
            <button onClick={()=>setPage("cart")} className="btnpop" style={{position:"relative",background:"linear-gradient(135deg,#FFE4F4,#FFCCE8)",border:"2px solid #FF6BB5",cursor:"pointer",width:48,height:48,borderRadius:"50%",fontSize:22,animation:"pulseGlow 2.5s ease-in-out infinite"}}>🛒
              {cnt>0&&<span style={{position:"absolute",top:-6,right:-6,background:"linear-gradient(135deg,#FF6BB5,#9B5FE0)",color:"#fff",width:22,height:22,borderRadius:"50%",fontSize:11,fontWeight:900,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Nunito',sans-serif"}}>{cnt}</span>}
            </button>
            <button id="hambtn" onClick={()=>setOpen(!open)} className="mobham btnpop" style={{display:"none",background:"none",border:"2px solid #FF6BB5",borderRadius:12,padding:"6px 12px",fontSize:22,cursor:"pointer"}}>☰</button>
          </div>
        </div>
        {open&&<div style={{background:"#fff",borderTop:"2px dashed #FFE4F4",padding:"12px 24px 20px"}}>
          {links.map(([ic,l,pg])=><div key={pg} onClick={()=>{setPage(pg);setOpen(false);}} style={{padding:"12px 0",fontFamily:"'Bubblegum Sans',cursive",fontSize:18,color:"#555",cursor:"pointer",borderBottom:"1px dashed #FFE4F4",display:"flex",alignItems:"center",gap:8}}>{ic} {l}</div>)}
        </div>}
      </nav>
    </>
  );
};

export default Navbar;
