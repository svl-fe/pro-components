import Icon from '@ant-design/icons';
import type { SelectProps } from 'antd';
import { Empty, Spin } from 'antd';
import type { LabeledValue, RefSelectProps, SelectValue } from 'antd/es/select';
import { debounce } from 'lodash';
import type { BaseSelectRef } from 'rc-select';
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Select } from 'svl-design';
import { ReactComponent as addSvg } from '../svg/icon-add.svg';
import { ReactComponent as refreshSvg } from '../svg/icon-refresh.svg';
import './style/index.less';

// type RawValue = string | number;
// type Value = RawValue | RawValue[];

export interface IRemoteSelect extends SelectProps {
  /** 搜索防抖时间，默认值800 */
  debounceTimeout?: number;
  /** 组件当前值 */
  value?: SelectValue | LabeledValue | LabeledValue[];
  /** 添加功能 文字 */
  addText?: string;
  /** 添加功能 跳转文案 */
  addLinkText?: string;
  /** 添加功能 跳转地址 */
  addLinkUrl?: string | (() => {});
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

interface IRemoteSelectRef {
  refresh?: () => void;
}

const PlullDownSvg = <Icon component={refreshSvg} className="svl-remote-select-refresh-icon" />;
const AddSvg = <Icon component={addSvg} className="svl-remote-select-refresh-icon" />;

const RemoteSelect = (props: IRemoteSelect, ref: React.Ref<IRemoteSelectRef | BaseSelectRef>) => {
  const {
    debounceTimeout = 800,
    value,
    addText,
    addLinkUrl,
    addLinkText,
    className,
    offsetBottom = 10,
    initFetch = true,
    refresh,
    loadMore,
    empty = <Empty />,
    fetchOptions,
    onChange,
    addOption,
    checkAddParams,
    ...rest
  } = props;

  const [fetching, setFetching] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
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
  const initData = () =>
    fetchOptions('')
      .then((newOptions) => setOptions(newOptions))
      .finally(() => {
        setRefreshing(false);
      });

  // 刷新远程数据
  const refreshRemoteData = () => {
    currentParamRef.current = '';
    pageRef.current = 1;
    initData();
  };

  useEffect(() => {
    if (initFetch) initData();
  }, []);

  const refreshF = () => {
    setRefreshing(true);
    refreshRemoteData();
  };

  useEffect(() => {
    if (refresh) refreshRemoteData();
  }, [refresh]);

  // 将刷新函数传递给父组件
  useImperativeHandle(ref, () => ({
    refresh: refreshRemoteData,
  }));

  const debounceFetcher = useMemo(() => {
    const loadOptions = (param: string) => {
      fetchRef.current += 1;
      pageRef.current = 1;
      currentParamRef.current = param;
      const fetchId = fetchRef.current;
      setOptions([]);
      setFetching(true);
      fetchOptions(param)
        .then((newOptions) => {
          if (fetchId !== fetchRef.current) {
            // for fetch callback order
            return;
          }
          setOptions(newOptions);
          setFetching(false);
        })
        .finally(() => {
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
        fetchOptions(currentParamRef.current, pageRef.current)
          .then((newOptions) => {
            setOptions([...options, ...newOptions]);
            setFetching(false);
          })
          .finally(() => {
            setFetching(false);
          });
      }
    },
    [loadMore, fetching, options],
  );

  return (
    <Select
      ref={(ref as unknown as React.Ref<BaseSelectRef>) || selectRef}
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
          {!!(addText && showAdd) && (
            <div className="svl-remote-select-add" onClick={handelAdd}>
              {addText} <span className="svl-remote-select-add-value">{showAdd}</span>
            </div>
          )}
          {!!addLinkUrl && (
            <div className="svl-remote-select-add-bottom">
              <div
                className="svl-remote-select-add-bottom-item"
                onClick={
                  typeof addLinkUrl === 'function'
                    ? addLinkUrl
                    : () => {
                        window.open(addLinkUrl);
                      }
                }
              >
                {AddSvg}
                {addLinkText || '点击添加'}
              </div>
              <div
                className={`svl-remote-select-add-bottom-item ${refreshing ? 'animationIcon' : ''}`}
                onClick={refreshF}
              >
                {PlullDownSvg}
                刷新
              </div>
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

export default forwardRef(RemoteSelect);
