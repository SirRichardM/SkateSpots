import React, { Component } from "react"
import { Link, Route } from "react-router-dom"
import axios from "axios"
import { verifyUser, singleSpots } from "../services/apiHelper"

class SingleSpot extends Component {
  constructor(props) {
    super(props)

    this.state = {
      spot: null,
      
    }
  }

  
   oneSpot = async () => {
    const spot = await singleSpots(this.props.spotId);
    console.log(spot)
     this.setState({ spot })
  }

  componentDidMount = async () => {
    verifyUser();
    this.oneSpot();
  }

//   componentDidMount = async () => {
//     verifyUser();
//     const resp = await axios(`localhost:3000/spot/${this.props.spotId}`)
//     this.setState({
//       currentSpot: resp
//     })
  
// }


  render() {
    console.log(this.props.spotId)
    console.log(this.state.spot)
    return (
      <div>
        {this.state.spot &&
          <div>
          <h2>{this.state.spot.name}</h2>
          <h3>{this.state.spot.address}</h3>
          </div>
          }

        </div>
        

    )
  
}

}

export default SingleSpot;