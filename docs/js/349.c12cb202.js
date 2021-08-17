"use strict";(self["webpackChunkcffinit"]=self["webpackChunkcffinit"]||[]).push([[349],{8150:(t,e,n)=>{n.d(e,{g:()=>r});var a=n(1959),o=n(3673);const i=(0,a.iH)(1);function r(){return{step:(0,o.Fl)((()=>i.value)),next:()=>{i.value=i.value+1},previous:()=>{i.value=i.value-1},goto:t=>{i.value=t}}}},6281:(t,e,n)=>{n.d(e,{Z:()=>f});var a=n(3673);const o={class:"row action-buttons"},i={class:"col"},r={class:"col q-mr-lg",align:"right"};function s(t,e,n,s,l,u){const c=(0,a.up)("q-btn"),d=(0,a.up)("q-btn-group");return(0,a.wg)(),(0,a.j4)("div",o,[(0,a.Wm)("div",i,[(0,a.Wm)(c,{color:"",flat:"",label:"Back","no-caps":"",onClick:t.navigatePrevious},null,8,["onClick"])]),(0,a.Wm)("div",r,[(0,a.Wm)(d,{flat:""},{default:(0,a.w5)((()=>[(0,a.Wm)(c,{color:"",flat:"",label:"Finish","no-caps":"",to:"/finish"}),(0,a.Wm)(c,{color:"grey-6",label:"Next","no-caps":"",onClick:t.navigateNext},null,8,["onClick"])])),_:1})])])}var l=n(9582),u=n(8150);const c=(0,a.aZ)({name:"StepperActions",setup(){const t=(0,u.g)(),e=(0,l.tv)(),n=()=>{t.next();const n=`/${t.step.value}`;return e.push({path:n})},a=()=>{t.previous();const n=`/${t.step.value}`;return e.push({path:n})},o=n=>{t.goto(n);const a=`/${t.step.value}`;return e.push({path:a})};return{step:t,navigateNext:n,navigatePrevious:a,navigateTo:o}}});var d=n(8240),p=n(6375),m=n(7518),v=n.n(m);c.render=s;const f=c;v()(c,"components",{QBtn:d.Z,QBtnGroup:p.Z})},8349:(t,e,n)=>{n.r(e),n.d(e,{default:()=>x});var a=n(3673),o=n(2323);const i=(0,a.Wm)("div",{class:"page-title"}," Authors ",-1),r=(0,a.Uk)("Add author");function s(t,e,n,s,l,u){const c=(0,a.up)("AuthorViewCard"),d=(0,a.up)("q-btn"),p=(0,a.up)("StepperActions");return(0,a.wg)(),(0,a.j4)("div",null,[i,(0,a.Wm)("div",null,[((0,a.wg)(!0),(0,a.j4)(a.HY,null,(0,a.Ko)(t.authors,((e,n)=>((0,a.wg)(),(0,a.j4)(c,{key:n,index:n,author:e,onEditPressed:()=>t.editingId=n},null,8,["index","author","onEditPressed"])))),128))]),(0,a.Wm)(d,null,{default:(0,a.w5)((()=>[r])),_:1}),(0,a.Uk)(" "+(0,o.zw)(t.editingId)+" ",1),(0,a.Wm)(p)])}var l=n(1959),u=n(6281);const c={class:"row items-center no-wrap"},d={class:"col"},p={class:"text-subtitle1"},m={class:"text-subtitle1"},v={class:"col-auto"};function f(t,e,n,i,r,s){const l=(0,a.up)("q-btn"),u=(0,a.up)("q-card-section"),f=(0,a.up)("q-card");return(0,a.wg)(),(0,a.j4)(f,{flat:"",bordered:"",class:"my-card bg-grey-1"},{default:(0,a.w5)((()=>[(0,a.Wm)(u,null,{default:(0,a.w5)((()=>[(0,a.Wm)("div",c,[(0,a.Wm)("div",d,[(0,a.Wm)("div",p,(0,o.zw)(t.author.givenNames)+" "+(0,o.zw)(t.author.familyNames),1),(0,a.Wm)("div",m,(0,o.zw)(t.author.email),1)]),(0,a.Wm)("div",v,[(0,a.Wm)(l,{color:"primary",round:"",flat:"",icon:"edit",onClick:e[1]||(e[1]=e=>t.$emit("editPressed"))})])])])),_:1}),(0,a.Wm)(u,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(t.author.affiliation)+" "+(0,o.zw)(t.author.orcid)+" "+(0,o.zw)(t.index),1)])),_:1})])),_:1})}const h=(0,a.aZ)({name:"AuthorViewCard",props:{index:{type:Number,required:!0},author:{type:Object,required:!0}},emits:["editPressed"]});var g=n(151),w=n(5589),b=n(8240),W=n(7518),k=n.n(W);h.render=f;const C=h;k()(h,"components",{QCard:g.Z,QCardSection:w.Z,QBtn:b.Z});const N=(0,a.aZ)({name:"Authors",components:{StepperActions:u.Z,AuthorViewCard:C},setup(){const t=(0,l.iH)([{givenNames:"Stefan",familyNames:"Verhoeven",email:"me@bla.com",affiliation:"NLeSC",orcid:"https://orcid/123434"},{givenNames:"Faruk",familyNames:"Diblen",email:"me@bla.com",affiliation:"NLeSC",orcid:"https://orcid/123434"}]),e=(0,l.iH)(-1);return{authors:t,editingId:e}}});N.render=s;const x=N;k()(N,"components",{QBtn:b.Z})}}]);