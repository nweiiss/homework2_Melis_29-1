import React from "react";

class Square extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      isRed: true,
    }
    this.changeColor = this.changeColor.bind(this)
  }

  changeColor() {
    this.setState({isRed:!this.state.isRed})
  }
  
  render() {
    return(
      <div className="square">
        <button onClick={this.changeColor} className={`${this.state.isRed ? "square-red" : "square-blue"}`}></button>
        <button onClick={this.changeColor} className={`${this.state.isRed ? "square-blue" : "square-red"}`}></button>
      </div>
    );
  }
}

export default Square;
