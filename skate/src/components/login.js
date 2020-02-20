import React, { Component } from "react";
import {withRouter, Link} from "react-router-dom"


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
      <div className="logphone">
        {!localStorage.getItem('name') &&
          <form href="#reg" className="logg" onSubmit={(e) => this.props.handleLogin(e, this.state)}>
            <h2 className="logbutt">Not a member? <Link to="/signup">Click Here to Register! </Link></h2>
            <label className="heademail" htmlFor="email">Email</label>
          
            <input
              type="text"
              name="email"
              value={this.state.email}
            onChange={this.handleChange}
            placeholder="email"
            />
            <label className="headpass" htmlFor="password">Password</label>
         
            <input
              type="password"
              name="password"
              value={this.state.password}
            onChange={this.handleChange}
            placeholder="password"
            />
         
            <button className="login">Log in b</button>


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