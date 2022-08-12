import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import HashLocation from './index';

describe('<HashLocation />', () => {
  it('render HashLocation with dumi', () => {
    const title = '基本信息';
    const data = [
      {
        title,
        href: 'part1',
      },
    ];

    render(<HashLocation data={data} />);
    expect(screen.queryByText(title)).toBeInTheDocument();
  });
});
