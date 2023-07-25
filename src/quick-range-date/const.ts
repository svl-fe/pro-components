import moment from 'moment';

export const getQuickChosenOptions = () => {
  return [
    {
      type: 'first',
      data: [
        {
          title: '过去15分钟',
          type: 'last-15m',
          onClick: () => [moment().add(-15, 'm'), moment()],
        },
        {
          title: '过去30分钟',
          type: 'last-30m',
          onClick: () => [moment().add(-30, 'm'), moment()],
        },
        {
          title: '过去1小时',
          type: 'last-1h',
          onClick: () => [moment().add(-1, 'h'), moment()],
        },
        {
          title: '过去24小时',
          type: 'last-24h',
          onClick: () => [moment().add(-24, 'h'), moment()],
        },
        {
          title: '过去48小时',
          type: 'last-48h',
          onClick: () => [moment().add(-48, 'h'), moment()],
        },
      ],
    },
    {
      type: 'second',
      data: [
        {
          title: '过去7天',
          type: 'last-7d',
          onClick: () => [moment().add(-7, 'day'), moment()],
        },
        {
          title: '过去30天',
          type: 'last-30d',
          onClick: () => [moment().add(-30, 'day'), moment()],
        },
        {
          title: '过去60天',
          type: 'last-60d',
          onClick: () => [moment().add(-60, 'day'), moment()],
        },
        {
          title: '过去90天',
          type: 'last-90d',
          onClick: () => [moment().add(-90, 'day'), moment()],
        },
      ],
    },
    {
      type: 'third',
      data: [
        {
          title: '今日',
          type: 'now-day',
          onClick: () => [moment(new Date()).startOf('day'), moment()],
        },
        {
          title: '本周',
          type: 'now-week',
          onClick: () => [moment(new Date()).startOf('w'), moment()],
        },
        {
          title: '本月',
          type: 'now-month',
          onClick: () => [moment(new Date()).startOf('M'), moment()],
        },
        {
          title: '上月',
          type: 'last-month',
          onClick: () => [moment().add(-1, 'M').startOf('M'), moment().add(-1, 'M').endOf('M')],
        },
        {
          title: '今年',
          type: 'now-year',
          onClick: () => [moment(new Date()).startOf('y'), moment()],
        },
        {
          title: '去年',
          type: 'last-year',
          onClick: () => [moment().add(-1, 'y').startOf('y'), moment().add(-1, 'y').endOf('y')],
        },
      ],
    },
  ];
};
