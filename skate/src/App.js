import React, { Component } from 'react';
import { Link, Route } from "react-router-dom"
import './App.css';
import Header from "./components/header"
import Login from "./components/Login"
import { loginUser, verifyUser, registerUser } from './services/apiHelper';
import AllSpots from "./components/spotsContainer"
import Register from "./components/register"
import MakeSpot from "./components/makeSpot"
import SingleSpot from "./components/singleSpot"
import SpotsContainer from "./components/spotsContainer";
import Footer from "./components/footer"


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
      const id = localStorage.getItem('id')
      console.log(id)
      const user = { name, email, id };
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
    localStorage.removeItem('email')
    localStorage.removeItem('id');
  }

  handleRegister = async (e, registerData) => {
    e.preventDefault();
    const currentUser = await registerUser(registerData);
    if (!currentUser.errorMessage) {
      this.setState({ currentUser });

    } else {
      this.setState({ errorText: currentUser.errorMessage })
    }
  }


  render() {
    console.log(this.state.currentUser)
    return (
      <div className="App">

        <Header handleLogin={this.handleLogin} handleLogout={this.handleLogout} />
        {/* <Login handleLogin={this.handleLogin} handleLogout={this.handleLogout} /> */}

        <div className="pic">
          <br />
          {this.state.currentUser &&
            <h1 className="intro">Sup {this.state.currentUser.name} ?</h1>}
        </div>
        
        <nav className="navbar">
          <Link className="golden" to="/spot">See All Spots</Link>
          <Link className="golden" to="/signup">Register</Link>
          <Link className="golden" to="/spot">Make a Spot</Link>
        </nav>
        <Route path="/spot" render={() => <MakeSpot />} />
        <Route exact path="/spot" render={() => <SpotsContainer />} />
        <Route path="/signup" render={() => <Register handleRegister={this.handleRegister} />} />
        <Route path="/spot/:id" render={(props) => (
          <SingleSpot spotId={props.match.params.id} user={this.state.currentUser} />
        )} />

        <Footer />

      </div>
    );
  }
}

export default App;
