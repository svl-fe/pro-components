import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Drawer from './index';

describe('<Drawer />', () => {
  it('render Drawer with dumi', () => {
    const msg = 'dumi';

    render(<Drawer />);
    expect(screen.queryByText(msg)).toBeInTheDocument();
  });
});
