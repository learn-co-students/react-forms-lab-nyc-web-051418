import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poemContent: "",
      validity: false
    };
  }

  updatePoemContent = () => {

  }

  render() {
    return (
      <div>
        <textarea
          value={}
          rows="3"
          cols="60"
          value={this.state.poemContent}
          onChange={this.updatePoemContent}
          />
        <div id="poem-validation-error" style={{ color: "red" }}>
          This poem is not written in the right structure!
        </div>
      </div>
    );
  }
}

export default PoemWriter;
