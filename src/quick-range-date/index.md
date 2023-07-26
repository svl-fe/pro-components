---
nav:
  title: 组件
  path: /components
group:
  title: 数据录入
  order: 4
---

## QuickRangeDate 快速时间筛选

#### 何时使用

- 时间选择：快捷选项 + 自定义选取

示例:

```tsx
import React, { useState, useRef } from 'react';
import { Button } from 'antd';
import { QuickRangeDate } from '@svl-ad/pro-components';

export default () => {
  const [value1, setValue1] = useState({});
  const [value2, setValue2] = useState({});

  const pickerRef = useRef(null);

  const handleRefresh = () => {
    pickerRef.current.refresh();
  };

  return (
    <div>
      <Button type="primary" onClick={handleRefresh} style={{ marginBottom: '20px' }}>
        刷新
      </Button>
      <div style={{ marginBottom: '10px' }}>
        <div>值展示(水平)</div>
        <div>{JSON.stringify(value1)}</div>
      </div>
      <QuickRangeDate mode="horizontal" value={value1} onChange={setValue1} ref={pickerRef} />
      <br />
      <div style={{ marginBottom: '10px' }}>
        <div>值展示(垂直)</div>
        <div>{JSON.stringify(value2)}</div>
      </div>
      <QuickRangeDate value={value2} onChange={setValue2} />
    </div>
  );
};
```

## API

| 属性 | 说明 | 类型 | 默认值 | 是否必传 | 版本 |
| --- | --- | --- | --- | --- | --- |
| style | 样式 | React.CSSProperties | - | 否 | 0.23 |
| className | 类名 | string | - | 否 | 0.23 |
| overlayClassName | 下拉根元素的类名称 | string | - | 否 | 0.23 |
| suffixIcon | 日历 Icon | React.ReactNode | - | 否 | 0.23 |
| mode | 绝对时间展示形式 | string | 'vertical' \| 'horizontal' | 'vertical' | 0.23 |
| value | 当前组件 value 值，一般为 | Result: {type: string, dates: [Moment, Moment]} | {} | 否 | 0.23 |
| onChange | 组件值发生变化时回调 | (params: Result) => void |  | 否 | 0.23 |
