import React, { Component, ReactNode, useMemo, useState } from 'react';
import type { FC } from 'react';
import type { RadioChangeEvent } from 'antd';
import { Radio } from 'antd';
import { LabeledValue } from 'antd/lib/select';
import { DeleteOutlined, GroupOutlined, PlusOutlined } from '@ant-design/icons';

import './style/index.less';

export type MapOptions = Record<string, LabeledValue[]>;

export type GroupValue = {
  op?: string;
  children?: GroupValue[];
  data?: Record<string, any>;
};

type GroupProps = {
  /** 是否为根组件，根组件不可删除, 默认值true */
  root?: boolean;
  /** 是否含有条件组 */
  hasGroup?: boolean;
  /** 组件深度，即条件组包含几层条件组，默认值2 */
  deepth?: number;
  /** 同级条件组个数，默认值3 */
  maxGroup?: number;
  /** 同级条件+条件组个数，默认值10 */
  maxChild?: number;
  /** 表示"且"关系的文案，默认值且 */
  andText?: string;
  /** 表示"或“关系的文案，默认值或 */
  orText?: string;
  /** 表示"且"关系的op，默认值and */
  andOp?: string;
  /** 表示"或“关系的op，默认值or */
  orOp?: string;
  /** 表示节点关系的op，默认值node */
  nodeOp?: string;
  /** 添加条件文字，默认值添加条件 */
  addText?: string;
  /** 添加条件组文字，默认值添加条件组 */
  groupText?: string;
  /** 删除图标，默认值<DeleteOutlined />  */
  deleteIcon?: ReactNode;
  /** 条件组图标，默认值<GroupOutlined />  */
  groupIcon?: ReactNode;
  /** 添加图标，默认值<PlusOutlined />  */
  addIcon?: ReactNode;
  /** 单个条件组件  */
  itemCon?: Component;
  /** 组件的value值 */
  value?: GroupValue;
  /** 组件的value值发生变化时回调 */
  onChange?: (params: GroupValue) => void;
  /** 组件删除时回调 */
  onDelete?: (params: any) => void;
};

export type IConditions<T> = GroupProps & T;

const Conditions = <T,>(props: IConditions<T>) => {
  const {
    value = {},
    deepth = 2,
    maxGroup = 3,
    onChange,
    onDelete,
    root = true,
    hasGroup,
    maxChild = 10,
    andText = '且',
    orText = '或',
    andOp = 'and',
    orOp = 'or',
    nodeOp = 'node',
    addText = '添加条件',
    groupText = '添加条件组',
    deleteIcon = <DeleteOutlined />,
    groupIcon = <GroupOutlined />,
    addIcon = <PlusOutlined />,
    itemCon,
  } = props;
  const { op, children = [] } = value;
  const [operationR, setOperation] = useState(andOp);

  const triggerChange = (changedValue: GroupValue) => {
    onChange?.({ ...value, ...changedValue });
  };

  const changeOperation = (e: RadioChangeEvent) => {
    const newOperation = e.target.value;
    if (!('op' in value)) {
      setOperation(newOperation);
    }
    triggerChange({ op: newOperation });
  };

  const changeGroup = (index: number, child: GroupValue) => {
    const childNew = [...children];
    childNew[index] = child;
    triggerChange({
      children: childNew,
    });
  };

  const deleteItem = (index: number) => {
    const childNew = [...children];
    childNew.splice(index, 1);
    triggerChange({
      children: childNew,
    });
  };

  const addItem = () => {
    const childNew = [...children];
    childNew.push({});
    triggerChange({
      children: childNew,
    });
  };

  const addGroup = () => {
    const childNew = [...children];
    childNew.push({
      op: andOp,
      children: [],
    });
    triggerChange({
      children: childNew,
    });
  };
  const overMax = useMemo(() => {
    let max = 0;
    children.forEach((each) => {
      if (each.op && each.op !== nodeOp) {
        max++;
      }
    });
    return max >= maxGroup;
  }, [children.length, maxGroup]);
  const overMaxChild = useMemo(() => children.length >= maxChild, [children.length, maxChild]);
  const groupFlag = overMaxChild || overMax;

  return (
    <div className={`svl-conditions ${!root ? 'not-root' : ''}`}>
      <div className="svl-conditions-operation">
        <Radio.Group size="small" value={op || operationR} onChange={changeOperation}>
          <Radio.Button value={andOp}>{andText}</Radio.Button>
          <Radio.Button value={orOp}>{orText}</Radio.Button>
        </Radio.Group>
        {!root && (
          <span className="icon" onClick={onDelete}>
            {deleteIcon}
          </span>
        )}
      </div>
      <div className="svl-conditions-list">
        {children.map((item, index) => {
          // @ts-ignore
          // eslint-disable-next-line @typescript-eslint/no-shadow
          const { op, children, data = {} } = item;
          const key = `index${index}`;
          let Child: any = itemCon;
          let valueR: GroupValue = {
            op: nodeOp,
            data,
          };
          if (children) {
            Child = Conditions;
            valueR = {
              children,
              op,
            };
          }
          return (
            <div key={key} className="svl-conditions-item">
              <Child
                {...props}
                deepth={deepth - 1}
                maxGroup={maxGroup}
                root={false}
                hasGroup={deepth > 2 ? hasGroup : false}
                value={valueR}
                onChange={changeGroup.bind(null, index)}
                onDelete={deleteItem.bind(null, index)}
              />
            </div>
          );
        })}
      </div>

      <div className="svl-conditions-add-part">
        <div
          className={`svl-conditions-add-con ${overMaxChild ? 'disable' : ''}`}
          onClick={overMaxChild ? undefined : addItem}
        >
          <span className="plus">{addIcon}</span> {addText}
        </div>
        {hasGroup && (
          <div
            className={`svl-conditions-add-group ${groupFlag ? 'disable' : ''}`}
            onClick={groupFlag ? undefined : addGroup}
          >
            {/* <Icon className={style.icon} type="icon-tianjiazu" /> */}
            <span className="icon">{groupIcon}</span>
            {groupText}
          </div>
        )}
      </div>
    </div>
  );
};

export default Conditions;
