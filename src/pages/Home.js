import React, { Component } from 'react';
export default class Home extends Component {
  constructor(props){
    super(props)
    this.state = {date:new Date(),count:1}
  }
  componentDidMount(){
    this.timerID = setInterval(() => {
      this.setState({
        date:new Date()
      })

      this.setState({
        count: this.state.count+1
      })
     
    }, 1000);
  }
  componentWillUnmount(){
    clearInterval(this.timerID)
  }

  render() {

    return (
      <div>
        {this.state.date.toLocaleTimeString()}
        <div>{this.state.count}</div>
      </div>
    )
  }
}