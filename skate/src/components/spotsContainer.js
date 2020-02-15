import React, { Component } from "react"
// import { AllSpots } from "./services/apiHelper"
import { indexSpots, verifyUser, manSpots } from "../services/apiHelper"
import { Link, Route } from "react-router-dom"
import SingleSpot from "./singleSpot"
import AllSpots from "./alllSpots"
import ManSpots from "./manhattanSpots"


class SpotsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      spots: null,
      manhatSpots: null
    }
  }



  readAllSpots = async () => {
    
    const spots = await indexSpots();
    console.log(spots)
    this.setState({ spots })
  }

  readManSpots = async () => {
    const manhatSpots = await manSpots();
    console.log(manhatSpots)
    this.setState({ manhatSpots })
  }

  componentDidMount = async () => {
    verifyUser();
    this.readAllSpots();
    this.readManSpots();
  }


  render() {
    console.log(this.state.manhatSpots)
    return (
      <div>
        {this.state.spots && <AllSpots spots={this.state.spots} />}
        {/* {this.state.manhatSpots && <ManSpots spots={this.state.manhatSpots} />} */}

        


      </div>

    )
  }
}

export default SpotsContainer;