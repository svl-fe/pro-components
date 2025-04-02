"use strict";(self.webpackChunk_svl_ad_pro_components=self.webpackChunk_svl_ad_pro_components||[]).push([[467],{69002:function(g,o,e){e.r(o),e.d(o,{demos:function(){return y}});var i=e(15009),l=e.n(i),E=e(5574),p=e.n(E),b=e(99289),c=e.n(b),_=e(67294),y={"grid-view-demo-0":{component:_.memo(_.lazy(c()(l()().mark(function I(){var d,r,n,s,m;return l()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return d=a.sent,r=d.default,n=d.useState,a.next=7,Promise.resolve().then(e.bind(e,68632));case 7:return s=a.sent,m=s.GridView,a.abrupt("return",{default:function(){var P=n(!1),v=p()(P,2),R=v[0],T=v[1],O=n({page:1,limit:10}),x=p()(O,2),M=x[0],D=x[1],j=n({results:[{name:"\u6D4B\u8BD51",id:"0"},{name:"\u6D4B\u8BD52",id:"1"},{name:"\u6D4B\u8BD53",id:"2"},{name:"\u6D4B\u8BD54",id:"3"},{name:"\u6D4B\u8BD55",id:"4"}],total:50}),f=p()(j,2),u=f[0],C=f[1];return r.createElement(m,{loading:R,filters:M,setFilters:D,isPagination:!0,total:u.total},u==null?void 0:u.results.map(function(h){return r.createElement("div",{key:h.id,style:{height:100,width:100,marginRight:20,backgroundColor:"#f8f9fa"}},h.name)}))}});case 10:case"end":return a.stop()}},I)})))),asset:{type:"BLOCK",id:"grid-view-demo-0",refAtomIds:["grid-view"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState, useEffect } from 'react';
import { GridView } from '@svl-ad/pro-components';

export default () => {
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({ page: 1, limit: 10 });
  const [listRes, setListRes] = useState({
    results: [
      { name: '\u6D4B\u8BD51', id: '0' },
      { name: '\u6D4B\u8BD52', id: '1' },
      { name: '\u6D4B\u8BD53', id: '2' },
      { name: '\u6D4B\u8BD54', id: '3' },
      { name: '\u6D4B\u8BD55', id: '4' },
    ],
    total: 50,
  });
  return (
    <GridView
      loading={loading}
      filters={filters}
      setFilters={setFilters}
      isPagination
      total={listRes.total}
    >
      {listRes?.results.map((item) => {
        return (
          <div
            key={item.id}
            style={{ height: 100, width: 100, marginRight: 20, backgroundColor: '#f8f9fa' }}
          >
            {item.name}
          </div>
        );
      })}
    </GridView>
  );
};`},react:{type:"NPM",value:"17.0.2"},"@svl-ad/pro-components":{type:"NPM",value:"0.1.9"}},entry:"index.tsx"},context:{react:e(67294),"@svl-ad/pro-components":e(68632)},renderOpts:{compile:function(){var I=c()(l()().mark(function r(){var n,s=arguments;return l()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(335).then(e.bind(e,37335));case 2:return t.abrupt("return",(n=t.sent).default.apply(n,s));case 3:case"end":return t.stop()}},r)}));function d(){return I.apply(this,arguments)}return d}()}}}},14826:function(g,o,e){e.r(o),e.d(o,{texts:function(){return i}});const i=[{value:"\u793A\u4F8B:",paraId:0,tocIndex:0},{value:"\u53C2\u6570",paraId:1,tocIndex:1},{value:"\u8BF4\u660E",paraId:1,tocIndex:1},{value:"\u7C7B\u578B",paraId:1,tocIndex:1},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:1},{value:"\u662F\u5426\u5FC5\u4F20",paraId:1,tocIndex:1},{value:"\u7248\u672C",paraId:1,tocIndex:1},{value:"loading",paraId:1,tocIndex:1},{value:"loading",paraId:1,tocIndex:1},{value:"boolean",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1},{value:"\u5426",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1},{value:"children",paraId:1,tocIndex:1},{value:"\u5B50\u8282\u70B9",paraId:1,tocIndex:1},{value:"ReactNode",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1},{value:"\u662F",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1},{value:"filters",paraId:1,tocIndex:1},{value:"\u5206\u9875\u53C2\u6570",paraId:1,tocIndex:1},{value:"ITableQuery",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1},{value:"\u5426",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1},{value:"setFilters",paraId:1,tocIndex:1},{value:"\u5206\u9875\u53C2\u6570",paraId:1,tocIndex:1},{value:"(item: ITableQuery) => void",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1},{value:"\u5426",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1},{value:"isPagination",paraId:1,tocIndex:1},{value:"\u662F\u5426\u9700\u8981\u5206\u9875\u53C2\u6570",paraId:1,tocIndex:1},{value:"boolean",paraId:1,tocIndex:1},{value:"true",paraId:1,tocIndex:1},{value:"\u5426",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1},{value:"total",paraId:1,tocIndex:1},{value:"\u603B\u6570\u636E\u91CF",paraId:1,tocIndex:1},{value:"number",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1},{value:"\u5426",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1},{value:"pagination",paraId:1,tocIndex:1},{value:"\u5206\u9875\u53C2\u6570",paraId:1,tocIndex:1},{value:"Object",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1},{value:"\u5426",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1}]}}]);
