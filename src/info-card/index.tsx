import React, { FC } from 'react';
import classNames from 'classnames';

import './style/index.less';

export interface InfoCardProps {
  /** 卡片模块标题 */
  cardTitle: string | React.ReactNode;
  /** 是否展示高亮图标 */
  showHighLightIcon?: boolean;
  /** 容器类名 */
  className?: string;
  /** 容器样式 */
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

/**
 * 信息展示卡片
 *
 * title: 标题内容
 */
const InfoCard: FC<InfoCardProps> = (props) => {
  const { cardTitle, showHighLightIcon, className, style, children } = props;

  const containerCls = classNames('svl-info-card', className);
  const headCls = classNames({
    'svl-info-card-head': true,
    'svl-info-icon': showHighLightIcon,
  });

  return (
    <div className={`${containerCls}`} style={style}>
      {cardTitle ? <div className={headCls}>{cardTitle}</div> : null}
      <div>{children}</div>
    </div>
  );
};

InfoCard.defaultProps = {
  showHighLightIcon: true,
};

export default InfoCard;
