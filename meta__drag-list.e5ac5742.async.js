"use strict";(self.webpackChunk_svl_ad_pro_components=self.webpackChunk_svl_ad_pro_components||[]).push([[293],{46323:function(h,o,e){e.r(o),e.d(o,{demos:function(){return _}});var u=e(15009),d=e.n(u),f=e(99289),i=e.n(f),I=e(67294),_={"drag-list-demo-0":{component:I.memo(I.lazy(i()(d()().mark(function m(){var l,t,r,s,p,n;return d()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return l=a.sent,t=l.default,a.next=6,Promise.resolve().then(e.bind(e,1721));case 6:return r=a.sent,s=r.Button,a.next=10,Promise.resolve().then(e.bind(e,68632));case 10:return p=a.sent,n=p.DragList,a.abrupt("return",{default:function(){var v=["Item 1","Item 2","Item 3","Item 4","Item 5","Item 6"],C=function(c){var x=c.value;return t.createElement(s,null,x)},g=function(c){console.log(c)};return t.createElement("div",null,t.createElement(n,{data:v}),t.createElement("br",null),t.createElement("h4",null,"\u81EA\u5B9A\u4E49\u6E32\u67D3"),t.createElement(n,{onChange:g,data:v,Child:C}))}});case 13:case"end":return a.stop()}},m)})))),asset:{type:"BLOCK",id:"drag-list-demo-0",refAtomIds:["drag-list"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Button } from 'antd';
import { DragList } from '@svl-ad/pro-components';

export default () => {
  const data = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'];
  const Child = ({ value }) => {
    return <Button>{value}</Button>;
  };

  const handleChange = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <DragList data={data} />
      <br />
      <h4>\u81EA\u5B9A\u4E49\u6E32\u67D3</h4>
      <DragList onChange={handleChange} data={data} Child={Child} />
    </div>
  );
};`},react:{type:"NPM",value:"17.0.2"},antd:{type:"NPM",value:"4.24.16"},"@svl-ad/pro-components":{type:"NPM",value:"0.1.9"}},entry:"index.tsx"},context:{react:e(67294),antd:e(1721),"@svl-ad/pro-components":e(68632)},renderOpts:{compile:function(){var m=i()(d()().mark(function t(){var r,s=arguments;return d()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,s));case 3:case"end":return n.stop()}},t)}));function l(){return m.apply(this,arguments)}return l}()}}}},20911:function(h,o,e){e.r(o),e.d(o,{texts:function(){return u}});const u=[{value:"\u62D6\u52A8\u6392\u5E8F\u5217\u8868",paraId:0,tocIndex:1},{value:"\u793A\u4F8B:",paraId:1,tocIndex:1},{value:"\u5C5E\u6027",paraId:2,tocIndex:2},{value:"\u8BF4\u660E",paraId:2,tocIndex:2},{value:"\u7C7B\u578B",paraId:2,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:2},{value:"\u662F\u5426\u5FC5\u4F20",paraId:2,tocIndex:2},{value:"\u7248\u672C",paraId:2,tocIndex:2},{value:"data",paraId:2,tocIndex:2},{value:"\u5C55\u793A\u6570\u636E",paraId:2,tocIndex:2},{value:"any",paraId:2,tocIndex:2},{value:"\u662F",paraId:2,tocIndex:2},{value:"Child",paraId:2,tocIndex:2},{value:"child \u6E32\u67D3\u7EC4\u4EF6\uFF0C\u81EA\u5B9A\u4E49\u6570\u636E\u5982\u4F55\u6E32\u67D3, \u9ED8\u8BA4\u76F4\u63A5\u5C55\u793A\u6570\u7EC4\u5143\u7D20",paraId:2,tocIndex:2},{value:"React.FC",paraId:2,tocIndex:2},{value:"\u5426",paraId:2,tocIndex:2},{value:"onChange",paraId:2,tocIndex:2},{value:"\u6570\u636E\u6392\u5E8F\u53D8\u5316\u56DE\u8C03",paraId:2,tocIndex:2},{value:"(data: any) => void",paraId:2,tocIndex:2},{value:"\u5426",paraId:2,tocIndex:2}]}}]);
