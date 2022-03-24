import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import SelectDate from './index';

import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

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
  it('fireEvent SelectDate check selfLabel', async () => {
    const title = '选时间吧～';
    const html = mount(
      <SelectDate
        value={{ dateValue: 'self', begin: '2022-02-28 00', end: '2022-03-02 00' }}
        selfLabel={title}
      />,
    );
    act(() => {
      html.find('.ant-select-selector').simulate('mousedown');
      html.update();
    });
    expect(screen.getByText(title)).toBeInTheDocument();

    // const html = render(
    //   <SelectDate
    //     value={{ dateValue: 'self', begin: '2022-02-28 00', end: '2022-03-02 00' }}
    //     selfLabel={title}
    //   />,
    // );

    // act(() => {
    //   screen.queryByRole('combobox')?.focus();
    //   fireEvent.keyDown(document.activeElement || document.body);
    // });

    // await waitForComponentToPaint(html, 1000);
    // expect(screen.getByText(title)).toBeInTheDocument();
  });
});
