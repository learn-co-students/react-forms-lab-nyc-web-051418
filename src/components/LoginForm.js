import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
    };
  }

handleloginInput = (event) => {
// console.log(event.target.value)
this.setState({
  [event.target.name]: event.target.value
})
}

  render() {
    console.log(this.state)
    // console.log(this.props.onSubmit)
    // debugger;
    const cb=(event)=>{
      event.preventDefault()
      if(this.state.username.length>0 && this.state.password.length>0){
        // console.log(this.state)
        this.props.onSubmit(this.state)
      }
    }
    return (
      <form onSubmit={cb}>
        <div>
          <label>
            Username
            <input id="test-username" name="username" type="text" value={this.state.username} onChange={this.handleloginInput} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" name="password" type="password" value={this.state.password} onChange={this.handleloginInput}/>
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
