import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SelectDate from './index';

describe('<SelectDate />', () => {
  it('render SelectDate with selfValue', () => {
    const title = '选时间吧～';
    const expectLabel = '2022-02-28 00时-2022-03-02 00时';

    render(
      <SelectDate
        value={{ dateValue: 'self', begin: '2022-02-28 00', end: '2022-03-02 00' }}
        selfLabel={title}
      />,
    );
    expect(screen.getByText(expectLabel)).toBeInTheDocument();
  });
  it('fireEvent SelectDate check selfLabel', () => {
    const title = '选时间吧～';

    render(
      <SelectDate
        value={{ dateValue: 'self', begin: '2022-02-28 00', end: '2022-03-02 00' }}
        selfLabel={title}
      />,
    );
    screen.queryByRole('combobox')?.focus();
    fireEvent.keyDown(document.activeElement || document.body);
    expect(screen.getByText(title)).toBeInTheDocument();
  });
});
