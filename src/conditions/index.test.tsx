import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Conditions from './index';

describe('<Conditions />', () => {
  it('render Conditions with textProps', () => {
    const andText = '全部满足';
    const addText = '添加一行';
    render(<Conditions andText={andText} addText={addText} />);

    expect(screen.queryByText(andText)).toBeInTheDocument();
    expect(screen.queryByText(addText)).toBeInTheDocument();
    expect(screen.queryByText('或')).toBeInTheDocument();
  });
});
