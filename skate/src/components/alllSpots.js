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
    <div className="showcase">
      {this.props.spots.map((spot, index) => (
        <div key={index} className="indyshowcase">
          <Link to={`/spot/${spot.id}`}>
            {(spot.photo_main) ?
              <img src={spot.photo_main} />
              : 
              <img className="altpic" src="https://lh3.googleusercontent.com/proxy/M10GxwnqpB1UaZh5iNCYjYcVDKJTMvq5vpViOprua-yNqEyITuC9gleIte7kcYMr-0XZgAoi5btdg21Jb4r4cZKiuhi5pnR2gbHp_C3mYpAncrjd4j8sq53qtiXF9TL5zQ97K-RIrZDJhO9q30OtP0gT" />
            }
            <h2 className="goaway">{spot.name}</h2>
            {/* <img src={spot.photo_main} alt="skate spot" /> */}
            <h4 className="goaway">{spot.address}</h4>
            <h4 className="goaway">{spot.boro}</h4>
          </Link>
        </div>

      ))}
        </div>
  )
}

}

export default AllSpots;


