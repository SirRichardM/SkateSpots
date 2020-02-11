import React, {Component} from "react"
// import { AllSpots } from "./services/apiHelper"
import { indexSpots, verifyUser } from "../services/apiHelper"


class AllSpots extends Component {
  constructor(props) {
    super(props)

    this.state = {
      spots: []
    }
  }

  

  readAllSpots = async () => {
    const spots = await indexSpots();
    console.log(spots)
    this.setState({ spots })
  }  
  
  componentDidMount() {
    verifyUser();
    this.readAllSpots();
  }


  render() {
    console.log(this.state.spots)
    return (
      <div>

        {this.state.spots.map((spot, index) =>  (
        <div key={index}>
          <h2>{spot.name}</h2>
        </div>
         ) )}

      </div>

    )
  }
}

export default AllSpots;