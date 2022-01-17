import React, { useRef, useState, FC } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import type { AgGridEvent, ColDef, GridApi, GridOptions } from 'ag-grid-community';
import { Pagination } from 'antd';
import zhCN from './locale/zh-CN';
import _ from 'lodash';
import './index.less';

const DFT_PAGINATION = {
  current: 1,
  pageSize: 20,
};

export interface AgGridProps {
  gridOptions?: GridOptions;
  dataSource: any[];
  columnDefs: ColDef[];
}

const AgGrid: FC<AgGridProps> = (props) => {
  const { dataSource, columnDefs, gridOptions = {} } = props;
  const { onGridReady, ...restGridOptions } = gridOptions;

  const gridRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [_pagination, setPagination] = useState(DFT_PAGINATION);
  const [gridApi, setGridApi] = useState<GridApi | undefined>(undefined);

  //将列和数据赋给gridOptions
  const dftGridOptions: GridOptions = {
    rowGroupPanelShow: 'always', // 行组面板
    localeText: zhCN, // 本地化
    defaultColDef: {
      sortable: true, //开启排序
      filter: true, //开启筛选
      resizable: true, //是否可以调整列大小，就是拖动改变列大小
      enableRowGroup: true, // 按列进行分组
    },
    pagination: true, //开启分页（前端分页）
    getRowStyle: function () {
      return {
        background: 'white',
        borderBottom: '1px solid #E8EDF0',
      };
    },
    onColumnRowGroupChanged: (params) => {
      if (params?.columns) {
        if (gridOptions.pagination === false) {
          setVisible(true);
        } else {
          setVisible(params.columns.length > 0);
        }
        setPagination(DFT_PAGINATION);
      }
    },
  };

  const _gridOptions = _.assign(dftGridOptions, restGridOptions);

  const _onGridReady = (params: AgGridEvent) => {
    /**
     * 在 gridOptions 中设置 pagination 为 false 可关闭自定义的 pagination
     *
     * Todo: Demo示例、测试Case
     */
    if (_gridOptions.pagination === false) {
      setVisible(true);
    }
    params.api?.paginationGoToPage(_pagination.current);
    params.api?.paginationSetPageSize(_pagination.pageSize);
    setGridApi(params?.api);

    onGridReady?.(params);

    //表格创建完成后执行的事件
    _gridOptions.api?.sizeColumnsToFit(); //调整表格大小自适应
  };

  const onShowSizeChange = (current: number, pageSize: number) => {
    gridApi?.paginationGoToPage(current - 1);
    gridApi?.paginationSetPageSize(pageSize);
    setPagination({ ..._pagination, current, pageSize });
  };

  return (
    <div className="svl-ag-grid">
      <div className="ag-theme-alpine" style={{ height: 600, width: '100%' }}>
        <AgGridReact
          ref={gridRef}
          rowData={dataSource}
          columnDefs={columnDefs}
          gridOptions={_gridOptions}
          onGridReady={_onGridReady}
        />
      </div>
      {!visible && (
        <div className={'pagination'}>
          <Pagination
            size="small"
            showQuickJumper
            current={_pagination.current}
            pageSize={_pagination.pageSize}
            total={dataSource.length}
            onChange={onShowSizeChange}
            showTotal={(total) => `共${total}条`}
            pageSizeOptions={['20', '50', '100']}
          />
        </div>
      )}
    </div>
  );
};

export default AgGrid;
