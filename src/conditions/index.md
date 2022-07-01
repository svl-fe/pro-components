---
nav:
  title: 组件
  path: /components
group:
  title: 数据录入
  order: 1
---

## 条件组合

#### 何时使用

- 组合简单、复杂的条件关系

示例:

```tsx
import React, { useState } from 'react';
import { Button } from 'antd';
import { Conditions, IConditions } from '@svl-ad/pro-components';

export default () => {
  const [value, setValue] = React.useState<IConditions>({});

  return (
    <div>
      <Conditions root hasGroup onChange={setValue} value={value} itemCon={() => <div>test</div>} />
    </div>
  );
};
```

## API

| 属性 | 说明 | 类型 | 默认值 | 是否必传 | 版本 |
| --- | --- | --- | --- | --- | --- |
| root | 是否为根组件，根组件不可删除 | boolean | true | 否 |  |
| hasGroup | 是否含有条件组 | boolean |  | 否 |  |
| deepth | 组件深度，即条件组包含几层条件组 | number | 2 | 否 |  |
| maxGroup | 同级条件组个数 | number | 3 | 否 |  |
| maxChild | 同级条件+条件组个数 | number | 10 | 否 |  |
| andText | 表示"且"关系的文案 | string | 且 | 否 |  |
| orText | 表示"或“关系的文案 | string | 或 | 否 |  |
| andOp | 表示"且"关系的 op | string | and | 否 |  |
| orOp | 表示"或“关系的 op | string | or | 否 |  |
| nodeOp | 表示节点关系的 op | string | node | 否 |  |
| addText | 添加条件文字 | string | 添加条件 | 否 |  |
| groupText | 添加条件组文字 | string | 添加条件组 | 否 |  |
| deleteIcon | 删除图标 | ReactNode | DeleteOutlined | 否 |  |
| groupIcon | 条件组图标 | ReactNode | GroupOutlined | 否 |  |
| addIcon | 添加图标 | ReactNode | PlusOutlined | 否 |  |
| itemCon | 单个条件组件 | ReactNode |  | 否 |  |
| value | 组件的 value 值 | GroupValue |  | 否 |  |
| onChange | 组件的 value 值发生变化时回调 | (params: any) => void |  | 否 |  |
| onDelete | 组件删除时回调 | (params: any) => void |  | 否 |  |

## GroupValue

| 属性     | 说明           | 类型                |
| -------- | -------------- | ------------------- |
| op       | 节点关系或类型 |                     |
| children | 子节点         | GroupValue[]        |
| data     | 单个节点 value | Record<string, any> |
