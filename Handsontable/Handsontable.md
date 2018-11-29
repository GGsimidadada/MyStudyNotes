### 兼容性

1.13版本兼容IE10+，Edge，火狐34+，谷歌41+，欧朋26+，Safari9+，部分兼容IE9

### 文件

handsontabl.full.js和handsontable.full.css中编译了所有相关的依赖。如果需要自己定制依赖项，可以引入handsontable.js和handsontable.css，然后手动引入其他依赖包。

### 插件

插件包含一个或者多个新特性。handsontable支持两种形式的插件：内部插件和外部插件。内部插件需要被合并在handsontable的构建中，而外部插件需要放在一个单独的文件中。

从1.11.0-beta版本开始，handsontable开始支持es6。

### 使用方法

1. 引入文件，css，js，JQ
2. 创建：添加一个空div作为表格容器
3. 初始化：创建Handsontable实例，在构建函数中传入两个参数：容器ID和配置参数。

### 配置参数：

```javascript
var table = new Handsontable("containerId", {
  data: data,  //传入的数据
  dataSchema: {id: null, },  //当data为空时，可以在这指定列表数据结构
  readOnly: false,  //设置表格是否只读
  rowHeaders: false,  //是否显示行头，默认为false
  colHeaders: false,  //是否显示列头，默认为false，也可以传入数组，自定义列表头的信息。
  minSpareRows: 1,  //列表末尾有几个空白行
  columns: [  //当数据源是数组时，可以这样指定哪些列会被显示
    {data: 0},
    ...
  ],
    //当数据源是对象时，可以指定每一列要显示的数据是什么
  columns: function(column) {  
   	  //参数column表示第几列，是数值类型
      var columnMeta = {};
      switch (column) {
      //指定第几列显示哪条数据，保存在对象的data属性中
      case 0:
      columnMeta.data = "id";
      break;
      case 1:
      columnMeta.data = "name";
      break;
      ...
      default:
      columnMeta.data = null;
      }
      //将处理后的对象return出去
      return columnMeta;
    },
    //当数据源是对象时，也可以使用下列映射方法：
    columns: [
      {data: "id"},
      {data: "name"},
      {data: "address"},
    ...
  ],
  afterChange: function (change, source) {
  //当单元格发生改变时，执行函数。
  //参数change是一个数组，一共四项。第一项：表示第几行。第二项：变更的属性名称。第三项：原始值。第四项：更改值。
  //参数source是一个字符串，表示更改操作的类型。当初始化值时为"loadData"，当用户更改时为"edit"
  },
  cells: function (row, col, prop) {
    //单元格函数，表示单元格的一些信息。
    //参数row：表示单元格所在行的值
    //参数col：表示单元格所在列的值
    //参数prop：表示单元格数据对应的属性
  },
  cell: [
    //设置单元格的属性，下面表示第1行第一列的单元格为只读
      {row: 0, col: 0, readOnly: true}
  ]
})

table.loadData(data);  //读取指定的数据，比如Ajax发送的数据
table.getData();  //获得当前表格中的所有数据（包括空白数据）
Handsontable.dom.addEvent(dom, event, function() {} );  //为元素添加监听事件
```



### 数据绑定

在网页中对数据操作会改变原始数据的值。类似于双向数据绑定。

如果想不改变原始数据，可以创建一个原始数据的副本，将副本映射到页面结构中。可以使用JSON.parse(JSON.stringify())方法或者其他深度克隆的函数。

### 数据源

数组数据源：可以使用二维数组

对象数据源：如果没有定义dataSchema属性，模板会以第一条数据为准，并且后面的数据对象会以第一条数据的规则

提取数据，不管顺序是否一致。如果没有相同的属性，则数值返回空。

### 读取和保存

当数据发生更改时，会触发afterChange回调函数。

如果需要从后台读取数据，可以发送Ajax请求获得数据，然后通过.loadData()方法渲染至表格中。

如果需要将页面数据保存到后台，可以通过.getData()方法获得页面中所有的数据（记得用JSON.stringify()方法转换成字符串），再通过Ajax发送到后台。

### 本地保存数据

Handsontable提供了可以将数据保存在本地的方法。如果想使用本地保存，需要在初始化设置中将persistentState设置为true，或者使用updateSettings方法。

当persistentState被启用时 ，它提供了3个钩子：

- persistentStateSave(key: string, value: mixed)：将key和value以键值对的形式保存在浏览器本地存储中。
- persistentStateLoad(key: string, valuePlaceholder: object)：从浏览器本地存储中读取key的值，该值会被保存在valuePlaceholder.value属性中。如果没有对应的Key值，则返回undefined。
- persistentStateReset(key: string)：清除浏览器本地存储中指定key中的值。如果不指定key，则该table下的所有缓存都将被清除。

persistentState和LocalStorage API的区别：当页面上有多个Handsontable实例，persistentState会确保不同的实例存储数据的分离。实例之间的缓存数据不能共享，因此不同实例间可以用相同的key值来保存数据，而且不会被覆盖。

为了能够实现数据分离，需要确保每个Handsontable实例有不同的id。

