import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  onInputChange = (e) => {
    let name = e.target.name
    let tarVal = e.target.value

    this.setState({
      name: tarVal
    });
  }

  onFormSubmit = (e) => {
    e.preventDefault()
    //check if both fields have value present
    debugger;
    if (!this.state.username || !this.state.password){
      return;
    }

    //send back up to index.js
    this.props.onSubmit(this.state.username, this.state.password)
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <label>
            Username
            <input
              id="test-username"
              type="text"
              name="username"
              onChange={this.onInputChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="test-password"
              type="password"
              name="password"
              onChange={this.onInputChange} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
