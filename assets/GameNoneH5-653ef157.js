import{O as P,n as c,m as I,s as e,T as R,B as L,S as s,R as a,t as p,I as z,a7 as B,P as A,a8 as V,Q as N,K as x,L as b,A as y,M as v,J as H,o as l,a9 as O,N as W,u as K,l as U,G as J,p as G,q as T,z as Y,D as $,F}from"./index-a3e691c9.js";import{s as M,c as C}from"./Loading-973f3061.js";import{L as q}from"./logo_jackpot-683e73df.js";import{G as Q,C as X,I as Z}from"./closable-682c516f.js";import{M as ee}from"./index-683ba714.js";import"./index-a970cbac.js";import"./TextArea-14d4475a.js";import"./SearchOutlined-6055407f.js";import"./useLocale-185dffe3.js";const{TextArea:te}=Z,ne=P.create(()=>{const[d,S]=c.useState(""),[w,o]=c.useState(!1),[r]=c.useState(new Q),f=I(),j=async()=>{M();const i=async t=>(C(),W(t),o(!1),Promise.reject(t)),h=(d!==""?d:V).trim();if(N(h))return i("Slogan is empty");try{x.instance.trackGameLogic(b.CLICK_CONFIRM_CREATE_GAME),o(!0);const m=await y.instance.getContract(v.LotteryGameSystem).createLotteryGame(h,Math.floor(Date.now()/1e3),A.lotteryDuration,A.lotteryInitTokenAmount);o(!1),f.hide(),C(),H("Create lottery game successfully"),l.instance.emit(O.event,m.hash)}catch(t){const m=t!=null&&t.message&&t.message.indexOf("too many active games")>-1?"There is a game in progress or awaiting verification, Please wait for the game to finish.":t!=null&&t.message&&t.message.length<60?t.message:"transaction failed.";i(m)}};return e.jsx(ee,{className:"h5-modal",...R(f),title:"",centered:!0,closable:!1,footer:[e.jsx(L,{onClick:j,disabled:w,className:"start-btn",style:{width:230,height:50,borderRadius:20,fontSize:20,fontWeight:"bold",display:"grid",alignItems:"center",margin:"0 auto"},children:"Pay"})],children:e.jsxs(s,{direction:"vertical",style:{width:"100%"},children:[e.jsxs(s,{direction:"horizontal",style:{width:"100%",position:"relative"},children:[e.jsx("label",{style:{fontFamily:"Eras Bold ITC",fontSize:30,fontWeight:400,letterSpacing:0,textAlign:"left",background:"linear-gradient(270deg, #C879F9 0%, #6C7EFC 50%, #74F0B2 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",marginLeft:10},children:"Jackpot"}),e.jsxs(a,{style:{position:"absolute",width:"100%",left:-10,top:8},children:[e.jsx(p,{span:23}),e.jsx(p,{span:1,children:e.jsx(z,{preview:!1,src:X,style:{cursor:"pointer",width:24,height:24},onClick:()=>f.hide()})})]})]}),e.jsxs(s,{direction:"vertical",size:"small",style:{marginLeft:10,marginTop:-30},children:[e.jsxs("label",{style:{fontFamily:"Arimo Hebrew Subset",fontSize:20,fontWeight:400,letterSpacing:0,textAlign:"left",color:"white"},children:[r.InitialAmount,e.jsx("span",{style:{color:"#fcdc36",paddingLeft:8},children:r.tokenSymbol})]}),e.jsx(s,{direction:"horizontal",style:{marginTop:-10},children:e.jsxs("label",{style:{color:"white",fontFamily:"Arimo Hebrew Subset",fontSize:20,fontWeight:700,letterSpacing:0,textAlign:"left"},children:["Earning of yield:"," ",e.jsx("span",{style:{color:"#FCDC36",fontFamily:"Arimo Hebrew Subset",fontSize:22,fontWeight:700,letterSpacing:0,textAlign:"left"},children:"300%"})]})})]}),e.jsxs(s,{direction:"vertical",style:{width:"100%",paddingLeft:10,marginTop:20},children:[e.jsx("label",{style:{fontFamily:"Arimo Hebrew Subset",fontSize:16,fontWeight:400,letterSpacing:0,textAlign:"left",color:"#91a7be"},children:"ADVERTISING SLOGAN"}),e.jsx(te,{allowClear:!0,showCount:!0,maxLength:140,style:{minHeight:120,resize:"none",width:"100%",fontSize:14,fontFamily:"Arimo Hebrew Subset",fontWeight:400,borderRadius:10,marginLeft:-4},placeholder:"Invite more people to participate and get more rewards.",onChange:i=>{S(i.target.value)}}),e.jsxs(a,{gutter:0,style:{display:"flex",alignItems:"center",paddingBottom:50,marginTop:20},children:[e.jsxs(a,{style:{fontFamily:"Arimo Hebrew Subset",fontWeight:400,fontSize:16,letterSpacing:0,textAlign:"left",color:"#91a7be"},children:["Total tickets: ",r.TicketMaxCount]}),e.jsxs(a,{style:{fontFamily:"Arimo Hebrew Subset",fontWeight:400,fontSize:16,letterSpacing:0,textAlign:"right",color:"#91a7be"},children:["Lottery Ticket Price: ",r.TicketPrice," ",r.tokenSymbol]}),e.jsxs(a,{style:{fontFamily:"Arimo Hebrew Subset",fontWeight:400,fontSize:16,letterSpacing:0,textAlign:"left",color:"#91a7be"},children:["Draw Circle: ",B(A.lotteryDuration)]}),e.jsx(a,{style:{fontFamily:"Arimo Hebrew Subset",fontWeight:400,fontSize:16,letterSpacing:0,textAlign:"right",color:"#91a7be"},children:"Commission Percentage: 10%"})]})]})]})})});function ge(){const d=K(),S=U(),w=I(ne),[o,r]=c.useState(new J),[f,j]=c.useState(!0),[i,h]=c.useState(null),t=async()=>{l.instance.emit(F.event)},m=async(g,k,n)=>{const u=d.id;if(g!==u)return Promise.resolve();const E=await y.instance.getAddress();E===n&&(C(),H("Verify success"),x.instance.trackGameLogic(b.VERIFY_GAME_SUCCESS,{token_id:g,verifier_address:E})),l.instance.emit(F.event)};async function _(){const g=d.id,n=await(await y.instance.getContract(v.LotteryGameSystem)).getGame(g);r(n),n.transactionHash===""?n.getTransactionHash().then(u=>{h(u)}):h(n.transactionHash),j(!n.isWaitingReward)}c.useEffect(()=>(l.instance.on(G.event,m),l.instance.on(T.event,t),_(),()=>{l.instance.off(G.event,m),l.instance.off(T.event,t)}),[S.pathname]);const D=async()=>{const g=d.id,n=await(await y.instance.getContract(v.LotteryGameSystem)).getGame(g,!0);if(r(n),n.isWaitingVerify){M();try{x.instance.trackGameLogic(b.CLICK_VERIFY_AT_HOMEPAGE),await n.verify()}catch{C(),W("Verify failed")}}else w.show(),x.instance.trackGameLogic(b.CLICK_CREATE_GAME_AT_HOMEPAGE)};return e.jsx(e.Fragment,{children:e.jsxs(s,{direction:"vertical",style:{display:"flex",justifyContent:"center",alignItems:"top",paddingTop:40},children:[e.jsx(a,{style:{width:"100%",transform:"scale(0.8)"},children:e.jsx(p,{span:24,style:{display:"flex",justifyContent:"center"},children:e.jsx(z,{src:q,preview:!1,style:{width:465,height:142,display:"flex"}})})}),e.jsx(a,{style:{width:"100%"},children:e.jsxs(p,{span:24,style:{display:"flex",justifyContent:"center",position:"relative"},children:[e.jsxs("p",{style:{fontSize:50,fontFamily:"Arimo Hebrew Subset",fontWeight:"bold",color:"#fcdc36",textAlign:"center"},children:[o.TotalAmount," ",o.tokenSymbol]}),e.jsx("label",{style:{position:"absolute",fontFamily:"Poppins",fontWeight:400,fontSize:26,color:"white",top:60},children:o.totalAmountUSD})]})}),e.jsx(a,{style:{width:"100%"},children:e.jsx(p,{span:24,style:{display:"flex",justifyContent:"center"},children:e.jsx("p",{style:{fontFamily:"Arimo Hebrew Subset",fontSize:35,fontWeight:"bold",width:"100%",height:160,background:"linear-gradient(270deg, #C879F9 0%, #6C7EFC 50%, #74F0B2 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",textAlign:"center",marginTop:20},children:"Congratulations the winners!"})})}),e.jsxs(s,{direction:"vertical",style:{display:"flex",justifyContent:"center",alignContent:"center",height:50,position:"relative",transform:"scale(0.7)"},children:[e.jsx(s,{style:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsxs("div",{children:[e.jsx("label",{style:{fontFamily:"Arimo Hebrew Subset",fontSize:20,color:"#91a7be",display:"flex",justifyContent:"center",marginBottom:20},children:"Begin crafting your own miracles!"}),e.jsx(L,{onClick:D,className:"start-btn",style:{width:460,height:100,borderRadius:40,fontSize:40,fontWeight:700},children:o.isWaitingVerify&&!f?"Verify and Earn":"Create game"})]})}),e.jsx(s,{direction:"horizontal",size:"small",hidden:!i,style:{display:"flex",justifyContent:"center"},children:e.jsxs(L,{type:"text",style:{display:"flex"},target:"_blank",href:`${Y(y.instance.chainId)}/tx/${i}`,disabled:!i,children:[e.jsxs("p",{style:{color:"#91a7be",fontSize:30,fontFamily:"Arimo Hebrew Subset",fontWeight:"bold"},children:["TX: ",$(i)]}),e.jsx("svg",{style:{marginTop:2,marginLeft:30,color:"#91a7be",fontSize:40,display:"none"},stroke:"currentColor",fill:"none",strokeWidth:"0",viewBox:"0 0 24 24",focusable:"false",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})})]})})]})]})})}export{ge as default};
