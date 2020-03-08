# 安装步骤

1. 安装官⽅方脚⼿手架: npm install -g create-react-app
2. 创建项⽬目: create-react-app react-love
3. 启动项⽬目: npm start
4. 暴暴露露配置项: npm run eject

# 文件夹目录
```
├── README.md
├── config
│   ├── env.js
│   ├── getHttpsConfig.js
│   ├── jest
│   ├── modules.js
│   ├── paths.js
│   ├── pnpTs.js
│   ├── webpack.config.js
│   └── webpackDevServer.config.js
├── package.json
├── scripts
│   ├── build.js
│   ├── start.js
│   └── test.js
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── serviceWorker.js
    └── setupTests.js
```

# jsx 
## 基本使用
```
// 如何使用变量
const user = { firstName: "tom", lastName: "jerry"
};
function formatName(user) {
  return user.firstName + " " + user.lastName;
}
const jsx = <h2>{formatName(user)}</h2>;

// 如何使用 条件语句
 
const showTitle = true;
const title = name ? <h2>{name}</h2> : null;
const jsx = (
<div>
{/* 条件语句句 */}
    {title}
  </div>
);

// 如何使用数组循环 
const arr = [1,2,3].map(num => <li key={num}>{num}
</li>)
const jsx = (
<div>
{/* 数组 */}
    <ul>{arr}</ul>
  </div>
);

// 如何使用属性

import logo from "./logo.svg";
const jsx = (
  <div>
{/* 属性:静态值⽤用双引号，动态值⽤用花括号;class、for等 要特殊处理理。 */}
    <img src={logo} style={{ width: 100 }}
className="img" />
</div>
);

```
> css 模块化，创建index.modules.css ,index.js
> ```
>  import style from "./index.module.css";
>  <img className={style.img} />
> ```
> 更过规则css modules 规则[参考](http://www.ruanyifeng.com/blog/2016/06/css_modules.html)


# 组件的两种形式
- function 组件
- class 组件

## class 组件
class组件通常拥有状态和生命周期，继承Component,实现render 方法

## funtion
函数组件通常是无状态的，仅关注内容的展示，返回渲染结果急即可

# setState 的使用及其注意点
```
// 初始化数据
this.state = {
  date:new Date()
}
// 更新数据
this.setState({
  date:new Date()
})

```
## 注意事项
- 用setState更新状态而不要直接修改
> this.state.counter += 1;// 错误的，修改无效
- setState是批量行为，因此对同一状态执行多次只起一次效果，多个状态更新可以放到同一个setState中进行：
```
componentDidMount() {
// 假如couter初始值为0，执⾏行行三次以后其结果是多少? this.setState({counter: this.state.counter +
1});
   this.setState({counter: this.state.counter +
1});
   this.setState({counter: this.state.counter +
1}); }

```
- setState通常是异步状态，因此如果要获取最新状态的值有一下三种方式
1. 传递函数给setState方法
```
    this.setState((nextState, props) => ({
    counter: state.counter + 1}));// 1
    this.setState((nextState, props) => ({
    counter: state.counter + 1}));// 2
    this.setState((nextState, props) => ({
    counter: state.counter + 1}));// 3
```
2. 使用定时器：
```

setTimeout(() => {
  this.changeValue();
  console.log(this.state.counter);
}, 0);
```
3. 原生事件中修改状态
```
componentDidMount(){
    document.body.addEventListener('click',
this.changeValue, false)
}
changeValue = () => {
    this.setState({counter:
this.state.counter+1})
    console.log(this.state.counter)
}
```
总结：setState 只有在合成事件和钩子函数中是异步，在原生事件setTimeout ,setInterval中是同步。

# 事件处理
> 事件回调函数注意绑定this指向，常见三种方法：
> 1. 构造函数中绑定并覆盖 this.change = this.change.bind(this)
> 2. 方法定义为箭头函数: ()=>{}
> 3. 事件中定义为箭头函数 onChange={()=>{this.change()}}
> react里遵循单项数据流，没有双向数据绑定的语法糖，数据框里设置value 和onchange ，称只为受控组件。

# 组件通信
## props属性传递可用父子组件相互通信
```
// index.js
ReactDOM.render(<App title="真不不错" />, document.querySelector('#root'));
// App.js
<h2>{this.props.title}</h2>
``` 
如果父组件传递的是函数，则可以把子组件信息传入父组件，这个成为状态提升.

```
// StateMgt
<Clock change={this.onChange}/>
// Clock
this.timerID = setInterval(() => {
    this.setState({
        date: new Date()
    }, ()=>{
// 每次状态更更新就通知⽗父组件
        this.props.change(this.state.date);
    });
}, 1000);
```
## context 跨层级通信

## redux 组件间通信

