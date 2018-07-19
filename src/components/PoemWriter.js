import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: '',
      error: ''
    };
  }

  handleInputChange = event => {
    this.setState(
      {
        [event.target.name]: event.target.value
      },
      () => console.log(this.state)
    );
    this.poemRules();
  };

  poemRules = () => {
    // const poem = this.state.poem;
    // let lines = poem.match(/\n/gm).length;
    // if (lines < 3) {
    //   this.state.error = 'This poem is not written in the right structure!';
    // }
  };

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          name="poem"
          onChange={this.handleInputChange}
        />
        <div id="poem-validation-error" style={{ color: 'red' }}>
          {this.state.error}
        </div>
      </div>
    );
  }
}

export default PoemWriter;
