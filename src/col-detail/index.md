---
nav:
  title: 组件
  path: /components
group:
  path: /components
  title: 数据展示
  order: 3
---

## ColDetail 信息详情

默认示例:

```tsx
import React, { useState, useEffect } from 'react';
import { Row } from 'antd';
import { ColDetail } from '@svl-ad/pro-components';

export default () => {
  const title = '展示信息';
  const test = `1、⽆半点闲愁去处，问三⽣醉梦何如。——乔吉《折桂令·七⼣赠歌者》  2、孰知不向边庭苦，纵死犹闻侠⾻⾹。——王维《少年⾏四⾸》  3、柳⾊披衫⾦缕凤，纤⼿轻拈红⾖弄，翠蛾双敛正含情。——和凝《天仙⼦·柳⾊披衫⾦缕凤》  4、离歌且莫翻新阕。⼀曲能教肠⼨结——欧阳修《⽟楼春·尊前拟把归期说》  5、云中谁寄锦书来，雁字回时，⽉满西楼。——李清照《⼀剪梅·红藕⾹残⽟簟秋》  6、⼭有⽊兮⽊有枝，⼼悦君兮君不知。  7、相忘谁先忘，倾国是故国。泠泠不肯弹，蹁跹影惊鸿。  8、昔有朝歌夜弦之⾼楼，上有倾城倾国之舞袖。  9、待浮花浪蕊俱尽，伴君幽独。  10、⼀朝春去红颜⽼，花落⼈亡两不知。  11、在天愿作⽐翼鸟，在地愿为连理枝。  12、⼼似双丝⽹，中有千千结。  13、⾝⽆彩凤双飞翼，⼼有灵犀⼀点通。14、东边⽇出西边⾬，道是⽆晴却有晴。15、⾦风⽟露⼀相逢，便胜却⼈间⽆数。16、⼗⼆楼中尽晓妆，望仙楼上望君王。——薛逢《宫词》17、还君明珠双泪垂，恨不相逢未嫁时。——张籍《节妇吟》`;
  const info = {
    part1: title,
    test: test,
  };
  const data = [
    {
      key: 'test',
      value: 'part1',
    },
    {
      span: 4,
      key: 'test2',
      value: (info: any) => {
        return {
          tooltip: test,
          show: info.test,
        };
      },
    },
    {
      key: 'test',
      value: 'part1',
    },
  ];

  return (
    <Row gutter={16}>
      <ColDetail colData={data} info={info} />
    </Row>
  );
};
```

##### label 在下 value 在上

示例：

```tsx
import React, { useState, useEffect } from 'react';
import { Row } from 'antd';
import { ColDetail } from '@svl-ad/pro-components';
import { AntDesignOutlined } from '@ant-design/icons';

export default () => {
  const title = '展示信息';
  const test = `1、⽆半点闲愁去处，问三⽣醉梦何如。——乔吉《折桂令·七⼣赠歌者》  2、孰知不向边庭苦，纵死犹闻侠⾻⾹。——王维《少年⾏四⾸》  3、柳⾊披衫⾦缕凤，纤⼿轻拈红⾖弄，翠蛾双敛正含情。——和凝《天仙⼦·柳⾊披衫⾦缕凤》  4、离歌且莫翻新阕。⼀曲能教肠⼨结——欧阳修《⽟楼春·尊前拟把归期说》  5、云中谁寄锦书来，雁字回时，⽉满西楼。——李清照《⼀剪梅·红藕⾹残⽟簟秋》  6、⼭有⽊兮⽊有枝，⼼悦君兮君不知。  7、相忘谁先忘，倾国是故国。泠泠不肯弹，蹁跹影惊鸿。  8、昔有朝歌夜弦之⾼楼，上有倾城倾国之舞袖。  9、待浮花浪蕊俱尽，伴君幽独。  10、⼀朝春去红颜⽼，花落⼈亡两不知。  11、在天愿作⽐翼鸟，在地愿为连理枝。  12、⼼似双丝⽹，中有千千结。  13、⾝⽆彩凤双飞翼，⼼有灵犀⼀点通。14、东边⽇出西边⾬，道是⽆晴却有晴。15、⾦风⽟露⼀相逢，便胜却⼈间⽆数。16、⼗⼆楼中尽晓妆，望仙楼上望君王。——薛逢《宫词》17、还君明珠双泪垂，恨不相逢未嫁时。——张籍《节妇吟》`;
  const info = {
    part1: title,
    test: test,
  };
  const data = [
    {
      key: () => (
        <div>
          <AntDesignOutlined /> test
        </div>
      ),
      value: 'part1',
    },
    {
      span: 4,
      key: 'test2',
      value: (info: any) => {
        return {
          tooltip: test,
          show: info.test,
        };
      },
    },
    {
      key: 'test',
      value: 'part1',
    },
  ];

  return (
    <Row gutter={16}>
      <ColDetail colData={data} info={info} reverse />
    </Row>
  );
};
```

# API

| 参数 | 说明 | 类型 | 默认值 | 是否必传 | 版本 |
| --- | --- | --- | --- | --- | --- |
| colData | 展示信息数组 | Item[] |  | 是 |  |
| info | 展示信息值，若 key、value 为方法时，作为入参传入方法 | Record<string, any> |  | 否 |  |
| style | Col 样式 | CSSProperties |  | 否 |  |
| className | 样式名称 | string |  | 否 |  |
| reverse | label value 反转展示 | boolean | false | 否 | 0.0.21 |

### Item 继承[ColProps](https://ant.design/components/grid-cn/#Col)

| 参数 | 说明 | 类型 | 默认值 | 是否必传 | 版本 |
| --- | --- | --- | --- | --- | --- |
| key | 展示文字 | string \| ((params?: any) => string \| React.ReactNode) |  | 否 |  |
| value | 展示值，若为 string 时，展示 info 对应字段 | string \| ((params?: any) => { tooltip: string \| React.ReactNode; show: string \| React.ReactNode }) |  | 否 |  |
| access | 判断是否展示该字段，不传时默认展示 | (params: any) => boolean |  | 否 |  |
| label | 若 key 为方法时，传入 label 作为 React.key | string |  | 否 |  |
