import{G as u,aV as W,az as k,F as l,r as v,J as G,j as R,K as $,aW as T,L as M,D as P,s as S,H as j}from"./index-DLu291oi.js";const L=["className","component","disableGutters","fixed","maxWidth","classes"],y=W(),N=k("div",{name:"MuiContainer",slot:"Root",overridesResolver:(a,s)=>{const{ownerState:o}=a;return[s.root,s[`maxWidth${l(String(o.maxWidth))}`],o.fixed&&s.fixed,o.disableGutters&&s.disableGutters]}}),z=a=>T({props:a,name:"MuiContainer",defaultTheme:y}),U=(a,s)=>{const o=i=>P(s,i),{classes:p,fixed:c,disableGutters:x,maxWidth:t}=a,e={root:["root",t&&`maxWidth${l(String(t))}`,c&&"fixed",x&&"disableGutters"]};return M(e,o,p)};function _(a={}){const{createStyledComponent:s=N,useThemeProps:o=z,componentName:p="MuiContainer"}=a,c=s(({theme:t,ownerState:e})=>u({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!e.disableGutters&&{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}}),({theme:t,ownerState:e})=>e.fixed&&Object.keys(t.breakpoints.values).reduce((i,n)=>{const d=n,r=t.breakpoints.values[d];return r!==0&&(i[t.breakpoints.up(d)]={maxWidth:`${r}${t.breakpoints.unit}`}),i},{}),({theme:t,ownerState:e})=>u({},e.maxWidth==="xs"&&{[t.breakpoints.up("xs")]:{maxWidth:Math.max(t.breakpoints.values.xs,444)}},e.maxWidth&&e.maxWidth!=="xs"&&{[t.breakpoints.up(e.maxWidth)]:{maxWidth:`${t.breakpoints.values[e.maxWidth]}${t.breakpoints.unit}`}}));return v.forwardRef(function(e,i){const n=o(e),{className:d,component:r="div",disableGutters:b=!1,fixed:f=!1,maxWidth:C="lg"}=n,g=G(n,L),m=u({},n,{component:r,disableGutters:b,fixed:f,maxWidth:C}),h=U(m,p);return R.jsx(c,u({as:r,ownerState:m,className:$(h.root,d),ref:i},g))})}const E=_({createStyledComponent:S("div",{name:"MuiContainer",slot:"Root",overridesResolver:(a,s)=>{const{ownerState:o}=a;return[s.root,s[`maxWidth${l(String(o.maxWidth))}`],o.fixed&&s.fixed,o.disableGutters&&s.disableGutters]}}),useThemeProps:a=>j({props:a,name:"MuiContainer"})});export{E as C};