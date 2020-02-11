import React, { Component } from 'react';

import './App.css';
import Header from "./components/header"
import Login from "./components/Login"
import { loginUser, verifyUser } from './services/apiHelper';
import AllSpots  from "./components/allSpots"


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

  componentDidMount() {
    verifyUser();
    if (localStorage.getItem('authToken')) {
      const name = localStorage.getItem('name');
      const email = localStorage.getItem('email');
      const user = { name, email };
      user && this.setState({
        currentUser: user
      })
    }
  }

  handleLogout = () => {
    this.setState({
      currentUser: null
    })
    localStorage.removeItem('authToken');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
  }


  render() {
    return (
      <div className="App">

        <Header />
        <Login handleLogin={this.handleLogin} handleLogout={this.handleLogout} />
        {this.state.currentUser ?
          <h1> What's really hood {this.state.currentUser.name} ?</h1>
          :
          <div>fuck you</div>}
        <AllSpots />

      </div>
    );
  }
}

export default App;
