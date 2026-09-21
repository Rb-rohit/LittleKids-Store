// Star rating, e.g. ★★★★☆ 4.8
const Stars = ({r,ac}) => (
  <span style={{fontSize:15,color:ac||"#FFD700"}}>{Array(5).fill(0).map((_,i)=><span key={i} style={{color:i<Math.round(r)?ac||"#FFD700":"#ddd"}}>★</span>)}<span style={{color:"#aaa",fontSize:12,marginLeft:4}}>{r}</span></span>
);

export default Stars;
