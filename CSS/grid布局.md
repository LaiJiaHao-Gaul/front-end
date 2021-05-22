# Grid布局

## 概述

Grid布局，译作网格布局。是一种浏览器内置的CSS布局方案，也是目前而言最强大的CSS布局方案。

它把网页划分成一个个网格，可以任意组合不同的网格，做出各种各样的布局。

Flex布局是轴线布局，只能指定项目针对轴线的位置，把Flex布局比作一维布局的话，那么Grid布局就是二维布局；Grid布局是将容器划分成“行”和“列”，产生单元格，然后指定“项目所在”的单元格。

## 基本概念

### 容器 和 项目

采用网格布局的区域，称为“容器” - container

容器内部采用网格定位的子元素，称为“项目” - item

项目只能是容器的顶层子元素，不包含项目的子元素。Grid布局只对项目生效。即：项目只能是容器的**直接子元素**。

### 行 和 列

行 - row

列 - column

### 单元格 - cell

### 网格线 - grid line

n行单元格有n+1根水平网格线，m列单元格有m根垂直网格线。

## 属性

Grid布局的属性分为两类：一类定义在容器上面，称为**容器属性**；一类定义在项目上面，称为**项目属性**。

### 容器属性

#### display 属性

``` CSS
.container{
    display: grid | inline-grid;
}
```

grid 指定一个容器采用网格布局，容器默认为块级元素；

inline-grid 同样指定一个容器采用网格布局，不过容器会被设成行内元素。

> 设为网格布局后，项目的float、display:inline-block，display:table-cell、vertical-align和column-*等设置都将失效

#### grid-template-columns、grid-template-rows 属性

grid-template-columns属性定义**列宽**，多少列就列出多少个值；

grid-template-row属性定义**行高**，多少行就列出多少个值。

> 除了使用绝对单位，也可以使用百分比。

可以用repeat()函数简化重复的值，或者重复某种模式。

``` CSS
.container{
    grid-template-columns:100px 100px 100px;
    grid-template-rows:100px 100px 100px;
    /* grid-template-columns:repeat(3,100px);
    grid-template-rows:repeat(3,100px); */
    /* grid-template-columns:33.33% 33.33% 33.33%;
    grid-template-rows:33.33% 33.33% 33.33%; */
}
```

#### auto-fill 关键字

可在repeat中使用

``` CSS
.container{
    grid-template-colums:repeat(auto-fill,100px);
    /* 每列宽度为100px，但会容纳尽可能多的单元格，（很多列可展示在同一行） */
}
```

#### fr 关键字

fraction的缩写

由于并非任何时候我们都用具体值描述高度宽度，而是用比例。

``` css
.container{
    grid-template-columns:1fr 2fr;
    /* 第二列是第一列宽度的2倍 */
}
/* 结合绝对长度单位使用 */
.container{
    grid-template-columns:150px 1fr 2fr;
}
```

#### minmax() 函数

minman函数 产生一个长度范围，表示长度就在这个范围之中。

接受两个参数，分别为最小值和最大值。

``` css
.container{
    grid-template-columns:1fr 1fr minmax(100px,1fr)
}

```

#### auto 关键字

auto关键字表示由浏览器自己决定长度

``` css
.container{
    grid-template-columns:100px auto 100px
}
```

#### 网格线的名称

grid-template-columns属性和grid-template-rows属性里面，可以使用方括号，指定每一根线的名字，方便以后的引用。

``` css
.container{
    grid-template-columns:[c1] 100px [c2] 100px [c3] 100px [c4];
    grid-template-rows:[r1] 100px [r2] 100px [r3] 100px [r4 row4];
    /* 同一根线可以有多个名字 如 [r4 row4] */
}
```

#### grid-row-gap、grid-column-gap、grid-gap 属性 / row-gap、column-gap、gap 属性

grid-row-gap/row-gap 属性设置行与行的间隔（行间距）

grid-column-gap/column-gap 属性设置列与列的间隔（列间距）

grid-gap / gap 是上面两种属性的简写形式。

