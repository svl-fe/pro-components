---
nav:
  title: 组件
  path: /components
group:
  title: 数据展示
  path: /show
---

## AG Grid

示例:

```tsx
import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { AgGrid } from '@svl-ad/pro-components';
import type { ColDef } from 'ag-grid-community';

export default () => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .then((response) => response.json())
      .then((data) => {
        // gridOptions.api.setRowData(data);
        setDataList(data);
      });
  }, []);

  // 定义表格列
  const columnDefs: ColDef[] = [
    { headerName: '运动员', field: 'athlete' },
    {
      headerName: '国家',
      field: 'country',
      cellStyle: { cursor: 'pointer', color: '#2A9D8F' },
    },
    { headerName: '年', field: 'year' },
    { headerName: '金牌', field: 'gold' },
    { headerName: '银牌', field: 'silver' },
    { headerName: '铜牌', field: 'bronze' },
    { headerName: '总数', field: 'total' },
  ];

  return (
    <div>
      <AgGrid dataSource={dataList} columnDefs={columnDefs} />
    </div>
  );
};
```
