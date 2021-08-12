"use strict";(self["webpackChunkcffinit"]=self["webpackChunkcffinit"]||[]).push([[570],{1364:(e,t,a)=>{a.d(t,{n:()=>i});var l=a(1959),s=a(3673),o=a(2883),r=a.n(o);const n=(0,l.iH)({"cff-version":"1.2.0",type:"software"});function i(){return{abstract:(0,s.Fl)((()=>n.value.abstract)),asYAML:(0,s.Fl)((()=>r().dump(n.value))),cff:(0,s.Fl)((()=>n.value)),commit:(0,s.Fl)((()=>n.value.commit)),date_released:(0,s.Fl)((()=>n.value.date_released)),identifiers:(0,s.Fl)((()=>n.value.identifiers)),keywords:(0,s.Fl)((()=>n.value.keywords)),message:(0,s.Fl)((()=>n.value.message)),repository:(0,s.Fl)((()=>n.value.repository)),repository_artifact:(0,s.Fl)((()=>n.value.repository_artifact)),repository_code:(0,s.Fl)((()=>n.value.repository_code)),title:(0,s.Fl)((()=>n.value.title)),type:(0,s.Fl)((()=>n.value.type)),url:(0,s.Fl)((()=>n.value.url)),version:(0,s.Fl)((()=>n.value.version)),setAbstract:e=>{n.value.abstract=e},setCommit:e=>{n.value.commit=e},setDateReleased:e=>{n.value.date_released=e},setIdentifiers:e=>{n.value.identifiers=e},setKeywords:e=>{n.value.keywords=e},setMessage:e=>{n.value.message=e},setRepository:e=>{n.value.repository=e},setRepositoryArtifact:e=>{n.value.repository_artifact=e},setRepositoryCode:e=>{n.value.repository_code=e},setTitle:e=>{n.value.title=e},setType:e=>{n.value.type=e},setUrl:e=>{n.value.url=e},setVersion:e=>{n.value.version=e}}}},8150:(e,t,a)=>{a.d(t,{g:()=>r});var l=a(1959),s=a(3673);const o=(0,l.iH)(1);function r(){return{step:(0,s.Fl)((()=>o.value)),next:()=>{o.value=o.value+1},previous:()=>{o.value=o.value-1},goto:e=>{o.value=e}}}},2751:(e,t,a)=>{a.d(t,{Z:()=>f});var l=a(3673);const s={class:"row action-buttons"},o={class:"col"},r={class:"col q-mr-lg",align:"right"};function n(e,t,a,n,i,u){const c=(0,l.up)("q-btn"),d=(0,l.up)("q-btn-group");return(0,l.wg)(),(0,l.j4)("div",s,[(0,l.Wm)("div",o,[(0,l.Wm)(c,{"no-caps":"",flat:"",onClick:e.navigatePrevious,color:"",label:"Back"},null,8,["onClick"])]),(0,l.Wm)("div",r,[(0,l.Wm)(d,{flat:""},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{"no-caps":"",flat:"",color:"",label:"Finish",to:"/finish"}),(0,l.Wm)(c,{"no-caps":"",onClick:e.navigateNext,color:"grey-6",label:"Next"},null,8,["onClick"])])),_:1})])])}var i=a(9582),u=a(8150);const c=(0,l.aZ)({name:"StepperActions",setup(){const e=(0,u.g)(),t=(0,i.tv)(),a=()=>{e.next();const a=`/${e.step.value}`;return t.push({path:a})},l=()=>{e.previous();const a=`/${e.step.value}`;return t.push({path:a})},s=a=>{e.goto(a);const l=`/${e.step.value}`;return t.push({path:l})};return{step:e,navigateNext:a,navigatePrevious:l,navigateTo:s}}});var d=a(8240),v=a(6375),m=a(7518),p=a.n(m);c.render=n;const f=c;p()(c,"components",{QBtn:d.Z,QBtnGroup:v.Z})},2570:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var l=a(3673);const s=(0,l.HX)("data-v-cac976a4");(0,l.dD)("data-v-cac976a4");const o={class:"q-pa-md"},r={class:"q-gutter-md title-field text-dark"},n=(0,l.Wm)("p",{class:"q-mt-xl text-h5"}," What is the commit identifier of the work? ",-1),i=(0,l.Wm)("p",{class:"q-mt-xl text-h5"}," What is the version of the work? ",-1),u=(0,l.Wm)("p",{class:"q-mt-xl text-h5"}," When was the version released? ",-1);(0,l.Cn)();const c=s(((e,t,a,s,c,d)=>{const v=(0,l.up)("q-input"),m=(0,l.up)("StepperActions");return(0,l.wg)(),(0,l.j4)(l.HY,null,[(0,l.Wm)("div",o,[(0,l.Wm)("div",r,[n,(0,l.Wm)(v,{"model-value":e.commit,"onUpdate:modelValue":e.setCommit,label:"commit",outlined:"",standout:"","bg-color":"white",rules:[e=>e&&e.length>3||"Please use minimum 3 characters"]},null,8,["model-value","onUpdate:modelValue","rules"]),i,(0,l.Wm)(v,{"model-value":e.version,"onUpdate:modelValue":e.setVersion,label:"version",outlined:"",standout:"","bg-color":"white",rules:[e=>e&&e.length>3||"Please use minimum 3 characters"]},null,8,["model-value","onUpdate:modelValue","rules"]),u,(0,l.Wm)(v,{"model-value":e.date_released,"onUpdate:modelValue":e.setDateReleased,label:"date_released",outlined:"",standout:"","bg-color":"white",rules:[e=>e&&e.length>3||"Please use minimum 3 characters"]},null,8,["model-value","onUpdate:modelValue","rules"])])]),(0,l.Wm)(m)],64)}));var d=a(2751),v=a(1364);const m=(0,l.aZ)({name:"PageVersionSpecific",components:{StepperActions:d.Z},setup(){const e=(0,v.n)();return{commit:e.commit,date_released:e.date_released,version:e.version,setCommit:e.setCommit,setDateReleased:e.setDateReleased,setVersion:e.setVersion}}});var p=a(8908),f=a(7518),h=a.n(f);m.render=c,m.__scopeId="data-v-cac976a4";const g=m;h()(m,"components",{QInput:p.Z})}}]);