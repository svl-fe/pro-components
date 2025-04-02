"use strict";(self.webpackChunk_svl_ad_pro_components=self.webpackChunk_svl_ad_pro_components||[]).push([[84],{53181:function(R,d,e){e.r(d),e.d(d,{demos:function(){return O}});var s=e(15009),l=e.n(s),g=e(5574),v=e.n(g),P=e(99289),I=e.n(P),i=e(67294),O={"quick-range-date-demo-0":{component:i.memo(i.lazy(I()(l()().mark(function p(){var r,a,o,u,c,t,_,m;return l()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=n.sent,a=r.default,o=r.useState,u=r.useRef,n.next=8,Promise.resolve().then(e.bind(e,1721));case 8:return c=n.sent,t=c.Button,n.next=12,Promise.resolve().then(e.bind(e,68632));case 12:return _=n.sent,m=_.QuickRangeDate,n.abrupt("return",{default:function(){var B=o({}),x=v()(B,2),f=x[0],C=x[1],D=o({}),h=v()(D,2),y=h[0],M=h[1],E=u(null),S=function(){E.current.refresh()};return a.createElement("div",null,a.createElement(t,{type:"primary",onClick:S,style:{marginBottom:"20px"}},"\u5237\u65B0"),a.createElement("div",{style:{marginBottom:"10px"}},a.createElement("div",null,"\u503C\u5C55\u793A(\u6C34\u5E73)"),a.createElement("div",null,JSON.stringify(f))),a.createElement(m,{mode:"horizontal",value:f,onChange:C,ref:E}),a.createElement("br",null),a.createElement("div",{style:{marginBottom:"10px"}},a.createElement("div",null,"\u503C\u5C55\u793A(\u5782\u76F4)"),a.createElement("div",null,JSON.stringify(y))),a.createElement(m,{value:y,onChange:M}))}});case 15:case"end":return n.stop()}},p)})))),asset:{type:"BLOCK",id:"quick-range-date-demo-0",refAtomIds:["quick-range-date"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState, useRef } from 'react';
import { Button } from 'antd';
import { QuickRangeDate } from '@svl-ad/pro-components';

export default () => {
  const [value1, setValue1] = useState({});
  const [value2, setValue2] = useState({});

  const pickerRef = useRef(null);

  const handleRefresh = () => {
    pickerRef.current.refresh();
  };

  return (
    <div>
      <Button type="primary" onClick={handleRefresh} style={{ marginBottom: '20px' }}>
        \u5237\u65B0
      </Button>
      <div style={{ marginBottom: '10px' }}>
        <div>\u503C\u5C55\u793A(\u6C34\u5E73)</div>
        <div>{JSON.stringify(value1)}</div>
      </div>
      <QuickRangeDate mode="horizontal" value={value1} onChange={setValue1} ref={pickerRef} />
      <br />
      <div style={{ marginBottom: '10px' }}>
        <div>\u503C\u5C55\u793A(\u5782\u76F4)</div>
        <div>{JSON.stringify(value2)}</div>
      </div>
      <QuickRangeDate value={value2} onChange={setValue2} />
    </div>
  );
};`},react:{type:"NPM",value:"17.0.2"},antd:{type:"NPM",value:"4.24.16"},"@svl-ad/pro-components":{type:"NPM",value:"0.1.9"}},entry:"index.tsx"},context:{react:e(67294),antd:e(1721),"@svl-ad/pro-components":e(68632)},renderOpts:{compile:function(){var p=I()(l()().mark(function a(){var o,u=arguments;return l()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(335).then(e.bind(e,37335));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,u));case 3:case"end":return t.stop()}},a)}));function r(){return p.apply(this,arguments)}return r}()}}}},90818:function(R,d,e){e.r(d),e.d(d,{texts:function(){return s}});const s=[{value:"\u65F6\u95F4\u9009\u62E9\uFF1A\u5FEB\u6377\u9009\u9879 + \u81EA\u5B9A\u4E49\u9009\u53D6",paraId:0,tocIndex:1},{value:"\u793A\u4F8B:",paraId:1,tocIndex:1},{value:"\u5C5E\u6027",paraId:2,tocIndex:2},{value:"\u8BF4\u660E",paraId:2,tocIndex:2},{value:"\u7C7B\u578B",paraId:2,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:2},{value:"\u662F\u5426\u5FC5\u4F20",paraId:2,tocIndex:2},{value:"\u7248\u672C",paraId:2,tocIndex:2},{value:"style",paraId:2,tocIndex:2},{value:"\u6837\u5F0F",paraId:2,tocIndex:2},{value:"React.CSSProperties",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"\u5426",paraId:2,tocIndex:2},{value:"0.23",paraId:2,tocIndex:2},{value:"className",paraId:2,tocIndex:2},{value:"\u7C7B\u540D",paraId:2,tocIndex:2},{value:"string",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"\u5426",paraId:2,tocIndex:2},{value:"0.23",paraId:2,tocIndex:2},{value:"overlayClassName",paraId:2,tocIndex:2},{value:"\u4E0B\u62C9\u6839\u5143\u7D20\u7684\u7C7B\u540D\u79F0",paraId:2,tocIndex:2},{value:"string",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"\u5426",paraId:2,tocIndex:2},{value:"0.23",paraId:2,tocIndex:2},{value:"suffixIcon",paraId:2,tocIndex:2},{value:"\u65E5\u5386 Icon",paraId:2,tocIndex:2},{value:"React.ReactNode",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"\u5426",paraId:2,tocIndex:2},{value:"0.23",paraId:2,tocIndex:2},{value:"mode",paraId:2,tocIndex:2},{value:"\u7EDD\u5BF9\u65F6\u95F4\u5C55\u793A\u5F62\u5F0F",paraId:2,tocIndex:2},{value:"string",paraId:2,tocIndex:2},{value:"'vertical' | 'horizontal'",paraId:2,tocIndex:2},{value:"'vertical'",paraId:2,tocIndex:2},{value:"0.23",paraId:2,tocIndex:2},{value:"value",paraId:2,tocIndex:2},{value:"\u5F53\u524D\u7EC4\u4EF6 value \u503C\uFF0C\u4E00\u822C\u4E3A",paraId:2,tocIndex:2},{value:"Result: {type: string, dates: [Moment, Moment]}",paraId:2,tocIndex:2},{value:"{}",paraId:2,tocIndex:2},{value:"\u5426",paraId:2,tocIndex:2},{value:"0.23",paraId:2,tocIndex:2},{value:"onChange",paraId:2,tocIndex:2},{value:"\u7EC4\u4EF6\u503C\u53D1\u751F\u53D8\u5316\u65F6\u56DE\u8C03",paraId:2,tocIndex:2},{value:"(params: Result) => void",paraId:2,tocIndex:2},{value:"\u5426",paraId:2,tocIndex:2},{value:"0.23",paraId:2,tocIndex:2}]}}]);