> 语法：grid-gap:\<grid-row-gap> \<grid-column-gap>

如果grid-gap的第二个值被省略，浏览器会认为第二个值等于第一个值。

#### grid-template-areas 属性

网格布局允许指定区域，一个区域由单个或多个单元格组成，grid-template-area属性用于**定义区域**。

``` css
.container{
    grid-template-columns:100px 100px 100px;
    grid-template-rows:100px 100px 100px;
    /* 三行三列 */
    grid-template-areas:'a b c'
                        'e d f'
                        'g h i';
/* 
    grid-template-areas:'a a a'
                        'b b b'
                        'c c c';
                         */
    /* 多单元格合并写法 */
}
```

区域的命名会影响到网格线，每个区域的起始网格线会自动命名为**区域名-start**，终止网格线自动命名为**区域名-end**。

某些区域名不需要利用，则用点表示。

``` css
.container{
    grid-template-columns:100px 100px 100px;
    grid-template-rows:100px 100px 100px;
    /* 三行三列 */
    grid-template-areas:'a . c'
                        'e . f'
                        'g . i';
}
```

#### grid-auto-flow 属性

grid-auto-flow属性决定网格排序方向，默认值为row，表现为**先行后列**。

| 1        | 2   |  3  |
| --------   | -----:  | :----:  |
| 4     | 5 |   6     |
| 7        |   8   |   9   |

也可设置为column，变成**先列后行**。

| 1        | 4   |  7  |
| --------   | -----:  | :----:  |
| 2     | 5 |   8     |
| 3        |   6   |   9   |

还可以设置为row dense和column dense

``` css
.container{
    grid-auto-flow:row dense;
}
/* 
为row时，顺序会严格排列，即第二个格子的内容一定会在第一个格子的后面。
为row dense 时，会尽可能紧密填满，尽量不出现空格，即如果第一个格子空了，第二个格子会填进去。
*/
```

#### justify-items、align-items、place-items 属性

justify-items属性设置**单元格内容的水平位置**（左中右），值：start end center stretch(默认值)

``` css
.container{
    justify-items:start | end | center | stretch(默认值);
    align-items:start | end | center | stretch(默认值);
}
```

align-items属性 设置**单元格内容的垂直位置**，值同上

place-items属性是以上两种属性的简写

格式如下

``` css
.container{
    place-items:<align-items> <justify-item>
}
```

如果place-items属性省略第二个值，则浏览器认为与第一个值相等。

#### justify-content、align-content、place-content 属性

这三个属性描述得的是**网格在容器中的位置**

justify-content属性是整个内容区域在容器里面的水平位置（左中右）,可设置的属性值如下：

``` css
.container{
    justify-content: start | end | center | stretch | space-around | space-between | space-evenly
}
```

align-content属性是整个内容区域在容器里面的垂直位置（上中下），可设置的值如下：

``` css
.container{
    align-content: start | end | center | stretch | space-around | space-between | space-evenly
}
```

属性值描述：

``` text
start:对齐容器的起始边框
end:对齐容器的结束边框
center:容器内部居中
stretch:项目大小没有指定时，拉伸占据整个网格容器
space-around:每个项目的两侧间隔相等，所以，项目之间的间隔比项目与容器边框的间隔大一倍。
space-between:项目之间间隔相等，当项目与容器边框之间没有间隔。（实用）
space-evenly:项目与项目之间间隔相等，项目与容器边框之间也是同样长度的间隔。（实用）
```

place-content属性（以上两种属性的简写）

格式如下

``` css
.container{
    place-content:<align-content> <justify-content>
}
```

place-content省略第二个值时，默认第二个值等于第一个值。

#### grid-auto-columns、grid-auto-rows 属性

指定浏览器生成多远单元格时的列宽与行高。如果不指定这两个属性，浏览器完全根据单元格内容的大小，决定新增网格的列宽和行高。

#### grid-template、grid 属性

grid-template属性是grid-template-columns、grid-template-rows和grid-template-areas这三个属性的合并简写形式。

