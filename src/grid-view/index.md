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
      dataSource={listRes.results}
      filters={filters}
      setFilters={setFilters}
      isPagination
      total={listRes.total}
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

| 参数         | 说明             | 类型                          | 默认值 | 是否必传 | 版本 |
| ------------ | ---------------- | ----------------------------- | ------ | -------- | ---- |
| loading      | loading          | `boolean`                     | -      | 否       | -    |
| childNode    | 子节点           | `(item: any) => ReactNode`    | -      | 是       | -    |
| dataSource   | 数据源           | `ITableResult<any>`           | -      | 是       | -    |
| filters      | 分页参数         | `ITableQuery`                 | -      | 否       | -    |
| setFilters   | 分页参数         | `(item: ITableQuery) => void` | -      | 否       | -    |
| isPagination | 是否需要分页参数 | `boolean`                     | -      | 否       | -    |
| total        | 总数据量         | `number`                      | -      | 否       | -    |
