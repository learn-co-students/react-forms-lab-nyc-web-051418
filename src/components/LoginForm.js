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
    //check if both fields have value present
    if (!e.target.username.value || !e.target.password.value){
      return;
    }

    //send back up to index.js
    this.props.onSubmit({
      username: e.target.username.value,
      password: e.target.password.value
    })
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit.bind(this)}>
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
