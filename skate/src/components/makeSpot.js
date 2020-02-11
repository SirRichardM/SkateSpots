import React, { Component } from "react"
import { postSpot } from "../services/apiHelper";

class MakeSpot extends Component {
  constructor(props) {
    super(props);


    this.state = {
      name: "",
      address: "",
      boro: "",
      obstacles: "",
      rating: "",
      description: "",
      directions: "",
      bust_factor: "",
      noteworthy: "",
      photo_main: "",
      photo2: "",
      photo3: "",
      phto4: "",
      photo5: "",
      spots: []
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
}

  createSpot = async (e, spotInfo) => {
    const newSpot = await postSpot(spotInfo)
    return newSpot
  }


  render() {
    console.log(this.state)
    return(
      <div>
        <form onSubmit={(e) => this.createSpot(e, this.state)}>
          <h2>Add a spot</h2>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <label htmlFor="address">address</label>
          <input
            type="text"
            name="address"
            value={this.state.address}
            onChange={this.handleChange}
          />

          <label htmlFor="boro">Which boro?</label>
          <input
            type="text"
            name="boro"
            value={this.state.boro}
            onChange={this.handleChange}
          />

      <label htmlFor="trains">Closest Train?</label>
          <input
            type="text"
            name="trains"
            value={this.state.trains}
            onChange={this.handleChange}
          />
          
          <button>Share thine knowledge with the world</button>



          </form>
    </div>
  )
}

}

export default MakeSpot;