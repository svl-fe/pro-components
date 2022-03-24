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
      { name: '测试1', id: '0' },
      { name: '测试2', id: '1' },
      { name: '测试3', id: '2' },
      { name: '测试4', id: '3' },
      { name: '测试5', id: '4' },
    ],
    total: 50,
  });
  return (
    <GridView
      loading={loading}
      filters={filters}
      setFilters={setFilters}
      isPagination
      total={listRes.total}
    >
      {listRes?.results.map((item) => {
        return (
          <div
            key={item.id}
            style={{ height: 100, width: 100, marginRight: 20, backgroundColor: '#f8f9fa' }}
          >
            {item.name}
          </div>
        );
      })}
    </GridView>
  );
};
```

# API

| 参数         | 说明             | 类型                          | 默认值 | 是否必传 | 版本 |
| ------------ | ---------------- | ----------------------------- | ------ | -------- | ---- |
| loading      | loading          | `boolean`                     | -      | 否       | -    |
| children     | 子节点           | `ReactNode`                   | -      | 是       | -    |
| filters      | 分页参数         | `ITableQuery`                 | -      | 否       | -    |
| setFilters   | 分页参数         | `(item: ITableQuery) => void` | -      | 否       | -    |
| isPagination | 是否需要分页参数 | `boolean`                     | `true` | 否       | -    |
| total        | 总数据量         | `number`                      | -      | 否       | -    |
