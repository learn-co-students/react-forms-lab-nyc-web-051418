import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poemText: "",
    };
  }

  handlePoemChange = (event) => {
    this.setState({
      poemText: event.target.value
    })
  }

  handleRenderingValidationError = (event) => {
      return(<div id="poem-validation-error" style={{color: "red"}}>
              This poem is not written in the right structure!
              </div>
            )
  }

  splitPoemLineIntoWordsAndGetLength(line) {
    return line.split(" ").length
  }

  validatePoem = () => {
    const splitPoem = this.state.poemText.trim().split("\n");
    console.log(splitPoem)
    const isPoemComplete = splitPoem.length === 3
    if (isPoemComplete) {
      const poemSegment1 = splitPoem[0].trim().split(" ");
      const poemSegment2 = splitPoem[1].trim().split(" ");
      const poemSegment3 = splitPoem[2].trim().split(" ");
      console.log(poemSegment1.length === 5 && poemSegment2.length === 3 && poemSegment3.length === 5)
      return (poemSegment1.length === 5 && poemSegment2.length === 3 && poemSegment3.length === 5)
    }
  }
  render() {
    return (
    
      <div>
        <textarea id="poem" rows="3" cols="60" value={this.state.poemText} onChange={this.handlePoemChange} onClick={this.getValue}/>
        
        {this.validatePoem() ? true  : this.handleRenderingValidationError()}

      </div>
     
    );
  }
}

export default PoemWriter;
