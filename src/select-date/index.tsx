import { FC, useMemo } from 'react';
import React, { useRef, useState, useEffect } from 'react';
import { DatePicker } from 'antd';
import type { Moment } from 'moment';
import moment from 'moment';
import type { RangeValue } from 'rc-picker/lib/interface';
import { RefSelectProps } from 'antd/lib/select';
import { Select } from 'svl-design';

import './style/index.less';

const { Option } = Select;
const { RangePicker } = DatePicker;

type Result = Record<string, string>;

export interface ISelectDate {
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: React.CSSProperties;
  /** 开始时间字段名，默认begin */
  beginKey?: string;
  /** 结束时间字段名，默认end */
  endKey?: string;
  /** 下拉选项默认值 */
  defaultDate?: string;
  /** 是否展示自定义选项，默认值 false */
  showSelf?: boolean;
  /** 自定义选项label，默认值 自定义... */
  selfLabel?: string;
  /** 自定义选项value，默认值 self */
  selfValue?: string;
  /** 自定义选择展示的时间格式 */
  selfShowFormat?: string;
  /** 自定义选择的时间格式 */
  selfFormat?: string;
  /** 选择时间区间后定义处理结果 (dateArr: string[]) => dateArr.join('-') */
  selfFormatter?: (dateStr: string[]) => string;
  /** 自定义选择时是否展示时间 */
  showTime?: object | boolean;
  /** 自定义选择时开始时间后缀, 默认值:00:00 */
  beginSuffix?: string;
  /** 自定义选择时结束时间后缀, 默认值:59:59 */
  endSuffix?: string;
  /** 快捷选择时间配置项 */
  timeOptions?: Record<string, ITimeOpt>;
  /** 当前组件value中的时间格式，默认值为YYYY-MM-DD HH:mm:ss  */
  format?: string;
  /** 当前组件value值，一般为 {dateValue: string, [baginKey]: string, [endKey]: string}  */
  value?: Result;
  /** 组件值发生变化时回调 */
  onChange?: (params: Result) => void;
}

const FORMAT = 'YYYY-MM-DD HH';
const FORMAT_DAY = 'YYYY-MM-DD HH:mm:ss';

interface ITimeOpt {
  name: string;
  value: [() => string, () => string];
}
export const getTimeOption = ({
  name,
  value,
  unit,
  format = FORMAT_DAY,
}: {
  name: string;
  format?: string;
  value: number;
  unit: moment.unitOfTime.DurationConstructor;
}): ITimeOpt => {
  return {
    name,
    value: [() => moment().subtract(value, unit).format(format), () => moment().format(format)],
  };
};

export const getDefaultTimeOptions: (str?: string) => Record<string, ITimeOpt> = (
  format?: string,
) => ({
  'last-2day': getTimeOption({ name: '2天内', value: 2, format, unit: 'days' }),
  'last-week': getTimeOption({ name: '一周内', value: 7, format, unit: 'days' }),
  'last-month': getTimeOption({ name: '一个月内', value: 1, format, unit: 'months' }),
  'last-3month': getTimeOption({ name: '三个月内', value: 3, format, unit: 'months' }),
  'last-6month': getTimeOption({ name: '六个月内', value: 6, format, unit: 'months' }),
});

const SelectDate: FC<ISelectDate> = (props) => {
  const {
    className,
    style,
    defaultDate = 'last-2day',
    timeOptions,
    format = FORMAT_DAY,
    showSelf = true,
    selfLabel = '自定义...',
    selfValue = 'self',
    selfShowFormat = 'YYYY-MM-DD HH时',
    selfFormat = FORMAT,
    selfFormatter = (dateArr: string[]) => dateArr.join('-'),
    showTime = { format: 'HH时', defaultValue: [moment('00', 'HH'), moment('23', 'HH')] },
    beginKey = 'begin',
    endKey = 'end',
    beginSuffix = ':00:00',
    endSuffix = ':59:59',
    value,
    onChange,
  } = props;

  const [open, setOpen] = useState(false);
  const [selfDate, setSelfDate] = useState(() => {
    if (value?.[beginKey] && value?.[endKey]) {
      return selfFormatter([
        moment(value?.[beginKey]).format(selfShowFormat),
        moment(value?.[endKey]).format(selfShowFormat),
      ]);
    }
    return '';
  });

  const [selfMoment, setSelfMoment] = useState<RangeValue<Moment> | undefined>(() => {
    if (value?.[beginKey] && value?.[endKey]) {
      return [moment(value?.[beginKey]), moment(value?.[endKey])];
    }
    return undefined;
  });
  const [dateValue, setDateValue] = useState(defaultDate);
  const selectRef = useRef<RefSelectProps>(null);
  const okTimeRef = useRef(0);

  const timeOptionsR = useMemo(() => {
    if (timeOptions) {
      return timeOptions;
    }
    return getDefaultTimeOptions(format);
  }, [timeOptions, format]);

  const handleChange = (date: string) => {
    setDateValue(date);
    if (date !== selfValue) {
      const [begin, end] = timeOptionsR[date].value;
      const newValue = { [beginKey]: begin(), [endKey]: end(), dateValue: date };
      onChange?.(newValue);
    } else {
      setSelfMoment(undefined);
      setSelfDate('');
    }
  };
  const openDate = () => {
    selectRef.current?.blur();
    setOpen(true);
  };
  const changeDate = (moments: RangeValue<Moment>, v: [string, string]) => {
    setSelfDate(selfFormatter(v));
    if (moments) {
      setSelfMoment(moments);
    }
    if (open && okTimeRef.current >= 1) {
      setOpen(false);
    }
    setTimeout(() => {
      setDateValue(selfValue);
    }, 10);
  };
  const handleOk = () => {
    okTimeRef.current += 1;
  };

  useEffect(() => {
    if (!open && selfMoment) {
      const [start, end] = selfMoment;
      if (start && end) {
        const beginStr = start?.format(selfFormat) + beginSuffix;
        const endStr = end?.format(selfFormat) + endSuffix;
        onChange?.({
          [beginKey]: beginStr,
          [endKey]: endStr,
          dateValue: selfValue,
        });
      }
    }
    if (!open) {
      okTimeRef.current = 0;
    }
  }, [open, selfMoment]);

  return (
    <div className={`svl-select-date ${open ? 'date-open' : ''} ${className}`} style={style}>
      <Select
        ref={selectRef}
        className="svl-select-date-select"
        value={value?.dateValue || dateValue}
        onChange={handleChange}
        optionLabelProp="label"
      >
        <>
          {Object.keys(timeOptionsR).map((opt) => {
            const label = timeOptionsR[opt].name;
            return (
              <Option label={label} key={opt} value={opt}>
                {label}
              </Option>
            );
          })}
          {showSelf && (
            <Option label={selfDate} value={selfValue}>
              <div onClick={openDate}>{selfLabel}</div>
            </Option>
          )}
        </>
      </Select>
      {open && (
        <RangePicker
          autoFocus
          defaultOpen
          value={selfMoment || undefined}
          className="svl-select-date-range"
          allowClear={false}
          showTime={showTime}
          format={selfShowFormat}
          onOk={handleOk}
          open={open}
          onOpenChange={setOpen}
          onChange={changeDate}
        />
      )}
    </div>
  );
};

export default SelectDate;
