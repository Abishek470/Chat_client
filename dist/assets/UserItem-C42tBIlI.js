import{j as r,r as n,S as c,V as l}from"./index-DLu291oi.js";import{L as p}from"./ListItem-Do_Y8ozV.js";import{A as x}from"./Avatar-DIds3tWp.js";import{c as d,T as h}from"./Typography-BYTqXvty.js";import{I as f}from"./Box--JEoGVwv.js";import{A as v}from"./Delete-CS-KR33e.js";const j=d(r.jsx("path",{d:"M19 13H5v-2h14z"}),"Remove"),I=({user:e,handler:t,handlerIsLoading:s,isAdded:o=!1})=>{const{name:a,_id:i,avatar:m}=e;return r.jsx(p,{children:r.jsxs(c,{alignItems:"center",spacing:"1rem",width:"100%",direction:"row",children:[r.jsx(x,{src:l(m)}),r.jsx(h,{variant:"body1",sx:{flexGrow:1,display:"-webkit-box",WebkitLineClamp:1,WebkitBoxOrient:"vertical",overflow:"hidden",textOverflow:"eclipsis",width:"100%"},children:a}),r.jsx(f,{size:"small",sx:{bgcolor:o?"error.main":"primary.main",color:"white","&:hover":{bgcolor:o?"error.dark":"primary.main"}},onClick:()=>t(i),disabled:s,children:o?r.jsx(j,{}):r.jsx(v,{})})]})})},L=n.memo(I);export{L as U};
