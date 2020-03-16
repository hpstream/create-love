import React from 'react'
// 1. 什么是jsx ？
// 2. 看下react 不用jsx 是如何写代码的
// var jsx = React.createElement('div', null, ['hello']);
// console.log(jsx);

// var jsx = <div>
//   <span>ddd</span>
// </div>;
// console.log(jsx);
// 说明一个什么问题： jsx 是createElement 的一种语法糖。
// 为什么是需要这种语法语法糖呢？
// 主要优点： 解决，代码不易阅读的缺点；

// 开发组件的两种方式
// 1. function 的方式 ，class 的方式

// export function BaseFn(props) {
//   return <h1>{props.title}</h1>
// }
// export class BaseClass extends React.Component {
 
//   render(h) {
//     return <h1>{this.props.title}</h1>
//   }
// }


// 事件绑定
// export class BaseClass extends React.Component{
//   clickTitle(e,text){
//     // 打印返回事件，发现不是浏览器的一个原生事件Event;这是因为，raect用了一套事件合成机制，没有直接使用原生事件,这是一套怎么用的机理呢，我们后面会讲。
//     // 注意问题；1. e 事件的问题， 2，this 指向的问题 3，传递参数的问题
//     console.log(e.nativeEvent);
//     console.log(this); // 这样子this是undifined，怎么可以获取到this呢？
//     // 传提参数
//   }
//   clickTitleFn = ()=>{
//     // console.log(this); 这种方式可以获取大
//   }
//   render(h) {
//     return <h1 onClick={(e) => { this.clickTitle(e,'b')}}>{this.props.title}</h1>
//   }
// }

// 循环渲染
// 注意： 需要加key ，因为这个会影响他内部diff算法的效率，后面会仔细讲，先记住就行

// export class BaseFor extends React.Component {

//   render(h) {
  
//     return <ul>
//       {[1,2,3,4,5].map((item,index)=>{
//         return (
//           <li key={index}>{item}</li>
//         )
//       })}
//     </ul>
//   }
// }



// export class BaseIf extends React.Component {
//   // if else 的方式 ， 三目运算符 ， && 的模式
//   render(h) {

//     return <ul>
//       {this.props.isActive ? <li>1</li> : <li>2</li>}
//       {this.props.isActive && <li>&&</li>}
//     </ul>
//   }
// }

// 组件生命周期，和 setState 的基本使用，实现一个事件展示的功能
export class BaseComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      date:new Date()
    }
  }
  // 常见使用的生命周期 , 加载组件的生命周期，相当于vue 的mounted 生命周期
  componentDidMount(){
    this.timer = setInterval(() => {
      this.setState({
        date:new Date()
      })
    }, 1000);
  }
  // 组件卸载的生命周期
  componentWillUnmount(){
      clearInterval(this.timer)
  }
  render(h) {
    return <div>{this.state.date.toLocaleTimeString()}</div>
  }
}

export default class Base extends React.Component{
  render(h) {
   return <div>hello</div>
  }
}