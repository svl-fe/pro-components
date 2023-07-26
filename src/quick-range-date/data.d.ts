/**
 * 日历快速选择的类型
 */
export type TRangePickerQuickChosenType =
  | 'last-15m'
  | 'last-30m'
  | 'last-1h'
  | 'last-24h'
  | 'last-48h'
  | 'last-7d'
  | 'last-30d'
  | 'last-60d'
  | 'last-90d'
  | 'now-day'
  | 'now-week'
  | 'now-month'
  | 'last-month'
  | 'now-year'
  | 'last-year';

/**
 * 日历选择类型
 */
export type TRangePickerType = TRangePickerQuickChosenType | 'absolute';

export type TDatePickerPosition = 'start' | 'end';

export type TQuickRangeDateMode = 'horizon' | 'vertical';

export type TDateType = Moment | null;

export type RangeValue = [DateType, DateType] | null;

/**
 * 时间范围选择器值
 */
export interface IQuickRangeDateValue {
  /** 时间类型 */
  type: TRangePickerType;
  dates: RangeValue;
}
