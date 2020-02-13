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

         <label htmlFor="obstacles">What's there to skate?</label>

          <input
                type="text"
                name="obstacles"
                value={this.state.obstacles}
                placeholder="Stuffs to skate..."
                onChange={e => this.handleChange(e)}
          />
          
          <label htmlFor="description">Spot Inforomation/Description</label>

              <input
                type="text"
                name="description"
                value={this.state.description}
                placeholder="Spot description"
                onChange={e => this.handleChange(e)}
          />
          
          <label htmlFor="noteworthy">Noteworthy tricks that have been done there?</label>

              <input
                type="text"
                name="noteworthy"
                value={this.state.noteworthy}
                placeholder="Noteworthy"
                onChange={e => this.handleChange(e)}
          />
          
          <label htmlFor="photo_main">Upload main photo here</label>

              <input
                type="text"
                name="photo_main"
                value={this.state.photo_main}
                placeholder="Main Photo"
                onChange={e => this.handleChange(e)}
              />

          
          <button>Share thine knowledge with the world</button>



          </form>
    </div>
  )
}

}

export default MakeSpot;