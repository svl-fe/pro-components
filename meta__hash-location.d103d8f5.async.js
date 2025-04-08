"use strict";(self.webpackChunk_svl_ad_pro_components=self.webpackChunk_svl_ad_pro_components||[]).push([[633],{56733:function(I,n,e){e.r(n),e.d(n,{demos:function(){return h}});var s=e(15009),o=e.n(s),v=e(99289),i=e.n(v),m=e(67294),h={"hash-location-demo-0":{component:m.memo(m.lazy(i()(o()().mark(function u(){var d,a,r,l;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return d=t.sent,a=d.default,t.next=6,Promise.resolve().then(e.bind(e,68632));case 6:return r=t.sent,l=r.HashLocation,t.abrupt("return",{default:function(){var c=[{title:"\u57FA\u672C\u4FE1\u606F",href:"part1"},{title:"\u57FA\u672C\u4FE1\u606F2",href:"part2"},{title:"\u57FA\u672C\u4FE1\u606F3",href:"part3"},{title:"\u57FA\u672C\u4FE1\u606F4",href:"part4"},{title:"\u57FA\u672C\u4FE1\u606F5",href:"part5"}];return a.createElement("div",null,c.map(function(p){return a.createElement("div",{key:p.href,id:p.href,style:{height:"300px",paddingTop:"100px",marginTop:"-100px",borderBottom:"1px solid #eee"}},a.createElement("h2",null,p.title),a.createElement("p",null,"\u8FD9\u91CC\u662F ",p.title," \u7684\u5185\u5BB9\u533A\u57DF..."))}),a.createElement("div",{style:{position:"fixed",top:100,right:50}},a.createElement(l,{className:"test",itemClassName:"itemTest",data:c})))}});case 9:case"end":return t.stop()}},u)})))),asset:{type:"BLOCK",id:"hash-location-demo-0",refAtomIds:["hash-location"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState, useEffect } from 'react';
import { HashLocation } from '@svl-ad/pro-components';

export default () => {
  const data = [
    {
      title: '\u57FA\u672C\u4FE1\u606F',
      href: 'part1',
    },
    {
      title: '\u57FA\u672C\u4FE1\u606F2',
      href: 'part2',
    },
    {
      title: '\u57FA\u672C\u4FE1\u606F3',
      href: 'part3',
    },
    {
      title: '\u57FA\u672C\u4FE1\u606F4',
      href: 'part4',
    },
    {
      title: '\u57FA\u672C\u4FE1\u606F5',
      href: 'part5',
    },
  ];
  return (
    <div>
      {data.map((item) => (
        <div
          key={item.href}
          id={item.href}
          style={{
            height: '300px',
            paddingTop: '100px',
            marginTop: '-100px',
            borderBottom: '1px solid #eee',
          }}
        >
          <h2>{item.title}</h2>
          <p>\u8FD9\u91CC\u662F {item.title} \u7684\u5185\u5BB9\u533A\u57DF...</p>
        </div>
      ))}
      <div
        style={{
          position: 'fixed',
          top: 100,
          right: 50,
        }}
      >
        <HashLocation className="test" itemClassName="itemTest" data={data} />
      </div>
    </div>
  );
};`},react:{type:"NPM",value:"17.0.2"},"@svl-ad/pro-components":{type:"NPM",value:"0.1.10"}},entry:"index.tsx"},context:{react:e(67294),"@svl-ad/pro-components":e(68632)},renderOpts:{compile:function(){var u=i()(o()().mark(function a(){var r,l=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(335).then(e.bind(e,37335));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,l));case 3:case"end":return t.stop()}},a)}));function d(){return u.apply(this,arguments)}return d}()}}}},67661:function(I,n,e){e.r(n),e.d(n,{texts:function(){return s}});const s=[{value:"\u793A\u4F8B:",paraId:0,tocIndex:0},{value:"\u53C2\u6570",paraId:1,tocIndex:1},{value:"\u8BF4\u660E",paraId:1,tocIndex:1},{value:"\u7C7B\u578B",paraId:1,tocIndex:1},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:1},{value:"\u662F\u5426\u5FC5\u4F20",paraId:1,tocIndex:1},{value:"\u7248\u672C",paraId:1,tocIndex:1},{value:"data",paraId:1,tocIndex:1},{value:"hash \u6570\u636E",paraId:1,tocIndex:1},{value:"{ title: string | ReactNode; href: string }[]",paraId:1,tocIndex:1},{value:"\u662F",paraId:1,tocIndex:1},{value:"className",paraId:1,tocIndex:1},{value:"\u5BB9\u5668\u7C7B\u540D",paraId:1,tocIndex:1},{value:"string",paraId:1,tocIndex:1},{value:"\u5426",paraId:1,tocIndex:1},{value:"style",paraId:1,tocIndex:1},{value:"\u5BB9\u5668\u6837\u5F0F",paraId:1,tocIndex:1},{value:"React.CSSProperties",paraId:1,tocIndex:1},{value:"\u5426",paraId:1,tocIndex:1},{value:"space",paraId:1,tocIndex:1},{value:"item \u95F4\u8DDD",paraId:1,tocIndex:1},{value:"number",paraId:1,tocIndex:1},{value:"24",paraId:1,tocIndex:1},{value:"\u5426",paraId:1,tocIndex:1},{value:"itemHeight",paraId:1,tocIndex:1},{value:"item \u9AD8\u5EA6",paraId:1,tocIndex:1},{value:"number",paraId:1,tocIndex:1},{value:"24",paraId:1,tocIndex:1},{value:"\u5426",paraId:1,tocIndex:1},{value:"itemClassName",paraId:1,tocIndex:1},{value:"item \u7C7B\u540D",paraId:1,tocIndex:1},{value:"string",paraId:1,tocIndex:1},{value:"\u5426",paraId:1,tocIndex:1},{value:"itemStyle",paraId:1,tocIndex:1},{value:"item \u6837\u5F0F",paraId:1,tocIndex:1},{value:"CSSProperties",paraId:1,tocIndex:1},{value:"\u5426",paraId:1,tocIndex:1},{value:"\u5982\u679C\u9875\u9762\u6709 fixed \u5B9A\u4F4D\u7684\u5143\u7D20\u65F6\uFF0C\u4F1A\u53D1\u73B0\u70B9\u51FB\u951A\u70B9\u65F6\uFF0C\u8DF3\u5230\u951A\u70B9\u4EE5\u4E0B\u3002\u8FD9\u4E2A\u504F\u79FB\u91CF\u5C31\u662F fixed \u7684\u5934\u90E8\u7684\u9AD8\u5EA6\u3002",paraId:2,tocIndex:2},{value:"\u89E3\u51B3\u65B9\u6848\u6240\u6709\u951A\u70B9\u5904\u589E\u52A0\u6837\u5F0F: 100px \u4E3A\u56FA\u5B9A\u5143\u7D20\u9AD8\u5EA6",paraId:3,tocIndex:2},{value:`padding-top: 100px;
margin-top: -100px;
`,paraId:4,tocIndex:2}]}}]);
