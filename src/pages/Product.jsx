import { useState } from "react";
import { useNavigate } from "../router";
import { products } from "../data";
import Stars from "../components/Stars";

const Product = ({addCart,productId}) => {
  const [qty,setQty]=useState(1);
  const [added,setAdded]=useState(false);
  const navigate=useNavigate();
  const p=products.find((product)=>String(product.id)===productId);
  const setPage=(page)=>navigate({shop:"/shop",cart:"/cart"}[page] || "/");
  if(!p) return null;
  const reviews=[
    {n:"Sarah M.",r:5,t:"My daughter absolutely LOVES this! Great quality and super safe. Will buy again!",d:"Mar 2025",c:"#FF6BB5"},
    {n:"James K.",r:4,t:"Arrived quickly and exactly as described. The kids were thrilled beyond words!",d:"Feb 2025",c:"#54A0FF"},
    {n:"Priya L.",r:5,t:"Perfect gift for my nephew's birthday. Highly recommended to every parent!",d:"Jan 2025",c:"#48DB71"},
  ];
  return (
    <div>
      <div style={{background:"linear-gradient(135deg,#FFF0F9,#FFF8E7)",padding:"24px 32px 0"}}>
        <button onClick={()=>setPage("shop")} className="btnpop" style={{background:"linear-gradient(135deg,#FFE4F4,#FFCCE8)",border:"2px solid #FF6BB5",borderRadius:50,padding:"10px 24px",fontFamily:"'Bubblegum Sans',cursive",fontSize:15,cursor:"pointer",color:"#FF6BB5"}}>← Back to Shop</button>
      </div>
      <div style={{maxWidth:1100,margin:"0 auto",padding:"32px 24px 60px"}}>
        <div className="twocol" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:52,marginBottom:60}}>
          <div>
            <div style={{borderRadius:32,overflow:"hidden",border:`4px solid ${p.ac}33`,boxShadow:`0 24px 60px ${p.ac}33`,position:"relative"}}>
              <img src={p.img} alt={p.name} style={{width:"100%",height:440,objectFit:"cover",display:"block"}}/>
              <div style={{position:"absolute",top:16,left:16,background:"linear-gradient(135deg,#FFD700,#FF9F43)",color:"#fff",borderRadius:50,padding:"6px 18px",fontFamily:"'Boogaloo',cursive",fontSize:17}}>🔥 {Math.round((1-1/1.3)*100)}% OFF</div>
            </div>
          </div>
          <div style={{paddingTop:8}}>
            {p.badge&&<span style={{background:`linear-gradient(135deg,${p.ac},${p.ac}AA)`,color:"#fff",borderRadius:50,padding:"5px 18px",fontFamily:"'Bubblegum Sans',cursive",fontSize:13}}>{p.badge}</span>}
            <div style={{fontFamily:"'Bubblegum Sans',cursive",color:p.ac,fontSize:14,textTransform:"uppercase",letterSpacing:1,marginTop:18,marginBottom:8}}>{p.cat} · Ages {p.age}</div>
            <h1 style={{fontFamily:"'Boogaloo',cursive",fontSize:42,color:"#222",marginBottom:14,lineHeight:1.2}}>{p.name}</h1>
            <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:18}}><Stars r={p.rating} ac={p.ac}/><span style={{fontFamily:"'Nunito',sans-serif",color:"#aaa",fontSize:14}}>{p.rev} reviews</span></div>
            <div style={{marginBottom:22}}><span style={{fontFamily:"'Boogaloo',cursive",fontSize:52,color:"#222"}}>₹{p.price}</span><span style={{fontFamily:"'Nunito',sans-serif",fontSize:19,color:"#ccc",textDecoration:"line-through",marginLeft:14}}>₹{(p.price*1.3).toFixed(2)}</span></div>
            <p style={{fontFamily:"'Nunito',sans-serif",color:"#777",fontSize:16,lineHeight:1.85,marginBottom:28}}>A wonderful {p.cat.toLowerCase()} designed to spark creativity, joy and learning! Made with 100% child-safe materials, tested to exceed international safety standards. Perfect for ages {p.age}! ✨</p>
            <div style={{display:"flex",alignItems:"center",gap:16,marginBottom:24}}>
              <span style={{fontFamily:"'Bubblegum Sans',cursive",color:"#666",fontSize:16}}>Quantity:</span>
              <div style={{display:"flex",alignItems:"center",background:p.bg,borderRadius:50,border:`2px solid ${p.ac}33`}}>
                <button onClick={()=>setQty(Math.max(1,qty-1))} style={{background:"none",border:"none",width:44,height:44,fontSize:22,cursor:"pointer",color:p.ac,fontWeight:900}}>−</button>
                <span style={{fontFamily:"'Boogaloo',cursive",fontSize:22,width:38,textAlign:"center"}}>{qty}</span>
                <button onClick={()=>setQty(qty+1)} style={{background:"none",border:"none",width:44,height:44,fontSize:22,cursor:"pointer",color:p.ac,fontWeight:900}}>+</button>
              </div>
            </div>
            <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
              <button onClick={()=>{for(let i=0;i<qty;i++)addCart(p);setAdded(true);setTimeout(()=>setAdded(false),2000);}} className="btnpop" style={{flex:1,minWidth:200,background:added?"linear-gradient(135deg,#48DB71,#00B894)":`linear-gradient(135deg,${p.ac},${p.ac}BB)`,color:"#fff",border:"none",borderRadius:50,padding:"16px 28px",fontSize:18,fontFamily:"'Boogaloo',cursive",cursor:"pointer",boxShadow:`0 10px 28px ${p.ac}44`,transition:"background .3s"}}>
                {added?"✓ Added to Cart! 🎉":`🛒 Add ${qty} to Cart`}
              </button>
              <button className="btnpop" style={{background:"linear-gradient(135deg,#FFE4F4,#FFCCE8)",border:`2px solid ${p.ac}`,borderRadius:50,padding:"16px 22px",fontSize:22,cursor:"pointer"}}>♡</button>
            </div>
            <div style={{display:"flex",gap:10,marginTop:22,flexWrap:"wrap"}}>
              {[["🚚","Free ship ₹3355+"],["🔄","30-day returns"],["✅","Safety cert."],["🌱","Eco packaging"]].map(([ic,t])=>(
                <div key={t} style={{fontFamily:"'Nunito',sans-serif",fontSize:13,color:"#888",display:"flex",alignItems:"center",gap:5,background:"#f5f5f5",borderRadius:50,padding:"5px 12px"}}>{ic} {t}</div>
              ))}
            </div>
          </div>
        </div>
        <div style={{background:"linear-gradient(135deg,#FFF8E7,#FFF0F9)",borderRadius:32,padding:"40px 36px"}}>
          <h2 style={{fontFamily:"'Boogaloo',cursive",fontSize:36,color:"#222",marginBottom:28}}>⭐ Happy Customer Reviews!</h2>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:20}}>
            {reviews.map((r,i)=>(
              <div key={i} style={{background:"#fff",borderRadius:24,padding:24,boxShadow:"0 6px 20px rgba(0,0,0,.06)"}}>
                <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:12}}>
                  <div style={{width:44,height:44,borderRadius:"50%",background:`linear-gradient(135deg,${r.c},${r.c}88)`,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontFamily:"'Boogaloo',cursive",fontSize:18}}>{r.n[0]}</div>
                  <div><div style={{fontFamily:"'Bubblegum Sans',cursive",fontSize:16,color:"#222"}}>{r.n}</div><div style={{fontSize:11,color:"#bbb",fontFamily:"'Nunito',sans-serif"}}>{r.d}</div></div>
                </div>
                <Stars r={r.r} ac="#FFD700"/>
                <p style={{fontFamily:"'Nunito',sans-serif",color:"#777",fontSize:14,lineHeight:1.75,marginTop:8}}>{r.t}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
