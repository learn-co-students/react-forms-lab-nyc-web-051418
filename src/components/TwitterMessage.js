import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { message: "" };
  }

  updatedMessage = (e) => {
    return this.setState({message: e.target.value});
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          value={this.state.maxChars}
          onChange={this.updatedMessage} />
        Characters remaining: ({this.props.maxChars - this.state.message.length})
      </div>
    );
  }
}

export default TwitterMessage;
