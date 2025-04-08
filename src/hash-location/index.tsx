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
  let lastScrollPosition = useRef(window.scrollY);
  const scrollDirectionRef = useRef<'up' | 'down' | null>(null);

  const containerCls = classNames('svl-hash-loca', className);
  const itemCls = classNames('svl-hash-loca-item', itemClassName);

  const updateHref = (href: string, index: number) => {
    isClickRef.current = true;
    partNRef.current = index;
    setCurrent(href);
    const dom = document?.getElementById(href);
    if (dom) {
      dom.scrollIntoView({ behavior: 'smooth' });
    }
    setTimeout(() => {
      isClickRef.current = false;
    }, 1000);
  };

  // 添加全局滚动监听来更新方向
  useEffect(() => {
    const handleScrollDirection = () => {
      const scrollPosition = window.scrollY;
      scrollDirectionRef.current = scrollPosition > lastScrollPosition.current ? 'down' : 'up';
      lastScrollPosition.current = scrollPosition;
    };

    window.addEventListener('scroll', handleScrollDirection);
    return () => window.removeEventListener('scroll', handleScrollDirection);
  }, []);

  useEffect(() => {
    const handleScroll = throttle(() => {
      if (isClickRef.current) return;

      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;

      // 处理滚动到顶部和底部的情况
      if (scrollPosition <= 0) {
        partNRef.current = 0;
        setCurrent(data[0]?.href);
        return;
      }

      const lastElement = document.getElementById(data[data.length - 1]?.href);
      if (lastElement && scrollPosition + viewportHeight >= document.body.scrollHeight - 10) {
        partNRef.current = data.length - 1;
        setCurrent(data[data.length - 1]?.href);
        return;
      }

      // 正常滚动处理
      let activeIndex = partNRef.current;
      data.forEach((item, index) => {
        const element = document.getElementById(item.href);
        if (element) {
          const elementTop = element.offsetTop;
          const elementBottom = elementTop + element.offsetHeight;

          if (
            scrollPosition + viewportHeight / 2 >= elementTop &&
            scrollPosition + viewportHeight / 2 < elementBottom
          ) {
            if (scrollDirectionRef.current === 'down' && index >= activeIndex) {
              activeIndex = index;
            } else if (scrollDirectionRef.current === 'up' && index <= activeIndex) {
              activeIndex = index;
            }
          }
        }
      });

      if (activeIndex !== partNRef.current) {
        partNRef.current = activeIndex;
        setCurrent(data[activeIndex]?.href);
      }
    }, 100);

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
