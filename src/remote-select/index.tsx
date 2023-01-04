import type { FC } from 'react';
import React, { useEffect, useCallback, useState, useMemo, useRef } from 'react';
import type { SelectProps } from 'antd';
import { Spin, Empty } from 'antd';
import { debounce } from 'lodash';
import { Select } from 'svl-design';
import type { LabeledValue, RefSelectProps, SelectValue } from 'antd/es/select';

import emptyIcon from './emptyImg.png';

import './style/index.less';

type RawValue = string | number;
// type Value = RawValue | RawValue[];

export interface IRemoteSelect extends SelectProps {
  /** 搜索防抖时间，默认值800 */
  debounceTimeout?: number;
  /** 组件当前值 */
  value?: SelectValue | LabeledValue | LabeledValue[];
  /** 添加功能 文字 */
  addText?: string;
  /** 初始化时是否获取数据 默认值true */
  initFetch?: boolean;
  /** 是否加载更多数据 */
  loadMore?: boolean;
  /** 更新数据 */
  refresh?: boolean;
  /** 距离底部多少时开始加载数据，默认值 10 */
  offsetBottom?: number;
  /** 数据为空时展示 */
  empty?: React.ReactNode;
  /** 添加选项方法 */
  addOption?: (params: string) => void;
  /** 添加参数校验方法 */
  checkAddParams?: (params: string) => boolean;
  /** 搜索获取下拉选项方法 */
  fetchOptions: (params: string, page?: number) => Promise<LabeledValue[]>;
  /** 值发生变化回调 */
  onChange?: (params: SelectValue) => void;
}

const RemoteSelect: FC<IRemoteSelect> = (props) => {
  const {
    debounceTimeout = 800,
    value,
    addText,
    className,
    offsetBottom = 10,
    initFetch = true,
    refresh,
    loadMore,
    empty = (
      <Empty
        image={<img src={emptyIcon} />}
        description={<span className="svl-remote-select-description">暂无数据</span>}
      />
    ),
    fetchOptions,
    onChange,
    addOption,
    checkAddParams,
    ...rest
  } = props;

  const [fetching, setFetching] = useState(false);
  const [selfValue, setSelfValue] = useState<SelectValue>();
  const [options, setOptions] = useState<LabeledValue[]>([]);
  const fetchRef = useRef(0);
  const pageRef = useRef(1);
  const selectRef = useRef<RefSelectProps>(null);
  const currentParamRef = useRef('');
  const handleChange = (changeValue: SelectValue) => {
    if (!('value' in props)) {
      setSelfValue(changeValue);
    }
    onChange?.(changeValue);
  };
  // 初始化获取options
  const initData = () => fetchOptions('').then((newOptions) => setOptions(newOptions));
  useEffect(() => {
    if (initFetch) {
      initData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (refresh) {
      currentParamRef.current = '';
      pageRef.current = 1;
      initData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh]);

  const debounceFetcher = useMemo(() => {
    const loadOptions = (param: string) => {
      fetchRef.current += 1;
      pageRef.current = 1;
      currentParamRef.current = param;
      const fetchId = fetchRef.current;
      setOptions([]);
      setFetching(true);
      fetchOptions(param).then((newOptions) => {
        if (fetchId !== fetchRef.current) {
          // for fetch callback order
          return;
        }
        setOptions(newOptions);
        setFetching(false);
      });
    };

    return debounce(loadOptions, debounceTimeout);
  }, [fetchOptions, debounceTimeout]);

  const showAdd = useMemo(() => {
    if (addText) {
      const hasFlag = options.some((option) => option.label === currentParamRef.current);
      return hasFlag ? '' : currentParamRef.current;
    }
    return '';
  }, [options, addText]);

  const handelAdd = () => {
    if (!checkAddParams || (checkAddParams && checkAddParams(showAdd))) {
      selectRef.current?.blur();
      addOption?.(showAdd);
    }
  };
  const handleVisibleChange = (open: boolean) => {
    if (!open && currentParamRef.current) {
      currentParamRef.current = '';
      pageRef.current = 1;
      initData();
    }
  };

  const onPopupScroll = useCallback(
    (e: React.UIEvent<HTMLDivElement>) => {
      const { scrollTop, clientHeight, scrollHeight } = e.target as HTMLDivElement;
      if (loadMore && !fetching && scrollTop >= scrollHeight - clientHeight - offsetBottom) {
        pageRef.current += 1;
        setFetching(true);
        fetchOptions(currentParamRef.current, pageRef.current).then((newOptions) => {
          setOptions([...options, ...newOptions]);
          setFetching(false);
        });
      }
    },
    [loadMore, fetching, options],
  );

  return (
    <Select
      ref={selectRef}
      className={`svl-remote-select ${className}`}
      value={value || selfValue}
      filterOption={false}
      onChange={handleChange}
      onSearch={debounceFetcher}
      notFoundContent={fetching ? <Spin size="small" /> : options?.length ? null : empty}
      options={options}
      dropdownRender={(menu) => (
        <>
          {menu}
          {addText && showAdd && (
            <div className="svl-remote-select-add" onClick={handelAdd}>
              {addText} <span className="svl-remote-select-add-value">{showAdd}</span>
            </div>
          )}
        </>
      )}
      onDropdownVisibleChange={handleVisibleChange}
      onPopupScroll={onPopupScroll}
      {...rest}
    />
  );
};

export default RemoteSelect;
