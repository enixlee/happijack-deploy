import{u as j,l as w,a0 as b,n as s,G as C,s as t,R as r,t as S,I as l,S as i,C as T,B as c,v,w as m,x as z,a3 as k,a2 as H,F}from"./index-3b14c0ba.js";import{T as G}from"./ticket_nft-6fc753da.js";import{N as I}from"./nft_bottom-1b63c0d9.js";import{C as A}from"./CountDownFrame-0acc9f38.js";function E(){const d=j(),h=w(),f=b(),g=()=>f("/"),[e,p]=s.useState(new C),[n,y]=s.useState(null);return s.useEffect(()=>{async function u(){const x=d.id,o=await(await m.instance.getContract(F.LotteryGameSystem)).getGame(x);p(o),o.ticket.getTransactionHash().then(a=>{a&&y(a)})}u()},[h.pathname]),t.jsxs(t.Fragment,{children:[t.jsx(r,{style:{position:"fixed",width:"100%",height:200,top:200,zIndex:-1},children:t.jsxs(S,{span:24,style:{display:"flex",justifyContent:"center",position:"relative",marginTop:-200},children:[t.jsx(l,{src:I,preview:!1,style:{position:"absolute",width:621,margin:"0 auto",left:-310}}),t.jsx(l,{src:G,style:{position:"absolute",width:320,transform:"rotate(-11.204deg)",margin:"0 auto",top:140,left:-100}})]})}),t.jsxs(i,{direction:"vertical",size:"large",style:{display:"grid",justifyContent:"center",alignContent:"center",minHeight:`${T}`,width:"100%",marginTop:50},children:[t.jsxs("label",{style:{color:"white",fontFamily:"Arimo Hebrew Subset",fontSize:60,fontWeight:"bold",letterSpacing:0,textAlign:"left"},children:["Jackpot:"," ",t.jsxs("span",{style:{color:"#FCDC36",fontFamily:"Arimo Hebrew Subset",fontSize:60,fontWeight:"bold",letterSpacing:0,textAlign:"left"},children:[e.TotalAmount," ",e.tokenSymbol]})]}),t.jsx(i,{direction:"horizontal",size:"small",style:{display:n?"flex":"none",justifyContent:"center"},children:t.jsxs(c,{type:"text",style:{display:"flex"},target:"_blank",href:`${v(m.instance.chainId)}/tx/${n}`,children:[t.jsxs("p",{style:{color:"#91a7be",fontSize:30,fontFamily:"Arimo Hebrew Subset",fontWeight:400},children:["TX: ",z(n)]}),t.jsx("svg",{style:{marginTop:2,marginLeft:30,color:"#91a7be",fontSize:40,display:"none"},stroke:"currentColor",fill:"none",strokeWidth:"0",viewBox:"0 0 24 24",focusable:"false",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})})]})}),t.jsx(r,{gutter:0,style:{marginTop:20,width:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:t.jsx(A,{timeLeft:e.endTime*1e3-new Date().getTime(),onFinished:g})}),t.jsxs(i,{direction:"vertical",style:{display:"grid",justifyContent:"center",alignItems:"center",marginTop:50},children:[t.jsxs("label",{style:{fontFamily:"Arimo Hebrew Subset",fontSize:20,color:"#91a7be",display:"flex",justifyContent:"center",marginBottom:20},children:["Congratulations, you are now eligible to receive a ",t.jsxs("span",{style:{color:"#43fff4",fontSize:30,marginTop:-5},children:[" ","100%"," "]})," prize."]}),t.jsx(k.CopyToClipboard,{text:e.shareTxt,children:t.jsx(c,{shape:"round",style:{fontWeight:"bold",color:"white",fontSize:40,width:460,height:100,marginLeft:50},onClick:async()=>H.success("Copied"),children:"Share"})})]})]})]})}export{E as default};
