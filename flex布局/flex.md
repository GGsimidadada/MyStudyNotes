### Flex布局

弹性布局，任何一个容易都可以指定为Flex布局

```css
div {
  /*webkit浏览器需要加前缀*/
  -webkit-flex: flex;
  display: flex;
}
span {
  display: inline-flex;
}

```

设为Flex布局以后，子元素的`float`、`position`、`vertical-align`属性将失效。

### 基本概念

Flex容器的所有子元素都为Flex项目。

容器默认存在两根轴，水平的主轴和垂直的交叉轴。

### 容器的属性

可以设置6个属性：

+ flex-direction：主轴方向。
+ flex-wrap： 当一行的项目空间不够时，项目如何换行。
+ flex-flow：是flex-direction和flex-wrap的简写形式。
+ justify-content：项目在主轴上的对齐方式。
+ align-items：项目在交叉轴上的对齐方式。
+ align-content：多根轴线的对齐方式。

####1. flex-direction属性

设置主轴方向：

```css
div {
  /*主轴方向：水平向右 | 水平向左 | 垂直向下 | 垂直向上*/
  flex-direction: row | row-reverse | column | column-reverse;
}
```

#### 2. flex-wrap属性

设置当一行的项目空间不够时，项目如何换行：

```css
div {
  /*换行规则： 不换行 | 向下换行 | 向上换行*/
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

#### 3. flex-flow属性

是flex-direction和flex-wrap的简写形式。默认值为`row nowrap`：

```css
div {
  flex-flow: <flex-direction> || <flex-wrap>;
}
```

#### 4. justify-content属性

设置项目在主轴上的对齐方式：

```css
div {
  /*主轴对齐方式： 起点对齐 | 终点对齐 | 居中对齐 | 两端对齐 | 分布对齐*/
  justify-content: flex-start | flex-end | center | space-between | space-around;
}
```

#### 5. align-items属性

设置项目在交叉轴上如何对齐：

```css
div {
  /*交叉轴对齐方式： 起点对齐 | 终点对齐 | 中线对齐 | 基线对齐 | 自适应（如果容器未设置高度或为auto，则继承容器高度）*/
  align-items: flex-start | flex-end | center | baseline | stretch;
}
```

#### 6. align-content属性

设置多根轴线的对齐方式。如果只有一根轴线，则不起作用：

```css
div {
  /*轴线对齐方式： 起点对齐 | 终点对齐 | 居中对齐 | 两端对齐 | 分布对齐 | 轴线占满整个交叉轴（默认值）*/
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```

### 项目属性

以下6个属性设置在项目上：

+ order：项目的排列顺序。
+ flex-grow：定义项目的放大比例。
+ flex-shrink：定义了项目的缩小比例。
+ flex-basis：
+ flex
+ align-self

#### 1. order属性

定义项目的排列顺序。数值越小，排列越靠前。默认为0。

```css
div {
  order: <integer>;
}
```

#### 2. flex-grow属性

定义项目的放大比例，默认为0.即如果存在剩余空间，也不放大。

```css
div {
  flex-grow: <number>;
}
```

#### 3. flex-shrink属性

定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。负值无效。

```css
div {
  flex-shrink: <number>;
}
```

如果值为0，则该项目不会缩小。

#### 4. flex-basis属性

定义了在分配多余空间之前，项目占据的主轴空间。浏览器根据这个属性，来计算主轴是否有多余空间。默认值是auto，即项目本来的大小。

```css
div {
  flex-basis: <length> | auto;
}
```

#### 5. flex属性

是flex-grow, flex-shrink, flex-basis的简写，默认值为0 1 auto。后两个属性可选。

```
div {
  flex: none | [<'flex-grow'> <'flex-shrink'> ]
}
```















