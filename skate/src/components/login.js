import React, { Component } from "react";


class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: ""
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }


  render() {
    return (
      <div>
        {!localStorage.getItem('name') &&
          <form onSubmit={(e) => this.props.handleLogin(e, this.state)}>
            <h2 className="logbutt">Login!</h2>
            <label htmlFor="email">Email</label>
          
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <label htmlFor="password">Password</label>
         
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
         
            <button className="login">Log the fuck in b</button>


          </form>}
        <div> 
        {localStorage.getItem('name') &&
          <button className="headbutt" onClick={this.props.handleLogout}>Logout!</button>}
          </div>
      </div>
    )
  }
}

export default Login;