### 设置选项

在Handsontable构造函数中，提供了多种配置选项的方法：

- 在构造函数的first-level中直接配置：

```javascript
new Handsontable(id, {
  option: 'value'
})
```

- 在second-level中使用对象形式配置：

```javascript
new Handsontable(id, {
  columns: [
    {option: 'value'}
  ]
})
```

- 在second-lever中使用函数方法配置：

```javascript
new Handsontable(id, {
  cells: function (row, col, prop) {
    ...
  }
})
```



### 修改样式

Handsontable有默认的css样式文件，但是也可以自定义需要的样式。注意，Handsontable需要计算元素的高度和宽度，以控制滚动条，所以过于复杂的样式规则可能会影响性能。

下面是一些参考的类名和ID，可以通过这些类名或ID来覆盖默认样式：

```css
/*表格*/
.ht_master tr td {}

/*表头*/
/*所有表头*/
.handsontable th {}
/*行表头*/
.ht_clone_left th {}
/*列表头*/
.ht_clone_top th {}

/*corner  表格的左上角（当设置行表头和列表头时才有效）*/
.ht_clone_top_corner th {}

/*表行*/
.ht_master tr td {}
/*奇数行*/
.ht_master tr:nth-of-type(odd) td {}
/*偶数行*/
.ht_master tr:nth-of-type(even) td {}
/*被选中的行*/
/*注意，这里的active是自己定义的类名，在配置中使用如下定义方式：currentRowClassName: 'active'*/
.ht_master tr > td.active {}

/*表列*/
/*奇数列*/
.ht_master tr > td:nth-of-type(odd) {}
/*偶数列*/
.ht_master tr > td:nth-of-type(even) {}
/*被选中的列*/
/*注意，这里的active是自己定义的类名，在配置中使用如下定义方式：currentColClassName: 'active'*/
.ht_master tr > td.active {}

/*单元格*/
/*被选中的单元格。固定写法。*/
.ht_master tr > td.current {}
/*处于编译状态的单元格*/
.handsontableInput {}
/*处于被框选状态的单元格。固定写法。*/
.handsontable td.area {}

```

### 单元格类型

#####注册

如果想定制一个特定的单元格类型，可以引用特定的类型定义。而Handsontable定义了9个默认的类型名：

- autocomplete: Haandsontable.cellTypes.autocomplete
- checkbox: Handsontable.cellTypes.checkbox
- date: Handsontable.cellTypes.date
- dropdown: Handsontable.cellTypes.dropdown
- handsontable: Handsontable.cellTypes.handsontable
- numeric: Handsontable.cellTypes.numeric
- password: Handsontable.cellTypes.password
- text: Handsontable.cellTypes.text
- time: Handsontable.cellTypes.time

也可以自定义单元格类型，需要使用Handsontable.cellTypes.registerCellType()方法。它需要两个参数：

- cellTypeName: 单元格类型名称。表示形式为字符串。
- type: 描述单元格类型的表现形式。表示形式为对象，提供三个可设置的key：
  - editor: 编辑器
  - renderer：渲染器
  - validator：验证器

例如：需要注册一个名为copyable-password的单元格类型：

```javascript
Handsontable.cellTypes.registerCellType('password', {
  editor: copyablePasswordEditor,
  renderer: copyablePasswordRenderer
});
```

但是注意，在注册单元格类型的时候，名称不要和现有的名称相重复，否则会将之前的方法覆盖。

##### 使用

一个定义好的单元格类型对象应该是如下这样：

```javascript
(function(Handsontable) {
  var MyEditor = Handsontable.editors.TextEditor.prototype.extend();
  
  function customRenderer (hotInstance, td, row, column, prop, value, cellProperties) {
    // ...render logic  渲染逻辑
  }
  
  function customValidator (query, callback) {
    // ...validator logic  验证逻辑
    callback();  // 是否通过验证，执行不同的回调
  }
  
  // Register an alias  注册单元格类型
  Handsontable.cellTypes.registerCellType('my.custom', {
    editor: MyEditor,
    renderer: customRenderer, 
    validator: customValidator,
    //可以基于Handsontable的选项，给单元格类型提供附加设置
    className: 'my-cell',
    allowInvalid: true,
    //也可以自定义属性
  })
}(Handsontable))
```

定义好以后，就可以使用自定义的单元格类型了：

```javascript
var hot = new Handsontable(document.getElementById('container'), {
  data: someData,
  columns: [
    {
      type: 'my.custom'
    }
  ]
});
```

### 单元格编辑器

Handsontable将单元格的显示值的过程和改变值的过程分离开来。渲染器Renderers负责呈现data，编辑器Editors负责改变data。

Renderers只有一个简单的任务：获取单元格的实际值，并且返回表示它的HTML代码。而Editors负责处理用户输入（比如鼠标和键盘事件）、验证数据以及根据验证结果采取不同行为。但是将这些功能都放在一个函数中不是一个好主意，这也是为什么Editors有一个共同的editor class的原因。

##### Editor Manager

Editor Manager是一个负责处理Handsontable中所有编辑器的类。如果Handsontable.Core需要

