import React, { Component } from "react"
// import { AllSpots } from "./services/apiHelper"
import { indexSpots, verifyUser, manSpots, brooklynSpots } from "../services/apiHelper"
import { Link, Route } from "react-router-dom"
import SingleSpot from "./singleSpot"
import AllSpots from "./alllSpots"
import ManSpots from "./manhattanSpots"
import BrookSpots from "./brookSpots"


class SpotsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      spots: null,
      manhatSpots: null,
      bkspots: null
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

  readBkSpots = async () => {
    const bkspots = await brooklynSpots();
    console.log(bkspots)
    this.setState({ bkspots })
  }
  

  componentDidMount = async () => {
    verifyUser();
    this.readAllSpots();
    this.readManSpots();
    this.readBkSpots();
  }


  render() {
    console.log(this.state.bkspots)
    return (
      <div>
        {this.state.spots && <AllSpots spots={this.state.spots} />}
        {/* {this.state.manhatSpots && <ManSpots spots={this.state.manhatSpots} />} */}
       

        


      </div>

    )
  }
}

export default SpotsContainer;