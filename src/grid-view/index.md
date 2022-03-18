---
nav:
  title: 组件
  path: /components
group:
  path: /components
  title: 数据展示
  order: 2
---

## GridView(带分页)

示例:

```tsx
import React, { useState, useEffect } from 'react';
import { GridView } from '@svl-ad/pro-components';

export default () => {
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({ page: 1, limit: 10 });
  const [listRes, setListRes] = useState({
    results: [
      { name: '测试1', id: 'qwe' },
      { name: '测试1', id: '1qwe' },
      { name: '测试1', id: '2qwe' },
      { name: '测试1', id: '3qwe' },
      { name: '测试1', id: '4qwe' },
    ],
    total: 50,
  });
  return (
    <GridView
      loading={loading}
      dataSource={listRes}
      filters={filters}
      setFilters={setFilters}
      childNode={(o) => {
        return (
          <div style={{ height: 100, width: 100, marginRight: 20, backgroundColor: '#f8f9fa' }}>
            {o.name}
          </div>
        );
      }}
    />
  );
};
```

# API

| 参数 | 说明 | 类型 | 默认值 | 说明 | 版本 |
| --- | --- | --- | --- | --- | --- |
| loading | loading | `boolean` | - | - | - |
| childNode | 子节点 | `(item: any) => ReactNode` | - | - | - |
| dataSource | 数据源 | `ITableResult<any> or any[]` | - | 分页时传`ITableResult<any>` 不分页传数组`any[]` | - |
| filters | 分页参数 | `ITableQuery` | - | 分页时传 | - |
| setFilters | 分页参数 | `(item: ITableQuery) => void` | - | 分页时传 | - |
