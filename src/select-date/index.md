---
nav:
  title: 组件
  path: /components
group:
  title: 数据录入
  order: 1
---

## 时间快捷选择+自定义

示例:

```tsx
import React, { useState } from 'react';
import { Button } from 'antd';
import { SelectDate } from '@svl-ad/pro-components';

export default () => {
  const [info, setInfo] = useState({});

  const onChange = (type, value) => {
    setInfo({
      ...info,
      [type]: value,
    });
  };
  return (
    <div>
      <div>
        {info.key1?.begin} - {info.key1?.end}
      </div>
      <SelectDate value={info.key1} onChange={onChange.bind(null, 'key1')} />
      <br />
      <div>
        {info.key2?.begin} - {info.key2?.end}
      </div>
      <SelectDate
        value={info.key2 || { dateValue: 'self', begin: '2022-02-28 00', end: '2022-03-02 00' }}
        onChange={onChange.bind(null, 'key2')}
      />
      <br />
      <div>
        {info.key3?.begin} - {info.key3?.end}
      </div>
      <SelectDate
        selfFormat="YYYY-MM-DD"
        showTime={false}
        value={info.key3}
        selfLabel="选时间吧～"
        onChange={onChange.bind(null, 'key3')}
      />
    </div>
  );
};
```

#### 参数说明

| 属性 | 说明 | 类型 | 默认值 | 是否必传 | 版本 |
| --- | --- | --- | --- | --- | --- |
| className | 类名 | string |  | 否 |  |
| style | 样式 | React.CSSProperties |  | 否 |  |
| beginKey | 开始时间字段名 | string | begin | 否 |  |
| endKey | 结束时间字段名 | string | end | 否 |  |
| defaultDate | 下拉选项默认值 | string |  | 否 |  |
| showSelf | 是否展示自定义选项 | boolean | false | 否 |  |
| selfLabel | 自定义选项 label | string | 自定义... | 否 |  |
| selfValue | 自定义选项 value | string | self | 否 |  |
| selfShowFormat | 自定义选择展示的时间格式 | string |  | 否 |  |
| selfFormat | 自定义选择的时间格式 | string |  | 否 |  |
| selfFormatter | 选择时间区间后定义处理结果 | (dateStr: string[]) => string | (dateArr: string[]) => dateArr.join('-') | 否 |  |
| showTime | 自定义选择时是否展示时间 | object \| boolean |  | 否 |  |
| beginSuffix | 自定义选择时开始时间后缀 | string | :00:00 | 否 |  |
| endSuffix | 自定义选择时结束时间后缀 | string | :59:59 | 否 |  |
| timeOptions | 快捷选择时间配置项 | Record<string, ITimeOpt> |  | 否 |  |
| format | 当前组件 value 中的时间格式为 | string | YYYY-MM-DD HH:mm:ss | 否 |  |
| value | 当前组件 value 值，一般为 | Result: {dateValue: string, [baginKey]: string, [endKey]: string} |  | 否 |  |
| onChange | 组件值发生变化时回调 | (params: Result) => void |  | 否 |  |

#### ITimeOpt

时间配置项

| 属性  | 说明                     | 类型                         |
| ----- | ------------------------ | ---------------------------- |
| name  | 时间项名称               | string                       |
| value | 时间项开始、结束获取方法 | [() => string, () => string] |
