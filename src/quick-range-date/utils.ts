import moment from 'moment';
import { TDateType, TRangePickerQuickChosenType } from './data';

/**
 * 获取快速选择选项
 */
export const getQuickChosenOptions = () => {
  return [
    {
      type: 'first',
      data: [
        {
          title: '过去15分钟',
          type: 'last-15m',
          getTime: () => [moment().add(-15, 'm'), moment()],
        },
        {
          title: '过去30分钟',
          type: 'last-30m',
          getTime: () => [moment().add(-30, 'm'), moment()],
        },
        {
          title: '过去1小时',
          type: 'last-1h',
          getTime: () => [moment().add(-1, 'h'), moment()],
        },
        {
          title: '过去24小时',
          type: 'last-24h',
          getTime: () => [moment().add(-24, 'h'), moment()],
        },
        {
          title: '过去48小时',
          type: 'last-48h',
          getTime: () => [moment().add(-48, 'h'), moment()],
        },
      ],
    },
    {
      type: 'second',
      data: [
        {
          title: '过去7天',
          type: 'last-7d',
          getTime: () => [moment().add(-7, 'day'), moment()],
        },
        {
          title: '过去30天',
          type: 'last-30d',
          getTime: () => [moment().add(-30, 'day'), moment()],
        },
        {
          title: '过去60天',
          type: 'last-60d',
          getTime: () => [moment().add(-60, 'day'), moment()],
        },
        {
          title: '过去90天',
          type: 'last-90d',
          getTime: () => [moment().add(-90, 'day'), moment()],
        },
      ],
    },
    {
      type: 'third',
      data: [
        {
          title: '今日',
          type: 'now-day',
          getTime: () => [moment(new Date()).startOf('day'), moment()],
        },
        {
          title: '本周',
          type: 'now-week',
          getTime: () => [moment(new Date()).startOf('w'), moment()],
        },
        {
          title: '本月',
          type: 'now-month',
          getTime: () => [moment(new Date()).startOf('M'), moment()],
        },
        {
          title: '上月',
          type: 'last-month',
          getTime: () => [moment().add(-1, 'M').startOf('M'), moment().add(-1, 'M').endOf('M')],
        },
        {
          title: '今年',
          type: 'now-year',
          getTime: () => [moment(new Date()).startOf('y'), moment()],
        },
        {
          title: '去年',
          type: 'last-year',
          getTime: () => [moment().add(-1, 'y').startOf('y'), moment().add(-1, 'y').endOf('y')],
        },
      ],
    },
  ];
};

/**
 * 匹配快速选择的标题
 */
export const matchQuickChosenTitle = (type: TRangePickerQuickChosenType) => {
  let title = '';
  const list = getQuickChosenOptions();

  list.map((parentItem) => {
    parentItem.data.map((item) => {
      if (item.type === type) {
        title = `${item.title}`;
      }

      return item;
    });

    return parentItem;
  });

  return title;
};

/**
 * 获取快速选择项的时间
 */
export const getQuickChosenDates = (type: string | undefined) => {
  let dates: TDateType[] = [];

  if (!type || type === 'absolute') return dates;

  const list = getQuickChosenOptions();
  list.map((parentItem) => {
    parentItem.data.map((item) => {
      if (item.type === type) {
        dates = item?.getTime();
      }

      return item;
    });

    return parentItem;
  });

  return dates;
};

export const getDftValue = () => {
  const getDates = () => [moment().add(-7, 'day'), moment()];

  return { type: 'absolute', dates: getDates() };
};
