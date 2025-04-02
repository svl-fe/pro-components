"use strict";(self.webpackChunk_svl_ad_pro_components=self.webpackChunk_svl_ad_pro_components||[]).push([[139],{16573:function(C,r,e){e.r(r),e.d(r,{demos:function(){return T}});var s=e(15009),u=e.n(s),g=e(5574),p=e.n(g),P=e(99289),I=e.n(P),m=e(67294),T={"checkbox-tree-demo-0":{component:m.memo(m.lazy(I()(u()().mark(function c(){var d,t,o,l,i,a,v,x,h,_,y,f;return u()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return d=n.sent,t=d.default,o=d.useState,n.next=7,Promise.resolve().then(e.bind(e,1721));case 7:return l=n.sent,i=l.Button,a=l.Checkbox,v=l.Popconfirm,n.next=13,Promise.resolve().then(e.bind(e,77408));case 13:return x=n.sent,h=x.CloseOutlined,n.next=17,Promise.resolve().then(e.bind(e,68632));case 17:return _=n.sent,y=_.CheckboxTree,f={communication:["wechat"],others:["usb"]},n.abrupt("return",{default:function(){var A=o(!0),k=p()(A,2),b=k[0],O=k[1],S=o(f),E=p()(S,2),M=E[0],D=E[1],N=[{key:"communication",title:"\u901A\u8BAF\u7C7B",children:[{key:"feishu",title:"\u98DE\u4E66"},{key:"dingding",title:"\u9489\u9489"},{key:"wechat_enterprise",title:"\u4F01\u4E1A\u5FAE\u4FE1"},{key:"wechat",title:"\u5FAE\u4FE1"},{key:"qq",title:"QQ"}]},{key:"others",title:"\u5176\u4ED6",children:[{key:"baidu_wangpan",title:"\u767E\u5EA6\u7F51\u76D8"},{key:"usb",title:"U\u76D8"}]},{key:"custom",title:"\u81EA\u5B9A\u4E49",children:[{key:"delete",title:"\u53EF\u5220\u9664",customNode:t.createElement(a,{key:"delete",value:"delete",className:"svl-pro-checkbox-tree-sub-item-opt"},t.createElement("div",null,"\u53EF\u5220\u9664",t.createElement(v,{title:"\u662F\u5426\u5220\u9664\uFF1F",onConfirm:function(){},okText:"Yes",cancelText:"No"},t.createElement(h,null))))}]}];return t.createElement("div",null,t.createElement("div",{style:{margin:"15px 0 15px 0"}},t.createElement(i,{type:"primary",onClick:function(){return O(!b)}},"\u663E\u793A/\u9690\u85CF\u5168\u90E8")),t.createElement(y,{value:M,onChange:D,treeData:N,isShowAll:b}))}});case 21:case"end":return n.stop()}},c)})))),asset:{type:"BLOCK",id:"checkbox-tree-demo-0",refAtomIds:["checkbox-tree"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Button, Checkbox, Popconfirm } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { CheckboxTree } from '@svl-ad/pro-components';

const INIT_VALUE = {
  communication: ['wechat'],
  others: ['usb'],
};

export default () => {
  const [isShowAll, setIsShowAll] = useState(true);
  const [value, setValue] = useState(INIT_VALUE);

  const channelTree = [
    {
      key: 'communication',
      title: '\u901A\u8BAF\u7C7B',
      children: [
        { key: 'feishu', title: '\u98DE\u4E66' },
        { key: 'dingding', title: '\u9489\u9489' },
        { key: 'wechat_enterprise', title: '\u4F01\u4E1A\u5FAE\u4FE1' },
        { key: 'wechat', title: '\u5FAE\u4FE1' },
        { key: 'qq', title: 'QQ' },
      ],
    },
    {
      key: 'others',
      title: '\u5176\u4ED6',
      children: [
        { key: 'baidu_wangpan', title: '\u767E\u5EA6\u7F51\u76D8' },
        { key: 'usb', title: 'U\u76D8' },
      ],
    },
    {
      key: 'custom',
      title: '\u81EA\u5B9A\u4E49',
      children: [
        {
          key: 'delete',
          title: '\u53EF\u5220\u9664',
          customNode: (
            <Checkbox
              key={'delete'}
              value={'delete'}
              className="svl-pro-checkbox-tree-sub-item-opt"
            >
              <div>
                {'\u53EF\u5220\u9664'}
                <Popconfirm title={'\u662F\u5426\u5220\u9664\uFF1F'} onConfirm={() => {}} okText="Yes" cancelText="No">
                  <CloseOutlined />
                </Popconfirm>
              </div>
            </Checkbox>
          ),
        },
      ],
    },
  ];

  return (
    <div>
      <div style={{ margin: '15px 0 15px 0' }}>
        <Button type="primary" onClick={() => setIsShowAll(!isShowAll)}>
          \u663E\u793A/\u9690\u85CF\u5168\u90E8
        </Button>
      </div>
      <CheckboxTree
        value={value}
        onChange={setValue}
        treeData={channelTree}
        isShowAll={isShowAll}
      />
    </div>
  );
};`},react:{type:"NPM",value:"17.0.2"},antd:{type:"NPM",value:"4.24.16"},"@ant-design/icons":{type:"NPM",value:"4.8.3"},"@svl-ad/pro-components":{type:"NPM",value:"0.1.9"}},entry:"index.tsx"},context:{react:e(67294),antd:e(1721),"@ant-design/icons":e(77408),"@svl-ad/pro-components":e(68632)},renderOpts:{compile:function(){var c=I()(u()().mark(function t(){var o,l=arguments;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(335).then(e.bind(e,37335));case 2:return a.abrupt("return",(o=a.sent).default.apply(o,l));case 3:case"end":return a.stop()}},t)}));function d(){return c.apply(this,arguments)}return d}()}}}},65633:function(C,r,e){e.r(r),e.d(r,{texts:function(){return s}});const s=[{value:"\u591A\u9009\u6846\u6811",paraId:0,tocIndex:0},{value:"\u5C5E\u6027",paraId:1,tocIndex:3},{value:"\u8BF4\u660E",paraId:1,tocIndex:3},{value:"\u7C7B\u578B",paraId:1,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:3},{value:"\u662F\u5426\u5FC5\u4F20",paraId:1,tocIndex:3},{value:"\u7248\u672C",paraId:1,tocIndex:3},{value:"isShowAll",paraId:1,tocIndex:3},{value:"\u662F\u5426\u5C55\u793A\u5168\u90E8\u6309\u94AE\u9009\u9879",paraId:1,tocIndex:3},{value:"boolean",paraId:1,tocIndex:3},{value:"true",paraId:1,tocIndex:3},{value:"\u5426",paraId:1,tocIndex:3},{value:"value",paraId:1,tocIndex:3},{value:"\u5F53\u524D\u9009\u4E2D\u7684\u6761\u76EE",paraId:1,tocIndex:3},{value:"Record<string, string[]>",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"\u5426",paraId:1,tocIndex:3},{value:"defaultkey",paraId:1,tocIndex:3},{value:"\u9ED8\u8BA4\u9009\u4E2D\u7684\u6761\u76EE",paraId:1,tocIndex:3},{value:"Record<string, string[]>",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"\u5426",paraId:1,tocIndex:3},{value:"onChange",paraId:1,tocIndex:3},{value:"\u9009\u4E2D\u6811\u8282\u70B9\u8C03\u7528\u6B64\u51FD\u6570",paraId:1,tocIndex:3},{value:"function(value: Record<string, string[]>})",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"\u5426",paraId:1,tocIndex:3},{value:"treeData",paraId:1,tocIndex:3},{value:"treeNodes \u6570\u636E",paraId:1,tocIndex:3},{value:"array<{key, title, ",paraId:1,tocIndex:3},{value:"children",paraId:2,tocIndex:3},{value:"}>",paraId:1,tocIndex:3},{value:"-",paraId:1,tocIndex:3},{value:"\u662F",paraId:1,tocIndex:3},{value:"view",paraId:1,tocIndex:3},{value:"\u662F\u5426\u4E3A\u6570\u636E\u5C55\u793A",paraId:1,tocIndex:3},{value:"boolean",paraId:1,tocIndex:3},{value:"false",paraId:1,tocIndex:3},{value:"\u5426",paraId:1,tocIndex:3},{value:"\u5C5E\u6027",paraId:3,tocIndex:4},{value:"\u8BF4\u660E",paraId:3,tocIndex:4},{value:"\u7C7B\u578B",paraId:3,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:4},{value:"\u662F\u5426\u5FC5\u4F20",paraId:3,tocIndex:4},{value:"\u7248\u672C",paraId:3,tocIndex:4},{value:"key",paraId:3,tocIndex:4},{value:"key \u503C",paraId:3,tocIndex:4},{value:"string",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4},{value:"\u662F",paraId:3,tocIndex:4},{value:"title",paraId:3,tocIndex:4},{value:"title",paraId:3,tocIndex:4},{value:"string",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4},{value:"\u5426",paraId:3,tocIndex:4},{value:"customNode",paraId:3,tocIndex:4},{value:"\u81EA\u5B9A\u4E49 node",paraId:3,tocIndex:4},{value:"ReactNode",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4},{value:"\u5426",paraId:3,tocIndex:4}]}}]);
