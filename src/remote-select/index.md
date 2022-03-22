---
nav:
  title: 组件
  path: /components
group:
  title: 数据录入
  order: 1
---

## 远程数据获取

#### 何时使用

- 下拉框获取远程数据

示例:

```tsx
import React, { useState } from 'react';
import { Button } from 'antd';
import { RemoteSelect } from '@svl-ad/pro-components';

async function fetchUserList(username: string): Promise<UserValue[]> {
  console.log('fetching user', username);

  return fetch('https://randomuser.me/api/?results=5')
    .then((response) => response.json())
    .then((body) =>
      body.results.map(
        (user: { name: { first: string; last: string }; login: { username: string } }) => ({
          label: `${user.name.first} ${user.name.last}`,
          value: user.login.username,
        }),
      ),
    );
}

export default () => {
  const [value, setValue] = React.useState<{ label: string; value: string }[]>([]);

  return (
    <RemoteSelect
      mode="multiple"
      value={value}
      placeholder="Select users"
      fetchOptions={fetchUserList}
      onChange={(newValue) => {
        setValue(newValue);
      }}
    />
  );
};
```

## API

继承自[SelectProps](https://ant.design/components/select-cn/#Select-props)

| 属性 | 说明 | 类型 | 默认值 | 是否必传 | 版本 |
| --- | --- | --- | --- | --- | --- |
| debounceTimeout | 搜索防抖时间 | number | 800 | 否 |  |
| value | 组件当前值 | Value \| LabeledValue \| LabeledValue[] |  | 否 |  |
| addText | 添加功能 | string |  | 否 |  |
| initFetch | 初始化时是否获取数据 | boolean | true | 否 |  |
| addOption | 添加选项方法 | (params: string) => void |  | 否 |  |
| fetchOptions | 搜索获取下拉选项方法 | (params: string) => Promise<LabeledValue[]> |  | 否 |  |
| onChange | 值发生变化回调 | (params: Value) => void |  | 否 |  |

### type Value

```
type RawValue = string | number;
type Value = RawValue | RawValue[]
```
