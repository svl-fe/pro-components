import type { ITableQuery, ITableResult } from './data';
import { Empty, Pagination, Spin } from 'antd';
import type { ReactNode } from 'react';
import './style/index.less';
import React from 'react';

interface IGridViewProps {
  /**  loading */
  loading: boolean;
  /**  子节点 */
  childNode: (item: any) => ReactNode;
  className?: string;
  /**  数据源 */
  dataSource: ITableResult<any> | any[];
  /** 需要分页参数 */
  filters: ITableQuery;
  setFilters?: (item: ITableQuery) => void;
}
const GridView: React.FC<IGridViewProps> = (props) => {
  const { loading, childNode, className, dataSource, filters, setFilters } = props;
  const getDataSource = () => {
    if (Array.isArray(dataSource)) {
      return dataSource;
    } else {
      return dataSource?.results || [];
    }
  };
  const handlePageChange = (page: number, pageSize: number) => {
    setFilters?.({
      ...filters,
      page: page || filters.page,
      limit: pageSize || filters.limit,
    });
  };
  return (
    <div className={`svl-bottomContainer ${className}`}>
      <Spin spinning={loading}>
        <div
          className={'svl-bottomContent'}
          style={{ justifyContent: getDataSource().length > 0 ? undefined : 'center' }}
        >
          {getDataSource().length > 0 ? (
            getDataSource().map((o: any) => childNode(o))
          ) : (
            <Empty description="暂无数据" />
          )}
        </div>
      </Spin>
      <div>
        {Array.isArray(dataSource) || (
          <Pagination
            hideOnSinglePage
            style={{ textAlign: 'right' }}
            total={dataSource?.total || 0}
            current={filters.page}
            pageSize={filters.limit}
            showSizeChanger={false}
            showQuickJumper
            showTotal={(total) => `共 ${total} 条`}
            onChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
};
export default GridView;
