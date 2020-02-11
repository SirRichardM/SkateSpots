import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/header"
import Login from "./components/login"
import { loginUser } from './services/apiHelper';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "", 
      currentUser: null,
      errorText: ""
    }
  }

  handleLogin = async (e, loginData) => {
  e.preventDefault();
  const currentUser = await loginUser(loginData)
  this.setState({ currentUser });
  
  }



  render() {
    return (
      <div className="App">
      
        <Header />
        <Login handleLogin={this.handleLogin}/>
        {this.state.currentUser ?
          <h1> What's really hood {this.state.currentUser.name} ?</h1>
          :
          <div>fuck you</div>}
      </div>
    );
  }
}

export default App;
