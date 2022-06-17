---
nav:
  title: 组件
  path: /components
group:
  path: /components
  title: 数据展示
  order: 2
---

## 虚拟滚动

示例:

```tsx
import React, { useState } from 'react';
import { VirtualList } from '@svl-ad/pro-components';
const getData = (idx = 0) => {
  let arr = [];
  for (let i = idx; i < idx + 20; i++) {
    arr.push({ uid: `uid_${i}` });
  }
  return arr;
};
export default () => {
  const [data, setData] = useState(getData(0));

  const appendData = () => {
    setData((preData) => {
      return [...preData, ...getData(data.length)];
    });
  };

  return (
    <VirtualList data={data} height={200} itemHeight={32} itemKey="uid" appendData={appendData}>
      {(item: any) => {
        return (
          <div key={item?.uid} style={{ height: 32 }}>
            {item?.uid}
          </div>
        );
      }}
    </VirtualList>
  );
};
```

# API

| 参数       | 说明           | 类型         | 默认值 | 是否必传 | 版本 |
| ---------- | -------------- | ------------ | ------ | -------- | ---- |
| data       | 数据源         | `array`      | -      | 是       | -    |
| height     | 容器高度       | `number`     | -      | 是       | -    |
| itemHeight | Item 高度      | `number`     | -      | 是       | -    |
| appendData | 滚动加载回调   | `() => void` | -      | 否       | -    |
| itemKey    | 数据源唯一 key | `string`     | -      | 是       | -    |
| loading    | loading        | `boolean`    | -      | 否       | -    |
