import{u as g,V as u,n as r,o as l,q as c,s as e,S as h,C as y,af as p,B as x,z as C,A as i,M as b}from"./index-a3e691c9.js";function k(){const d=g(),f=u(),[t]=r.useState(d.hash),[m,a]=r.useState(0),o=async(n,s)=>{if(await i.instance.getAddress()!==s)return Promise.resolve();(await i.instance.getContract(b.LotteryGameSystem)).clearAllGame(),f(`/lottery/created/${n}`)};return r.useEffect(()=>{l.instance.on(c.event,o);let n=null;return a(0),n||(n=setInterval(()=>{a(s=>s+1)},1e3)),()=>{l.instance.off(c.event,o),a(0),clearInterval(n)}},[]),e.jsx(e.Fragment,{children:e.jsxs(h,{direction:"vertical",size:"large",style:{display:"grid",justifyContent:"center",alignContent:"center",minHeight:`${y}`},children:[e.jsx("label",{style:{fontFamily:"Arimo Hebrew Subset",fontSize:30,fontWeight:700,background:"linear-gradient(270deg, #C879F9 0%, #6C7EFC 50%, #74F0B2 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",display:"flex",justifyContent:"center",alignItems:"center"},children:"Best of luck to you!"}),e.jsxs("label",{style:{fontFamily:"Arimo Hebrew Subset",fontSize:24,fontWeight:700,color:"white",display:"flex",justifyContent:"center"},children:["Waiting for creation:"," ",p().startOf("day").add(m,"second").format("HH:mm:ss")]}),e.jsxs(x,{type:"text",style:{display:"flex",justifyContent:"center"},target:"_blank",href:`${C(i.instance.chainId)}/tx/${t}`,children:[e.jsxs("p",{style:{color:"#91a7be",fontSize:18,fontFamily:"Arimo Hebrew Subset",fontWeight:700,marginLeft:-10},children:["TX:"," ",t&&t.length>10?t.substring(0,9)+"..."+t.substring(t.length-6):""]}),e.jsx("svg",{style:{marginTop:2,marginLeft:30,color:"#91a7be",fontSize:28,display:"none"},stroke:"currentColor",fill:"none",strokeWidth:"0",viewBox:"0 0 24 24",focusable:"false",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})})]})]})})}export{k as default};
