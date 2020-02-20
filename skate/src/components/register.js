import React, { Component } from "react"

class Register extends Component  {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      location: "",
      description: "",
      favorite_spot: "",
      current_skate: "",
      best_vids: "",
      photo: "",
      email: ""
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value})
  }
  

  render() {
    return (
      <div className="skatingback">
      
        <form id="reg" className="register" onSubmit={(e) => this.props.handleRegister(e, this.state)}>
        <h2>Sign da fuck up!</h2>
          <label htmlFor="name"> Name (required)</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <label htmlFor="email">E-mail (required)</label>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password (required)</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          
          <label htmlFor="location">Location</label>
          <input
            type="text"
            name="location"
            value={this.state.location}
            onChange={this.handleChange}
          />
          <label htmlFor="description">About yoself...</label>
          <input
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <label htmlFor="current_skate">Skating?</label>
          <input
            type="text"
            name="current_skate"
            value={this.state.current_skate}
            onChange={this.handleChange}
          />
          
          <label htmlFor="best_vids">Name your favorite skate videos..</label>
          <input
            type="text"
            name="best_vids"
            value={this.state.best_vids}
            onChange={this.handleChange}
          />
          <label htmlFor="photo">Upload a picture! Has to be an image address unfortunetly..</label>
          <input
            type="text"
            name="photo"
            value={this.state.photo}
            onChange={this.handleChange}
          />
          
          <button className="submitbutt">Submit!</button>
        </form>
          
        

        
      </div>
    )
  }


}

export default Register;