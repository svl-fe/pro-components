import { arrayMoveImmutable } from 'array-move';
import React, { FC, useEffect, useState } from 'react';
import type { SortEnd, SortableContainerProps } from 'react-sortable-hoc';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';

const SortableItem = SortableElement<{ value?: any; Child?: any }>(
  ({ value, Child }: { value?: any; Child?: any }) => {
    return (
      <div style={{ zIndex: 1200, userSelect: 'none' }}>
        {Child ? <Child value={value} /> : typeof value === 'string' ? value : ''}
      </div>
    );
  },
);

const SortableList = SortableContainer<{ items: any; Child: any }>(({ items, Child }: any) => {
  return (
    <div>
      {items.map((value: any, index: number) => (
        <SortableItem key={index} index={index} Child={Child} value={value} />
      ))}
    </div>
  );
});

interface IDragList extends SortableContainerProps {
  /** 展示数据 */
  data: any;
  /** child渲染组件，自定义数据如何渲染, 默认直接展示数组元素 */
  Child?: React.FC;
  /** 数据排序变化回调 */
  onChange?: (data: any) => void;
}

const DragList: FC<IDragList> = ({ data, Child, onChange, ...rest }) => {
  const [selfListData, setSelfListData] = useState(data || []);

  useEffect(() => {
    setSelfListData(data);
  }, [data]);

  const onSortEnd = ({ oldIndex, newIndex }: SortEnd) => {
    const newData = arrayMoveImmutable(selfListData, oldIndex, newIndex);
    setSelfListData(newData);
    onChange?.(newData);
  };

  return (
    <SortableList distance={1} onSortEnd={onSortEnd} Child={Child} items={selfListData} {...rest} />
  );
};

export default DragList;
