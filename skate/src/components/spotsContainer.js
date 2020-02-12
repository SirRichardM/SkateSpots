import React, { Component } from "react"
// import { AllSpots } from "./services/apiHelper"
import { indexSpots, verifyUser } from "../services/apiHelper"
import { Link, Route } from "react-router-dom"
import SingleSpot from "./singleSpot"
import AllSpots from "./alllSpots"


class SpotsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      spots: null
    }
  }



  readAllSpots = async () => {
    
    const spots = await indexSpots();
    console.log(spots)
    this.setState({ spots })
  }

  componentDidMount = async () => {
    verifyUser();
    this.readAllSpots();
  }


  render() {
    console.log(this.state.spots)
    return (
      <div>
        {this.state.spots && <AllSpots spots={this.state.spots} />}
        


      </div>

    )
  }
}

export default SpotsContainer;