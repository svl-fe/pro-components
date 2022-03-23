---
nav:
  title: 组件
  path: /components
group:
  # path: /components
  title: 数据展示
  order: 2
---

## 信息卡片

示例:

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
