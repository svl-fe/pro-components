---
nav:
  title: 组件
  path: /components
group:
  path: /components
  title: 反馈
  order: 2
---

## Drawer 抽屉

示例:

```tsx
import React, { useState } from 'react';
import { Button } from 'antd';
import { Drawer } from '@svl-ad/pro-components';

export default () => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const onOk = () => {
    return new Promise((resolve) => {
      setLoading(true);
      setTimeout(() => {
        resolve();
        setVisible(false);
        setLoading(false);
      }, 3000);
    });
  };

  return (
    <div>
      <Button type="primary" onClick={() => setVisible(true)}>
        打开
      </Button>

      <Drawer
        loading={loading}
        visible={visible}
        titleName="基础抽屉"
        onClose={() => setVisible(false)}
        onOk={onOk}
      >
        <p>内容区....</p>
        <p>内容区...</p>
        <p>内容区...</p>
      </Drawer>
    </div>
  );
};
```
