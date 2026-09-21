import { useState } from "react";
import { useNavigate } from "../router";
import { products } from "../data";
import ProductCard from "../components/ProductCard";
import { FloatEmoji } from "../components/Decorations";

const Shop = ({addCart}) => {
  const navigate=useNavigate();
  const setPage=(page)=>{ if(page!=="product") navigate({shop:"/shop"}[page] || "/"); };
  const setSel=(product)=>navigate(`/products/${product.id}`);
  const [cat,setCat]=useState("All");
  const [age,setAge]=useState("All");
  const [max,setMax]=useState(5000);
  const [sort,setSort]=useState("popular");
  let list=products.filter(p=>(cat==="All"||p.cat===cat)&&(age==="All"||p.age===age)&&p.price<=max);
  if(sort==="low")list=[...list].sort((a,b)=>a.price-b.price);
  if(sort==="high")list=[...list].sort((a,b)=>b.price-a.price);
  if(sort==="rating")list=[...list].sort((a,b)=>b.rating-a.rating);
  return (
    <div>
      <div style={{background:"linear-gradient(135deg,#FFF0F9,#FFF8E7)",padding:"48px 24px",textAlign:"center",position:"relative",overflow:"hidden"}}>
        <FloatEmoji/>
        <h1 style={{fontFamily:"'Boogaloo',cursive",fontSize:58,background:"linear-gradient(135deg,#FF6BB5,#9B5FE0)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",position:"relative",zIndex:2}}>🛍️ Our Shop</h1>
        <p style={{fontFamily:"'Nunito',sans-serif",color:"#999",fontSize:16,marginTop:8,position:"relative",zIndex:2}}>{list.length} magical products for your little ones!</p>
      </div>
      <div style={{maxWidth:1200,margin:"0 auto",padding:"40px 24px"}}>
        <div className="shopgrid" style={{display:"flex",gap:28,flexWrap:"wrap"}}>
          <div className="sidebar" style={{width:240,flexShrink:0,alignSelf:"flex-start",position:"sticky",top:88}}>
            <div style={{background:"linear-gradient(135deg,#FFF0F9,#FFF8E7)",borderRadius:28,padding:24,border:"3px solid #FF6BB522"}}>
              <h3 style={{fontFamily:"'Boogaloo',cursive",fontSize:24,color:"#FF6BB5",marginBottom:20}}>✨ Filter Magic!</h3>
              <div style={{marginBottom:20}}>
                <div style={{fontFamily:"'Bubblegum Sans',cursive",fontSize:12,color:"#aaa",marginBottom:10,textTransform:"uppercase",letterSpacing:1}}>Category</div>
                {["All","Toys","Clothes","Books","Accessories"].map(c=>(
                  <button key={c} onClick={()=>setCat(c)} className="btnpop" style={{display:"block",width:"100%",textAlign:"left",background:cat===c?"linear-gradient(135deg,#FF6BB5,#FF9F43)":"transparent",border:"none",borderRadius:14,padding:"9px 14px",marginBottom:5,cursor:"pointer",fontFamily:"'Bubblegum Sans',cursive",fontSize:16,color:cat===c?"#fff":"#666",boxShadow:cat===c?"0 4px 12px #FF6BB544":"none",transition:"all .2s"}}>
                    {{"All":"🌈 All","Toys":"🧸 Toys","Clothes":"👗 Clothes","Books":"📚 Books","Accessories":"🎒 Accessories"}[c]}
                  </button>
                ))}
              </div>
              <div style={{marginBottom:20}}>
                <div style={{fontFamily:"'Bubblegum Sans',cursive",fontSize:12,color:"#aaa",marginBottom:8,textTransform:"uppercase",letterSpacing:1}}>Age Group</div>
                <select value={age} onChange={e=>setAge(e.target.value)} style={{width:"100%",padding:"10px 14px",borderRadius:16,border:"2px solid #FF6BB533",fontFamily:"'Bubblegum Sans',cursive",fontSize:15,color:"#555",background:"#fff",cursor:"pointer",outline:"none"}}>
                  {["All","0-2","2-4","2-5","3-6","3-7","3-8","4-8","5-10","6-10","0-10"].map(a=><option key={a} value={a}>{a==="All"?"All Ages":`Ages ${a}`}</option>)}
                </select>
              </div>
              <div style={{marginBottom:20}}>
                <div style={{fontFamily:"'Bubblegum Sans',cursive",fontSize:12,color:"#aaa",marginBottom:8,textTransform:"uppercase",letterSpacing:1}}>Max: <span style={{color:"#FF6BB5"}}>₹{max}</span></div>
                <input type="range" min={10} max={5000} value={max} onChange={e=>setMax(+e.target.value)} style={{width:"100%",accentColor:"#FF6BB5"}}/>
              </div>
              <button onClick={()=>{setCat("All");setAge("All");setMax(5000);}} className="btnpop" style={{width:"100%",background:"linear-gradient(135deg,#FFE4F4,#FFCCE8)",border:"2px solid #FF6BB5",borderRadius:50,padding:"10px",fontFamily:"'Bubblegum Sans',cursive",fontSize:15,color:"#FF6BB5",cursor:"pointer"}}>🔄 Reset</button>
            </div>
          </div>
          <div style={{flex:1,minWidth:0}}>
            <div style={{display:"flex",justifyContent:"flex-end",marginBottom:20}}>
              <select value={sort} onChange={e=>setSort(e.target.value)} style={{padding:"10px 18px",borderRadius:50,border:"2px solid #FF6BB533",fontFamily:"'Bubblegum Sans',cursive",fontSize:15,cursor:"pointer",color:"#555",background:"#fff",outline:"none"}}>
                <option value="popular">⭐ Most Popular</option>
                <option value="rating">🏆 Top Rated</option>
                <option value="low">💰 Price: Low–High</option>
                <option value="high">💎 Price: High–Low</option>
              </select>
            </div>
            {list.length===0?<div style={{textAlign:"center",padding:"80px 24px"}}><span style={{fontSize:80}}>🔍</span><h3 style={{fontFamily:"'Boogaloo',cursive",fontSize:28,color:"#999",marginTop:16}}>No products found!</h3></div>:
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))",gap:22}}>
              {list.map(p=><ProductCard key={p.id} p={p} onView={()=>{setSel(p);setPage("product");}} onAdd={addCart}/>)}
            </div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
