import { useState } from "react";
import { FloatEmoji } from "../components/Decorations";

const Contact = () => {
  const [form,setForm]=useState({name:"",email:"",msg:""});
  const [sent,setSent]=useState(false);
  const inp={width:"100%",padding:"14px 18px",borderRadius:18,border:"2px solid #FF6BB533",fontFamily:"'Nunito',sans-serif",fontSize:15,color:"#333",background:"#fff",outline:"none",boxSizing:"border-box"};
  return (
    <div>
      <div style={{background:"linear-gradient(135deg,#FFE4F4,#FFF8E7,#E4F0FF)",padding:"60px 24px",textAlign:"center",position:"relative",overflow:"hidden"}}>
        <FloatEmoji/>
        <span className="float" style={{fontSize:68,display:"block",marginBottom:12,position:"relative",zIndex:2}}>📬</span>
        <h1 style={{fontFamily:"'Boogaloo',cursive",fontSize:58,background:"linear-gradient(135deg,#FF6BB5,#54A0FF)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",position:"relative",zIndex:2}}>Get in Touch!</h1>
        <p style={{fontFamily:"'Nunito',sans-serif",color:"#999",fontSize:17,maxWidth:460,margin:"12px auto 0",position:"relative",zIndex:2}}>We'd love to hear from you! We reply within 24 hours 💌</p>
      </div>
      <div style={{maxWidth:980,margin:"0 auto",padding:"60px 24px"}}>
        <div className="twocol" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:44}}>
          <div style={{background:"#fff",borderRadius:32,padding:36,boxShadow:"0 12px 40px #FF6BB515",border:"3px solid #FF6BB522"}}>
            <h2 style={{fontFamily:"'Boogaloo',cursive",fontSize:30,color:"#222",marginBottom:24}}>Send a message ✉️</h2>
            {sent&&<div style={{background:"#E8FFF4",border:"2px solid #48DB71",borderRadius:16,padding:"16px 20px",marginBottom:20,fontFamily:"'Bubblegum Sans',cursive",fontSize:16,color:"#00B894"}}>🎉 Message sent! We'll reply soon!</div>}
            <input style={{...inp,marginBottom:16}} placeholder="Your Name 👤" value={form.name} onChange={e=>setForm(p=>({...p,name:e.target.value}))} onFocus={e=>e.target.style.borderColor="#FF6BB5"} onBlur={e=>e.target.style.borderColor="#FF6BB533"}/>
            <input style={{...inp,marginBottom:16}} type="email" placeholder="Email Address 📧" value={form.email} onChange={e=>setForm(p=>({...p,email:e.target.value}))} onFocus={e=>e.target.style.borderColor="#FF6BB5"} onBlur={e=>e.target.style.borderColor="#FF6BB533"}/>
            <textarea style={{...inp,resize:"vertical",marginBottom:20}} rows={5} placeholder="Your message 💬" value={form.msg} onChange={e=>setForm(p=>({...p,msg:e.target.value}))} onFocus={e=>e.target.style.borderColor="#FF6BB5"} onBlur={e=>e.target.style.borderColor="#FF6BB533"}/>
            <button onClick={()=>{if(form.name&&form.email&&form.msg){setSent(true);setForm({name:"",email:"",msg:""});setTimeout(()=>setSent(false),4000);}}} className="btnpop" style={{width:"100%",background:"linear-gradient(135deg,#FF6BB5,#9B5FE0)",color:"#fff",border:"none",borderRadius:50,padding:"16px",fontSize:20,fontFamily:"'Boogaloo',cursive",cursor:"pointer",boxShadow:"0 10px 28px #FF6BB544"}}>🚀 Send Message!</button>
          </div>
          <div>
            <h2 style={{fontFamily:"'Boogaloo',cursive",fontSize:30,color:"#222",marginBottom:24}}>Find Us 📍</h2>
            {[{ic:"📍",t:"Store Location",v:"123 Rainbow Lane, Happytown, CA 90210",c:"#FF6BB5"},{ic:"📞",t:"Phone",v:"+91 9921923609 KIDS-FUN",c:"#54A0FF"},{ic:"📧",t:"Email",v:"hello@littlekidsstore.com",c:"#48DB71"},{ic:"⏰",t:"Store Hours",v:"Mon–Sat: 9am–7pm · Sun: 10am–5pm",c:"#FF9F43"}].map(x=>(
              <div key={x.t} style={{display:"flex",gap:16,background:"#fff",borderRadius:22,padding:"20px 22px",marginBottom:14,boxShadow:`0 6px 20px ${x.c}18`,border:`2px solid ${x.c}22`}}>
                <span style={{fontSize:32}}>{x.ic}</span>
                <div><div style={{fontFamily:"'Boogaloo',cursive",fontSize:18,color:x.c}}>{x.t}</div><div style={{fontFamily:"'Nunito',sans-serif",color:"#888",fontSize:14,marginTop:2}}>{x.v}</div></div>
              </div>
            ))}
            <div style={{background:"linear-gradient(135deg,#FFE4F4,#FFF8E7)",borderRadius:22,padding:"20px 22px"}}>
              <div style={{fontFamily:"'Boogaloo',cursive",fontSize:20,color:"#222",marginBottom:12}}>🌈 Follow Us!</div>
              <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
                {[["📘","Facebook"],["📸","Instagram"],["🐦","Twitter"],["▶️","YouTube"]].map(([ic,n])=>(
                  <span key={n} className="btnpop" style={{fontFamily:"'Bubblegum Sans',cursive",fontSize:14,background:"#fff",borderRadius:50,padding:"7px 16px",color:"#555",border:"2px solid #FF6BB522",cursor:"pointer"}}>{ic} {n}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
