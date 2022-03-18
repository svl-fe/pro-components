import React, { ReactNode } from 'react';
import RcVirtualList from 'rc-virtual-list';
import { Spin } from 'antd';
export interface VirtualListProps<T> {
  /** 数据源 */
  data: T[];
  /** 容器高度 */
  height: number;
  /** item高度 */
  itemHeight: number;
  /** 如果需要滚动加载添加此参数 */
  appendData?: () => void;
  children: (item: T) => ReactNode;
  itemKey: string;
  /** loading */
  loading: boolean;
}
function VirtualList<T>(props: VirtualListProps<T>) {
  const { data, height, itemHeight, appendData, children, itemKey, loading } = props;
  const onScroll = (e: React.UIEvent<HTMLElement, UIEvent>) => {
    if (Math.floor(e.currentTarget.scrollHeight - e.currentTarget.scrollTop) === height) {
      appendData?.();
    }
  };
  return (
    <Spin spinning={loading}>
      <RcVirtualList
        data={data}
        height={height}
        itemHeight={itemHeight}
        itemKey={itemKey}
        onScroll={onScroll}
      >
        {children}
      </RcVirtualList>
    </Spin>
  );
}
export default VirtualList;
