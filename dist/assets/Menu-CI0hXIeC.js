import{r as f,ay as O,J as N,j as k,G as u,D as Q,E as Z,s as V,av as tt,F as B,H as et,K as j,L as rt,_ as T}from"./index-DLu291oi.js";import{u as nt,h as X,q as ot,j as at,t as st,v as W,M as it,P as ct,c as lt}from"./Modal-CuAh2ZEk.js";import{c as dt}from"./Typography-BYTqXvty.js";const pt=["addEndListener","appear","children","container","direction","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function ut(e,t,n){const r=t.getBoundingClientRect(),a=n&&n.getBoundingClientRect(),g=X(t);let h;if(t.fakeTransform)h=t.fakeTransform;else{const s=g.getComputedStyle(t);h=s.getPropertyValue("-webkit-transform")||s.getPropertyValue("transform")}let m=0,d=0;if(h&&h!=="none"&&typeof h=="string"){const s=h.split("(")[1].split(")")[0].split(",");m=parseInt(s[4],10),d=parseInt(s[5],10)}return e==="left"?a?`translateX(${a.right+m-r.left}px)`:`translateX(${g.innerWidth+m-r.left}px)`:e==="right"?a?`translateX(-${r.right-a.left-m}px)`:`translateX(-${r.left+r.width-m}px)`:e==="up"?a?`translateY(${a.bottom+d-r.top}px)`:`translateY(${g.innerHeight+d-r.top}px)`:a?`translateY(-${r.top-a.top+r.height-d}px)`:`translateY(-${r.top+r.height-d}px)`}function ft(e){return typeof e=="function"?e():e}function z(e,t,n){const r=ft(n),a=ut(e,t,r);a&&(t.style.webkitTransform=a,t.style.transform=a)}const ht=f.forwardRef(function(t,n){const r=O(),a={enter:r.transitions.easing.easeOut,exit:r.transitions.easing.sharp},g={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{addEndListener:h,appear:m=!0,children:d,container:s,direction:c="down",easing:v=a,in:i,onEnter:M,onEntered:L,onEntering:P,onExit:b,onExited:C,onExiting:I,style:D,timeout:E=g,TransitionComponent:S=ot}=t,R=N(t,pt),p=f.useRef(null),H=nt(d.ref,p,n),w=o=>l=>{o&&(l===void 0?o(p.current):o(p.current,l))},y=w((o,l)=>{z(c,o,s),st(o),M&&M(o,l)}),x=w((o,l)=>{const U=W({timeout:E,style:D,easing:v},{mode:"enter"});o.style.webkitTransition=r.transitions.create("-webkit-transform",u({},U)),o.style.transition=r.transitions.create("transform",u({},U)),o.style.webkitTransform="none",o.style.transform="none",P&&P(o,l)}),$=w(L),A=w(I),G=w(o=>{const l=W({timeout:E,style:D,easing:v},{mode:"exit"});o.style.webkitTransition=r.transitions.create("-webkit-transform",l),o.style.transition=r.transitions.create("transform",l),z(c,o,s),b&&b(o)}),J=w(o=>{o.style.webkitTransition="",o.style.transition="",C&&C(o)}),K=o=>{h&&h(p.current,o)},_=f.useCallback(()=>{p.current&&z(c,p.current,s)},[c,s]);return f.useEffect(()=>{if(i||c==="down"||c==="right")return;const o=at(()=>{p.current&&z(c,p.current,s)}),l=X(p.current);return l.addEventListener("resize",o),()=>{o.clear(),l.removeEventListener("resize",o)}},[c,i,s]),f.useEffect(()=>{i||_()},[i,_]),k.jsx(S,u({nodeRef:p,onEnter:y,onEntered:$,onEntering:x,onExit:G,onExited:J,onExiting:A,addEndListener:K,appear:m,in:i,timeout:E},R,{children:(o,l)=>f.cloneElement(d,u({ref:H,style:u({visibility:o==="exited"&&!i?"hidden":void 0},D,d.props.style)},l))}))});function mt(e){return Q("MuiDrawer",e)}Z("MuiDrawer",["root","docked","paper","paperAnchorLeft","paperAnchorRight","paperAnchorTop","paperAnchorBottom","paperAnchorDockedLeft","paperAnchorDockedRight","paperAnchorDockedTop","paperAnchorDockedBottom","modal"]);const gt=["BackdropProps"],xt=["anchor","BackdropProps","children","className","elevation","hideBackdrop","ModalProps","onClose","open","PaperProps","SlideProps","TransitionComponent","transitionDuration","variant"],F=(e,t)=>{const{ownerState:n}=e;return[t.root,(n.variant==="permanent"||n.variant==="persistent")&&t.docked,t.modal]},vt=e=>{const{classes:t,anchor:n,variant:r}=e,a={root:["root"],docked:[(r==="permanent"||r==="persistent")&&"docked"],modal:["modal"],paper:["paper",`paperAnchor${B(n)}`,r!=="temporary"&&`paperAnchorDocked${B(n)}`]};return rt(a,mt,t)},Et=V(it,{name:"MuiDrawer",slot:"Root",overridesResolver:F})(({theme:e})=>({zIndex:(e.vars||e).zIndex.drawer})),Y=V("div",{shouldForwardProp:tt,name:"MuiDrawer",slot:"Docked",skipVariantsResolver:!1,overridesResolver:F})({flex:"0 0 auto"}),wt=V(ct,{name:"MuiDrawer",slot:"Paper",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.paper,t[`paperAnchor${B(n.anchor)}`],n.variant!=="temporary"&&t[`paperAnchorDocked${B(n.anchor)}`]]}})(({theme:e,ownerState:t})=>u({overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:(e.vars||e).zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},t.anchor==="left"&&{left:0},t.anchor==="top"&&{top:0,left:0,right:0,height:"auto",maxHeight:"100%"},t.anchor==="right"&&{right:0},t.anchor==="bottom"&&{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},t.anchor==="left"&&t.variant!=="temporary"&&{borderRight:`1px solid ${(e.vars||e).palette.divider}`},t.anchor==="top"&&t.variant!=="temporary"&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`},t.anchor==="right"&&t.variant!=="temporary"&&{borderLeft:`1px solid ${(e.vars||e).palette.divider}`},t.anchor==="bottom"&&t.variant!=="temporary"&&{borderTop:`1px solid ${(e.vars||e).palette.divider}`})),q={left:"right",right:"left",top:"down",bottom:"up"};function yt(e){return["left","right"].indexOf(e)!==-1}function kt({direction:e},t){return e==="rtl"&&yt(t)?q[t]:t}const bt=f.forwardRef(function(t,n){const r=et({props:t,name:"MuiDrawer"}),a=O(),g=lt(),h={enter:a.transitions.duration.enteringScreen,exit:a.transitions.duration.leavingScreen},{anchor:m="left",BackdropProps:d,children:s,className:c,elevation:v=16,hideBackdrop:i=!1,ModalProps:{BackdropProps:M}={},onClose:L,open:P=!1,PaperProps:b={},SlideProps:C,TransitionComponent:I=ht,transitionDuration:D=h,variant:E="temporary"}=r,S=N(r.ModalProps,gt),R=N(r,xt),p=f.useRef(!1);f.useEffect(()=>{p.current=!0},[]);const H=kt({direction:g?"rtl":"ltr"},m),y=u({},r,{anchor:m,elevation:v,open:P,variant:E},R),x=vt(y),$=k.jsx(wt,u({elevation:E==="temporary"?v:0,square:!0},b,{className:j(x.paper,b.className),ownerState:y,children:s}));if(E==="permanent")return k.jsx(Y,u({className:j(x.root,x.docked,c),ownerState:y,ref:n},R,{children:$}));const A=k.jsx(I,u({in:P,direction:q[H],timeout:D,appear:p.current},C,{children:$}));return E==="persistent"?k.jsx(Y,u({className:j(x.root,x.docked,c),ownerState:y,ref:n},R,{children:A})):k.jsx(Et,u({BackdropProps:u({},d,M,{transitionDuration:D}),className:j(x.root,x.modal,c),open:P,ownerState:y,onClose:L,hideBackdrop:i,ref:n},R,S,{children:A}))}),Tt=(e=[])=>{f.useEffect(()=>{e.forEach(({isError:t,error:n,fallback:r})=>{var a;t&&(r?r():T.error(((a=n==null?void 0:n.data)==null?void 0:a.message)||"Something went wrong"))})},[e])},Mt=e=>{const[t,n]=f.useState(!1),[r,a]=f.useState(null),[g]=e();return[async(m,...d)=>{var c,v;n(!0);const s=T.loading(m||"Updating data...");try{const i=await g(...d);i.data?(T.success(i.data.message||"Updated data successfully",{id:s}),a(i.data)):T.error(((v=(c=i==null?void 0:i.error)==null?void 0:c.data)==null?void 0:v.message)||"Something went wrong",{id:s})}catch(i){console.log(i),T.error("Something went wrong",{id:s})}finally{n(!1)}},t,r]},Ct=(e,t)=>{f.useEffect(()=>(Object.entries(t).forEach(([n,r])=>{e.on(n,r)}),()=>{Object.entries(t).forEach(([n,r])=>{e.off(n,r)})}),[e,t])},$t=dt(k.jsx("path",{d:"M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"}),"Menu");export{bt as D,$t as M,Tt as a,Mt as b,Ct as u};