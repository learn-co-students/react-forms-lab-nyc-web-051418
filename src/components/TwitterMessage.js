import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { tweet: "" };
  }

  updateTweet = (e) => {
    return this.setState({tweet: e.target.value});
  }

  render() {
    return (
      <div>
        <strong>Your tweet:</strong>
        <input
          type="text"
          value={this.state.tweet}
          onChange={this.updateTweet} />
        Characters remaining: ({this.props.maxChars - this.state.tweet.length})
      </div>
    );
  }
}

export default TwitterMessage;
