"use strict";(self["webpackChunkcffinitv2"]=self["webpackChunkcffinitv2"]||[]).push([[738],{1364:(e,t,l)=>{l.d(t,{n:()=>i});var a=l(1959),s=l(3673),o=l(2883),n=l.n(o);const u=(0,a.iH)({"cff-version":"1.2.0",type:"software"});function i(){return{cff:(0,s.Fl)((()=>u.value)),title:(0,s.Fl)((()=>u.value.title)),message:(0,s.Fl)((()=>u.value.message)),type:(0,s.Fl)((()=>u.value.type)),setTitle:e=>{u.value.title=e},setMessage:e=>{u.value.message=e},setType:e=>{u.value.type=e},asYAML:(0,s.Fl)((()=>n().dump(u.value,{replacer:r})))}}const r=(e,t)=>{if(console.log("hideEmptyKeys: ",e,t),""!==t)return t}},8150:(e,t,l)=>{l.d(t,{g:()=>n});var a=l(1959),s=l(3673);const o=(0,a.iH)(1);function n(){return{step:(0,s.Fl)((()=>o.value)),next:()=>{o.value=o.value+1},previous:()=>{o.value=o.value-1},goto:e=>{o.value=e}}}},6651:(e,t,l)=>{l.d(t,{Z:()=>g});var a=l(3673);const s={class:"row action-buttons"},o={class:"col"},n={class:"col q-mr-lg",align:"right"};function u(e,t,l,u,i,r){const p=(0,a.up)("q-btn"),c=(0,a.up)("q-btn-group");return(0,a.wg)(),(0,a.j4)("div",s,[(0,a.Wm)("div",o,[(0,a.Wm)(p,{"no-caps":"",flat:"",onClick:e.navigatePrevious,color:"",label:"Back"},null,8,["onClick"])]),(0,a.Wm)("div",n,[(0,a.Wm)(c,{flat:""},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{"no-caps":"",flat:"",color:"",label:"Finish",to:"/finish"}),(0,a.Wm)(p,{"no-caps":"",onClick:e.navigateNext,color:"grey-6",label:"Next"},null,8,["onClick"])])),_:1})])])}var i=l(9582),r=l(8150);const p=(0,a.aZ)({name:"StepperActions",setup(){const e=(0,r.g)(),t=(0,i.tv)(),l=()=>{e.next();const l=`/${e.step.value}`;return t.push({path:l})},a=()=>{e.previous();const l=`/${e.step.value}`;return t.push({path:l})},s=l=>{e.goto(l);const a=`/${e.step.value}`;return t.push({path:a})};return{step:e,navigateNext:l,navigatePrevious:a,navigateTo:s}}});var c=l(8240),d=l(6375),v=l(7518),m=l.n(v);p.render=u;const g=p;m()(p,"components",{QBtn:c.Z,QBtnGroup:d.Z})},2738:(e,t,l)=>{l.r(t),l.d(t,{default:()=>b});var a=l(3673);const s=(0,a.HX)("data-v-2bb1db01");(0,a.dD)("data-v-2bb1db01");const o={class:"q-pa-md"},n={class:"q-gutter-md title-field text-dark"},u=(0,a.Wm)("p",{class:"q-mt-xl text-h5"}," What is the title of the work? ",-1),i=(0,a.Wm)("p",{class:"q-mt-xl  text-h5"}," What do you want citers to do with the information provided in your CITATION.cff file? ",-1),r=(0,a.Wm)("p",{class:"q-mt-xl text-h5"}," What type of work does this CITATION.cff describe? ",-1);(0,a.Cn)();const p=s(((e,t,l,s,p,c)=>{const d=(0,a.up)("q-input"),v=(0,a.up)("q-option-group"),m=(0,a.up)("StepperActions");return(0,a.wg)(),(0,a.j4)(a.HY,null,[(0,a.Wm)("div",o,[(0,a.Wm)("div",n,[u,(0,a.Wm)(d,{"model-value":e.title,"onUpdate:modelValue":e.setTitle,label:"title",outlined:"",standout:"","bg-color":"white",rules:[e=>e&&e.length>3||"Please use minimum 3 characters"]},null,8,["model-value","onUpdate:modelValue","rules"]),i,(0,a.Wm)(d,{"model-value":e.message,"onUpdate:modelValue":e.setMessage,label:"message",outlined:"","bg-color":"white",rules:[e=>e&&e.length>3||"Please use minimum 3 characters"]},null,8,["model-value","onUpdate:modelValue","rules"]),r,(0,a.Wm)(v,{options:e.typeOptions,type:"radio","model-value":e.type,"onUpdate:modelValue":e.setType},null,8,["options","model-value","onUpdate:modelValue"])])]),(0,a.Wm)(m)],64)}));var c=l(6651),d=l(1364);const v=(0,a.aZ)({name:"PageTitle",components:{StepperActions:c.Z},setup(){const e=(0,d.n)();return{typeOptions:[{label:"Software",value:"software"},{label:"Dataset",value:"dataset"}],title:e.title,message:e.message,type:e.type,setTitle:e.setTitle,setMessage:e.setMessage,setType:e.setType}}});var m=l(8908),g=l(7011),f=l(7518),h=l.n(f);v.render=p,v.__scopeId="data-v-2bb1db01";const b=v;h()(v,"components",{QInput:m.Z,QOptionGroup:g.Z})}}]);