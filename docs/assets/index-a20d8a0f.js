import"./index.vuevuetypestyleindex0scoped115da10dlang-a488f674.js";import{b as ce,i as X,d as fe,a as me,U as R,c as U,e as q,f as L,C as K,I as j,g as E,u as ve,h as be,j as pe,k as ye,l as S,m as ge,n as he,r as z,o as ke,w as D,p as Se,q as Ve,s,t as p,v as w,x as a,y as V,z as le,A as v,B as y,D as M,E as O,F as k,G as C,H as I,J as $e,K as Y,L as te,_ as we,M as Ce,N as Ie,O as Z,P as Te,Q as Ee,R as P,S as Be,T,V as F,W as H,X as ie,Y as Ne,Z as ne,$,a0 as ze,a1 as Pe,a2 as Fe,a3 as Ae,a4 as Oe,a5 as Ue,a6 as De,a7 as qe}from"./index-dce2644b.js";import{E as x,a as _,b as Le,_ as Me,c as ee,d as Re,u as Ke,e as je,f as He}from"./index.vuevuetypescriptsetuptruelang-a45f9c5d.js";import{_ as oe}from"./plugin-vueexport-helper-c27b6911.js";const Ge=ce({modelValue:{type:[Boolean,String,Number],default:!1},value:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},width:{type:[String,Number],default:""},inlinePrompt:{type:Boolean,default:!1},activeIcon:{type:X},inactiveIcon:{type:X},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},borderColor:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},id:String,loading:{type:Boolean,default:!1},beforeChange:{type:fe(Function)},size:{type:String,validator:me},tabindex:{type:[String,Number]}}),We={[R]:e=>U(e)||q(e)||L(e),[K]:e=>U(e)||q(e)||L(e),[j]:e=>U(e)||q(e)||L(e)},Je=["onClick"],Qe=["id","aria-checked","aria-disabled","name","true-value","false-value","disabled","tabindex","onKeydown"],Xe=["aria-hidden"],Ye=["aria-hidden"],Ze=["aria-hidden"],G="ElSwitch",xe=E({name:G}),_e=E({...xe,props:Ge,emits:We,setup(e,{expose:f,emit:d}){const l=e,r=Ce(),{formItem:n}=ve(),o=be(),i=pe("switch");ye({from:'"value"',replacement:'"model-value" or "v-model"',scope:G,version:"2.3.0",ref:"https://element-plus.org/en-US/component/switch.html#attributes",type:"Attribute"},S(()=>{var t;return!!((t=r.vnode.props)!=null&&t.value)}));const{inputId:g}=ge(l,{formItemContext:n}),m=he(S(()=>l.loading)),c=z(l.modelValue!==!1),u=z(),B=z(),N=S(()=>[i.b(),i.m(o.value),i.is("disabled",m.value),i.is("checked",b.value)]),se=S(()=>({width:ke(l.width)}));D(()=>l.modelValue,()=>{c.value=!0}),D(()=>l.value,()=>{c.value=!1});const W=S(()=>c.value?l.modelValue:l.value),b=S(()=>W.value===l.activeValue);[l.activeValue,l.inactiveValue].includes(W.value)||(d(R,l.inactiveValue),d(K,l.inactiveValue),d(j,l.inactiveValue)),D(b,t=>{var h;u.value.checked=t,l.validateEvent&&((h=n==null?void 0:n.validate)==null||h.call(n,"change").catch(ue=>Se()))});const A=()=>{const t=b.value?l.inactiveValue:l.activeValue;d(R,t),d(K,t),d(j,t),Ie(()=>{u.value.checked=b.value})},J=()=>{if(m.value)return;const{beforeChange:t}=l;if(!t){A();return}const h=t();[Z(h),U(h)].includes(!0)||Te(G,"beforeChange must return type `Promise<boolean>` or `boolean`"),Z(h)?h.then(Q=>{Q&&A()}).catch(Q=>{}):h&&A()},re=S(()=>i.cssVarBlock({...l.activeColor?{"on-color":l.activeColor}:null,...l.inactiveColor?{"off-color":l.inactiveColor}:null,...l.borderColor?{"border-color":l.borderColor}:null})),de=()=>{var t,h;(h=(t=u.value)==null?void 0:t.focus)==null||h.call(t)};return Ve(()=>{u.value.checked=b.value}),f({focus:de,checked:b}),(t,h)=>(s(),p("div",{class:V(a(N)),style:Y(a(re)),onClick:te(J,["prevent"])},[w("input",{id:a(g),ref_key:"input",ref:u,class:V(a(i).e("input")),type:"checkbox",role:"switch","aria-checked":a(b),"aria-disabled":a(m),name:t.name,"true-value":t.activeValue,"false-value":t.inactiveValue,disabled:a(m),tabindex:t.tabindex,onChange:A,onKeydown:le(J,["enter"])},null,42,Qe),!t.inlinePrompt&&(t.inactiveIcon||t.inactiveText)?(s(),p("span",{key:0,class:V([a(i).e("label"),a(i).em("label","left"),a(i).is("active",!a(b))])},[t.inactiveIcon?(s(),v(a(O),{key:0},{default:y(()=>[(s(),v(M(t.inactiveIcon)))]),_:1})):k("v-if",!0),!t.inactiveIcon&&t.inactiveText?(s(),p("span",{key:1,"aria-hidden":a(b)},C(t.inactiveText),9,Xe)):k("v-if",!0)],2)):k("v-if",!0),w("span",{ref_key:"core",ref:B,class:V(a(i).e("core")),style:Y(a(se))},[t.inlinePrompt?(s(),p("div",{key:0,class:V(a(i).e("inner"))},[t.activeIcon||t.inactiveIcon?(s(),v(a(O),{key:0,class:V(a(i).is("icon"))},{default:y(()=>[(s(),v(M(a(b)?t.activeIcon:t.inactiveIcon)))]),_:1},8,["class"])):t.activeText||t.inactiveText?(s(),p("span",{key:1,class:V(a(i).is("text")),"aria-hidden":!a(b)},C(a(b)?t.activeText:t.inactiveText),11,Ye)):k("v-if",!0)],2)):k("v-if",!0),w("div",{class:V(a(i).e("action"))},[t.loading?(s(),v(a(O),{key:0,class:V(a(i).is("loading"))},{default:y(()=>[I(a($e))]),_:1},8,["class"])):k("v-if",!0)],2)],6),!t.inlinePrompt&&(t.activeIcon||t.activeText)?(s(),p("span",{key:1,class:V([a(i).e("label"),a(i).em("label","right"),a(i).is("active",a(b))])},[t.activeIcon?(s(),v(a(O),{key:0},{default:y(()=>[(s(),v(M(t.activeIcon)))]),_:1})):k("v-if",!0),!t.activeIcon&&t.activeText?(s(),p("span",{key:1,"aria-hidden":!a(b)},C(t.activeText),9,Ze)):k("v-if",!0)],2)):k("v-if",!0)],14,Je))}});var ea=we(_e,[["__file","/home/runner/work/element-plus/element-plus/packages/components/switch/src/switch.vue"]]);const aa=Ee(ea),la={name:"FieldComp"},ta=E({...la,props:{form:{type:Object,required:!0},field:{type:Object,required:!0}},setup(e){const f=(l,r)=>{if(r.onChange)return r.onChange({value:l,field:r})},d=l=>l.value?l.value:l;return(l,r)=>!e.field.component||e.field.component==="input"?(s(),v(a(Be),P({key:0,modelValue:e.form[e.field.prop],"onUpdate:modelValue":r[0]||(r[0]=n=>e.form[e.field.prop]=n)},e.field.componentAttr,{type:e.field.type,clearable:e.field.clearable,disabled:e.field.disabled,size:e.field.size,placeholder:e.field.placeholder?l.$t(`placeholder.${e.field.placeholder}`):l.$t("placeholder.請輸入"),onChange:r[1]||(r[1]=n=>f(n,e.field))}),null,16,["modelValue","type","clearable","disabled","size","placeholder"])):e.field.component==="select"?(s(),v(a(_),P({key:1,modelValue:e.form[e.field.prop],"onUpdate:modelValue":r[2]||(r[2]=n=>e.form[e.field.prop]=n)},e.field.componentAttr,{clearable:e.field.clearable,disabled:e.field.disabled,size:e.field.size,placeholder:e.field.placeholder?l.$t(`placeholder.${e.field.placeholder}`):l.$t("placeholder.請選擇"),onChange:r[3]||(r[3]=n=>f(n,e.field))}),{default:y(()=>[(s(!0),p(T,null,F(d(e.field.options),n=>(s(),v(a(x),{key:n.value,label:n.label,value:n.value,disabled:n.disabled},null,8,["label","value","disabled"]))),128))]),_:1},16,["modelValue","clearable","disabled","size","placeholder"])):e.field.component==="select-group"?(s(),v(a(_),P({key:2,modelValue:e.form[e.field.prop],"onUpdate:modelValue":r[4]||(r[4]=n=>e.form[e.field.prop]=n)},e.field.componentAttr,{clearable:e.field.clearable,disabled:e.field.disabled,size:e.field.size,placeholder:e.field.placeholder?l.$t(`placeholder.${e.field.placeholder}`):l.$t("placeholder.請選擇"),onChange:r[5]||(r[5]=n=>f(n,e.field))}),{default:y(()=>[(s(!0),p(T,null,F(d(e.field.options),n=>(s(),v(a(Le),{key:n.label,label:n.label},{default:y(()=>[(s(!0),p(T,null,F(d(n.options),o=>(s(),v(a(x),{key:o.value,label:o.label,value:o.value,disabled:o.disabled},null,8,["label","value","disabled"]))),128))]),_:2},1032,["label"]))),128))]),_:1},16,["modelValue","clearable","disabled","size","placeholder"])):k("",!0)}}),ia={name:"ButtonComp"},na=E({...ia,props:{button:{type:String,required:!0},loading:{type:Boolean,default:!1}},emits:["click"],setup(e,{emit:f}){const d=e,l=[{label:"送出",value:"submit",type:"primary"},{label:"取消",value:"cancel",type:""}],r=S(()=>{const o=l.find(i=>i.value===d.button);return{type:(o==null?void 0:o.type)||"",label:(o==null?void 0:o.label)||"",value:(o==null?void 0:o.value)||""}}),n=S(()=>["submit"].includes(d.button)&&d.loading);return(o,i)=>(s(),v(a(Me),P(o.$attrs,{type:a(r).type,loading:a(n),onClick:i[0]||(i[0]=g=>f("click",a(r).value))}),{default:y(()=>[H(o.$slots,"default",{},()=>[ie(C(o.$t(a(r).label)),1)])]),_:3},16,["type","loading"]))}}),oa={name:"MrcForm"},sa=E({...oa,props:{form:{type:Object,required:!0},fields:{type:Array,required:!0},labelPosition:{type:String,default:"top"},size:{type:String,default:"default"},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},buttons:{type:[String,Array],default:()=>["cancel","submit"]},enterSubmit:{type:Boolean,default:!1}},setup(e,{emit:f}){const d=e,{spaceRequired:l}=Ne(),{$message:r}=ne(),n=S(()=>typeof d.buttons=="string"?[d.buttons]:d.buttons),o=z(),i=()=>{o.value&&o.value.validate((m,c)=>{if(m)f("submit");else{if(!c)return;Object.keys(c).forEach(u=>{const B=d.fields.find(N=>N.prop===u);if(B&&B.label){const N=l.value?" ":"";r.error($(B.label)+N+c[u][0].message)}})}})},g=m=>{switch(m){case"submit":i();break;case"cancel":f("cancel");break}};return(m,c)=>(s(),v(a(Re),P({ref_key:"formRef",ref:o},m.$attrs,{model:e.form,"label-position":e.labelPosition,disabled:e.disabled||e.loading,size:e.size,onSubmit:c[0]||(c[0]=te(()=>{},["prevent"])),onKeyup:c[1]||(c[1]=le(u=>e.enterSubmit?i():"",["enter"]))}),{default:y(()=>[(s(!0),p(T,null,F(e.fields,u=>(s(),p(T,{key:u.prop},[u.visible!==!1?(s(),v(a(ee),{key:0,prop:u.prop,label:u.label?m.$t(u.label):"",rules:u.rules},{default:y(()=>[H(m.$slots,`field:${u.prop}`,{field:u},()=>[I(ta,{form:e.form,field:u},null,8,["form","field"])],!0)]),_:2},1032,["prop","label","rules"])):k("",!0)],64))),128)),I(a(ee),{class:"form-button"},{default:y(()=>[(s(!0),p(T,null,F(a(n),u=>(s(),v(na,{key:u,button:u,loading:e.loading,onClick:g},{default:y(()=>[H(m.$slots,`button:${u}`,{},void 0,!0)]),_:2},1032,["button","loading"]))),128))]),_:3})]),_:3},16,["model","label-position","disabled","size"]))}}),ra=oe(sa,[["__scopeId","data-v-ad23545e"]]),ae={required:!0,message:$("validate.必填")},da={type:"email",message:$("validate.格式有誤")},ua=()=>{const{load:e,unload:f,isLoading:d}=Ke(),{route:l}=je(),{$messageBox:r}=ne(),n=localStorage.getItem(l.origin)??"",o=z(!0),i=ze({email:n,password:"",remember:!!n}),g=S(()=>[{prop:"email",label:"電子信箱",rules:(()=>o.value?[ae,da]:[])(),placeholder:o.value?"":"演示無需輸入",disabled:!o.value},{prop:"password",type:"password",label:"密碼",rules:o.value?ae:[],placeholder:o.value?"":"演示無需輸入",disabled:!o.value},{prop:"remember"}]),m=async()=>{e(),o.value?(i.remember?localStorage.setItem(l.origin,i.email):localStorage.removeItem(l.origin),await Pe(i)):await r.confirm($("演示站僅供查看"),$("提示"),{type:"warning",confirmButtonText:$("確認"),cancelButtonText:$("取消")}).then(()=>!0).catch(()=>!1)&&await Fe(),f()};return D(()=>o.value,()=>{o.value&&n?(i.email=n,i.password="",i.remember=!!n):(i.email="",i.password="")}),{isFormal:o,form:i,fields:g,isLoading:d,submitHandler:m}},ca=e=>(De("data-v-31668ae8"),e=e(),qe(),e),fa={class:"login"},ma={class:"login-form"},va=ca(()=>w("h1",{class:"login-title"},"Sign in",-1)),ba={class:"version"},pa={class:"mode-switch"},ya=E({__name:"index",setup(e){const{isFormal:f,form:d,fields:l,isLoading:r,submitHandler:n}=ua(),o="0.1.5";return(i,g)=>{const m=Ue("loading");return Ae((s(),p("div",fa,[w("div",ma,[va,I(a(ra),{form:a(d),fields:a(l),buttons:"submit",onSubmit:g[1]||(g[1]=c=>a(n)())},{"field:remember":y(()=>[I(a(He),{modelValue:a(d).remember,"onUpdate:modelValue":g[0]||(g[0]=c=>a(d).remember=c),disabled:!a(f),label:i.$t("記住我的電子信箱")},null,8,["modelValue","disabled","label"])]),"button:submit":y(()=>[ie(C(i.$t("登入")),1)]),_:1},8,["form","fields"]),w("div",ba,C(a(o)),1)]),w("div",pa,[I(a(aa),{modelValue:a(f),"onUpdate:modelValue":g[2]||(g[2]=c=>Oe(f)?f.value=c:null),"active-text":i.$t("正式"),"inactive-text":i.$t("演示")},null,8,["modelValue","active-text","inactive-text"])])])),[[m,a(r)]])}}});const Va=oe(ya,[["__scopeId","data-v-31668ae8"]]);export{Va as default};