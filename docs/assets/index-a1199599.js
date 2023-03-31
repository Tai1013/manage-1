import{b6 as N,x as T,r as d,w as Z,d as H,a3 as Y,a2 as z,z as j,M as k,Y as S,aN as Q,au as i,b7 as U,b8 as F,o as J,R as K,b9 as W,ba as G,bb as x,bc as $,bd as ee,a$ as te}from"./vendor-83e22a84.js";import{E as oe,a as E,b as P,c as se}from"./element-plus-0-75e0eb6e.js";import{i as ne,h as ae,X as y,a as le,J as re,n as ie,g as ue,o as w,s as me,b as ce,c as de}from"./firebase-3a4f80eb.js";import{E as q}from"./element-plus-1-30446d03.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const m of l.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&s(m)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();String.prototype.num=function(){return parseFloat(this.replace(/[^0-9.+-]/g,""))};const _e="modulepreload",pe=function(t){return"/manage/"+t},D={},o=function(e,n,s){if(!n||n.length===0)return e();const a=document.getElementsByTagName("link");return Promise.all(n.map(l=>{if(l=pe(l),l in D)return;D[l]=!0;const m=l.endsWith(".css"),f=m?'[rel="stylesheet"]':"";if(!!s)for(let u=a.length-1;u>=0;u--){const c=a[u];if(c.href===l&&(!m||c.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${f}`))return;const r=document.createElement("link");if(r.rel=m?"stylesheet":_e,m||(r.as="script",r.crossOrigin=""),r.href=l,document.head.appendChild(r),m)return new Promise((u,c)=>{r.addEventListener("load",u),r.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>e())},ge="data:image/png;base64,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",Ae="data:image/png;base64,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",he=(t,e)=>{const n=t[e];return n?typeof n=="function"?n():Promise.resolve(n):new Promise((s,a)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(a.bind(null,new Error("Unknown variable dynamic import: "+e)))})},Ee={繁體中文:"Traditional Chinese",英語:"English"},fe={操作記錄:"Operate Record"},ve={台北時間:"Taipei",紐約時間:"New York"},Pe={演示無需輸入:"Demo not input",請輸入:"Please enter",請選擇:"Please select",開始時間:"Start Time",結束時間:"End Time"},Ie={必填:"Required",格式有誤:"Wrong Format","僅限{min}到{max}碼":"Only {min} to {max} codes"},Te={錯誤:"Error",API錯誤:"API Error","登入逾時，請重新登入":"Login time out, please login again",電子信箱或密碼有誤:"Email or Password error",帳戶已停用:"User disabled","多次登錄失敗，帳戶已暫時禁用，請稍候再試":"Too many requests",API格式錯誤:"API Wrong Format"},Oe={演示:"Demo",正式:"Formal",首頁:"Home",登入:"Sign in",記住我的電子信箱:"Remember Email",登入成功:"Login successful",提示:"Prompt",演示站僅供查看:"Demo site is for viewing only",按鈕:"Button",確認:"Confirm",取消:"Cancel",送出:"Submit",搜尋:"Search",清除:"Clear",電子信箱:"Email",密碼:"Password",下拉菜單:"Dropdown List",錯誤:"Error",演示帳號:"Demo account",登出:"Sign Out",站台:"Platform",帳號:"Account",頁面:"Page",操作類型:"Operate Type",操作時間:"Operate Time",locale:Ee,page:fe,timezone:ve,placeholder:Pe,validate:Ie,error:Te},Le={繁體中文:"繁體中文",英語:"英文"},je={操作記錄:"操作記錄"},De={台北時間:"台北時間",紐約時間:"紐約時間"},Re={演示無需輸入:"演示無需輸入",請輸入:"請輸入",請選擇:"請選擇",開始時間:"開始時間",結束時間:"結束時間"},be={必填:"必填",格式有誤:"格式有誤","僅限{min}到{max}碼":"僅限{min}到{max}碼"},Ve={錯誤:"錯誤",API錯誤:"API錯誤","登入逾時，請重新登入":"登入逾時，請重新登入",電子信箱或密碼有誤:"電子信箱或密碼有誤",帳戶已停用:"帳戶已停用","多次登錄失敗，帳戶已暫時禁用，請稍候再試":"多次登錄失敗，帳戶已暫時禁用，請稍候再試",API格式錯誤:"API格式錯誤"},Se={演示:"演示",正式:"正式",首頁:"首頁",登入:"登入",記住我的電子信箱:"記住我的電子信箱",登入成功:"登入成功",提示:"提示",演示站僅供查看:"演示站僅供查看",按鈕:"按鈕",確認:"確認",取消:"取消",送出:"送出",搜尋:"搜尋",清除:"清除",電子信箱:"電子信箱",密碼:"密碼",下拉菜單:"下拉菜單",錯誤:"錯誤",演示帳號:"演示帳號",登出:"登出",站台:"站台",帳號:"帳號",頁面:"頁面",操作類型:"操作類型",操作時間:"操作時間",locale:Le,page:je,timezone:De,placeholder:Re,validate:be,error:Ve},ye="./locales/",we=Object.assign({"./locales/en.json":Oe,"./locales/zh-tw.json":Se}),qe=Object.fromEntries(Object.entries(we).map(([t,e])=>[t.slice(ye.length,-5),e])),v=N({legacy:!1,locale:"zh-tw",fallbackLocale:"zh-tw",globalInjection:!0,messages:qe}),Be=t=>{t.use(v)},_=v.global.t,Xe=async t=>(await he(Object.assign({"../../node_modules/element-plus/es/locale/lang/af.mjs":()=>o(()=>import("./element-plus-0-75e0eb6e.js").then(e=>e.K),["assets/element-plus-0-75e0eb6e.js","assets/vendor-83e22a84.js","assets/vendor-f6e8f6cc.css","assets/element-plus-1-30446d03.js","assets/element-plus-0-72cef945.css"]),"../../node_modules/element-plus/es/locale/lang/ar.mjs":()=>o(()=>import("./element-plus-0-75e0eb6e.js").then(e=>e.L),["assets/element-plus-0-75e0eb6e.js","assets/vendor-83e22a84.js","assets/vendor-f6e8f6cc.css","assets/element-plus-1-30446d03.js","assets/element-plus-0-72cef945.css"]),"../../node_modules/element-plus/es/locale/lang/az.mjs":()=>o(()=>import("./element-plus-0-75e0eb6e.js").then(e=>e.M),["assets/element-plus-0-75e0eb6e.js","assets/vendor-83e22a84.js","assets/vendor-f6e8f6cc.css","assets/element-plus-1-30446d03.js","assets/element-plus-0-72cef945.css"]),"../../node_modules/element-plus/es/locale/lang/bg.mjs":()=>o(()=>import("./element-plus-0-75e0eb6e.js").then(e=>e.N),["assets/element-plus-0-75e0eb6e.js","assets/vendor-83e22a84.js","assets/vendor-f6e8f6cc.css","assets/element-plus-1-30446d03.js","assets/element-plus-0-72cef945.css"]),"../../node_modules/element-plus/es/locale/lang/bn.mjs":()=>o(()=>import("./element-plus-0-75e0eb6e.js").then(e=>e.O),["assets/element-plus-0-75e0eb6e.js","assets/vendor-83e22a84.js","assets/vendor-f6e8f6cc.css","assets/element-plus-1-30446d03.js","assets/element-plus-0-72cef945.css"]),"../../node_modules/element-plus/es/locale/lang/ca.mjs":()=>o(()=>import("./element-plus-0-75e0eb6e.js").then(e=>e.P),["assets/element-plus-0-75e0eb6e.js","assets/vendor-83e22a84.js","assets/vendor-f6e8f6cc.css","assets/element-plus-1-30446d03.js","assets/element-plus-0-72cef945.css"]),"../../node_modules/element-plus/es/locale/lang/ckb.mjs":()=>o(()=>import("./element-plus-0-75e0eb6e.js").then(e=>e.Q),["assets/element-plus-0-75e0eb6e.js","assets/vendor-83e22a84.js","assets/vendor-f6e8f6cc.css","assets/element-plus-1-30446d03.js","assets/element-plus-0-72cef945.css"]),"../../node_modules/element-plus/es/locale/lang/cs.mjs":()=>o(()=>import("./element-plus-0-75e0eb6e.js").then(e=>e.R),["assets/element-plus-0-75e0eb6e.js","assets/vendor-83e22a84.js","assets/vendor-f6e8f6cc.css","assets/element-plus-1-30446d03.js","assets/element-plus-0-72cef945.css"]),"../../node_modules/element-plus/es/locale/lang/da.mjs":()=>o(()=>import("./element-plus-0-75e0eb6e.js").then(e=>e.S),["assets/element-plus-0-75e0eb6e.js","assets/vendor-83e22a84.js","assets/vendor-f6e8f6cc.css","assets/element-plus-1-30446d03.js","assets/element-plus-0-72cef945.css"]),"../../node_modules/element-plus/es/locale/lang/de.mjs":()=>o(()=>import("./element-plus-0-75e0eb6e.js").then(e=>e.T),["assets/element-plus-0-75e0eb6e.js","assets/vendor-83e22a84.js","assets/vendor-f6e8f6cc.css","assets/element-plus-1-30446d03.js","assets/element-plus-0-72cef945.css"]),"../../node_modules/element-plus/es/locale/lang/el.mjs":()=>o(()=>import("./element-plus-0-75e0eb6e.js").then(e=>e.U),["assets/element-plus-0-75e0eb6e.js","assets/vendor-83e22a84.js","assets/vendor-f6e8f6cc.css","assets/element-plus-1-30446d03.js","assets/element-plus-0-72cef945.css"]),"../../node_modules/element-plus/es/locale/lang/en.mjs":()=>o(()=>import("./element-plus-0-75e0eb6e.js").then(e=>e.J),["assets/element-plus-0-75e0eb6e.js","assets/vendor-83e22a84.js","assets/vendor-f6e8f6cc.css","assets/element-plus-1-30446d03.js","assets/element-plus-0-72cef945.css"]),"../../node_modules/element-plus/es/locale/lang/eo.mjs":()=>o(()=>import("./element-plus-0-75e0eb6e.js").then(e=>e.V),["assets/element-plus-0-75e0eb6e.js","assets/vendor-83e22a84.js","assets/vendor-f6e8f6cc.css","assets/element-plus-1-30446d03.js","assets/element-plus-0-72cef945.css"]),"../../node_modules/element-plus/es/locale/lang/es.mjs":()=>o(()=>import("./element-plus-0-75e0eb6e.js").then(e=>e.W),["assets/element-plus-0-75e0eb6e.js","assets/vendor-83e22a84.js","assets/vendor-f6e8f6cc.css","assets/element-plus-1-30446d03.js","assets/element-plus-0-72cef945.css"]),"../../node_modules/element-plus/es/locale/lang/et.mjs":()=>o(()=>import("./element-plus-0-75e0eb6e.js").then(e=>e.X),["assets/element-plus-0-75e0eb6e.js","assets/vendor-83e22a84.js","assets/vendor-f6e8f6cc.css","assets/element-plus-1-30446d03.js","assets/element-plus-0-72cef945.css"]),"../../node_modules/element-plus/es/locale/lang/eu.mjs":()=>o(()=>import("./element-plus-0-75e0eb6e.js").then(e=>e.Y),["assets/element-plus-0-75e0eb6e.js","assets/vendor-83e22a84.js","assets/vendor-f6e8f6cc.css","assets/element-plus-1-30446d03.js","assets/element-plus-0-72cef945.css"]),"../../node_modules/element-plus/es/locale/lang/fa.mjs":()=>o(()=>import("./element-plus-0-75e0eb6e.js").then(e=>e.Z),["assets/element-plus-0-75e0eb6e.js","assets/vendor-83e22a84.js","assets/vendor-f6e8f6cc.css","assets/element-plus-1-30446d03.js","assets/element-plus-0-72cef945.css"]),"../../node_modules/element-plus/es/locale/lang/fi.mjs":()=>o(()=>import("./element-plus-0-75e0eb6e.js").then(e=>e._),["assets/element-plus-0-75e0eb6e.js","assets/vendor-83e22a84.js","assets/vendor-f6e8f6cc.css","assets/element-plus-1-30446d03.js","assets/element-plus-0-72cef945.css"]),"../../node_modules/element-plus/es/locale/lang/fr.mjs":()=>o(()=>import("./element-plus-0-75e0eb6e.js").then(e=>e.$),["assets/element-plus-0-75e0eb6e.js","assets/vendor-83e22a84.js","assets/vendor-f6e8f6cc.css","assets/element-plus-1-30446d03.js","assets/element-plus-0-72cef945.css"]),"../../node_modules/element-plus/es/locale/lang/he.mjs":()=>o(()=>import("./element-plus-0-75e0eb6e.js").then(e=>e.a0),["assets/element-plus-0-75e0eb6e.js","assets/vendor-83e22a84.js","assets/vendor-f6e8f6cc.css","assets/element-plus-1-30446d03.js","assets/element-plus-0-72cef945.css"]),"../../node_modules/element-plus/es/locale/lang/hr.mjs":()=>o(()=>import("./element-plus-0-75e0eb6e.js").then(e=>e.a1),["assets/element-plus-0-75e0eb6e.js","assets/vendor-83e22a84.js","assets/vendor-f6e8f6cc.css","assets/element-plus-1-30446d03.js","assets/element-plus-0-72cef945.css"]),"../../node_modules/element-plus/es/locale/lang/hu.mjs":()=>o(()=>import("./element-plus-0-75e0eb6e.js").then(e=>e.a2),["assets/element-plus-0-75e0eb6e.js","assets/vendor-83e22a84.js","assets/vendor-f6e8f6cc.css","assets/element-plus-1-30446d03.js","assets/element-plus-0-72cef945.css"]),"../../node_modules/element-plus/es/locale/lang/hy-am.mjs":()=>o(()=>import("./element-plus-0-75e0eb6e.js").then(e=>e.a3),["assets/element-plus-0-75e0eb6e.js","assets/vendor-83e22a84.js","assets/vendor-f6e8f6cc.css","assets/element-plus-1-30446d03.js","assets/element-plus-0-72cef945.css"]),"../../node_modules/element-plus/es/locale/lang/id.mjs":()=>o(()=>import("./element-plus-0-75e0eb6e.js").then(e=>e.a4),["assets/element-plus-0-75e0eb6e.js","assets/vendor-83e22a84.js","assets/vendor-f6e8f6cc.css","assets/element-plus-1-30446d03.js","assets/element-plus-0-72cef945.css"]),"../../node_modules/element-plus/es/locale/lang/it.mjs":()=>o(()=>import("./element-plus-0-75e0eb6e.js").then(e=>e.a5),["assets/element-plus-0-75e0eb6e.js","assets/vendor-83e22a84.js","assets/vendor-f6e8f6cc.css","assets/element-plus-1-30446d03.js","assets/element-plus-0-72cef945.css"]),"../../node_modules/element-plus/es/locale/lang/ja.mjs":()=>o(()=>import("./element-plus-0-75e0eb6e.js").then(e=>e.a6),["assets/element-plus-0-75e0eb6e.js","assets/vendor-83e22a84.js","assets/vendor-f6e8f6cc.css","assets/element-plus-1-30446d03.js","assets/element-plus-0-72cef945.css"]),"../../node_modules/element-plus/es/locale/lang/kk.mjs":()=>o(()=>import("./element-plus-0-75e0eb6e.js").then(e=>e.a7),["assets/element-plus-0-75e0eb6e.js","assets/vendor-83e22a84.js","assets/vendor-f6e8f6cc.css","assets/element-plus-1-30446d03.js","assets/element-plus-0-72cef945.css"]),"../../node_modules/element-plus/es/locale/lang/km.mjs":()=>o(()=>import("./element-plus-0-75e0eb6e.js").then(e=>e.a8),["assets/element-plus-0-75e0eb6e.js","assets/vendor-83e22a84.js","assets/vendor-f6e8f6cc.css","assets/element-plus-1-30446d03.js","assets/element-plus-0-72cef945.css"]),"../../node_modules/element-plus/es/locale/lang/ko.mjs":()=>o(()=>import("./element-plus-0-75e0eb6e.js").then(e=>e.a9),["assets/element-plus-0-75e0eb6e.js","assets/vendor-83e22a84.js","assets/vendor-f6e8f6cc.css","assets/element-plus-1-30446d03.js","assets/element-plus-0-72cef945.css"]),"../../node_modules/element-plus/es/locale/lang/ku.mjs":()=>o(()=>import("./element-plus-0-75e0eb6e.js").then(e=>e.aa),["assets/element-plus-0-75e0eb6e.js","assets/vendor-83e22a84.js","assets/vendor-f6e8f6cc.css","assets/element-plus-1-30446d03.js","assets/element-plus-0-72cef945.css"]),"../../node_modules/element-plus/es/locale/lang/ky.mjs":()=>o(()=>import("./element-plus-0-75e0eb6e.js").then(e=>e.ab),["assets/element-plus-0-75e0eb6e.js","assets/vendor-83e22a84.js","assets/vendor-f6e8f6cc.css","assets/element-plus-1-30446d03.js","assets/element-plus-0-72cef945.css"]),"../../node_modules/element-plus/es/locale/lang/lt.mjs":()=>o(()=>import("./element-plus-0-75e0eb6e.js").then(e=>e.ac),["assets/element-plus-0-75e0eb6e.js","assets/vendor-83e22a84.js","assets/vendor-f6e8f6cc.css","assets/element-plus-1-30446d03.js","assets/element-plus-0-72cef945.css"]),"../../node_modules/element-plus/es/locale/lang/lv.mjs":()=>o(()=>import("./element-plus-0-75e0eb6e.js").then(e=>e.ad),["assets/element-plus-0-75e0eb6e.js","assets/vendor-83e22a84.js","assets/vendor-f6e8f6cc.css","assets/element-plus-1-30446d03.js","assets/element-plus-0-72cef945.css"]),"../../node_modules/element-plus/es/locale/lang/mg.mjs":()=>o(()=>import("./element-plus-0-75e0eb6e.js").then(e=>e.ae),["assets/element-plus-0-75e0eb6e.js","assets/vendor-83e22a84.js","assets/vendor-f6e8f6cc.css","assets/element-plus-1-30446d03.js","assets/element-plus-0-72cef945.css"]),"../../node_modules/element-plus/es/locale/lang/mn.mjs":()=>o(()=>import("./element-plus-0-75e0eb6e.js").then(e=>e.af),["assets/element-plus-0-75e0eb6e.js","assets/vendor-83e22a84.js","assets/vendor-f6e8f6cc.css","assets/element-plus-1-30446d03.js","assets/element-plus-0-72cef945.css"]),"../../node_modules/element-plus/es/locale/lang/nb-no.mjs":()=>o(()=>import("./element-plus-0-75e0eb6e.js").then(e=>e.ag),["assets/element-plus-0-75e0eb6e.js","assets/vendor-83e22a84.js","assets/vendor-f6e8f6cc.css","assets/element-plus-1-30446d03.js","assets/element-plus-0-72cef945.css"]),"../../node_modules/element-plus/es/locale/lang/nl.mjs":()=>o(()=>import("./element-plus-0-75e0eb6e.js").then(e=>e.ah),["assets/element-plus-0-75e0eb6e.js","assets/vendor-83e22a84.js","assets/vendor-f6e8f6cc.css","assets/element-plus-1-30446d03.js","assets/element-plus-0-72cef945.css"]),"../../node_modules/element-plus/es/locale/lang/pa.mjs":()=>o(()=>import("./element-plus-0-75e0eb6e.js").then(e=>e.ai),["assets/element-plus-0-75e0eb6e.js","assets/vendor-83e22a84.js","assets/vendor-f6e8f6cc.css","assets/element-plus-1-30446d03.js","assets/element-plus-0-72cef945.css"]),"../../node_modules/element-plus/es/locale/lang/pl.mjs":()=>o(()=>import("./element-plus-0-75e0eb6e.js").then(e=>e.aj),["assets/element-plus-0-75e0eb6e.js","assets/vendor-83e22a84.js","assets/vendor-f6e8f6cc.css","assets/element-plus-1-30446d03.js","assets/element-plus-0-72cef945.css"]),"../../node_modules/element-plus/es/locale/lang/pt-br.mjs":()=>o(()=>import("./element-plus-0-75e0eb6e.js").then(e=>e.ak),["assets/element-plus-0-75e0eb6e.js","assets/vendor-83e22a84.js","assets/vendor-f6e8f6cc.css","assets/element-plus-1-30446d03.js","assets/element-plus-0-72cef945.css"]),"../../node_modules/element-plus/es/locale/lang/pt.mjs":()=>o(()=>import("./element-plus-0-75e0eb6e.js").then(e=>e.al),["assets/element-plus-0-75e0eb6e.js","assets/vendor-83e22a84.js","assets/vendor-f6e8f6cc.css","assets/element-plus-1-30446d03.js","assets/element-plus-0-72cef945.css"]),"../../node_modules/element-plus/es/locale/lang/ro.mjs":()=>o(()=>import("./element-plus-0-75e0eb6e.js").then(e=>e.am),["assets/element-plus-0-75e0eb6e.js","assets/vendor-83e22a84.js","assets/vendor-f6e8f6cc.css","assets/element-plus-1-30446d03.js","assets/element-plus-0-72cef945.css"]),"../../node_modules/element-plus/es/locale/lang/ru.mjs":()=>o(()=>import("./element-plus-0-75e0eb6e.js").then(e=>e.an),["assets/element-plus-0-75e0eb6e.js","assets/vendor-83e22a84.js","assets/vendor-f6e8f6cc.css","assets/element-plus-1-30446d03.js","assets/element-plus-0-72cef945.css"]),"../../node_modules/element-plus/es/locale/lang/sk.mjs":()=>o(()=>import("./element-plus-0-75e0eb6e.js").then(e=>e.ao),["assets/element-plus-0-75e0eb6e.js","assets/vendor-83e22a84.js","assets/vendor-f6e8f6cc.css","assets/element-plus-1-30446d03.js","assets/element-plus-0-72cef945.css"]),"../../node_modules/element-plus/es/locale/lang/sl.mjs":()=>o(()=>import("./element-plus-0-75e0eb6e.js").then(e=>e.ap),["assets/element-plus-0-75e0eb6e.js","assets/vendor-83e22a84.js","assets/vendor-f6e8f6cc.css","assets/element-plus-1-30446d03.js","assets/element-plus-0-72cef945.css"]),"../../node_modules/element-plus/es/locale/lang/sr.mjs":()=>o(()=>import("./element-plus-0-75e0eb6e.js").then(e=>e.aq),["assets/element-plus-0-75e0eb6e.js","assets/vendor-83e22a84.js","assets/vendor-f6e8f6cc.css","assets/element-plus-1-30446d03.js","assets/element-plus-0-72cef945.css"]),"../../node_modules/element-plus/es/locale/lang/sv.mjs":()=>o(()=>import("./element-plus-0-75e0eb6e.js").then(e=>e.ar),["assets/element-plus-0-75e0eb6e.js","assets/vendor-83e22a84.js","assets/vendor-f6e8f6cc.css","assets/element-plus-1-30446d03.js","assets/element-plus-0-72cef945.css"]),"../../node_modules/element-plus/es/locale/lang/ta.mjs":()=>o(()=>import("./element-plus-0-75e0eb6e.js").then(e=>e.as),["assets/element-plus-0-75e0eb6e.js","assets/vendor-83e22a84.js","assets/vendor-f6e8f6cc.css","assets/element-plus-1-30446d03.js","assets/element-plus-0-72cef945.css"]),"../../node_modules/element-plus/es/locale/lang/th.mjs":()=>o(()=>import("./element-plus-0-75e0eb6e.js").then(e=>e.at),["assets/element-plus-0-75e0eb6e.js","assets/vendor-83e22a84.js","assets/vendor-f6e8f6cc.css","assets/element-plus-1-30446d03.js","assets/element-plus-0-72cef945.css"]),"../../node_modules/element-plus/es/locale/lang/tk.mjs":()=>o(()=>import("./element-plus-0-75e0eb6e.js").then(e=>e.au),["assets/element-plus-0-75e0eb6e.js","assets/vendor-83e22a84.js","assets/vendor-f6e8f6cc.css","assets/element-plus-1-30446d03.js","assets/element-plus-0-72cef945.css"]),"../../node_modules/element-plus/es/locale/lang/tr.mjs":()=>o(()=>import("./element-plus-0-75e0eb6e.js").then(e=>e.av),["assets/element-plus-0-75e0eb6e.js","assets/vendor-83e22a84.js","assets/vendor-f6e8f6cc.css","assets/element-plus-1-30446d03.js","assets/element-plus-0-72cef945.css"]),"../../node_modules/element-plus/es/locale/lang/ug-cn.mjs":()=>o(()=>import("./element-plus-0-75e0eb6e.js").then(e=>e.aw),["assets/element-plus-0-75e0eb6e.js","assets/vendor-83e22a84.js","assets/vendor-f6e8f6cc.css","assets/element-plus-1-30446d03.js","assets/element-plus-0-72cef945.css"]),"../../node_modules/element-plus/es/locale/lang/uk.mjs":()=>o(()=>import("./element-plus-0-75e0eb6e.js").then(e=>e.ax),["assets/element-plus-0-75e0eb6e.js","assets/vendor-83e22a84.js","assets/vendor-f6e8f6cc.css","assets/element-plus-1-30446d03.js","assets/element-plus-0-72cef945.css"]),"../../node_modules/element-plus/es/locale/lang/uz-uz.mjs":()=>o(()=>import("./element-plus-0-75e0eb6e.js").then(e=>e.ay),["assets/element-plus-0-75e0eb6e.js","assets/vendor-83e22a84.js","assets/vendor-f6e8f6cc.css","assets/element-plus-1-30446d03.js","assets/element-plus-0-72cef945.css"]),"../../node_modules/element-plus/es/locale/lang/vi.mjs":()=>o(()=>import("./element-plus-0-75e0eb6e.js").then(e=>e.az),["assets/element-plus-0-75e0eb6e.js","assets/vendor-83e22a84.js","assets/vendor-f6e8f6cc.css","assets/element-plus-1-30446d03.js","assets/element-plus-0-72cef945.css"]),"../../node_modules/element-plus/es/locale/lang/zh-cn.mjs":()=>o(()=>import("./element-plus-0-75e0eb6e.js").then(e=>e.aA),["assets/element-plus-0-75e0eb6e.js","assets/vendor-83e22a84.js","assets/vendor-f6e8f6cc.css","assets/element-plus-1-30446d03.js","assets/element-plus-0-72cef945.css"]),"../../node_modules/element-plus/es/locale/lang/zh-tw.mjs":()=>o(()=>import("./element-plus-0-75e0eb6e.js").then(e=>e.aB),["assets/element-plus-0-75e0eb6e.js","assets/vendor-83e22a84.js","assets/vendor-f6e8f6cc.css","assets/element-plus-1-30446d03.js","assets/element-plus-0-72cef945.css"])}),`../../node_modules/element-plus/es/locale/lang/${t}.mjs`)).default,Me=["en"],Ce=()=>{const t=T(()=>Me.includes(s.value)),e=T(()=>new URL(Object.assign({"./flags/en.png":ge,"./flags/zh-tw.png":Ae})[`./flags/${s.value}.png`],self.location).href),n=d(void 0),s=d(localStorage.getItem("language")??"zh-tw");v.global.locale.value=localStorage.getItem("language")??"zh-tw";const a=l=>{s.value=l,v.global.locale.value=l,localStorage.setItem("language",l),document.location.reload()};return Z(()=>s.value,async()=>{n.value=await Xe(s.value)},{immediate:!0}),{isSpaceRequired:t,language:s,currentFlags:e,elementLocale:n,changeLocale:a}},Ne=H({__name:"App",setup(t){const{elementLocale:e}=Ce();return(n,s)=>{const a=Q("router-view");return k(),Y(j(oe),{locale:j(e)},{default:z(()=>[S(a)]),_:1},8,["locale"])}}});const Ze=[{path:"/login",name:"login",component:()=>o(()=>import("./index-5c0af661.js"),["assets/index-5c0af661.js","assets/vendor-83e22a84.js","assets/vendor-f6e8f6cc.css","assets/element-plus-0-75e0eb6e.js","assets/element-plus-1-30446d03.js","assets/element-plus-0-72cef945.css","assets/index.vuevuetypescriptsetuptruelang-f2af950f.js","assets/plugin-vueexport-helper-c27b6911.js","assets/useLoading-dc27eef9.js","assets/firebase-3a4f80eb.js","assets/index-5dbabc93.css","assets/index-5443e923.css"])},{path:"/",name:"pages",component:()=>o(()=>import("./index-fdaab0ae.js"),["assets/index-fdaab0ae.js","assets/element-plus-0-75e0eb6e.js","assets/vendor-83e22a84.js","assets/vendor-f6e8f6cc.css","assets/element-plus-1-30446d03.js","assets/element-plus-0-72cef945.css","assets/plugin-vueexport-helper-c27b6911.js","assets/firebase-3a4f80eb.js","assets/index-c0274452.css","assets/index-5443e923.css"]),meta:{requiresAuth:!0},children:[{path:"/",name:"home",component:()=>o(()=>import("./index-01b2f175.js"),["assets/index-01b2f175.js","assets/chartjs-b7d576de.js","assets/vendor-83e22a84.js","assets/vendor-f6e8f6cc.css","assets/element-plus-0-75e0eb6e.js","assets/element-plus-1-30446d03.js","assets/element-plus-0-72cef945.css","assets/plugin-vueexport-helper-c27b6911.js","assets/operateServer-df9067d1.js","assets/firebase-3a4f80eb.js","assets/useLoading-dc27eef9.js","assets/index-a576b3de.css"])},{path:"/operate/operate-record",name:"operate-record",component:()=>o(()=>import("./index-34928c2a.js"),["assets/index-34928c2a.js","assets/element-plus-1-30446d03.js","assets/vendor-83e22a84.js","assets/vendor-f6e8f6cc.css","assets/index.vuevuetypescriptsetuptruelang-f2af950f.js","assets/element-plus-0-75e0eb6e.js","assets/element-plus-0-72cef945.css","assets/plugin-vueexport-helper-c27b6911.js","assets/useLoading-dc27eef9.js","assets/operateServer-df9067d1.js","assets/firebase-3a4f80eb.js","assets/index-5443e923.css"])}]},{path:"/:pathMatch(.*)*",redirect:"/"}],He={apiKey:"AIzaSyAlvfUKaNMVgqQ4BeTKyaYIdMqr27sTX0U",projectId:"database-c50b7"},B=ne(He),Ye={"auth/invalid-email":"電子信箱或密碼有誤","auth/user-not-found":"電子信箱或密碼有誤","auth/wrong-password":"電子信箱或密碼有誤","auth/user-disabled":"帳戶已停用","auth/too-many-requests":"多次登錄失敗，帳戶已暫時禁用，請稍候再試","invalid-argument":"API格式錯誤"},O=t=>{if(!t)return _("error.API錯誤");const e=Ye;return e[t]?_(`error.${e[t]}`):t},ze=()=>{const t={success:E.success,warning:E.warning,error:E.error,info:E.info,closeAll:E.closeAll},e={alert:P.alert,confirm:P.confirm,prompt:P.prompt};return{$message:t,$messageBox:e}},it=[{value:"zh-tw",label:"繁體中文"},{value:"en",label:"英語"}],ke=[{value:"Asia/Taipei",label:"台北時間"},{value:"America/New_York",label:"紐約時間"}],ut=[{title:"操作記錄",name:"operate",icon:"Operation",child:[{title:"操作記錄",name:"operate-record",path:"/operate/operate-record",operate:!1}]}],Qe=[{value:"login",label:"登入",operate:!0},{value:"read",label:"查看",operate:!1},{value:"create",label:"新增",operate:!1},{value:"detail",label:"詳情",operate:!1},{value:"update",label:"編輯",operate:!1},{value:"delete",label:"刪除",operate:!1}];Qe.map(t=>t.value);const mt=[{value:"manage",label:"管理後台"}];i.extend(U);i.extend(F);const R=d(),Ue=()=>{const t=d(i.tz.guess()),e=d(ke.map(r=>({value:r.value,label:_(`timezone.${r.label}`)+i().tz(r.value).format(" (ZZ)")}))),n=({date:r,timezoon:u,format:c="YYYY-MM-DD HH:mm:ss"}={})=>i(r).tz(u).format(c),s=r=>i(r).utc().format(),a=(r=0,u)=>{const c=i().hour(0).minute(0).second(0),C=i().hour(23).minute(59).second(59);return[i(c).subtract(r,u).format(),i(C).format()]},l=(r,u)=>!u||[void 0,null,""].includes(u)||u.length!==2?!0:i(r).isAfter(i(u[0]))&&i(r).isBefore(i(u[1])),m=({a:r,b:u,sort:c="ascending"})=>i(r).isSame(i(u))?0:i(r).isBefore(i(u))?c==="descending"?1:-1:i(r).isAfter(i(u))?c==="descending"?-1:1:0,f=()=>{const r=d(n({timezoon:t.value,format:"YYYY-MM-DD HH:mm:ss (ZZ)"}));return J(()=>{R.value=setInterval(()=>{r.value=n({timezoon:t.value,format:"YYYY-MM-DD HH:mm:ss (ZZ)"})},1e3)}),K(()=>{clearInterval(R.value)}),{dateTime:r}};return{timezoneList:e,currentDateTime:f,getUtcTime:s,getDateTime:n,getDateTimeSort:m,getDateTimeRange:a,checkDateTimeRange:l,changeTimeZone:r=>{const{dateTime:u}=f();t.value=r,u.value=n({timezoon:r,format:"YYYY-MM-DD HH:mm:ss (ZZ)"})}}},X=ae(B),{getUtcTime:Fe}=Ue(),I=d(sessionStorage.getItem("ipify")),Je=(t,e=[])=>{const n={};try{Object.keys(t).forEach(s=>{if(e.includes(s))if(typeof t[s]=="object"&&Object.keys(t[s]).length>0)n[s]=t[s];else if(typeof t[s]!="object")n[s]=t[s];else throw console.error(s+":api key required"),Error();else{if([void 0,null,""].includes(t[s]))return;(typeof t[s]=="object"&&Object.keys(t[s]).length>0||typeof t[s]!="object")&&(n[s]=t[s])}})}catch{throw Error()}return n},Ke=async()=>W.get("https://api.ipify.org?format=json").then(t=>(sessionStorage.setItem("ipify",t.data.ip),t.data.ip)),L=async t=>{var n,s;I.value||(I.value=await Ke());const e=Je({account:(n=b.value)!=null&&n.isAnonymous?"演示帳號":(s=b.value)==null?void 0:s.displayName,ip:I.value,operateTime:Fe(),page:A.currentRoute.value.name,platform:"manage",operateType:t.apiAction,detail:t.detail},["account","ip","operateTime","page","platform","operateType"]);if(e){const a=y(X,"Database/Manage/Operate");await ie(a,e)}},ct=async t=>{switch(t.method){case"get":const e=y(X,t.url);let n;const s=[];return!t.data&&!t.query&&(n=e),t.data&&!t.query&&(n=t.data),!t.data&&t.query&&(n=le(e,...t.query)),n?await re(n).then(async a=>(Ge(),a.forEach(l=>{s.push({id:l.id,...l.data()})}),t.apiAction&&await L({apiAction:t.apiAction,detail:t.detail}),Promise.resolve(s))).catch(a=>Promise.reject(a)):Promise.reject("API參數錯誤")}},g=ue(B),{$message:p}=ze(),b=T(()=>g.currentUser),We=d(),Ge=()=>localStorage.setItem("session",JSON.stringify(i().add(4,"hour"))),V=t=>{const e=localStorage.getItem("session");e&&i().isAfter(JSON.parse(e))&&(p.error(_("error.登入逾時，請重新登入")),setTimeout(()=>$e(),1e3))};w(g,t=>{t&&(V(),localStorage.setItem("session",JSON.stringify(i(t.metadata.lastSignInTime).add(4,"hour"))),We.value=setInterval(()=>{V()},30*1e3))});const xe=async()=>new Promise((t,e)=>{w(g,n=>{t(n)},e)}),dt=async()=>{await ce(g).then(async t=>{await L({apiAction:"login"}),p.success(_("登入成功")),A.push({name:"home"})}).catch(t=>{p.error(O(t.code))})},_t=async t=>{await de(g,t.email,t.password).then(async e=>{await L({apiAction:"login"}),p.success(_("登入成功")),A.push({name:"home"})}).catch(e=>{p.error(O(e.code))})},$e=()=>{me(g).then(()=>{localStorage.removeItem("session"),A.push({name:"login"}),document.location.reload()}).catch(t=>{p.error(O(t.code))})},A=G({history:x("/manage/"),routes:Ze});A.beforeEach(async(t,e,n)=>{const s=t.matched.length===0,a=await xe();if(s)return n({name:"login"});if(t.name==="login"&&a)return n({name:"home"});if(t.meta.requiresAuth&&!a)return n({name:"login"});n()});const pt=Object.keys(q),et=t=>{const{icon:e}=t;return S(q[e])},tt=t=>{t.component("VIcon",et)},ot=t=>{t.use(se)},st=t=>{const e=$();e.use(ee()),t.use(e)},h=te(Ne);h.use(st);h.use(Be);h.use(A);h.use(tt);h.use(ot);h.mount("#app");export{Qe as A,it as L,ut as M,mt as P,ge as _,ze as a,dt as b,Ue as c,Ae as d,pt as e,b as f,Je as g,ct as h,O as i,_t as p,$e as s,_ as t,Ce as u};