grid属性是grid-template-rows、grid-template-columns、grid-template-areas、 grid-auto-rows、grid-auto-columns、grid-auto-flow这六个属性的合并简写形式。

从易读易写的角度考虑，还是建议不要合并属性，所以这里就不详细介绍这两个属性了。

### 项目属性

下面的属性都是定义在项目上面的

#### grid-column-start、grid-column-end、grid-row-start、grid-row-end、grid-column、grid-row 属性

grid-column-start属性定义左边框所在的网格线

grid-column-end属性定义右边框所在的网格线

``` css
.item-one{
    grid-column-start:2;
    grid-column-end:4;
}
```

> 上面的代码指定1号项目的左边框是第二根垂直网格线，右边框是第四根垂直网格线。

grid-row-start属性定义上边框所在的网格线

grid-row-end属性定义下边框所在的网格线

``` css
.item-one{
    grid-row-start:2;
    grid-row-end:4;
}
```

> 上面的代码指定1号项目的左边框是第二根水平网格线，右边框是第四根水平网格线。

这四个属性的值，除了指定为第几个网格线，还可以指定为网格线的名字。

``` css
.item-one{
    grid-column-start:header-start;
    grid-column-end:header-end;
}
```

这四个属性的值，还可以使用span关键字，表示“跨越”，也就是边框之间跨越多少个网格。

```css
.item-one{
    grid-column-start:span 2;
    /* 
    表示壹号项目的左边框与右边框之间跨越两个网格
     */
}
```

grid-column属性是grid-column-start和grid-column-end的合并简写形式

grid-row属性是grid-row-start和grid-row-end的合并简写形式

``` css
.item-one{
    grid-column: 1 / 3;
    grid-row:1 / 3;
}
/* 等同于 */
.item-one{
    grid-column-start: 1;
    grid-column-end:3;
    grid-row-start:1;
    grid-row-end:3;
}
```

这两个属性之中 也可以使用span关键字，表示跨越多少个网格。

``` css
.item-one{
    grid-column:1/span 2;
    grid-row:1/span 2;
}
```

斜杠以及斜杠后面的部分可以省略，默认跨越一个网格。

``` css
.item-one{
    grid-column:1;
    grid-row:1;
    /* 
    .item-one占据第一个网格
     */
}
```

#### grid-area 属性

grid-area 属性指定项目放在哪一个区域。该属性的使用前提是**容器**定义了grid-tempalte-area属性

``` css
.item-one{
    grid-area:c;
}
```

上面代码表示.item-one位于c区域。

grid-area 属性还可用作grid-row-start、grid-column-start、grid-row-end、grid-column-end的合并简写形式，直接指定项目的位置。

``` css
.item-one{
    grid-area:<row-start> / <column-start> / <row-end> / <column-end>;
}
```

如

``` css
.item-one{
    grid-area:1 / 1 / 3 / 3;
}

```

#### justify-self、align-self、place-self

justify-self属性设置单元格内容的水平位置（左中右），跟justify-items属性的用法一致，但justify-self只作用于单个项目。

align-self属性设置单元格内容的垂直位置（上中下），跟align-items属性的用法一致，但align-self只作用于单个项目。

``` css
.item-one{
    justify-self:start | end | center | stretch(默认值);
    align-self:start | end | center | stretch(默认值);
}
```

属性值描述

``` text
start:对齐单元格的起始边缘
end:对齐单元格的结束边缘
center:单元格内部居中
stretch:拉伸，占满单元格的整个宽度（默认值）
```

place-self是align-self和justify-self的合并简写形式。

> place-self:\<align-self> \<justify-self>;

``` css
.item-one{
    place-self:center center;
}
```

## 参考链接

[CSS Grid 网格布局教程-阮一峰](http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)

## 面试相关

[display:grid效果](https://codesandbox.io/s/focused-meadow-jk4ps?file=/index.css)

[111](https://codesandbox.io/s/focused-meadow-jk4ps?file=/index.css)
