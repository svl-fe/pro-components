import type { ITableQuery } from './data';
import { Empty, Pagination, Spin } from 'antd';
import type { CSSProperties, ReactNode } from 'react';
import './style/index.less';
import React from 'react';
import { isEmpty } from 'lodash';

interface IGridViewProps {
  /**  loading */
  loading: boolean;
  /** 类名 */
  className?: string;
  /** 需要分页参数 */
  filters?: ITableQuery;
  setFilters?: (item: ITableQuery) => void;
  /**  总数量 */
  total?: number;
  /**  是否需要分页 */
  isPagination?: boolean;
  /** 样式 */
  style?: CSSProperties;
  /** 子节点 */
  children: ReactNode;
}
function GridView(props: IGridViewProps) {
  const {
    loading,
    // childNode,
    className,
    // dataSource,
    filters,
    setFilters,
    total,
    isPagination = true,
    style,
    children,
  } = props;

  const handlePageChange = (page: number, pageSize: number) => {
    setFilters?.({
      ...filters,
      page: page || filters?.page || 1,
      limit: pageSize || filters?.limit || 10,
    });
  };
  return (
    <div className={`svl-pro-gridview-container ${className}`} style={style}>
      <Spin spinning={loading}>
        <div
          className={'svl-pro-gridview-content'}
          style={{ justifyContent: isEmpty(children) ? 'center' : 'inherit' }}
        >
          {isEmpty(children) ? <Empty description="暂无数据" /> : children}
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
