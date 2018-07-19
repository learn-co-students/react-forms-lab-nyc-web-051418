import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };
  }

handleInputChange = (event) => {
  console.log(this.props.maxChars)
  // debugger;
  // const inputValue=event.target.value
  // const showValue=inputValue.slice(0,this.props.maxChars)
  // debugger;
  this.setState({
  value: event.target.value,
},console.log(this.state))
}


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleInputChange}/>
        <p>{this.props.maxChars - this.state.value.length} </p>
      </div>
    );
  }
}


export default TwitterMessage;
