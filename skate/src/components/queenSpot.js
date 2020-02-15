import React, { Component } from "react"
import { Link, Route } from "react-router-dom"
import { queenSpots, verifyUser} from "../services/apiHelper"

class QSpots extends Component {
  constructor(props) {
    super(props);

    this.state = {
      qSpots: []
    }
  }

  readQSpots = async () => {
    const qSpots = await queenSpots();
    console.log( qSpots)
    this.setState({ qSpots })
  }

  componentDidMount = async () => {
    verifyUser();
    this.readQSpots();
  }

  render() {
    console.log(this.state);
    return (
      <div className="showcase">
        {this.state.qSpots.map((spot, index) => (
          <div key={index} className="indyshowcase">
            <Link to={`/spot/${spot.id}`}>
              {(spot.photo_main) ?
                <img src={spot.photo_main} />
                :
                <img className="altpic" src="https://lh3.googleusercontent.com/proxy/M10GxwnqpB1UaZh5iNCYjYcVDKJTMvq5vpViOprua-yNqEyITuC9gleIte7kcYMr-0XZgAoi5btdg21Jb4r4cZKiuhi5pnR2gbHp_C3mYpAncrjd4j8sq53qtiXF9TL5zQ97K-RIrZDJhO9q30OtP0gT" />
              }
              <div className="skate">
                <h2 className="goaway">{spot.name}</h2>

                <h4 className="goaway">{spot.address}</h4>
                <h4 className="goaway">{spot.boro}</h4>
              </div>
            </Link>

          </div>

        ))}
      </div>
    )
  }

}

export default QSpots;