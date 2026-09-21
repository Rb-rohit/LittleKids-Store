import { useState } from "react";
import { useNavigate } from "../router";
import { categories } from "../data";

const Footer = () => {
  const [email,setEmail]=useState("");
  const [sub,setSub]=useState(false);
  const navigate=useNavigate();
  const setPage=(page)=>navigate({home:"/",shop:"/shop",about:"/about",contact:"/contact"}[page] || "/");
  return (
    <footer style={{background:"linear-gradient(160deg,#1A1A2E,#16213E,#0F3460)",color:"#fff",padding:"60px 24px 32px",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",inset:0,backgroundImage:"radial-gradient(circle,rgba(255,255,255,.15) 1px,transparent 1px)",backgroundSize:"36px 36px",opacity:.5}}/>
      <div style={{maxWidth:1200,margin:"0 auto",position:"relative",zIndex:2}}>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:40,marginBottom:48}}>
          <div>
            <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:16}}>
              <span className="wiggle" style={{fontSize:34,display:"block"}}>🌟</span>
              <span style={{fontFamily:"'Boogaloo',cursive",fontSize:24,background:"linear-gradient(135deg,#FF6BB5,#FFD700)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>LittleKids Store</span>
            </div>
            <p style={{fontFamily:"'Nunito',sans-serif",color:"#64748B",fontSize:14,lineHeight:1.8,marginBottom:20}}>Bringing joy, learning & smiles to every child aged 0–10. Loved by 50K+ families. 💛</p>
            <div style={{display:"flex",gap:10}}>
              {["📘","📸","🐦","▶️"].map((ic,i)=>(
                <div key={i} className="btnpop" style={{width:40,height:40,borderRadius:"50%",background:"rgba(255,255,255,.08)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontSize:18,border:"1px solid rgba(255,255,255,.15)"}}
                  onMouseEnter={e=>e.currentTarget.style.background="rgba(255,107,181,.3)"}
                  onMouseLeave={e=>e.currentTarget.style.background="rgba(255,255,255,.08)"}>{ic}</div>
              ))}
            </div>
          </div>
          <div>
            <div style={{fontFamily:"'Boogaloo',cursive",fontSize:20,color:"#FF9F43",marginBottom:16}}>Quick Links</div>
            {[["home","🏠 Home"],["shop","🛍️ Shop All"],["about","💛 About Us"],["contact","📬 Contact"]].map(([pg,l])=>(
              <div key={pg} onClick={()=>setPage(pg)} style={{fontFamily:"'Nunito',sans-serif",color:"#475569",fontSize:15,marginBottom:10,cursor:"pointer",transition:"color .2s"}}
                onMouseEnter={e=>e.target.style.color="#FF6BB5"} onMouseLeave={e=>e.target.style.color="#475569"}>{l}</div>
            ))}
          </div>
          <div>
            <div style={{fontFamily:"'Boogaloo',cursive",fontSize:20,color:"#54A0FF",marginBottom:16}}>Categories</div>
            {categories.map(c=>(
              <div key={c.name} onClick={()=>setPage("shop")} style={{fontFamily:"'Nunito',sans-serif",color:"#475569",fontSize:15,marginBottom:10,cursor:"pointer",display:"flex",alignItems:"center",gap:8,transition:"color .2s"}}
                onMouseEnter={e=>e.currentTarget.style.color=c.c} onMouseLeave={e=>e.currentTarget.style.color="#475569"}>{c.emoji} {c.name}</div>
            ))}
          </div>
          <div>
            <div style={{fontFamily:"'Boogaloo',cursive",fontSize:20,color:"#48DB71",marginBottom:8}}>Newsletter 💌</div>
            <p style={{fontFamily:"'Nunito',sans-serif",color:"#475569",fontSize:14,marginBottom:16}}>Deals, new arrivals & parenting tips!</p>
            {sub?<div style={{background:"rgba(72,219,113,.15)",border:"1px solid #48DB71",borderRadius:14,padding:"12px 16px",fontFamily:"'Bubblegum Sans',cursive",fontSize:15,color:"#48DB71"}}>🎉 You're subscribed!</div>:(
              <div style={{display:"flex",gap:8}}>
                <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="your@email.com" style={{flex:1,padding:"10px 14px",borderRadius:14,border:"1px solid rgba(255,255,255,.15)",background:"rgba(255,255,255,.07)",color:"#fff",fontFamily:"'Nunito',sans-serif",fontSize:14,outline:"none"}}/>
                <button onClick={()=>{if(email)setSub(true);}} className="btnpop" style={{background:"linear-gradient(135deg,#FF6BB5,#9B5FE0)",border:"none",borderRadius:14,padding:"10px 18px",cursor:"pointer",fontFamily:"'Boogaloo',cursive",fontSize:16,color:"#fff"}}>→</button>
              </div>
            )}
          </div>
        </div>
        <div style={{borderTop:"1px solid rgba(255,255,255,.08)",paddingTop:24,display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:10}}>
          <span style={{fontFamily:"'Nunito',sans-serif",color:"#334155",fontSize:13}}>© 2025 LittleKids Store. Made with 💛 for every child on Earth.</span>
          <span style={{fontFamily:"'Nunito',sans-serif",color:"#334155",fontSize:13}}>Privacy · Terms · Sitemap</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
