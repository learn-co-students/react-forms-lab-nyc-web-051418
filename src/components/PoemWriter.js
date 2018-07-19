import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: "",
      valid: true,
    };
  }

  handlePoemInput = (event) => {
  let poem=event.target.value.split("\n").map(line => line.trim())
  if(event.target.value && poem.length===3){
    poem[0].split(" ").length = 5 
     poem[1].split(" ").length = 3
     poem[2].split(" ").length = 5

     this.setState({
       poem: event.target.value,
       valid: true
     })


  }else {
    this.setState({
      poem: event.target.value,
      valid: false,
    })
  }
  }




  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.poem} onChange={this.handlePoemInput}/>
        {!this.state.valid ? (
          <div id="poem-validation-error" style={{ color: "red" }}>
            This poem is not written in the right structure!
          </div>
        ): null}
      </div>
    );
  }
}

export default PoemWriter;
