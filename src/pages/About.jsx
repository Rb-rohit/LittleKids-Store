import { FloatEmoji } from "../components/Decorations";

const About = () => (
  <div>
    <div style={{background:"linear-gradient(135deg,#F0F8FF,#F5F0FF,#FFF0F9)",padding:"80px 24px",textAlign:"center",position:"relative",overflow:"hidden"}}>
      <FloatEmoji/>
      <span className="bounce" style={{fontSize:76,display:"block",marginBottom:12,position:"relative",zIndex:2}}>💛</span>
      <h1 style={{fontFamily:"'Boogaloo',cursive",fontSize:60,background:"linear-gradient(135deg,#FF9F43,#FF6BB5)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",position:"relative",zIndex:2}}>Our Story</h1>
      <p style={{fontFamily:"'Nunito',sans-serif",color:"#888",fontSize:18,maxWidth:580,margin:"16px auto 0",lineHeight:1.8,position:"relative",zIndex:2}}>Born from a mother's love, built for every child's happiness 🌈</p>
    </div>
    <div style={{maxWidth:1100,margin:"0 auto",padding:"60px 24px"}}>
      <div className="twocol" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:56,alignItems:"center",marginBottom:80}}>
        <div>
          <h2 style={{fontFamily:"'Boogaloo',cursive",fontSize:40,color:"#222",marginBottom:20}}>From Our Family<br/><span style={{color:"#FF6BB5"}}>to Yours 🏠</span></h2>
          <p style={{fontFamily:"'Nunito',sans-serif",color:"#777",fontSize:16,lineHeight:1.9,marginBottom:16}}>In 2018, Amara Johnson — a mom of two — couldn't find toys that were truly educational AND genuinely fun. So she started curating them herself!</p>
          <p style={{fontFamily:"'Nunito',sans-serif",color:"#777",fontSize:16,lineHeight:1.9,marginBottom:28}}>Today, LittleKids Store serves 50,000+ families with a handpicked collection tested for safety, quality, and maximum smiles. 😊</p>
          <div style={{display:"flex",gap:16,flexWrap:"wrap"}}>
            {[["2018","Founded","#FF6BB5"],["50K+","Families","#54A0FF"],["1200+","Products","#48DB71"],["4.9★","Rating","#FFD700"]].map(([v,l,c])=>(
              <div key={l} style={{background:`linear-gradient(135deg,${c}22,${c}11)`,borderRadius:20,padding:"16px 20px",textAlign:"center",border:`2px solid ${c}44`}}>
                <div style={{fontFamily:"'Boogaloo',cursive",fontSize:26,color:c}}>{v}</div>
                <div style={{fontFamily:"'Nunito',sans-serif",fontSize:12,color:"#999",fontWeight:700}}>{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{borderRadius:32,overflow:"hidden",boxShadow:"0 20px 60px rgba(0,0,0,.1)",border:"4px solid #FF6BB522",transform:"rotate(1deg)"}}>
          <img src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=480&fit=crop" alt="kids" style={{width:"100%",display:"block"}}/>
        </div>
      </div>
      <div style={{textAlign:"center",marginBottom:40}}><h2 style={{fontFamily:"'Boogaloo',cursive",fontSize:46,background:"linear-gradient(135deg,#54A0FF,#A55EEA)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>What We Stand For ✊</h2></div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:24}}>
        {[{ic:"🛡️",t:"Safety First",d:"All products CE certified & tested beyond standards",c:"#FF6BB5"},{ic:"🌟",t:"Premium Quality",d:"Non-toxic durable materials for years of fun",c:"#FFD700"},{ic:"🧠",t:"Fun Learning",d:"Every product stimulates curiosity & growth",c:"#54A0FF"},{ic:"💚",t:"Eco Friendly",d:"Sustainable packaging for a better planet",c:"#48DB71"}].map(v=>(
          <div key={v.t} style={{background:"#fff",borderRadius:28,padding:"36px 24px",textAlign:"center",boxShadow:`0 8px 24px ${v.c}22`,border:`3px solid ${v.c}33`}}>
            <div style={{fontSize:52,marginBottom:16}}>{v.ic}</div>
            <h3 style={{fontFamily:"'Boogaloo',cursive",fontSize:24,color:v.c,marginBottom:10}}>{v.t}</h3>
            <p style={{fontFamily:"'Nunito',sans-serif",color:"#888",fontSize:14,lineHeight:1.7}}>{v.d}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default About;
