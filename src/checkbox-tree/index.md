---
nav:
  title: 组件
  path: /components
group:
  path: /data-entry
  title: 数据录入
  order: 1
---

## CheckboxTree 多选框树

多选框树

### 代码演示

```tsx
import React, { useState } from 'react';
import { Button, Checkbox, Popconfirm } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { CheckboxTree } from '@svl-ad/pro-components';

const INIT_VALUE = {
  communication: ['wechat'],
  others: ['usb'],
};

export default () => {
  const [isShowAll, setIsShowAll] = useState(true);
  const [value, setValue] = useState(INIT_VALUE);

  const channelTree = [
    {
      key: 'communication',
      title: '通讯类',
      children: [
        { key: 'feishu', title: '飞书' },
        { key: 'dingding', title: '钉钉' },
        { key: 'wechat_enterprise', title: '企业微信' },
        { key: 'wechat', title: '微信' },
        { key: 'qq', title: 'QQ' },
      ],
    },
    {
      key: 'others',
      title: '其他',
      children: [
        { key: 'baidu_wangpan', title: '百度网盘' },
        { key: 'usb', title: 'U盘' },
      ],
    },
    {
      key: 'custom',
      title: '自定义',
      children: [
        {
          key: 'delete',
          title: '可删除',
          customNode: (
            <Checkbox
              key={'delete'}
              value={'delete'}
              className="svl-pro-checkbox-tree-sub-item-opt"
            >
              <div>
                {'可删除'}
                <Popconfirm title={'是否删除？'} onConfirm={() => {}} okText="Yes" cancelText="No">
                  <CloseOutlined />
                </Popconfirm>
              </div>
            </Checkbox>
          ),
        },
      ],
    },
  ];

  return (
    <div>
      <div style={{ margin: '15px 0 15px 0' }}>
        <Button type="primary" onClick={() => setIsShowAll(!isShowAll)}>
          显示/隐藏全部
        </Button>
      </div>
      <CheckboxTree
        value={value}
        onChange={setValue}
        treeData={channelTree}
        isShowAll={isShowAll}
      />
    </div>
  );
};
```

### 参数说明

#### checkbox-tree

| 属性 | 说明 | 类型 | 默认值 | 是否必传 | 版本 |
| --- | --- | --- | --- | --- | --- |
| isShowAll | 是否展示全部按钮选项 | boolean | true | 否 |  |
| value | 当前选中的条目 | Record<string, string[]> | - | 否 |  |
| defaultkey | 默认选中的条目 | Record<string, string[]> | - | 否 |  |
| onChange | 选中树节点调用此函数 | function(value: Record<string, string[]>}) | - | 否 |  |
| treeData | treeNodes 数据 | array<{key, title, [children](#children)}> | - | 是 |  |
| view | 是否为数据展示 | boolean | false | 否 |  |

<span id="children" />

#### children

| 属性       | 说明        | 类型      | 默认值 | 是否必传 | 版本 |
| ---------- | ----------- | --------- | ------ | -------- | ---- |
| key        | key 值      | string    | -      | 是       |      |
| title      | title       | string    | -      | 否       |      |
| customNode | 自定义 node | ReactNode | -      | 否       |      |
