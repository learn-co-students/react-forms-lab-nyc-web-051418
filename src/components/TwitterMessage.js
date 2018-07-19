import React from 'react';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      inputValue: ''
    };
  }

  changeHandler = event => {
    this.setState(
      {
        inputValue: event.target.value
      },
      () => console.log(this.state)
    );
  };
  render() {
    let chars = this.props.maxChars - this.state.inputValue.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.changeHandler}
        />
        <p>{chars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
