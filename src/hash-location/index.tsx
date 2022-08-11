import React, { CSSProperties, FC, ReactNode, useRef, useState } from 'react';
import classNames from 'classnames';

import './style/index.less';

export interface HashLocationProps {
  /** hash数据 */
  data: { title: string | ReactNode; href: string }[];
  /** 容器类名 */
  className?: string;
  /** 容器样式 */
  style?: React.CSSProperties;
  /** item间距，默认值24 */
  space?: number;
  /** item高度，默认值24 */
  itemHeight?: number;
  /** item类名 */
  itemClassName?: string;
  /** item样式 */
  itemStyle?: CSSProperties;
}

/**
 * hash定位
 *
 */
const HashLocation: FC<HashLocationProps> = (props) => {
  const {
    data = [],
    space = 24,
    itemHeight = 24,
    className,
    style,
    itemClassName,
    itemStyle,
  } = props;
  const [current, setCurrent] = useState(data[0]?.title);
  const partNRef = useRef(0);

  const containerCls = classNames('svl-hash-loca', className);
  const itemCls = classNames('svl-hash-loca-item', itemClassName);

  const updateHref = (href: string, index: number) => {
    partNRef.current = index;
    setCurrent(href);
  };

  return (
    <ul className={containerCls} style={style}>
      <div
        className="svl-hash-loca-highlight"
        style={{ height: itemHeight, top: (itemHeight + space) * partNRef.current }}
      />
      {data.map((each, index) => {
        const { title, href } = each;
        const flag = index === data.length - 1;
        return (
          <li
            key={href}
            className={itemCls}
            style={{
              height: itemHeight,
              lineHeight: itemHeight + 'px',
              marginBottom: flag ? 0 : space,
              ...itemStyle,
            }}
          >
            <a
              onClick={updateHref.bind(null, href, index)}
              className={`${href === current ? 'active' : ''}`}
              href={`#${href}`}
            >
              {title}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default HashLocation;
