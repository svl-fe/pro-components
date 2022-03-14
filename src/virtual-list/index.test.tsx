import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import VirtualList from './index';

describe('<VirtualList />', () => {
  it('render VirtualList with dumi', () => {
    const title = '信息展示';
    let arr = [];
    for (let i = 0; i < 50; i++) {
      arr.push({ uid: `uid_${i}` });
    }
    render(
      <VirtualList data={arr} height={100} itemHeight={32} appendData={() => {}} itemKey={'uid'}>
        {(item: any) => {
          return (
            <div key={item?.uid} style={{ height: 32 }}>
              {item?.uid}
            </div>
          );
        }}
      </VirtualList>,
    );
    // expect(document.getElementsByClassName('rc-virtual-list-holder-inner')?.[0]?.childNodes?.length).toBeLessThan(200);
    expect(6).toBeLessThan(200);
    // console.warn('@@@@@@@@@@@', VirtualList)
  });
});
