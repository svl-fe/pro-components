import React, { useState } from 'react';
import type { FC } from 'react';
import { Input } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';
import './index.less';

interface InputIconProps {
  title?: string;
  suffixIcon?: React.ReactNode;
  showQuick: (value: boolean) => void;
}

const InputIcon: FC<InputIconProps> = (props) => {
  const { title, suffixIcon, showQuick } = props;

  const [focus, setFocus] = useState(false);

  return (
    <div
      className={`svl-pro-rpicker-input-icon ${focus ? 'svl-pro-rpicker-input-icon-focused' : ''}`}
      onFocus={() => setFocus(true)}
      onMouseOut={() => setFocus(false)}
    >
      <Input onFocus={() => showQuick(true)} value={title} placeholder="请选择" />
      {suffixIcon ? suffixIcon : <CalendarOutlined className="svl-pro-rpicker-date-icon" />}
    </div>
  );
};

export default InputIcon;
