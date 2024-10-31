import{d as ee,p as te}from"./DDQ9fqw1.js";import{d as O,aN as ae,ay as ne,D as j,r as Q,aO as le,aP as ie,o as se,B as re,ar as K,aQ as oe,aR as ce,aS as ue,aT as de,aU as ge,F as V,aV as G,S as E,U as C,H as fe,I as me,c as n,L as B,w as k,e as o,n as i,a9 as t,M as p,g as D,t as h,h as u,f as w,N as A,ac as Y,X as N,i as b,K as T,E as R,R as q,x as J,$ as pe,aa as M,al as ye,ab as W,aW as he,af as xe,ag as ve,ah as be,ai as ke,aj as $e,q as we}from"./CPAQMi47.js";import{_ as Se}from"./Cpv5XbOU.js";import{_ as Ce}from"./DCGORrDW.js";import{_ as Ue}from"./_xNt5q2r.js";let Ae=Symbol("GroupContext"),je=O({name:"Switch",emits:{"update:modelValue":e=>!0},props:{as:{type:[Object,String],default:"button"},modelValue:{type:Boolean,default:void 0},defaultChecked:{type:Boolean,optional:!0},form:{type:String,optional:!0},name:{type:String,optional:!0},value:{type:String,optional:!0},id:{type:String,default:null},disabled:{type:Boolean,default:!1},tabIndex:{type:Number,default:0}},inheritAttrs:!1,setup(e,{emit:c,attrs:f,slots:s,expose:a}){var r;let l=(r=e.id)!=null?r:`headlessui-switch-${ae()}`,m=ne(Ae,null),[g,x]=ee(j(()=>e.modelValue),d=>c("update:modelValue",d),j(()=>e.defaultChecked));function v(){x(!g.value)}let S=Q(null),$=m===null?S:m.switchRef,P=le(j(()=>({as:e.as,type:f.type})),$);a({el:$,$el:$});function z(d){d.preventDefault(),v()}function L(d){d.key===G.Space?(d.preventDefault(),v()):d.key===G.Enter&&te(d.currentTarget)}function y(d){d.preventDefault()}let U=j(()=>{var d,I;return(I=(d=ie($))==null?void 0:d.closest)==null?void 0:I.call(d,"form")});return se(()=>{re([U],()=>{if(!U.value||e.defaultChecked===void 0)return;function d(){x(e.defaultChecked)}return U.value.addEventListener("reset",d),()=>{var I;(I=U.value)==null||I.removeEventListener("reset",d)}},{immediate:!0})}),()=>{let{name:d,value:I,form:X,tabIndex:F,...H}=e,Z={checked:g.value},_={id:l,ref:$,role:"switch",type:P.value,tabIndex:F===-1?0:F,"aria-checked":g.value,"aria-labelledby":m==null?void 0:m.labelledby.value,"aria-describedby":m==null?void 0:m.describedby.value,onClick:z,onKeyup:L,onKeypress:y};return K(V,[d!=null&&g.value!=null?K(oe,ce({features:ue.Hidden,as:"input",type:"checkbox",hidden:!0,readOnly:!0,checked:g.value,form:X,disabled:H.disabled,name:d,value:I})):null,de({ourProps:_,theirProps:{...f,...ge(H,["modelValue","defaultChecked"])},slot:Z,attrs:f,slots:s,name:"Switch"})])}}});const Ve=O({inheritAttrs:!1,__name:"PricingToggle",props:{modelValue:{type:Boolean,default:!1},left:{type:String,default:"Monthly"},right:{type:String,default:"Yearly"},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},emits:["update:modelValue"],setup(e,{emit:c}){const f=e,s=c,a={wrapper:"ring-1 ring-gray-300 dark:ring-gray-700 flex items-center relative h-8 w-auto flex-shrink-0 cursor-pointer rounded-full p-1 w-full focus:outline-none",marker:"w-1/2 text-white dark:text-gray-900 pointer-events-none inline-block h-6 transform rounded-full bg-gray-900 dark:bg-white shadow transition duration-200 ease-in-out z-0 relative",active:"text-white dark:text-gray-900",inactive:"text-gray-500 dark:text-gray-400",base:"absolute inset-y-0 w-1/2 flex items-center justify-center pointer-events-none z-[1] transition-colors duration-200 select-none text-xs font-semibold flex-shrink-0",left:"left-0",right:"right-0"},r=j({get(){return f.modelValue},set(g){s("update:modelValue",g)}}),{ui:l,attrs:m}=E("pricing.toggle",C(f,"ui"),a,C(f,"class"),!0);return fe(()=>me()),(g,x)=>(n(),B(t(je),A({modelValue:t(r),"onUpdate:modelValue":x[0]||(x[0]=v=>Y(r)?r.value=v:null),"aria-label":"pricing toggle",class:t(l).wrapper},t(m)),{default:k(()=>[e.left||g.$slots.left?(n(),o("span",{key:0,"aria-hidden":"true",class:i([t(l).base,t(l).left,t(r)?t(l).inactive:t(l).active])},[p(g.$slots,"left",{},()=>[D(h(e.left),1)])],2)):u("",!0),e.right||g.$slots.right?(n(),o("span",{key:1,"aria-hidden":"true",class:i([t(l).base,t(l).right,t(r)?t(l).active:t(l).inactive])},[p(g.$slots,"right",{},()=>[D(h(e.right),1)])],2)):u("",!0),w("span",{"aria-hidden":"true",class:i([t(r)?"translate-x-full":"translate-x-0",t(l).marker])},null,2)]),_:3},16,["modelValue","class"]))}}),Be={key:2},Oe=O({inheritAttrs:!1,__name:"PageHero",props:{title:{type:String,default:void 0},description:{type:String,default:void 0},icon:{type:String,default:void 0},links:{type:Array,default:()=>[]},align:{type:String,default:"left"},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(e){const c=e,f=j(()=>{const r=N("gap-8 sm:gap-y-16",c.align==="center"?"flex flex-col":"grid lg:grid-cols-2 lg:items-center"),l=N("",c.align==="center"&&"text-center flex flex-col items-center",c.align==="right"&&"lg:order-last"),m=N("mt-8 flex flex-wrap gap-x-3 gap-y-1.5",c.align==="center"&&"justify-center");return{wrapper:"py-8 sm:py-16",container:r,base:l,icon:{wrapper:"flex mb-4",base:"w-10 h-10 flex-shrink-0 text-primary"},title:"text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl",description:"mt-4 text-lg text-gray-500 dark:text-gray-400",links:m}}),{ui:s,attrs:a}=E("page.hero",C(c,"ui"),f,C(c,"class"),!0);return(r,l)=>{var x,v;const m=R,g=q;return n(),o("div",A({class:t(s).wrapper},t(a)),[w("div",{class:i(t(s).container)},[e.icon||r.$slots.icon||e.title||r.$slots.title||e.description||r.$slots.description||(x=e.links)!=null&&x.length||r.$slots.links?(n(),o("div",{key:0,class:i(t(s).base)},[e.icon||r.$slots.icon?(n(),o("div",{key:0,class:i(t(s).icon.wrapper)},[p(r.$slots,"icon",{},()=>[b(m,{name:e.icon,class:i(t(s).icon.base)},null,8,["name","class"])])],2)):u("",!0),w("h1",{class:i(t(s).title)},[p(r.$slots,"title",{},()=>[D(h(e.title),1)])],2),e.description||r.$slots.description?(n(),o("div",{key:1,class:i(t(s).description)},[p(r.$slots,"description",{},()=>[D(h(e.description),1)])],2)):u("",!0),(v=e.links)!=null&&v.length||r.$slots.links?(n(),o("div",{key:2,class:i(t(s).links)},[p(r.$slots,"links",{},()=>[(n(!0),o(V,null,T(e.links,(S,$)=>(n(),B(g,A({key:$,ref_for:!0},S,{onClick:S.click}),null,16,["onClick"]))),128))])],2)):u("",!0)],2)):u("",!0),r.$slots.default?p(r.$slots,"default",{key:1}):e.align==="right"?(n(),o("div",Be)):u("",!0)],2)],16)}}}),ze={key:0,class:"flex-1"},Ie=O({inheritAttrs:!1,__name:"PricingCard",props:{title:{type:String,default:void 0},description:{type:String,default:void 0},orientation:{type:String,default:"vertical"},align:{type:String,default:"bottom"},highlight:{type:Boolean,default:!1},scale:{type:Boolean,default:!1},features:{type:Array,default:()=>[]},badge:{type:Object,default:void 0},button:{type:Object,default:void 0},price:{type:String,default:void 0},discount:{type:String,default:void 0},cycle:{type:String,default:void 0},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(e){const c=e,f=J(),s=j(()=>{const l=N("flex-1 gap-6 lg:gap-x-8 xl:gap-x-10 flex flex-col",c.orientation==="horizontal"?"lg:grid lg:grid-cols-10":""),m=c.orientation==="horizontal"?"lg:col-span-7":"",g=c.orientation==="horizontal"?"flex flex-col lg:items-center justify-center gap-y-6 lg:col-span-3 border-t lg:border-l lg:border-t-0 border-gray-200 dark:border-gray-800 pt-6 lg:pt-0 lg:pl-8 xl:pl-10":"";return{wrapper:"relative flex flex-col self-stretch w-full",highlight:"ring-2 ring-primary dark:ring-primary",scale:"lg:scale-[1.1] lg:z-10",rounded:"rounded-xl",header:{padding:"p-6 lg:px-8 xl:px-10"},body:{base:l,padding:"p-6 lg:p-8 xl:p-10"},footer:{padding:"p-6 lg:px-8 xl:px-10"},inner:"flex items-center gap-3",title:"text-2xl text-gray-900 dark:text-white sm:text-3xl font-semibold truncate",description:"text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-2",amount:{base:"flex flex-row items-baseline gap-x-1",discount:"text-gray-500 dark:text-gray-400 line-through text-xl sm:text-2xl font-medium",price:"text-gray-900 dark:text-white text-2xl sm:text-4xl font-semibold",cycle:"text-gray-500 dark:text-gray-400 text-sm/6 font-medium truncate"},features:{vertical:"space-y-3 text-sm",horizontal:"grid lg:grid-cols-2 text-sm gap-3",item:{base:"flex items-center gap-x-3 min-w-0",label:"text-gray-600 dark:text-gray-400 truncate",icon:{base:"w-5 h-5 flex-shrink-0 text-primary",name:f.ui.icons.check}}},divider:"my-6 lg:my-8",left:m,right:g}}),{ui:a,attrs:r}=E("pricing.card",C(c,"ui"),s,C(c,"class"),!0);return(l,m)=>{const g=ye,x=Se,v=R,S=q,$=Ce;return n(),B($,A({class:[t(a).wrapper,e.highlight&&t(a).highlight,e.scale&&t(a).scale]},t(r),{ui:t(a)}),pe({default:k(()=>{var P,z,L;return[w("div",{class:i(t(a).left)},[w("div",{class:i(t(a).inner)},[e.title||l.$slots.title?(n(),o("p",{key:0,class:i(t(a).title)},[p(l.$slots,"title",{},()=>[D(h(e.title),1)])],2)):u("",!0),e.badge?(n(),B(g,M(A({key:1},{variant:"subtle",...e.badge})),null,16)):u("",!0)],2),e.description||l.$slots.description?(n(),o("div",{key:0,class:i(t(a).description)},[p(l.$slots,"description",{},()=>[D(h(e.description),1)])],2)):u("",!0),e.orientation==="horizontal"?(n(),o(V,{key:1},[b(x,{class:i(t(a).divider)},null,8,["class"]),(P=e.features)!=null&&P.length||l.$slots.features?(n(),o("div",ze,[p(l.$slots,"features",{},()=>{var y;return[(y=e.features)!=null&&y.length?(n(),o("ul",{key:0,class:i(t(a).features.horizontal)},[(n(!0),o(V,null,T(e.features,(U,d)=>(n(),o("li",{key:d,class:i(t(a).features.item.base)},[b(v,{name:t(a).features.item.icon.name,class:i(t(a).features.item.icon.base)},null,8,["name","class"]),w("span",{class:i(t(a).features.item.label)},h(U),3)],2))),128))],2)):u("",!0)]})])):u("",!0)],64)):u("",!0)],2),e.orientation==="vertical"?(n(),o(V,{key:0},[w("div",{class:i(t(a).amount.base)},[e.discount&&e.price?(n(),o("p",{key:0,class:i(t(a).amount.discount)},h(e.price),3)):u("",!0),w("p",{class:i(t(a).amount.price)},h(e.discount||e.price||" "),3),e.cycle?(n(),o("p",{key:1,class:i(t(a).amount.cycle)},h(e.cycle),3)):u("",!0)],2),(z=e.features)!=null&&z.length||l.$slots.features?(n(),o("div",{key:0,class:i([e.align==="top"&&"order-last","flex-1"])},[p(l.$slots,"features",{},()=>{var y;return[(y=e.features)!=null&&y.length?(n(),o("ul",{key:0,class:i(t(a).features.vertical)},[(n(!0),o(V,null,T(e.features,(U,d)=>(n(),o("li",{key:d,class:i(t(a).features.item.base)},[b(v,{name:t(a).features.item.icon.name,class:i(t(a).features.item.icon.base)},null,8,["name","class"]),w("span",{class:i(t(a).features.item.label)},h(U),3)],2))),128))],2)):u("",!0)]})],2)):u("",!0)],64)):u("",!0),w("div",{class:i(t(a).right)},[e.orientation==="horizontal"?(n(),o("div",{key:0,class:i([t(a).amount.base,e.align==="top"&&"order-last"])},[e.discount&&e.price?(n(),o("p",{key:0,class:i(t(a).amount.discount)},h(e.price),3)):u("",!0),w("p",{class:i(t(a).amount.price)},h(e.discount||e.price||" "),3),e.cycle?(n(),o("p",{key:1,class:i(t(a).amount.cycle)},h(e.cycle),3)):u("",!0)],2)):u("",!0),e.button?(n(),B(S,A({key:1},{block:!0,size:"lg",...e.button},{onClick:(L=e.button)==null?void 0:L.click}),null,16,["onClick"])):u("",!0),e.orientation==="horizontal"?p(l.$slots,"bottom",{key:2}):u("",!0)],2),e.orientation==="vertical"?p(l.$slots,"bottom",{key:1}):u("",!0)]}),_:2},[l.$slots.header?{name:"header",fn:k(()=>[p(l.$slots,"header")]),key:"0"}:void 0,l.$slots.footer?{name:"footer",fn:k(()=>[p(l.$slots,"footer")]),key:"1"}:void 0]),1040,["class","ui"])}}}),Pe=O({inheritAttrs:!1,__name:"PricingGrid",props:{compact:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(e){const c=e,f={wrapper:"flex flex-col lg:grid lg:grid-cols-3 w-full justify-center items-center gap-8"},{ui:s,attrs:a}=E("pricing.grid",C(c,"ui"),f,C(c,"class"),!0);return(r,l)=>(n(),o("div",A({class:[t(s).wrapper,e.compact&&"gap-x-0"]},t(a)),[p(r.$slots,"default")],16))}}),Le=O({inheritAttrs:!1,__name:"LandingLogos",props:{title:{type:String,default:void 0},align:{type:String,default:"center"},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(e){const c=e,f=j(()=>({wrapper:{center:"text-center",right:"text-right",left:"text-left"}[c.align],title:"text-lg font-semibold leading-8 text-gray-900 dark:text-white",images:"mx-auto mt-10 flex flex-wrap items-center justify-between gap-8"})),{ui:s,attrs:a}=E("landing.logos",C(c,"ui"),f,C(c,"class"),!0);return(r,l)=>(n(),o("div",A({class:t(s).wrapper},t(a)),[e.title?(n(),o("h2",{key:0,class:i(t(s).title)},h(e.title),3)):u("",!0),w("div",{class:i(t(s).images)},[p(r.$slots,"default")],2)],16))}}),De=O({inheritAttrs:!1,__name:"LandingFAQ",props:{items:{type:Array,default:()=>[]},multiple:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(e){const c=J(),f=j(()=>({wrapper:"divide-y divide-gray-200 dark:divide-gray-800 -mt-6",container:"divide-y divide-gray-200 dark:divide-gray-800",item:{size:"text-base",padding:"py-6"},button:{base:"text-left text-lg py-6 w-full",label:"text-gray-900 dark:text-white",trailingIcon:{name:c.ui.icons.chevron,base:"w-5 h-5 ms-auto transform transition-transform duration-200 flex-shrink-0 mr-1.5",active:"",inactive:"-rotate-90"}}})),s=e,{ui:a,attrs:r}=E("landing.faq",C(s,"ui"),f,C(s,"class"),!0);return(l,m)=>{const g=R,x=q,v=he;return n(),B(v,A({class:t(a).wrapper,items:e.items,multiple:e.multiple},t(r),{ui:{item:t(a).item,container:t(a).container}}),{default:k(({item:S,open:$})=>[b(x,{color:"gray",variant:"link",ui:{rounded:"rounded-none",color:{gray:{link:"hover:no-underline"}}},padded:!1,class:i(t(a).button.base)},{trailing:k(()=>[b(g,{name:t(a).button.trailingIcon.name,class:i([t(a).button.trailingIcon.base,$?t(a).button.trailingIcon.active:t(a).button.trailingIcon.inactive])},null,8,["name","class"])]),default:k(()=>[w("span",{class:i(t(a).button.label)},h(S.label),3)]),_:2},1032,["class"])]),item:k(S=>[p(l.$slots,"item",M(W(S)))]),_:3},16,["class","items","multiple","ui"])}}}),Ee={key:0},Fe=O({__name:"pricing",async setup(e){let c,f;const{data:s}=([c,f]=xe(()=>ke("pricing",()=>we("/pricing").findOne())),c=await c,f(),c);if(!s.value)throw ve({statusCode:404,statusMessage:"Page not found",fatal:!0});be({title:s.value.title,ogTitle:s.value.title,description:s.value.description,ogDescription:s.value.description});const a=Q(!1);return(r,l)=>{const m=Ve,g=Oe,x=Ie,v=Pe,S=$e,$=R,P=Le,z=Ue,L=De;return t(s)?(n(),o("div",Ee,[b(g,M(W(t(s).hero)),{links:k(()=>[b(m,{modelValue:t(a),"onUpdate:modelValue":l[0]||(l[0]=y=>Y(a)?a.value=y:null),class:"w-48"},null,8,["modelValue"])]),_:1},16),b(S,null,{default:k(()=>[b(v,null,{default:k(()=>[(n(!0),o(V,null,T(t(s).plans,(y,U)=>(n(),B(x,A({key:U,ref_for:!0},y,{price:t(a)?y.price.year:y.price.month,cycle:t(a)?"/year":"/month"}),null,16,["price","cycle"]))),128))]),_:1})]),_:1}),b(z,null,{default:k(()=>[b(P,null,{default:k(()=>[(n(!0),o(V,null,T(t(s).logos.icons,y=>(n(),B($,{key:y,name:y,class:"w-12 h-12 flex-shrink-0 text-gray-500 dark:text-gray-400"},null,8,["name"]))),128))]),_:1})]),_:1}),b(z,{title:t(s).faq.title,description:t(s).faq.description},{default:k(()=>[b(L,{items:t(s).faq.items,multiple:"","default-open":"",class:"max-w-4xl mx-auto"},null,8,["items"])]),_:1},8,["title","description"])])):u("",!0)}}});export{Fe as default};
