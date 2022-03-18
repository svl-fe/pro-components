import type { ITableQuery } from './data';
import { Empty, Pagination, Spin } from 'antd';
import type { CSSProperties, ReactNode } from 'react';
import './style/index.less';
import React from 'react';

interface IGridViewProps<T> {
  /**  loading */
  loading: boolean;
  /**  子节点 */
  childNode: (item: T) => ReactNode;
  className?: string;
  /**  数据源 */
  dataSource: T[];
  /** 需要分页参数 */
  filters?: ITableQuery;
  setFilters?: (item: ITableQuery) => void;
  /**  总数量 */
  total?: number;
  /**  是否需要分页 */
  isPagination: boolean;
  /** 样式 */
  style?: CSSProperties;
}
function GridView<T>(props: IGridViewProps<T>) {
  const {
    loading,
    childNode,
    className,
    dataSource,
    filters,
    setFilters,
    total,
    isPagination,
    style,
  } = props;

  const handlePageChange = (page: number, pageSize: number) => {
    setFilters?.({
      ...filters,
      page: page || filters?.page || 1,
      limit: pageSize || filters?.limit || 1,
    });
  };
  return (
    <div className={`svl-bottomContainer ${className}`} style={style}>
      <Spin spinning={loading}>
        <div
          className={'svl-bottomContent'}
          style={{ justifyContent: dataSource.length > 0 ? undefined : 'center' }}
        >
          {dataSource.length > 0 ? dataSource.map(childNode) : <Empty description="暂无数据" />}
        </div>
      </Spin>
      <div>
        {isPagination && (
          <Pagination
            hideOnSinglePage
            style={{ textAlign: 'right' }}
            total={total || 0}
            current={filters?.page}
            pageSize={filters?.limit}
            showSizeChanger={false}
            showQuickJumper
            showTotal={(total) => `共 ${total} 条`}
            onChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
}
export default GridView;
