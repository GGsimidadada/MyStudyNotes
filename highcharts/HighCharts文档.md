# HighCharts文档

### 使用

引入HighCharts.js文件，如果需要可以再引入HighCharts-zh_CN.js文件，这是一个类似中文补丁的文件。如果需要图表导出功能，需要再引入一个exporting.js文件。

### 初始化

```javascript
//可以使用三种方式进行初始化
//通过DOM调用highcharts()函数
$("#container").highcharts({
  //Highcharts的配置
})

//通过chart.renderTo来指定
var charts = new Highcharts.Chart({
  chart: {
    renderTo: 'container'  //注意：这里一定是ID名
  }
})

//通过构造函数
var charts = new Highcharts.Chart('container', {
  //Highcharts的配置
})
```

### Options

```javascript
//常用的图表配置
{
  //设置全局图表样式
  chart: {       
    borderColor: '#f00',  //边框颜色
    borderRadius: 2,   //边框圆角
    borderWidth: 1,    //边框宽度
    backgroundColor: '#333',  //背景颜色
    margin: 10,   //外边距，可以单独设置上下左右
    spacing: 10,  //内边距，可以单独设置上下左右
    style: {	//设置与字体相关的样式
        ...
    },
    type: 'column',   //图表类型，如果series中没有指定type类型，那么该图表类型就由这个属性来指定
    zoomType: 'xy',   //图表缩放类型，xy表示水平垂直缩放
    selectionMarkerFill: 'rgba(51, 92, 173, 0.25)',  //选中区域的背景色
    panning: true,  //是否启用平移，如果启用，可以按住平移键，再使用鼠标左键进行平移
    panKey: 'shift',  //设置平移键，默认是shift
    animation: true,  //是否开启重绘动画
    inverted: false,  //是否反转坐标轴(x和y轴对换)
    resetZoomButton: {  //恢复默认图表按钮
        position: {  //按钮定位
            align: 'left',  //水平对齐方式
            verticalAlign: 'top',  //垂直对齐方式
            x: 0,  //水平位移
            y: 0   //垂直位移
        },
        relativeTo: 'plot',  //设置按钮位置相对于绘图区还是整个图表。值为'plot'或者'chart'。默认是'plot'
    }
    event: {    //事件函数
      click: function (event){},  //点击事件
      load: function () {},  //图表加载完毕事件
      selection: function (event) {},  //缩放区域事件
      redraw: function () {}   //图表重绘事件
    }
  }
  
  //设置标题样式，如果不想显示标题，可直接设置为null
  title: {    //主标题
      text: '我是标题',  //标题文字
      align: 'left',   //水平对齐方式
      verticalAlign: 'top',   //垂直对齐方式
      useHTML: false,   //是否解析html标签，设置为true后，可以使用a等标签
      floating: false,  //是否浮动，如果为true，标题将不占用图表区位置
      margin: 0,  //标题与图表区或者与副标题间的间隔
      opposite: false,  //是否反转X轴或Y轴，如果为true则X轴在上方显示，Y轴在右方显示
      style: {
          //文字样式
      }
      x: 0,    //水平偏移距离
      y: 0     //垂直偏移距离
  }
  subtitle: {    //副标题
      //设置项参照title
  }
      
  //坐标轴，有xAxis和yAxis
  xAxis: {
   	  type: 'linear',  //设置坐标轴类型，默认linear线性轴，还可以取logarithmic对数轴，datetime时间轴和category数组轴。其中数组轴是最常用的。
      allowDecimals: true,  //控制数轴是否显示小数
      min: 1,  //最小值
      max: 10,  //最大值
      plotLines: {  //标示线
          color: '#ff0',  //标示线颜色
          width: 1,  //宽度
          dashStyle: 'dash',  //标示线样式
          id: 0,  //编号
          value: '5月',  //指定标示线所在的值
          zIndex: 1,  //层叠
          event: {
              //标示线的事件，支持click、mouseover、mouseout、mousemove事件。
          }
      },
      plotBands: {  //标识区域
          borderColor: '#f00',  //边框颜色
          borderWidth: 1,  //边框宽度
          color: '#ff0',  //标识区颜色
          from: '1月',  //开始值
          to: '6月',   //结束值
          //其它属性可参考plotLines
      }
      title: {   //设置坐标轴标题
          enabled: false,  //是否显示，X轴默认不显示，Y轴默认显示
          rotation: 0,  //旋转
          offset: 0,  //偏移
          text: 'X轴标题',  //文字
          margin: 0,   //外边距
          x: 0,  //水平偏移
          y: 0,  //垂直偏移
          style: {   //文字样式
              ...
          }
      },
      labels: {   //坐标轴刻度标签
        enabled: true,   //是否启用轴标签
        formatter: function () {   //标签格式化函数
          //返回的是坐标轴上当前点的值。除了this.value，还有axis、chart、isFirst、isLast可用。
            return this.value;
        },
        step: 1,  //显示标签的间隔。如果不设置则系统自动计算
        staggerLines: 1,  //标签显示行数，只对X轴 有效
      }
      tickLength: 5,  //刻度线长度
      tickWidth: 1,   //刻度线宽度
      tickInterval: 1,  //刻度线间隔
      tickmarkPlacement: 'between',  //刻度线对齐方式。如果是between则在两个刻度直接，如果为on则在刻度上方
      gridLineWidth: 0,  //网格线宽度。X轴默认为0，Y轴默认为1.注意，xAxis和yAxis的网格线分别代表垂直和水平网格线
      gridLineColor: '#f00',  网格线颜色
      gridLineDashStyle: 'dash',  //网格线线条样式
      
  },
  yAxis: [  //设置Y轴，基本API和X轴类似，但是常见有多Y轴图表，这时需要在数组中设置多个Y轴对象参数。
    //需要将Y轴与相应数据列关联，则需要在数据列series中，对应的对象参数中设置yAxis属性，值为对应Y轴在数组中的下标。
  ]
  
  //数据列
  series: [  //数据列是一组数据的集合，配置是个数组，可以包含多个数据列。
    //数据列共有三个级别的配置，权重从低到高依次如下：、
    //1.配置在plotOptions.series中，针对所有类型图标有效，一般是通用配置
    //
      {
          type: 'colomn',  //设置当前图表类型，如果没有设置，则由chart.type来指定
          name: '',  //数据列的名字，会显示在数据提示框Tooltip及图例Legend中
      	  data: [],  //数据数组，通常有三种定义方式：
        //1.数值数组，即一维数组，这种情况下，数组中的额数值代表Y值，X值则根据X轴的配置，要么自动计算，要么从0其自增，或者根据pointStart及pointInterval自增。在分类轴中，X值就是categoies配置。
        //2.包含两个值的数组集合。这种情况下，集合中数组的第一个值代表X，第二个值代表Y。如果第一个值是字符串，则代表该点的名字，并且X值会如1中所说的情况决定。
        //3.数据点对象集合。在这种情况下，集合中元素都是数据点对象，对象中可以配置数据见plotOptions.series。另外这种方式还可以增加额外变量
      }
  ]
}
```

