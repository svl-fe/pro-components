import type { ColProps } from 'antd';
import { Col, Typography } from 'antd';
import type { CSSProperties, FC } from 'react';
import React from 'react';
import './style/index.less';

const { Text } = Typography;

export const getNumber = (arr: string[]) => {
  return arr.length > 1 ? ` x${arr.length}` : '';
};

interface Item extends ColProps {
  /** 展示文字 */
  key: string | ((params?: any) => string | React.ReactNode);
  /** 展示值，若为string时，展示info对应字段 */
  value:
    | string
    | ((params?: any) => { tooltip?: string | React.ReactNode; show?: string | React.ReactNode });
  /** key数量字段 */
  keyNumber?: string;
  /** 判断是否展示该字段，不传时默认展示 */
  access?: (params: any) => boolean;
  /** 若key为方法时，传入label作为 React.key */
  label?: string;
}

export interface IColDetailProps {
  /** 展示信息数组 */
  colData: Item[];
  /** 展示信息值，若key、value为方法时，作为入参传入方法 */
  info?: Record<string, any>;
  /** Col样式 */
  style?: CSSProperties;
  /** key样式 */
  keyStyle?: CSSProperties;
  /** value样式 */
  valueStyle?: CSSProperties;
  /** 样式名称 */
  className?: string;
}

const ColDetail: FC<IColDetailProps> = (props) => {
  const { colData, info, style, keyStyle, valueStyle, className = '' } = props;

  return (
    <>
      {colData.map((each) => {
        const { span, key, value, label, keyNumber, access, ...rest } = each;
        if (access && !access(info)) {
          return null;
        }
        const flag = typeof value === 'string';
        const flagKey = typeof key === 'string';
        const result = flag
          ? {
              tooltip: info?.[value],
              show: info?.[value],
            }
          : value(info);
        const resultKey = flagKey ? key : key(info);
        let keyAfter = '';
        if (keyNumber) {
          const arrR = info?.[keyNumber];
          if (arrR instanceof Array) {
            keyAfter = getNumber(arrR);
          }
        }

        return (
          <Col
            key={label || (key as string)}
            span={span}
            className={`svl-col-detail-item ${className}`}
            style={style}
            {...rest}
          >
            <div style={keyStyle} className="svl-col-detail-info-label">
              {resultKey}
              {keyAfter}
            </div>
            <Text
              style={valueStyle}
              className="svl-col-detail-info-value"
              ellipsis={{ tooltip: result?.tooltip }}
            >
              {result?.show || '-'}
            </Text>
          </Col>
        );
      })}
    </>
  );
};

export default ColDetail;
