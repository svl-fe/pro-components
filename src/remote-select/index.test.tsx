import React from 'react';
import '@testing-library/jest-dom';
import { act } from 'react-dom/test-utils';
import { render } from '@testing-library/react';
import RemoteSelect from './index';
import { waitForComponentToPaint } from '../utils/util';

describe('<RemoteSelect />', () => {
  it('render RemoteSelect with fetchOptions', async () => {
    const fakeFetch = jest.fn();
    act(() => {
      fakeFetch.mockReturnValue(new Promise((resolve) => resolve([])));
    });
    let html;
    act(() => {
      html = render(<RemoteSelect fetchOptions={fakeFetch} />);
    });
    await waitForComponentToPaint(html);

    expect(fakeFetch).toHaveBeenCalledTimes(1);
  });
});
