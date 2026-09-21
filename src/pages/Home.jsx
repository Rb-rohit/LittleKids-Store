import { useState } from "react";
import { useNavigate } from "../router";
import { products, categories } from "../data";
import ProductCard from "../components/ProductCard";
import { Wave, FloatEmoji, Confetti } from "../components/Decorations";

const Home = ({addCart}) => {
  const [conf,setConf]=useState(false);
  const navigate=useNavigate();
  const setPage=(page)=>{ if(page!=="product") navigate({shop:"/shop"}[page] || "/"); };
  const setSel=(product)=>navigate(`/products/${product.id}`);
  const fire=()=>{setConf(true);setTimeout(()=>setConf(false),3500);};
  return (
    <div>
      <Confetti on={conf}/>
      {/* HERO */}
      <div style={{background:"linear-gradient(160deg,#FFF0F9 0%,#FFF9E7 35%,#F0F8FF 65%,#F5F0FF 100%)",minHeight:560,position:"relative",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",padding:"60px 24px"}}>
        <div style={{position:"absolute",top:-80,right:-80,width:400,height:400,animation:"wobbly 8s ease-in-out infinite",background:"linear-gradient(135deg,#FFD70018,#FF6BB518)"}}/>
        <div style={{position:"absolute",bottom:-60,left:-60,width:300,height:300,animation:"wobbly 6s ease-in-out infinite reverse",background:"linear-gradient(135deg,#54A0FF14,#A55EEA14)"}}/>
        <FloatEmoji/>
        <div style={{textAlign:"center",maxWidth:760,position:"relative",zIndex:2}}>
          <span className="bounce" style={{fontSize:76,display:"block",marginBottom:12}}>🎠</span>
          <div style={{display:"inline-flex",alignItems:"center",gap:8,background:"linear-gradient(135deg,#FFE4F4,#FFF8E7)",border:"2px dashed #FF9F43",borderRadius:50,padding:"8px 22px",marginBottom:24,fontFamily:"'Bubblegum Sans',cursive",fontSize:14,color:"#FF9F43",animation:"slideUp .6s ease both"}}>
            🌈 Welcome to the Happiest Store on Earth! 🌈
          </div>
          <h1 style={{fontFamily:"'Boogaloo',cursive",fontSize:"clamp(38px,7vw,82px)",lineHeight:1.1,marginBottom:22,animation:"slideUp .7s .1s ease both"}}>
            <span style={{background:"linear-gradient(135deg,#FF6BB5,#FF9F43)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Fun, Learning</span>
            {" & "}
            <span style={{background:"linear-gradient(135deg,#54A0FF,#A55EEA)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Smiles</span>
            <br/>
            <span style={{background:"linear-gradient(135deg,#48DB71,#00B894)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>for Every Child!</span>
            {" "}<span className="sparkle">✨</span>
          </h1>
          <p style={{fontFamily:"'Nunito',sans-serif",fontSize:18,color:"#777",maxWidth:560,margin:"0 auto 36px",lineHeight:1.8,animation:"slideUp .7s .2s ease both"}}>
            Thousands of safe, magical toys, adorable clothes, exciting books & accessories for children aged 0–10! 🧸👗📚🎒
          </p>
          <div style={{display:"flex",gap:16,justifyContent:"center",flexWrap:"wrap",animation:"slideUp .7s .3s ease both"}}>
            <button onClick={()=>setPage("shop")} className="btnpop" style={{background:"linear-gradient(135deg,#FF6BB5,#9B5FE0)",color:"#fff",border:"none",borderRadius:50,padding:"18px 44px",fontSize:20,fontFamily:"'Boogaloo',cursive",cursor:"pointer",boxShadow:"0 12px 32px #FF6BB555"}}>
              🛍️ Shop Now!
            </button>
            <button onClick={fire} className="btnpop" style={{background:"linear-gradient(135deg,#FFD700,#FF9F43)",color:"#fff",border:"none",borderRadius:50,padding:"18px 44px",fontSize:20,fontFamily:"'Boogaloo',cursive",cursor:"pointer",boxShadow:"0 12px 32px #FFD70055"}}>
              🎉 Surprise Me!
            </button>
          </div>
          <div style={{display:"flex",gap:20,justifyContent:"center",marginTop:44,flexWrap:"wrap"}}>
            {[["50K+","Happy Families","#FF6BB5"],["4.9 ★","Avg Rating","#FFD700"],["Free","Returns","#48DB71"],["100%","Child Safe","#54A0FF"]].map(([v,l,c])=>(
              <div key={l} style={{background:"#fff",borderRadius:20,padding:"14px 20px",textAlign:"center",boxShadow:`0 6px 20px ${c}22`,border:`2px solid ${c}33`}}>
                <div style={{fontFamily:"'Boogaloo',cursive",fontSize:24,color:c}}>{v}</div>
                <div style={{fontFamily:"'Nunito',sans-serif",fontSize:12,color:"#999",fontWeight:700}}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Wave fill="#fff"/>

      {/* CATEGORIES */}
      <div style={{background:"#fff",padding:"60px 24px"}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:48}}>
            <div style={{fontFamily:"'Bubblegum Sans',cursive",fontSize:14,color:"#FF6BB5",letterSpacing:3,textTransform:"uppercase",marginBottom:8}}>🎯 What are you looking for?</div>
            <h2 style={{fontFamily:"'Boogaloo',cursive",fontSize:50,background:"linear-gradient(135deg,#FF6BB5,#9B5FE0)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Shop by Category</h2>
            <div style={{fontSize:28,marginTop:4}}>🌟🌟🌟🌟</div>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(230px,1fr))",gap:24}}>
            {categories.map((c,i)=>(
              <div key={c.name} onClick={()=>setPage("shop")} className="card3d btnpop" style={{background:c.bg,borderRadius:32,padding:"44px 24px",textAlign:"center",cursor:"pointer",border:`3px solid ${c.c}33`,boxShadow:`0 8px 24px ${c.sh}`,position:"relative",overflow:"hidden"}}>
                <div style={{position:"absolute",top:-20,right:-20,width:80,height:80,borderRadius:"50%",background:`${c.c}18`}}/>
                <span style={{fontSize:68,display:"block",marginBottom:16,animation:`float ${3+i*.3}s ease-in-out infinite`,animationDelay:`${i*.2}s`}}>{c.emoji}</span>
                <div style={{fontFamily:"'Boogaloo',cursive",fontSize:28,color:"#222",marginBottom:6}}>{c.name}</div>
                <div style={{fontFamily:"'Nunito',sans-serif",color:"#888",fontSize:14,marginBottom:18}}>{c.count} amazing products!</div>
                <div style={{display:"inline-block",background:`linear-gradient(135deg,${c.c},${c.c}BB)`,color:"#fff",borderRadius:50,padding:"8px 24px",fontFamily:"'Bubblegum Sans',cursive",fontSize:15,boxShadow:`0 4px 14px ${c.sh}`}}>Explore! →</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Wave fill="#FFF8F0" flip/>

      {/* BEST SELLERS */}
      <div style={{background:"#FFF8F0",padding:"60px 24px"}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:48}}>
            <div style={{fontFamily:"'Bubblegum Sans',cursive",fontSize:14,color:"#FF9F43",letterSpacing:3,textTransform:"uppercase",marginBottom:8}}>🔥 Kids are loving these!</div>
            <h2 style={{fontFamily:"'Boogaloo',cursive",fontSize:50,background:"linear-gradient(135deg,#FF9F43,#FF6BB5)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Best Sellers</h2>
            <span className="spin" style={{fontSize:28,display:"inline-block"}}>⭐</span>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))",gap:24}}>
            {products.slice(0,4).map(p=><ProductCard key={p.id} p={p} onView={()=>{setSel(p);setPage("product");}} onAdd={addCart}/>)}
          </div>
          <div style={{textAlign:"center",marginTop:44}}>
            <button onClick={()=>setPage("shop")} className="btnpop" style={{background:"linear-gradient(135deg,#54A0FF,#A55EEA)",color:"#fff",border:"none",borderRadius:50,padding:"16px 50px",fontSize:20,fontFamily:"'Boogaloo',cursive",cursor:"pointer",boxShadow:"0 10px 28px #54A0FF44"}}>🎉 See All Products!</button>
          </div>
        </div>
      </div>
      <Wave fill="#EEF2FF"/>

      {/* OFFER BANNER */}
      <div style={{background:"linear-gradient(135deg,#FF6BB5,#9B5FE0,#54A0FF)",padding:"80px 24px",textAlign:"center",position:"relative",overflow:"hidden"}}>
        <div className="dotbg" style={{position:"absolute",inset:0,opacity:.5}}/>
        <div style={{position:"relative",zIndex:2}}>
          <span className="bounce" style={{fontSize:76,display:"block",marginBottom:16}}>🎁</span>
          <h2 style={{fontFamily:"'Boogaloo',cursive",fontSize:"clamp(32px,6vw,60px)",color:"#fff",marginBottom:16,textShadow:"0 4px 16px rgba(0,0,0,.15)"}}>Weekend MEGA Sale! 🎉</h2>
          <div style={{background:"rgba(255,255,255,.18)",backdropFilter:"blur(10px)",borderRadius:24,display:"inline-block",padding:"14px 36px",marginBottom:28,border:"2px solid rgba(255,255,255,.35)"}}>
            <span style={{fontFamily:"'Boogaloo',cursive",fontSize:30,color:"#FFD700",letterSpacing:4}}>KIDSDAY30</span>
            <span style={{fontFamily:"'Nunito',sans-serif",fontSize:15,color:"rgba(255,255,255,.85)",marginLeft:14}}>= 30% OFF on ₹4790+!</span>
          </div>
          <br/>
          <button onClick={()=>setPage("shop")} className="btnpop" style={{background:"linear-gradient(135deg,#FFD700,#FF9F43)",color:"#fff",border:"none",borderRadius:50,padding:"18px 54px",fontSize:22,fontFamily:"'Boogaloo',cursive",cursor:"pointer",boxShadow:"0 12px 36px rgba(0,0,0,.2)"}}>🛒 Grab the Deal!</button>
        </div>
      </div>
      <Wave fill="#F5F0FF" flip/>

      {/* TRUST */}
      <div style={{background:"#F5F0FF",padding:"60px 24px"}}>
        <div style={{maxWidth:900,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))",gap:24}}>
          {[{ic:"🛡️",t:"100% Safe",d:"CE certified & tested",c:"#FF6BB5"},{ic:"🚚",t:"Free Shipping",d:"Orders above ₹3355",c:"#54A0FF"},{ic:"🔄",t:"Easy Returns",d:"30-day hassle-free",c:"#48DB71"},{ic:"💬",t:"24/7 Support",d:"Always here for you",c:"#FF9F43"}].map(b=>(
            <div key={b.t} style={{background:"#fff",borderRadius:24,padding:"28px 18px",textAlign:"center",boxShadow:`0 6px 20px ${b.c}22`,border:`2px solid ${b.c}22`}}>
              <div style={{fontSize:44,marginBottom:12}}>{b.ic}</div>
              <div style={{fontFamily:"'Boogaloo',cursive",fontSize:20,color:b.c,marginBottom:6}}>{b.t}</div>
              <div style={{fontFamily:"'Nunito',sans-serif",fontSize:13,color:"#999"}}>{b.d}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
