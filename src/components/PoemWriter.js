import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poemContent: "",
      validity: false
    };
  }

  updatePoemContent = (e) => {
    let currentContent = e.target.value;
    this.setState({
      poemContent: currentContent,
      validity: checkValidity(currentContent)
    })

  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.poemContent}
          onChange={this.updatePoemContent}
          />
        {!this.state.validity ? (
          <div id="poem-validation-error" style={{ color: "red" }}>
            This poem is not written in the right structure!
          </div>
        ) : null }

      </div>
    );
  }
}

function checkValidity(currentPoem){
  let splitPoemLines = currentPoem.split(/\r?\n/);
  let splitPoemLinesTrimmed = splitPoemLines.map(string => string.trim());
    if (splitPoemLinesTrimmed.length === 3 && splitPoemLinesTrimmed[0].split(" ").length === 5 && splitPoemLinesTrimmed[1].split(" ").length === 3 && splitPoemLinesTrimmed[2].split(" ").length === 5){
      return true;
    }
    else{
      return false;
    }
}

export default PoemWriter;
