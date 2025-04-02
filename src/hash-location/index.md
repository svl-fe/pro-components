---
title: HashLocation
group:
  title: 数据展示
  order: 3
---

## HashLocation hash 定位

示例:

```tsx
import React, { useState, useEffect } from 'react';
import { HashLocation } from '@svl-ad/pro-components';

export default () => {
  const data = [
    {
      title: '基本信息',
      href: 'part1',
    },
    {
      title: '基本信息2',
      href: 'part2',
    },
    {
      title: '基本信息3',
      href: 'part3',
    },
    {
      title: '基本信息4',
      href: 'part4',
    },
    {
      title: '基本信息5',
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
          <p>这里是 {item.title} 的内容区域...</p>
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
};
```

# API

| 参数 | 说明 | 类型 | 默认值 | 是否必传 | 版本 |
| --- | --- | --- | --- | --- | --- |
| data | hash 数据 | { title: string \| ReactNode; href: string }[] |  | 是 |  |
| className | 容器类名 | string |  | 否 |  |
| style | 容器样式 | React.CSSProperties |  | 否 |  |
| space | item 间距 | number | 24 | 否 |  |
| itemHeight | item 高度 | number | 24 | 否 |  |
| itemClassName | item 类名 | string |  | 否 |  |
| itemStyle | item 样式 | CSSProperties |  | 否 |  |

### 说明

如果页面有 fixed 定位的元素时，会发现点击锚点时，跳到锚点以下。这个偏移量就是 fixed 的头部的高度。

解决方案所有锚点处增加样式: 100px 为固定元素高度

```css
padding-top: 100px;
margin-top: -100px;
```
