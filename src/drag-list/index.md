---
nav:
  title: 组件
  path: /components
group:
  title: 数据展示
  order: 1
---

## 列表拖动排序

#### 何时使用

- 拖动排序列表

示例:

```tsx
import React, { useState } from 'react';
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
      <h4>自定义渲染</h4>
      <DragList onChange={handleChange} data={data} Child={Child} />
    </div>
  );
};
```

## API

| 属性 | 说明 | 类型 | 默认值 | 是否必传 | 版本 |
| --- | --- | --- | --- | --- | --- |
| data | 展示数据 | any |  | 是 |  |
| Child | child 渲染组件，自定义数据如何渲染, 默认直接展示数组元素 | React.FC |  | 否 |  |
| onChange | 数据排序变化回调 | (data: any) => void |  | 否 |  |
