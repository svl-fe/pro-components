---
nav:
  title: 组件
  path: /components
group:
  path: /components
  title: 数据录入
  order: 1
---

## 多选框树

示例:

```tsx
import React, { useState } from 'react';
import { Button } from 'antd';
import { CheckboxTree } from '@svl-ad/pro-components';

export default () => {
  const channelTree = [
    {
      key: 'communication',
      title: '通讯类',
      children: [
        { key: 'feishu', title: '飞书' },
        { key: 'dingding', title: '钉钉' },
        { key: 'wechat_enterprise', title: '企业微信' },
        { key: 'wechat', title: '微信' },
        { key: 'qq', title: 'QQ' },
      ],
    },
    {
      key: 'others',
      title: '其他',
      children: [
        { key: 'baidu_wangpan', title: '百度网盘' },
        { key: 'usb', title: 'U盘' },
      ],
    },
  ];

  return <CheckboxTree treeData={channelTree} />;
};
```
