import React, { Component } from "react"
import { Link } from 'react-router-dom';

class AllSpots extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      spots: []
    }
  }


  render() {
    console.log(this.props);
    return (
    <div>
      {this.props.spots.map((spot, index) => (
        <div key={index} className="showcase">
          <Link to={`/spot/${spot.id}`}>
            <h2>{spot.name}</h2>
            <img src={spot.photo_main} alt="skate spot" />
            <h4>{spot.address}</h4>
            <h4>{spot.boro}</h4>
          </Link>
        </div>

      ))}
        </div>
  )
}

}

export default AllSpots;


