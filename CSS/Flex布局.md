# Flex布局

## 一、概述

### Flex布局是什么？

*Flexible Box*的缩写，意为“弹性布局”，用来为盒装模型提供最大的灵活性。

任何一个容器都可以指定为Flex布局：

``` css
.container{
    display:flex;
}
```

行内元素也可以使用Flex布局:

``` css
.container{
    display:inline-flex;
}
```

> 注意:设为Flex布局以后，子元素的float，clear和vertical-align属性都将失效。

### 功能作用及解决了什么问题

传统的布局方案依赖`display`+`position`+`float`属性，这对于特殊布局而言非常不方便，比如垂直居中的实现。

而Flex解决了布局的问题的同时，也对响应式提供了一定的支持。

## 二、基本概念

### 容器

采用Flex布局的元素，称为Flex容器，flex container 简称“容器”。

容器默认存在两根轴：水平的主轴`main axis`和垂直的交叉轴`cross axis`

**主轴的开始位置**叫做 `main start`，**结束位置**叫做`main end`。

**交叉轴的开始位置**叫做`cross start`，**结束位置**叫做 `cross end`。

项目默认沿主轴排列，单个项目占据的主轴空间叫做`main size`，占据的交叉轴空间叫做`cross size`

## 三、属性

分为 容器属性 和 项目属性

### 3.1 容器属性

定义在容器上的属性。

#### flex-direction 属性

flex-direction属性决定主轴的方向，即项目的排列方向。

``` css
.container{
    flex-direction: row | row-reverse | column | column-reverse ;
}
```

（1）`row（默认值）`: 主轴为平行方向，起点在左端。
（2）`row-reverse`: 主轴为平行方向，起点在右端。
（3）`column`：主轴为垂直方向，起点在上端。
（4）`column-reverse`:主轴为垂直方向，起点在下端。

![阮一峰的配图](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071005.png)

上图对应的值分别为：`column-reverse`、`column`、`row`、`row-reverse`

#### flex-wrap 属性

`flex-wrap`属性定义如何换行，默认值为`nowrap(不换行)`

``` css
.container{
    flex-wrap: nowrap | wrap | wrap-reverse ;
}
```

（1）`nowrap`(默认值):不换行，空间不足会缩小项目宽度。
（2）`wrap`:换行，空间不足时，项目`flex-basis`不会减少，会直接换行，第二行会出现在第一行下方。
（3）`wrap-reverse`:换行，空间不足时，项目`flex-basis`不会减少，会直接换行，第二行会出现在第一行上方。

#### flex-flow 属性

`flex-flow`属性是`flex-direction`和`flex-wrap`的简写形式，默认值为`row nowrap`

``` css
.container{
    flex-flow: <flex-direction> || <flex-wrap>
}
```

#### justify-content 属性

`justify-content`属性定义了项目在**主轴**上的对齐方式。

``` css
.container{
    justify-content: flex-start | flex-end | center | space-between | space-around;
}
```

（1）`flex-start`（默认值）: 左对齐
（2）`flex-end`:右对齐
（3）`center`:居中
（4）`space-between`:两端对齐，项目之间的间隔都相等。
（5）`space-around`:每个项目两侧的间隔相等。所以项目之间的间隔比项目与边框的间隔大一倍。

![阮一峰的配图](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071010.png)

#### align-items 属性

`align-items`属性定义项目在**交叉轴**上如何对齐。

``` css
.container {
    align-items:flex-start | flex-end | center | baseline | stretch(默认值);
}
```

（1）`flex-start`:**交叉轴**的**起点**对齐（一般来说就是头部对齐）。
（2）`flex-end`:交叉轴的**终点**对齐。
（3）`center`：交叉轴的**中点**对齐。
（4）`baseline`：项目的**第一行文字的基线**对齐。
（4）`stretch（默认值）`：如果项目的高度未设置或被设为auto，将占满整个容器的高度。

#### align-content 属性

align-content属性定义了**多根轴线的对齐方式**。如果项目只有一根轴线，该属性不起作用。

``` css
.container{
    align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```

（1）`flex-start`: 与交叉轴的起点对齐
（2）`flex-end`：与交叉轴的终点对齐
（3）`center`:与交叉轴的中点对齐
（4）`space-between`:与交叉轴的两端对齐，轴线之间的间隔都相等。
（5）`space-around`:每个根两侧的间隔都相等。所以轴线之间的间隔比轴线与边框的间隔大一倍。
（6）`stretch(默认值)`：轴线占满整个交叉轴

### 3.2 项目属性

定义在项目上的属性。

#### order 属性

`order`属性定义项目的`排列顺序`，数值越小，排列越靠前，默认按html顺序排序。

#### flex-grow 属性

`flex-grow`属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。

如果所有项目的`flex-grow`属性都为1，则他们将等分剩余空间（如果有的话）。

如果一个项目的`flex-grow`属性为2，其他项目`flex-grow`属性为1，则前者占据的剩余空间比其他项目多一倍。

#### flex-shrink 属性

`flex-shrink`属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小（容器属性为nowrap才会缩小）。

如果所有项目的`flex-shrink`属性都为1，当空间不足时，都将等比例缩小。

如果一个项目的`flex-shrink`的属性为0，其他项目的`flex-shrink`属性为1，若空间不足，前者不缩小。

#### flex-basis 属性

`flex-basis`属性定义了在分配多余空间之间，项目占据的主轴空间（`main-size`）。浏览器根据这个属性，计算主轴是否有多余空间。

它的默认值为`auto`，即项目的本来大小。

它可设为跟`width`或`height`属性一样的值，则项目将占据固定空间。

#### flex 属性

flex属性是`flex-grow`,`flex-shrink`和`flex-basis`的简写，默认值为 `0 1 auto`，后两个值可选。

``` css
.item{
    flex:<flex-grow> <flex-shrink> <flex-basis>;
}
```

值为`auto`时，意为 `1 1 auto`,表现为：当有剩余空间时，项目会沿主轴方向放大直至占满主轴空间；当空间不足时，会缩小项目（缩小项目的前提是容器flex-wrap属性为nowrap）。

值为`none`时，意为 `0 0 auto`;表现为：不会放大也不会缩小。

建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。

#### align-self 属性

`align-self`属性允许单个项目有与其他项目不一样的对齐方式，可覆盖`align-items`属性，默认值为`auto`，表示继承父元素的`align-items`属性，如果没有父元素，等同于`stretch`。

``` css
.item{
    align-self: auto(默认值) | flex-start | flex-end | center | baseline | stretch;
}
```

## 面试相关

居中实现代码

``` html
<div class="container">
    <div class="item"></div>
</div>
```

``` css
.container{
    height: 300px;
    width: 300px;
    background-color: #eee;

    /* 以下三行是实现居中核心代码 */
    display: flex;
    justify-content: center;
    align-items: center;
}
.item{
    height: 100px;
    width: 100px;
    background-color: rgb(95, 82, 82);
}
```

## 参考链接

[Flex 布局教程：语法篇-阮一峰](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html?20210523193425#comment-last)
