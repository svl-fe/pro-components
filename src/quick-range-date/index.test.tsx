import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import QuickRangeDate from './index';

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

describe('<QuickRangeDate />', () => {
  it('render QuickRangeDate with selfValue', () => {
    const expectLabel = '2023-07-26 00:06:00  ~  2023-07-26 03:03:00';

    render(
      <QuickRangeDate
        mode="horizontal"
        value={{
          type: 'absolute',
          dates: ['2023-07-25T16:06:00.025Z', '2023-07-25T19:03:00.908Z'],
        }}
      />,
    );

    expect(screen.getByText(expectLabel)).toBeInTheDocument();
  });
});
