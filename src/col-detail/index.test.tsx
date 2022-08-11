import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import ColDetail from './index';

describe('<ColDetail />', () => {
  it('render ColDetail with dumi', () => {
    const title = '展示信息';
    const test = 'ceshiyixia';
    const info = {
      part1: title,
      test: test,
    };
    const data = [
      {
        key: 'test',
        value: 'part1',
      },
      {
        key: 'test2',
        value: (info: any) => {
          return {
            tooltip: 'ceshi',
            show: <div>{info.test}</div>,
          };
        },
      },
      {
        key: 'test3',
        access: () => false,
        value: (info: any) => {
          return {
            tooltip: 'ceshi',
            show: 'test3',
          };
        },
      },
    ];

    render(<ColDetail colData={data} info={info} />);
    expect(screen.queryByText(title)).toBeInTheDocument();
    expect(screen.queryByText(test)).toBeInTheDocument();
    expect(screen.queryByText('test3')).not.toBeInTheDocument();
  });
});
