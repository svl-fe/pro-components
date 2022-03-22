import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import CheckboxTree from './index';

describe('CheckboxTree', () => {
  it('render CheckboxTree with dumi', () => {
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
    ];

    render(<CheckboxTree treeData={channelTree} />);
    expect(screen.queryByText('通讯类')).toBeInTheDocument();
  });
});
