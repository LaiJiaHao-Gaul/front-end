# Grid布局

## 概述

Grid布局，译作网格布局。是一种浏览器内置的CSS布局方案，也是目前而言最强大的CSS布局方案。

它把网页划分成一个个网格，可以任意组合不同的网格，做出各种各样的布局。

Flex布局是轴线布局，只能指定项目针对轴线的位置，把Flex布局比作一维布局的话，那么Grid布局就是二维布局；Grid布局是将容器划分成“行”和“列”，产生单元格，然后指定“项目所在”的单元格。

## 基本概念

### 容器 和 项目

采用网格布局的区域，称为“容器” - container

容器内部采用网格定位的子元素，称为“项目” - item

项目只能是容器的顶层子元素，不包含项目的子元素。Grid布局只对项目生效。即：项目只能是容器的直接子元素。

### 行 和 列

行 - row

列 - column

### 单元格 - cell

### 网格线 - grid line

n行单元格有n+1根水平网格线，m列单元格有m根垂直网格线。

## 属性

Grid布局的属性分为两类：一类定义在容器上面，称为容器属性；一类定义在项目上面，称为项目属性。

### 容器属性

#### display 属性

#### grid-template-columns 属性

#### auto-fill 关键字

#### fr 关键字

#### minmax() 函数

#### auto 关键字

#### 网格线的名称

#### grid-row-gap 属性

#### grid-column-gap 属性

#### grid-gap 属性

#### grid-template-areas 属性

-

### 项目属性

## 面试相关

[display:grid效果](https://codesandbox.io/s/focused-meadow-jk4ps?file=/index.css)

[111](https://codesandbox.io/s/focused-meadow-jk4ps?file=/index.css)
