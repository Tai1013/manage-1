import{ah as n,aA as S,$ as u,R as f,aj as l,ak as _,al as p,av as m,V as s,aG as $,an as V,aM as v,aK as x,aI as N,bv as B,ax as r,aD as d,bc as H}from"./index-504a32b7.js";import{_ as A}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as h}from"./plugin-vue_export-helper-1cff8a04.js";const I=n({name:"ElContainer"}),M=n({...I,props:{direction:{type:String}},setup(o){const e=o,t=S(),a=u("container"),c=f(()=>e.direction==="vertical"?!0:e.direction==="horizontal"?!1:t&&t.default?t.default().some(g=>{const w=g.type.name;return w==="ElHeader"||w==="ElFooter"}):!1);return(i,g)=>(l(),_("section",{class:m([s(a).b(),s(a).is("vertical",s(c))])},[p(i.$slots,"default")],2))}});var z=h(M,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/container.vue"]]);const F=n({name:"ElAside"}),D=n({...F,props:{width:{type:String,default:null}},setup(o){const e=o,t=u("aside"),a=f(()=>e.width?t.cssVarBlock({width:e.width}):{});return(c,i)=>(l(),_("aside",{class:m(s(t).b()),style:$(s(a))},[p(c.$slots,"default")],6))}});var k=h(D,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/aside.vue"]]);const j=n({name:"ElFooter"}),G=n({...j,props:{height:{type:String,default:null}},setup(o){const e=o,t=u("footer"),a=f(()=>e.height?t.cssVarBlock({height:e.height}):{});return(c,i)=>(l(),_("footer",{class:m(s(t).b()),style:$(s(a))},[p(c.$slots,"default")],6))}});var E=h(G,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/footer.vue"]]);const K=n({name:"ElHeader"}),R=n({...K,props:{height:{type:String,default:null}},setup(o){const e=o,t=u("header"),a=f(()=>e.height?t.cssVarBlock({height:e.height}):{});return(c,i)=>(l(),_("header",{class:m(s(t).b()),style:$(s(a))},[p(c.$slots,"default")],6))}});var b=h(R,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/header.vue"]]);const q=n({name:"ElMain"}),J=n({...q,setup(o){const e=u("main");return(t,a)=>(l(),_("main",{class:m(s(e).b())},[p(t.$slots,"default")],2))}});var C=h(J,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/main.vue"]]);const y=V(z,{Aside:k,Footer:E,Header:b,Main:C}),L=v(k);v(E);const O=v(b),P=v(C),Q={class:"aside-comp"},T={class:"home-title"},U={name:"AsideComp"},W=n({...U,setup(o){const e="管理後台";return(t,a)=>(l(),_("div",Q,[x("div",T,N(s(e)),1)]))}});const X=B('<div class="header-top" data-v-e535588a><div class="between" data-v-e535588a></div><div class="between" data-v-e535588a></div></div><div class="header-content" data-v-e535588a><div class="between" data-v-e535588a></div><div class="between" data-v-e535588a></div></div>',2),Y={name:"HeaderComp"},Z=n({...Y,setup(o){return(e,t)=>X}});const ee=A(Z,[["__scopeId","data-v-e535588a"]]),te={class:"common-layout"},se={class:"main-view"},re=n({__name:"index",setup(o){return(e,t)=>{const a=H("router-view");return l(),_("div",te,[r(s(y),null,{default:d(()=>[r(s(L),{width:"200px"},{default:d(()=>[r(W)]),_:1}),r(s(y),null,{default:d(()=>[r(s(O),{height:"80px"},{default:d(()=>[r(ee)]),_:1}),r(s(P),null,{default:d(()=>[x("div",se,[r(a)])]),_:1})]),_:1})]),_:1})])}}});export{re as default};
