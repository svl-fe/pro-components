import classNames from 'classnames';
import { throttle } from 'lodash';
import React, { CSSProperties, FC, ReactNode, useEffect, useRef, useState } from 'react';

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
  const [current, setCurrent] = useState(data[0]?.href);
  const partNRef = useRef(0);
  const isClickRef = useRef(false); // 新增：用于判断是否是点击触发

  const containerCls = classNames('svl-hash-loca', className);
  const itemCls = classNames('svl-hash-loca-item', itemClassName);

  const updateHref = (href: string, index: number) => {
    isClickRef.current = true; // 标记为点击触发
    partNRef.current = index;
    setCurrent(href);
    const dom = document?.getElementById(href);
    if (dom) {
      dom.scrollIntoView({ behavior: 'smooth' });
    }
    // 300ms后重置标志位，确保滚动事件可以继续生效
    setTimeout(() => {
      isClickRef.current = false;
    }, 1000);
  };

  useEffect(() => {
    const handleScroll = throttle(() => {
      if (isClickRef.current) return; // 如果是点击触发，则不执行
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      data.forEach((item, index) => {
        const element = document.getElementById(item.href);
        if (element) {
          const elementTop = element.offsetTop;
          const elementBottom = elementTop + element.offsetHeight;

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            partNRef.current = index;
            setCurrent(item.href);
          }
        }
      });
    }, 100); // 节流时间100ms

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [data?.length]);

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
