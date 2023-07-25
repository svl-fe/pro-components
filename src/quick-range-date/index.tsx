import React, {
  forwardRef,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
  useEffect,
} from 'react';
import moment from 'moment';
import { DatePicker, Dropdown, Space, message, Steps } from 'antd';
import { Button } from 'svl-design';
import { useControlledState } from '@svl-ad/hooks';
import QuickChosen from './components/QuickChosen';
import InputIcon from './components/InputIcon';
import {
  getDftValue,
  getQuickChosenOptions,
  getQuickChosenDates,
  matchQuickChosenTitle,
} from './utils';
import {
  IQuickRangePickerValue,
  RangeValue,
  TDatePickerPosition,
  TDateType,
  TRangePickerQuickChosenType,
} from './data';
import { CalendarOutlined } from '@ant-design/icons';

import './style/index.less';

const DFT_FORMAT = ' YYYY-MM-DD HH:mm:ss';

interface IQuickRangePickerProps {
  /** 样式 */
  style?: React.CSSProperties;
  /** 类名 */
  className?: string;
  /** 下拉根元素的类名称 */
  overlayClassName?: string;
  /** 绝对时间展示形式 */
  mode?: 'vertical' | 'horizontal';
  /** 值 */
  value: IQuickRangePickerValue;
  /** 值发生变化时回调 */
  onChange: (val: IQuickRangePickerValue) => void;
}

interface IQuickRangePickerRef {
  refresh: () => void;
}

const QuickRangePicker = forwardRef<IQuickRangePickerRef, IQuickRangePickerProps>((props, ref) => {
  const { value, onChange, className, overlayClassName, style, mode = 'vertical' } = props;

  const [showQuick, setShowQuick] = useState(false);
  const [cachedValue, setCachedValue] = useState<TDateType[]>([]);
  const [rangeValue, setRangeValue] = useControlledState<IQuickRangePickerValue>(
    getDftValue() as IQuickRangePickerValue,
    { value, onChange },
  );
  const rangeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (JSON.stringify(rangeValue.dates) !== JSON.stringify(cachedValue)) {
      setCachedValue(rangeValue.dates || []);
    }
  }, [rangeValue]);

  const horizontalTitle = useMemo(() => {
    // 绝对时间，展示时间范围
    if (rangeValue.type === 'absolute') {
      const date0 = moment(rangeValue?.dates?.[0]).format(DFT_FORMAT);
      const date1 = moment(rangeValue?.dates?.[1]).format(DFT_FORMAT);

      return `${date0}  ~ ${date1}`;
    }

    // 非绝对时间，则展示快速搜索文案
    return matchQuickChosenTitle(rangeValue.type);
  }, [rangeValue]);

  // 刷新时间
  const refreshTime = () => {
    if (rangeValue.type === 'absolute') {
      setRangeValue(getDftValue() as IQuickRangePickerValue);
      return;
    }

    const quickChosen = getQuickChosenOptions();
    quickChosen.forEach((parentLevel) => {
      parentLevel.data.forEach((opt) => {
        if (opt.type === rangeValue.type) {
          const dates = opt.getTime() as RangeValue;
          setRangeValue({ type: opt.type, dates });
          return;
        }
      });
    });
  };

  // 刷新时间函数传递给父组件
  useImperativeHandle(ref, () => ({ refresh: refreshTime }));

  const handleQuickChosenChange = (dates: RangeValue, type: TRangePickerQuickChosenType) => {
    setRangeValue({ type, dates });
    onChange?.({ type, dates });
    setShowQuick(false);
  };

  const handleDatePickerChange = (date: TDateType, type: TDatePickerPosition) => {
    let start: TDateType = cachedValue?.[0] || null;
    let end: TDateType = cachedValue?.[1] || null;

    if (type === 'start') start = date;
    if (type === 'end') end = date;

    setCachedValue([start, end]);
  };

  const handleConfirm = () => {
    if (cachedValue?.length > 0) {
      if (!cachedValue[0]) {
        return message.error('开始时间不能为空');
      }

      if (!cachedValue[1]) {
        return message.error('结束时间不能为空');
      }

      const start = moment(cachedValue[0]).valueOf();
      const end = moment(cachedValue[1]).valueOf();
      if (start >= end) {
        message.error('开始时间不能大于或等于结束时间');
        return;
      }
    }

    const newValue: IQuickRangePickerValue = {
      type: 'absolute',
      dates: cachedValue,
    };

    onChange?.(newValue);
    setRangeValue(newValue);
    setShowQuick(false);
  };

  const rendRangePicker = () => {
    return (
      <div className={`svl-pro-rpicker-overlay-container ${overlayClassName}`}>
        <QuickChosen
          onChange={(dates, type) => handleQuickChosenChange(dates as RangeValue, type)}
        />
        <div className="svl-pro-rpicker-custom-time">
          <div className="svl-pro-rpicker-custom-time-title">自定义时间</div>
          <div className="svl-pro-rpicker-custom-time-label">开始时间</div>
          <DatePicker
            showNow={false}
            showTime={{ format: 'HH:mm' }}
            value={cachedValue?.[0]}
            style={{ width: '100%' }}
            onChange={(value) => handleDatePickerChange(value, 'start')}
          />
          <div className="svl-pro-rpicker-custom-time-label" style={{ marginTop: '14px' }}>
            结束时间
          </div>
          <DatePicker
            showNow={false}
            showTime={{ format: 'HH:mm' }}
            value={cachedValue?.[1]}
            style={{ width: '100%' }}
            onChange={(value) => handleDatePickerChange(value, 'end')}
          />
          <div className="svl-pro-rpicker-custom-time-actions">
            <Space>
              <a onClick={() => setShowQuick(false)} style={{ marginRight: '30px' }}>
                取消
              </a>
              <Button type="primary" onClick={handleConfirm}>
                确定
              </Button>
            </Space>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`svl-pro-rpicker ${className}`} style={style} ref={rangeRef}>
      <Dropdown open={showQuick} autoAdjustOverflow dropdownRender={rendRangePicker}>
        <div onClick={(e) => e.preventDefault()}>
          {mode === 'vertical' && (
            <>
              {rangeValue?.type === 'absolute' ? (
                <div
                  onClick={() => setShowQuick(true)}
                  className="svl-pro-rpicker-vertical-container"
                >
                  <Steps
                    progressDot
                    direction="vertical"
                    className="svl-pro-rpicker-time-steps"
                    items={[
                      {
                        title: moment(rangeValue?.dates?.[0]).format('YYYY-MM-DD HH:mm:ss'),
                      },
                      {
                        title: moment(rangeValue?.dates?.[1]).format('YYYY-MM-DD HH:mm:ss'),
                      },
                    ]}
                  />
                  <CalendarOutlined className="svl-pro-rpicker-dates-icon" />
                </div>
              ) : (
                <InputIcon title={horizontalTitle} showQuick={setShowQuick} />
              )}
            </>
          )}

          {mode === 'horizontal' && <InputIcon title={horizontalTitle} showQuick={setShowQuick} />}
        </div>
      </Dropdown>
    </div>
  );
});

export default QuickRangePicker;

export { getQuickChosenDates };
