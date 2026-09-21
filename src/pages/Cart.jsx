import { useNavigate } from "../router";

const Cart = ({cart,setCart}) => {
  const navigate=useNavigate();
  const setPage=(page)=>navigate({shop:"/shop"}[page] || "/");
  const total=cart.reduce((s,i)=>s+i.price*i.qty,0);
  const upd=(id,q)=>{if(q<1)return setCart(c=>c.filter(i=>i.id!==id));setCart(c=>c.map(i=>i.id===id?{...i,qty:q}:i));};
  if(!cart.length) return (
    <div style={{textAlign:"center",padding:"100px 24px"}}>
      <span className="bounce" style={{fontSize:88,display:"block",marginBottom:24}}>🛒</span>
      <h2 style={{fontFamily:"'Boogaloo',cursive",fontSize:40,color:"#aaa"}}>Your cart is empty!</h2>
      <p style={{fontFamily:"'Nunito',sans-serif",color:"#bbb",margin:"12px 0 32px"}}>Let's find something magical!</p>
      <button onClick={()=>setPage("shop")} className="btnpop" style={{background:"linear-gradient(135deg,#FF6BB5,#9B5FE0)",color:"#fff",border:"none",borderRadius:50,padding:"16px 44px",fontFamily:"'Boogaloo',cursive",fontSize:22,cursor:"pointer",boxShadow:"0 12px 32px #FF6BB544"}}>🛍️ Start Shopping!</button>
    </div>
  );
  return (
    <div style={{maxWidth:960,margin:"0 auto",padding:"40px 24px"}}>
      <h1 style={{fontFamily:"'Boogaloo',cursive",fontSize:50,background:"linear-gradient(135deg,#FF6BB5,#9B5FE0)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",marginBottom:32}}>🛒 Shopping Cart</h1>
      <div className="twocol" style={{display:"grid",gridTemplateColumns:"1fr 300px",gap:28}}>
        <div>
          {cart.map(it=>(
            <div key={it.id} style={{display:"flex",gap:16,background:"#fff",borderRadius:24,padding:18,marginBottom:14,boxShadow:`0 6px 20px ${it.ac}18`,border:`2px solid ${it.ac}22`}}>
              <img src={it.img} alt={it.name} style={{width:84,height:84,borderRadius:18,objectFit:"cover",flexShrink:0}}/>
              <div style={{flex:1}}>
                <div style={{fontFamily:"'Boogaloo',cursive",fontSize:18,color:"#222",marginBottom:2}}>{it.name}</div>
                <div style={{fontFamily:"'Nunito',sans-serif",color:"#bbb",fontSize:13,marginBottom:10}}>{it.cat}</div>
                <div style={{display:"flex",alignItems:"center",gap:12}}>
                  <div style={{display:"flex",alignItems:"center",background:it.bg,borderRadius:50,border:`2px solid ${it.ac}33`}}>
                    <button onClick={()=>upd(it.id,it.qty-1)} style={{background:"none",border:"none",width:34,height:34,fontSize:20,cursor:"pointer",color:it.ac}}>−</button>
                    <span style={{fontFamily:"'Boogaloo',cursive",fontSize:18,width:30,textAlign:"center"}}>{it.qty}</span>
                    <button onClick={()=>upd(it.id,it.qty+1)} style={{background:"none",border:"none",width:34,height:34,fontSize:20,cursor:"pointer",color:it.ac}}>+</button>
                  </div>
                  <span style={{fontFamily:"'Boogaloo',cursive",fontSize:20,color:"#222"}}>₹{(it.price*it.qty).toFixed(2)}</span>
                </div>
              </div>
              <button onClick={()=>setCart(c=>c.filter(i=>i.id!==it.id))} style={{background:"#FFE4F4",border:"none",borderRadius:14,width:38,height:38,cursor:"pointer",color:"#FF6BB5",fontSize:20,alignSelf:"flex-start",flexShrink:0}}>×</button>
            </div>
          ))}
        </div>
        <div style={{background:"linear-gradient(135deg,#FFF0F9,#FFF8E7)",borderRadius:28,padding:28,height:"fit-content",border:"3px solid #FF6BB522"}}>
          <h3 style={{fontFamily:"'Boogaloo',cursive",fontSize:26,color:"#222",marginBottom:20}}>Order Summary 🎉</h3>
          {[["Subtotal",`₹${total.toFixed(2)}`,"#222"],["Shipping","FREE 🎁","#48DB71"],["Tax",`₹${(total*.08).toFixed(2)}`,"#888"]].map(([l,v,c])=>(
            <div key={l} style={{display:"flex",justifyContent:"space-between",fontFamily:"'Nunito',sans-serif",marginBottom:10}}><span style={{color:"#999"}}>{l}</span><span style={{fontWeight:800,color:c}}>{v}</span></div>
          ))}
          <div style={{borderTop:"3px dashed #FF6BB533",margin:"16px 0"}}/>
          <div style={{display:"flex",justifyContent:"space-between",marginBottom:24}}>
            <span style={{fontFamily:"'Boogaloo',cursive",fontSize:22,color:"#222"}}>Total</span>
            <span style={{fontFamily:"'Boogaloo',cursive",fontSize:28,color:"#FF6BB5"}}>₹{(total*1.08).toFixed(2)}</span>
          </div>
          <button className="btnpop" style={{width:"100%",background:"linear-gradient(135deg,#FF6BB5,#9B5FE0)",color:"#fff",border:"none",borderRadius:50,padding:"16px",fontFamily:"'Boogaloo',cursive",fontSize:20,cursor:"pointer",boxShadow:"0 10px 28px #FF6BB544",marginBottom:12}}>🎉 Checkout Now!</button>
          <button onClick={()=>setPage("shop")} className="btnpop" style={{width:"100%",background:"transparent",border:"2px solid #FF6BB5",borderRadius:50,padding:"12px",fontFamily:"'Bubblegum Sans',cursive",fontSize:16,cursor:"pointer",color:"#FF6BB5"}}>← Continue Shopping</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
