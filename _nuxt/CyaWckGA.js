import{u as N,_ as U}from"./ycUzyjn7.js";import{d as b,x as A,u as w,a5 as B,c as g,L as S,$ as j,w as o,f as p,i as s,g as x,t as z,a9 as e,N as $,R as V,S as P,U as y,e as C,n as m,M as f,h as D,ax as I,ay as K,r as L,D as O,aj as R,az as T,aA as E,ae as M,am as q}from"./CPAQMi47.js";const F={class:"hidden lg:flex items-center gap-0.5 ml-auto -my-1 flex-shrink-0"},G=b({__name:"ContentSearchButton",props:{label:{type:String,default:"Search..."}},setup(n){const r=A(),{$ui:l}=w(),{toggleContentSearch:t}=B(),{metaSymbol:c}=N();return(a,u)=>{var d,_,k,v;const i=U,h=V;return g(),S(h,$({icon:e(r).ui.icons.search,label:n.label,truncate:""},n.label?(_=(d=e(l))==null?void 0:d.button)==null?void 0:_.input:(v=(k=e(l))==null?void 0:k.button)==null?void 0:v.secondary,{"aria-label":"Search",class:[!!n.label&&"flex-1"],onClick:e(t)}),j({_:2},[n.label?{name:"trailing",fn:o(()=>[p("div",F,[s(i,null,{default:o(()=>[x(z(e(c)),1)]),_:1}),s(i,null,{default:o(()=>u[0]||(u[0]=[x(" K ")])),_:1})])]),key:"0"}:void 0]),1040,["icon","label","class","onClick"])}}}),H={class:"relative"},J=b({inheritAttrs:!1,__name:"Aside",props:{links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(n){const r={wrapper:"hidden overflow-y-auto lg:block lg:max-h-[calc(100vh-var(--header-height))] lg:sticky lg:top-[--header-height] py-8 lg:px-4 lg:-mx-4",top:{wrapper:"sticky -top-8 -mt-8 pointer-events-none z-[1]",header:"h-8 bg-background -mx-4 px-4",body:"bg-background relative pointer-events-auto flex -mx-4 px-4",footer:"h-8 bg-gradient-to-b from-background -mx-4 px-4"}},l=n,{ui:t,attrs:c}=P("aside",y(l,"ui"),r,y(l,"class"),!0);return(a,u)=>{const i=I;return g(),C("aside",$({class:e(t).wrapper},e(c)),[p("div",H,[a.$slots.top?(g(),C("div",{key:0,class:m(e(t).top.wrapper)},[p("div",{class:m(e(t).top.header)},null,2),p("div",{class:m(e(t).top.body)},[f(a.$slots,"top")],2),p("div",{class:m(e(t).top.footer)},null,2)],2)):D("",!0),f(a.$slots,"links",{},()=>[s(i,{links:n.links},null,8,["links"])]),f(a.$slots,"default"),f(a.$slots,"bottom")])],16)}}}),X=b({__name:"docs",setup(n){const r=K("navigation",L([])),l=O(()=>{var t;return((t=r.value.find(c=>c._path==="/docs"))==null?void 0:t.children)??[]});return(t,c)=>{const a=G,u=E,i=J,h=M,d=q,_=R;return g(),S(_,null,{default:o(()=>[s(d,null,{left:o(()=>[s(i,null,{top:o(()=>[s(a,{class:"rounded-md",size:"sm"})]),default:o(()=>[s(u,{links:("mapContentNavigation"in t?t.mapContentNavigation:e(T))(e(l))},null,8,["links"])]),_:1})]),default:o(()=>[s(h)]),_:1})]),_:1})}}});export{X as default};
