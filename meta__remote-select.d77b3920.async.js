"use strict";(self.webpackChunk_svl_ad_pro_components=self.webpackChunk_svl_ad_pro_components||[]).push([[268],{65697:function(y,o,e){e.r(o),e.d(o,{demos:function(){return P}});var v=e(97983),t=e.n(v),E=e(12741),R=e.n(E),L=e(40794),i=e.n(L),h=e(67294),P={"remote-select-demo-0":{component:h.memo(h.lazy(i()(t()().mark(function _(){var s,d,u,p,x,a;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return a=function(){return a=i()(t()().mark(function c(I){return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return console.log("fetching user",I),r.abrupt("return",fetch("https://randomuser.me/api/?results=10").then(function(m){return m.json()}).then(function(m){return m.results.map(function(l){return{label:"".concat(l.name.first," ").concat(l.name.last),value:l.login.username}})}));case 2:case"end":return r.stop()}},c)})),a.apply(this,arguments)},x=function(c){return a.apply(this,arguments)},n.next=4,Promise.resolve().then(e.t.bind(e,67294,19));case 4:return s=n.sent,d=s.default,n.next=8,Promise.resolve().then(e.bind(e,31842));case 8:return u=n.sent,p=u.RemoteSelect,n.abrupt("return",{default:function(){var c=d.useState([]),I=R()(c,2),g=I[0],r=I[1];return d.createElement(p,{showArrow:!0,mode:"multiple",value:g,loadMore:!0,addLinkUrl:"https://www.baidu.com/",placeholder:"Select users",fetchOptions:x,onChange:function(l){r(l)}})}});case 11:case"end":return n.stop()}},_)})))),asset:{type:"BLOCK",id:"remote-select-demo-0",refAtomIds:["remote-select"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Button } from 'antd';
import { RemoteSelect } from '@svl-ad/pro-components';

async function fetchUserList(username: string): Promise<UserValue[]> {
  console.log('fetching user', username);

  return fetch('https://randomuser.me/api/?results=10')
    .then((response) => response.json())
    .then((body) =>
      body.results.map(
        (user: { name: { first: string; last: string }; login: { username: string } }) => ({
          label: \`\${user.name.first} \${user.name.last}\`,
          value: user.login.username,
        }),
      ),
    );
}

export default () => {
  const [value, setValue] = React.useState<{ label: string; value: string }[]>([]);

  return (
    <RemoteSelect
      showArrow
      mode="multiple"
      value={value}
      loadMore
      addLinkUrl="https://www.baidu.com/"
      placeholder="Select users"
      fetchOptions={fetchUserList}
      onChange={(newValue) => {
        setValue(newValue);
      }}
    />
  );
};`},react:{type:"NPM",value:"17.0.2"},"@svl-ad/pro-components":{type:"NPM",value:"0.1.5"}},entry:"index.tsx"},context:{react:e(67294),"@svl-ad/pro-components":e(31842)},renderOpts:{compile:function(){var _=i()(t()().mark(function d(){var u,p=arguments;return t()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(335).then(e.bind(e,37335));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,p));case 3:case"end":return a.stop()}},d)}));function s(){return _.apply(this,arguments)}return s}()}}}},98490:function(y,o,e){e.r(o),e.d(o,{texts:function(){return v}});const v=[{value:"\u4E0B\u62C9\u6846\u6570\u636E\u9700\u8981\u901A\u8FC7\u63A5\u53E3\u83B7\u53D6\u65F6\uFF0C\u63D0\u4F9B\u4E86\u6EDA\u52A8\u5230\u5E95\u90E8\u83B7\u53D6\u4E0B\u4E00\u9875\u6570\u636E\u529F\u80FD",paraId:0,tocIndex:1},{value:"\u793A\u4F8B:",paraId:1,tocIndex:1},{value:"\u7EE7\u627F\u81EA",paraId:2,tocIndex:2},{value:"SelectProps",paraId:2,tocIndex:2},{value:"\u5C5E\u6027",paraId:3,tocIndex:2},{value:"\u8BF4\u660E",paraId:3,tocIndex:2},{value:"\u7C7B\u578B",paraId:3,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:2},{value:"\u662F\u5426\u5FC5\u4F20",paraId:3,tocIndex:2},{value:"\u7248\u672C",paraId:3,tocIndex:2},{value:"debounceTimeout",paraId:3,tocIndex:2},{value:"\u641C\u7D22\u9632\u6296\u65F6\u95F4",paraId:3,tocIndex:2},{value:"number",paraId:3,tocIndex:2},{value:"800",paraId:3,tocIndex:2},{value:"\u5426",paraId:3,tocIndex:2},{value:"value",paraId:3,tocIndex:2},{value:"\u7EC4\u4EF6\u5F53\u524D\u503C",paraId:3,tocIndex:2},{value:"Value | LabeledValue | LabeledValue[]",paraId:3,tocIndex:2},{value:"\u5426",paraId:3,tocIndex:2},{value:"addText",paraId:3,tocIndex:2},{value:"\u6DFB\u52A0\u529F\u80FD",paraId:3,tocIndex:2},{value:"string",paraId:3,tocIndex:2},{value:"\u5426",paraId:3,tocIndex:2},{value:"addLinkText",paraId:3,tocIndex:2},{value:"\u6DFB\u52A0\u529F\u80FD \u8DF3\u8F6C\u6587\u6848",paraId:3,tocIndex:2},{value:"string",paraId:3,tocIndex:2},{value:"\u5426",paraId:3,tocIndex:2},{value:"addLinkUrl",paraId:3,tocIndex:2},{value:"\u6DFB\u52A0\u529F\u80FD \u8DF3\u8F6C\u5730\u5740",paraId:3,tocIndex:2},{value:"string | (() => {})",paraId:3,tocIndex:2},{value:"\u5426",paraId:3,tocIndex:2},{value:"initFetch",paraId:3,tocIndex:2},{value:"\u521D\u59CB\u5316\u65F6\u662F\u5426\u83B7\u53D6\u6570\u636E",paraId:3,tocIndex:2},{value:"boolean",paraId:3,tocIndex:2},{value:"true",paraId:3,tocIndex:2},{value:"\u5426",paraId:3,tocIndex:2},{value:"refresh",paraId:3,tocIndex:2},{value:"\u66F4\u65B0\u6570\u636E",paraId:3,tocIndex:2},{value:"boolean",paraId:3,tocIndex:2},{value:"\u5426",paraId:3,tocIndex:2},{value:"loadMore",paraId:3,tocIndex:2},{value:"\u662F\u5426\u52A0\u8F7D\u66F4\u591A\u6570\u636E",paraId:3,tocIndex:2},{value:"boolean",paraId:3,tocIndex:2},{value:"\u5426",paraId:3,tocIndex:2},{value:"offsetBottom",paraId:3,tocIndex:2},{value:"\u8DDD\u79BB\u5E95\u90E8\u591A\u5C11\u65F6\u5F00\u59CB\u52A0\u8F7D\u6570\u636E",paraId:3,tocIndex:2},{value:"number",paraId:3,tocIndex:2},{value:"10",paraId:3,tocIndex:2},{value:"\u5426",paraId:3,tocIndex:2},{value:"empty",paraId:3,tocIndex:2},{value:"\u6570\u636E\u4E3A\u7A7A\u65F6\u5C55\u793A",paraId:3,tocIndex:2},{value:"React.ReactNode",paraId:3,tocIndex:2},{value:"\u901A\u7528 Empty",paraId:3,tocIndex:2},{value:"\u5426",paraId:3,tocIndex:2},{value:"addOption",paraId:3,tocIndex:2},{value:"\u6DFB\u52A0\u9009\u9879\u65B9\u6CD5",paraId:3,tocIndex:2},{value:"(params: string) => void",paraId:3,tocIndex:2},{value:"\u5426",paraId:3,tocIndex:2},{value:"fetchOptions",paraId:3,tocIndex:2},{value:"\u641C\u7D22\u83B7\u53D6\u4E0B\u62C9\u9009\u9879\u65B9\u6CD5",paraId:3,tocIndex:2},{value:"(params: string) => Promise<LabeledValue[]>",paraId:3,tocIndex:2},{value:"\u5426",paraId:3,tocIndex:2},{value:"onChange",paraId:3,tocIndex:2},{value:"\u503C\u53D1\u751F\u53D8\u5316\u56DE\u8C03",paraId:3,tocIndex:2},{value:"(params: Value) => void",paraId:3,tocIndex:2},{value:"\u5426",paraId:3,tocIndex:2},{value:`type RawValue = string | number;
type Value = RawValue | RawValue[]
`,paraId:4,tocIndex:3}]}}]);
