---
title: InfoCard
group:
  title: 数据展示
  order: 4
---

## InfoCard 信息卡片

信息卡片

### 代码演示

```tsx
import React, { useState } from 'react';
import { Button } from 'antd';
import { InfoCard } from '@svl-ad/pro-components';

export default () => {
  return (
    <div style={{ padding: '10px', background: '#ddd' }}>
      <InfoCard cardTitle="信息概览">
        <p>内容区....</p>
        <p>内容区...</p>
        <p>内容区...</p>
      </InfoCard>
    </div>
  );
};
```

### 参数说明

| 属性 | 说明 | 类型 | 默认值 | 是否必传 | 版本 |
| --- | --- | --- | --- | --- | --- |
| isShowAll | 是否展示全部按钮选项 | boolean | true | 否 |  |
| value | 当前选中的条目 | Record<string, string[]> | - | 否 |  |
| defaultkey | 默认选中的条目 | Record<string, string[]> | - | 否 |  |
| onChange | 选中树节点调用此函数 | function(value: Record<string, string[]>}) | - | 否 |  |
| treeData | treeNodes 数据 | array<{key, title, children}> | - | 是 |  |
| contentClasssName | 内容类名 | string | - | 否 |  |
| contentStyle | 内容样式 | `React.CSSProperties` | - | 否 |  |
