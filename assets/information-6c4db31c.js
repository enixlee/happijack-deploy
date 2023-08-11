import{P as O,Q as B,be as E,Z as I,bf as R,bg as k,n as a,U as y,O as C,bh as P,bi as T,aS as w}from"./index-e6f7edec.js";const u=e=>e?typeof e=="function"?e():e:null,N=e=>{const{componentCls:o,popoverColor:n,minWidth:t,fontWeightStrong:r,popoverPadding:l,boxShadowSecondary:i,colorTextHeading:s,borderRadiusLG:c,zIndexPopup:A,marginXS:p,colorBgElevated:d,popoverBg:m}=e;return[{[o]:Object.assign(Object.assign({},I(e)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:A,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text",transformOrigin:"var(--arrow-x, 50%) var(--arrow-y, 50%)","--antd-arrow-background-color":d,"&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${o}-content`]:{position:"relative"},[`${o}-inner`]:{backgroundColor:m,backgroundClip:"padding-box",borderRadius:c,boxShadow:i,padding:l},[`${o}-title`]:{minWidth:t,marginBottom:p,color:s,fontWeight:r},[`${o}-inner-content`]:{color:n}})},R(e,{colorBg:"var(--antd-arrow-background-color)"}),{[`${o}-pure`]:{position:"relative",maxWidth:"none",margin:e.sizePopupArrow,display:"inline-block",[`${o}-content`]:{display:"inline-block"}}}]},U=e=>{const{componentCls:o}=e;return{[o]:k.map(n=>{const t=e[`${n}6`];return{[`&${o}-${n}`]:{"--antd-arrow-background-color":t,[`${o}-inner`]:{backgroundColor:t},[`${o}-arrow`]:{background:"transparent"}}}})}},J=e=>{const{componentCls:o,lineWidth:n,lineType:t,colorSplit:r,paddingSM:l,controlHeight:i,fontSize:s,lineHeight:c,padding:A}=e,p=i-Math.round(s*c),d=p/2,m=p/2-n,g=A;return{[o]:{[`${o}-inner`]:{padding:0},[`${o}-title`]:{margin:0,padding:`${d}px ${g}px ${m}px`,borderBottom:`${n}px ${t} ${r}`},[`${o}-inner-content`]:{padding:`${l}px ${g}px`}}}},v=O("Popover",e=>{const{colorBgElevated:o,colorText:n,wireframe:t}=e,r=B(e,{popoverPadding:12,popoverBg:o,popoverColor:n});return[N(r),U(r),t&&J(r),E(r,"zoom-big")]},e=>({width:177,minWidth:177,zIndexPopup:e.zIndexPopupBase+30}),{deprecatedTokens:[["width","minWidth"]]});var W=globalThis&&globalThis.__rest||function(e,o){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)o.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(n[t[r]]=e[t[r]]);return n};const z=(e,o,n)=>{if(!(!o&&!n))return a.createElement(a.Fragment,null,o&&a.createElement("div",{className:`${e}-title`},u(o)),a.createElement("div",{className:`${e}-inner-content`},u(n)))};function Q(e){const{hashId:o,prefixCls:n,className:t,style:r,placement:l="top",title:i,content:s,children:c}=e;return a.createElement("div",{className:C(o,n,`${n}-pure`,`${n}-placement-${l}`,t),style:r},a.createElement("div",{className:`${n}-arrow`}),a.createElement(P,Object.assign({},e,{className:o,prefixCls:n}),c||z(n,i,s)))}function q(e){const{prefixCls:o}=e,n=W(e,["prefixCls"]),{getPrefixCls:t}=a.useContext(y),r=t("popover",o),[l,i]=v(r);return l(a.createElement(Q,Object.assign({},n,{prefixCls:r,hashId:i})))}var j=globalThis&&globalThis.__rest||function(e,o){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)o.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(n[t[r]]=e[t[r]]);return n};const K=e=>{let{title:o,content:n,prefixCls:t}=e;return a.createElement(a.Fragment,null,o&&a.createElement("div",{className:`${t}-title`},u(o)),a.createElement("div",{className:`${t}-inner-content`},u(n)))},h=a.forwardRef((e,o)=>{const{prefixCls:n,title:t,content:r,overlayClassName:l,placement:i="top",trigger:s="hover",mouseEnterDelay:c=.1,mouseLeaveDelay:A=.1,overlayStyle:p={}}=e,d=j(e,["prefixCls","title","content","overlayClassName","placement","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle"]),{getPrefixCls:m}=a.useContext(y),g=m("popover",n),[S,x]=v(g),f=m(),b=C(l,x);return S(a.createElement(T,Object.assign({placement:i,trigger:s,mouseEnterDelay:c,mouseLeaveDelay:A,overlayStyle:p},d,{prefixCls:g,overlayClassName:b,ref:o,overlay:t||r?a.createElement(K,{prefixCls:g,title:t,content:r}):null,transitionName:w(f,"zoom-big",d.transitionName),"data-popover-inject":!0})))});h._InternalPanelDoNotUseOrYouWillBeFired=q;const V=h,X="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAYAAAAcaxDBAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAjbSURBVHgB7V1vVhpJEK9uBuLmy3KDmBMETxA8gXqCmC/7lgBPOYF6AoxK/Lh6gugJJCcIOcHiDdj39r1dnT+9VQ3jAoHuHma6Z0j8vcdDnQZ6flR1V1VXlQwKgMvLy83I9+vA2Cbn/FUkxCbDh7yIf5seK4QYMYCRYGzIGBuJKPqGvw8E58NmszmAnMEgB3S73WrF894xzutISB2JqUIGkGRz3scfbh58/0un0xmCYzgjNCYRJW4XP7QODiAA+vhZVy7JtU7o+fl5HT9kHx87WUniKiBi//X9E9vEWiOUiOSMHbmSRlPYJjZzQlG1N194XpdUGwoMW8RmSuhlr3cURdFhnqqdFDjX40azeQIZIRNCpVSWy5/xxxqsI4QYPgTBdhbSmprQXq93AFF0nFoq8abI5EEJH0QA957nSZuy0WgMp4dJmzWKqvTgAG/wBrbQJqXntF/mCB8nH1qtU0iBVIR+urjo4tMhrACyGdGIv4nC8MvLMLx53+mMIAX+QLPsb8+rlwB2RQqLIu0SsBKh0qZEFV9lByfbkAzvl0FwnZZEFXpnZ/vA+cEqkktzfPT9vc4K80tM6KrrJU0SXcqTdrvdB4dIYb4NHsakDpO8KBGhE5Pobt6/1mAQCtFxTeQ8kNhdXA66iea+wmZlTCipOUrmHRhKJq2R+PSx2W4fQ4HQOz+nDfQowUtIUrdN1Z+DISpJ1By/WR4EW0Ujk0BzYr7/muZo+JLa5N6NYEQoGeymaxCuk9e/IJmNHCI9pqC5oSpvoRZ9NBlP9z6xaEzGqkF2JsYmjWwznOBJEaVShYRLQEdnpyoJpU0IQ25fTWy6dSQzRgJSR7iebqk2KaXK047+o5NJoLnTPRgMrb7QrKdLCaV108TEWHcyYyQgtUYSveziQpWfGO9/gga0qONEVnI9i4qL8/MrdATeaYYtVf2FElr2vGPQAc0OdB/149YMfhAcGphU1ReVysJd/zsJNZVOsuWKbBqlAVo2NST1DslR7h9o/Ww35jxAb36QiXTSWvPBAZnknW1UKgd4MrqPsYAqGx8d32QZEF4EOo7GdfIjaHb+aHy9P/23GQk1kk5Uhw/t9muwDFXcAMm9arZa78EyehcXX3XRqnkpnVlDjdZONG7BAeRcllgZdIp6iVEksAz0+vT3OreBPRFKEqHb3SgEh9J5Aw6Aqv1GdT2KM0ssgiJkYk6l54HXd2lpin9/IrRSKtVBA25mp2UCVCX1hsC5k4PASH/PZOzvx7/8r/Kca6Wz4TCmiedEynAZEu4kj8lQSnfinyWhpO66aBKdY4NLCHGruDZ0+uUC3KquE3ex2ktCDdR9hFGWa3CIxyA4XWRgU+BaBMEeOITv+1difCq6FLHaS0JxA9hRDcZvwMlGNA2KkJN5hscne9LHRjcXnw/RO3vd7HScpi3SXJhKY0BKcZ2epWGP61VdFcfLg9AY7bFVkdvnx8Avs88UVhBy9Jaeea/brelcrH98/wv85HgMQ92XWqUkDB553qZm4KBj8fx8XSA50ARNKAubc51rhYTCM2KoNRU9Ow8JU3okuNh+gwJABko2NqoQBJsUKMFDtr5rzcFgyAAFcOk6SvUBHm5IVeWG5MiAngdGew5wE9gH8pgmPr0IQ5ICeX3D87ZBY3BnDUEqz5azRe6wJ6stFINKnOeyflJWHdByxBJnC1mDFwQDUS4vvU5ccqE5hAtzIlRnSBcVXGcyzednOoSaUM8bgmNoTyiozgqekSmeCc0Yz4RmDK6z/smdgmdIXGKYUzNktLYSmsdmGWk2cKC6AarqVY1hYaj0pKzBPH/TGTDuoSSUuORojN4r3wTA+pHxugA9N13C8V8cDeih5k3ykdAiQoia5vpAuylRPTs8Q0InXCXGvnIehn1Qv8vm9LlzQeDcLSUOdFkknLF7Tu6Uzm/GQ7xdKBLGFSZO4XleXTNk9FuzORgf0uF5iWokL5XegmNEmnN510DpVAqVmASfJaE4eWUkGuOAu4VS+xzKxw1OhmWquCSUzp1BjZl0Exfg6lQcp4RS3ag2V3RykCkJpaOEJOkmPx04P1BdlmlKk9Aen/qjNt3ERQph0TBpQqM7yLyKf34i1CTdJEpWI5kOyQp0rYEb3DObylt4ItQk3aRIUuoiCkYVzCZJdNOR/JloU2iQYYcBAKOaxx8BshxcB9+fyR+dIdQkFxI0hU8ZIlczzaTwbV46Cd/FQw0ydskmO+jqg62pwHIklO4Nbe9j7cA56SR8R6jsvMCYNjGKKjTyNPZLUWTls2WjBao+0WCRdBIWRuzZ42NHey6O6lApl22up7+qLoaWCEUHxqjGdZF0EhYSKpk3KM6X5S201lgAucO4tFwte0QWEjAm93KoG0cJwMvO6JV5LiaFT/JNMm53lgeITKN1U1P4pjyk476/Z5ISQxOxJakuYEqmbPgaBNuqMUpCSaxZFBlJ3rqSaiyZIDXxRJeOY5TahnbnKZlKYIbTh3EbyUIne026o3VpHzAZb9powThXENfTO50bNvXpmXU7tAEks4am0WfTeAE5O81Wa9tkrHGiw+N4PTVLvsWJUlVzEZcAmlMlWXe0wUu8d8OxyVq1USqKSNqqjZpiMXb4e6t1CzmCwnClcRzCrJkXgVpwoqY1bLRqi0GkRuPOjOYTg7HaUPFtY42aCWJYbq9hs5lgjLTtLslts1nqmLbFO82R1Py9i3aX01ihMd8TZENWjBng820WFR2SRDzuphPaKIp2V23ImrbTTypCCZ/Ozg4F50cZRIcGVBMVyXQW+EauJcfHopbB9CyCoIaS9ArH1GR2S8oIvzTa0c7MtWVwjJU2q2JhpfVyETIhNEaaJSAP2OhxmimhhIm0HoO+O1e+EOIGTaJOo8j/GGAaRSXWdi9oa4TGKAKxsUURCHFtuxe0dUJjSIeAWnFw/m4V23AVuGrxPg1nhE4jJpeVSjs2/kEVvmffJYnTyIXQeVDzPjTGqayvhoS8QWKqVIg66Xc3S/Yk43pcIMCG+Lp7GS8ol/s5llE+4T+CRomgRvBrDwAAAABJRU5ErkJggg==";export{X as I,V as P};
