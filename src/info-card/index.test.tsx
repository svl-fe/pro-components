import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import InfoCard from './index';

describe('<InfoCard />', () => {
  it('render InfoCard with dumi', () => {
    const title = '信息展示';

    render(<InfoCard cardTitle={title} />);
    expect(screen.queryByText(title)).toBeInTheDocument();
  });
});
