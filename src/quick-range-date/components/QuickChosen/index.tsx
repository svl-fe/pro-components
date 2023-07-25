import React, { useMemo } from 'react';
import { Moment } from 'moment';
import { getQuickChosenOptions } from '../../utils';
import type { TRangePickerQuickChosenType } from '../../data';

import './index.less';

interface IQuickChosenProps {
  onChange: (val: Moment[], type: TRangePickerQuickChosenType) => void;
}

const QuickChosen: React.FC<IQuickChosenProps> = (props) => {
  const { onChange } = props;

  const kQuickChosen = useMemo(() => getQuickChosenOptions(), []);

  return (
    <div className="svl-pro-rpicker-left-container">
      <div className="svl-pro-rpicker-quick-chosen-title">快速选择</div>
      <div className="svl-pro-rpicker-quick-chosen-container">
        {kQuickChosen?.map((item, idx) => {
          return (
            <div className="svl-pro-rpicker-quick-chosen-section" key={item?.type}>
              {item?.data?.map((config) => (
                <div
                  className="svl-pro-rpicker-quick-chosen-item"
                  key={config?.type}
                  onClick={() => {
                    const { getTime, type } = config;

                    if (getTime) {
                      onChange(getTime(), type as TRangePickerQuickChosenType);
                    }
                  }}
                >
                  {config?.title}
                </div>
              ))}

              {idx !== kQuickChosen?.length - 1 && (
                <div className="svl-pro-rpicker-quick-chosen-separation" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuickChosen;
