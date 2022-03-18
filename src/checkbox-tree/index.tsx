import React, { useCallback, useMemo } from 'react';
import type { FC } from 'react';
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/lib/checkbox';
import type { CheckboxValueType } from 'antd/lib/checkbox/Group';
import { useControlledState } from '@svl-ad/hooks';
import './style/index.less';

interface ITreeDataItem {
  key: string;
  title: string;
}

interface ITreeData extends ITreeDataItem {
  children?: ITreeDataItem[];
}

interface ICheckboxTree {
  value?: Record<string, CheckboxValueType[]>;
  defaultValue?: Record<string, CheckboxValueType[]>;
  onChange?: (value: Record<string, CheckboxValueType[]>) => void;
  treeData: ITreeData[];
}

const CheckboxGroup = Checkbox.Group;

const CheckboxTree: FC<ICheckboxTree> = (props) => {
  const { treeData = [], onChange, defaultValue = {}, value } = props;

  const [checkedList, setCheckedList] = useControlledState<Record<string, CheckboxValueType[]>>(
    defaultValue,
    { value, onChange },
  );

  const getAllCheckStatus = useCallback(() => {
    let checked = true;

    treeData.forEach((treeItem) => {
      if (treeItem.children) {
        if (!checkedList[treeItem.key]) {
          return (checked = false);
        }

        if (treeItem.children.length !== checkedList[treeItem.key].length) {
          return (checked = false);
        }
      }
    });
    return checked;
  }, [treeData, checkedList]);
  const allImate = useMemo(() => {
    let checked = false;
    if (checkedList && Object.keys(checkedList).length) {
      treeData.forEach((treeItem) => {
        if (treeItem.children) {
          if (!checkedList[treeItem.key]) {
            return (checked = true);
          }

          if (treeItem.children.length !== checkedList[treeItem.key].length) {
            return (checked = true);
          }
        }
      });
    }
    return checked;
  }, [treeData, checkedList]);

  const getIndeterminate = useCallback(
    (item: ITreeData) => {
      if (!checkedList[item.key]) return false;
      if (!item.children) return true;
      return !!checkedList[item.key].length && checkedList[item.key].length < item.children.length;
    },
    [checkedList],
  );

  const onCheckAll = (e: CheckboxChangeEvent) => {
    if (e.target.checked) {
      const checkedData = treeData.reduce((prev, current) => {
        // @ts-ignore
        prev[current.key] = current.children?.map((item) => item.key) || [];

        return prev;
      }, {});

      setCheckedList(checkedData);
    } else {
      setCheckedList({});
    }
  };

  const onCheckItem = ({ checked, data }: { checked: boolean; data: ITreeData }) => {
    if (checked) {
      setCheckedList({
        ...checkedList,
        [`${data.key}`]: data.children?.map((item) => item.key) || [],
      });
    } else {
      const new_data = { ...checkedList };
      if (new_data.hasOwnProperty(`${data.key}`)) {
        delete new_data[`${data.key}`];
      }
      setCheckedList(new_data);
    }
  };

  const onCheckSubItem = ({ key, list }: { key: string; list: CheckboxValueType[] }) => {
    const new_data = { ...checkedList, [`${key}`]: list };
    if (list.length === 0) {
      delete new_data[key];
    }
    setCheckedList(new_data);
  };

  const renderChildren = (data: ITreeData[]) => {
    return (
      <div>
        {data.map((item) => (
          <Checkbox value={item.key} key={item.key} style={{ margin: '2px 8px' }}>
            {item.title}
          </Checkbox>
        ))}
      </div>
    );
  };

  return (
    <div className={'svl-checkbox-tree'}>
      {treeData.length > 1 && (
        <div className={'svl-checkbox-tree-all'}>
          <Checkbox indeterminate={allImate} onChange={onCheckAll} checked={getAllCheckStatus()}>
            全部
          </Checkbox>
        </div>
      )}

      {treeData.map((item) => {
        return (
          <div key={`tree-item-${item.key}`}>
            <div className={'svl-checkbox-tree-item'}>
              <Checkbox
                indeterminate={getIndeterminate(item)}
                checked={checkedList[item.key]?.length === item.children?.length}
                onChange={(e) => onCheckItem({ checked: e.target.checked, data: item })}
              >
                {item.title}
              </Checkbox>
            </div>
            {item.children ? (
              <div className={'svl-checkbox-tree-sub-item'}>
                <CheckboxGroup
                  value={checkedList[item.key] || []}
                  onChange={(values) => onCheckSubItem({ key: item.key, list: values })}
                >
                  {renderChildren(item.children)}
                </CheckboxGroup>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default CheckboxTree;
