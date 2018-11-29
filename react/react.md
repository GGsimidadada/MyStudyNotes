ReactDOM.render()：用以将模板转为HTML语言，并插入指定的DOM节点。会覆盖已有的节点。

JSX语法：允许HTML与JS的混写。HTML能直接写在JS中并且不加任何引号。解析JSX语法时，遇到HTML格式标签就用HTML规则解析，遇到`{`开头的代码块就用JS规则解析。JSX允许在模板中插入JS变量，如果这个变量是一个数组，则会展开这个数组的所有成员。

React.createClass()：用于生成一个组件类。组件类可以当做HTML标签插入到DOM中。当模板插入时，会自动生成一个实例，所有的实例都必须有一个render方法，用于输出组件。注意，组件类的第一个字母必须大写，否则会报错。组件类只能包含一个顶层标签。

组件可以加入任意属性，组件的属性可以再组件类的`this.props`对象上获取。但是`class`属性要写成`className`，`for`属性要写成`htmlFor`，因为class和for是JS的保留字。不要给`this.props`重新赋值，否则会有一些不可预知的后果。 

`this.props.children`：表示组件的所有子节点。当组件没有子节点时，它是`undefined`，当只有一个子节点时，它是`Object`，当有多个子节点时，它是`Array。`

`React.Children`：react的一个工具方法，可以用来处理`this.props.children`。可以用`React.Children.map`来遍历子节点，而不用担心`this.props.children`的数据类型。

`propTypes`：组件类的`propTypes`属性，用来验证组件实例的属性是否符合要求。比如，`React.PropTypes.string.isRequired`可以检查属性值是否是字符串。

`getDefaultProps`：可以设置组件属性的默认值。

获取真实DOM节点：在元素中设置`ref`属性，然后在JS中通过`this.refs.[refName]`来获取这个真实的DOM节点。但是这个虚拟DOM节点必须已经插入文档，否则就会报错。

`this.state`：可以读取自定义的属性对象。

`getInitialState`：用于定义初始状态，是一个对象。这个对象可以通过`this.state`属性读取。

`this.setState`：修改自定对象中的属性值，修改后会自动调用`this.render`方法，再次渲染组件。

表单：用户在表单填入的内容，属于用户跟组件的互动，所以不能用`this.props`读取。例如用户在文本框中输入的值，不能用`this.props.value`来读取，需要在`onChange`回调函数中通过`e.target.value`来获取。textarea、select、radio元素都属于这种情况。

组件的生命周期：有三个状态。分别是：

+ Mounting: 已插入真实DOM
+ Updating: 正在被重新渲染
+ Unmounting: 已移出真实DOM

React为每个状态都提供了两种处理函数，`will`函数在进入状态之前调用，`did`函数在进入状态之后调用。

+ componentWillMount()：插入DOM之前
+ componentDidMount()：插入DOM之后
+ componentWillUpdate(object nextProps, object nextState)：重新渲染之前
+ componentDidUpdate(object prevProps, pbject prevState)：重新渲染之后
+ componentWillUnmount()：移除DOM之前

React还提供两种特殊状态的处理函数：

+ componentWillReceiveProps(object nextProps)：已加载组件收到新的参数时调用
+ shouldComponentUpdate(object nextProps, object nextState)：组件判断是否重新渲染时调用

组件的`style`属性设置方式要写成`style={{key: value}}`的形式，最外层括号代表这是JS语法，内层括号代表样式对象。

Ajax：可以使用`componentDidMount`方法设置Ajax请求，等到请求成功，再用`this.setState`方法重新渲染UI。

循环：可以用`arr.map()`方法来遍历数组。如果需要返回标签，最好在标签内添加`key`属性，并赋值`index`以区分。

判断：三元表达式。



### React项目结构：

```
-app
	-components			 	组件文件夹
		-Header				公共部分组件文件夹
			-index.jsx		公共部分组件入口文件
	-containers             页面文件夹
		-Hello				单页面文件夹
			-subpage		单页面中的子部分文件夹
			-index.jsx		单页面入口文件
	-index.jsx				入口文件
	-index.tmpl.html		模板文件
```

