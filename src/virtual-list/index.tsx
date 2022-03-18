import React, { FC } from 'react';
import RCVirtualList from 'rc-virtual-list';
import { Spin } from 'antd';
export interface VirtualListProps {
  /** 数据源 */
  data: any[];
  /** 容器高度 */
  height: number;
  /** item高度 */
  itemHeight: number;
  /** 如果需要滚动加载添加此参数 */
  appendData?: () => void;
  children: (item: any) => any;
  itemKey: string;
  /** loading */
  loading: boolean;
}
const VirtualList: FC<VirtualListProps> = (props) => {
  const { data, height, itemHeight, appendData, children, itemKey, loading } = props;
  const onScroll = (e: any) => {
    if (Math.floor(e?.target?.scrollHeight - e?.target?.scrollTop) === height) {
      appendData?.();
    }
  };
  return (
    <Spin spinning={loading}>
      <RCVirtualList
        data={data}
        height={height}
        itemHeight={itemHeight}
        itemKey={itemKey}
        onScroll={onScroll}
      >
        {children}
      </RCVirtualList>
    </Spin>
  );
};
export default VirtualList;
