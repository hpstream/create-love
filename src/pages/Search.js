import React, { Component } from "react";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
  }
  componentDidMount() {}
  componentWillUnmount() {}
  clickbtn = () => {
    console.log("btn");
  };
  change = (e) => {
    this.setState({
      name: e.target.value
    });
  };

  render() {
    const { name } = this.state;
    return (
      <div>
        <button onClick={(e)=>{
          this.props.click(e);
        }}>按钮</button>
        <div>{name}</div>
        <input
          type="text"
          placeholder="请输入"
          value={name}
          onChange={this.change}
        />
      </div>
    );
  }
}
