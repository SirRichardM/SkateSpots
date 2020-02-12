import React, { Component } from "react"
import { Link, Route } from "react-router-dom"
import axios from "axios"
import { verifyUser, singleSpots, putSpot, deleteSpot } from "../services/apiHelper"

class SingleSpot extends Component {
  constructor(props) {
    super(props)

    this.state = {
      spotIdt: null,
      userId: null,
      currentUser: null,
      spot: null,
      spotUp: {
        name: null,
        boro: null,
        address: null,
        trains: null,
        obstacles: null,
        description: null,
        noteworthy: null,
        photo_main: null,
        photo2: null,
        photo3: null,
        phto4: null,
        photo5: null
      }
      
    }
  }


  oneSpot = async () => {
    const spot = await singleSpots(this.props.spotId);
    console.log(spot)
    this.setState({ spot })
    this.setState({ spotIdt: spot.id })
    this.setState({ userId: spot.user_id})
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

  handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
    let spotUp = { ...this.state.spotUp };
    spotUp[name] = value;
    this.setState({
      spotUp
    })
  }

  handleUpdate = async (e, event) => {
    e.preventDefault()
    verifyUser();
    putSpot(this.props.spotId, event)
  }

  handleDelete = async (e) => {
    e.preventDefault();
    deleteSpot(this.state.spotIdt)
  }


  render() {
    console.log(this.state.userId)
    console.log(this.state.spotUp)
    console.log(this.props.user.id)
    return (
      <div>
        {this.state.spot &&
          <div>
            <img src={this.state.spot.photo_main} />
            <h2>{this.state.spot.name}</h2>
            <h3>{this.state.spot.boro}</h3>
            <h3>{this.state.spot.address}</h3>
            <h4>{this.state.spot.trains}</h4>
            <h4>{this.state.spot.obstacles}</h4>
            <p>{this.state.spot.description}</p>
            <p>{this.state.spot.noteworthy}</p>
            <img src={this.state.spot.photo2} />
            <img src={this.state.spot.photo3} />
            <img src={this.state.spot.phto4} />
            <img src={this.state.spot.photo5} />


          </div>
        }

          
        { this.props.user.id == this.state.userId &&
          <form onSubmit={(e) => this.handleUpdate(e, this.state.spotUp)}>
            <div className="submitForm">

              <input
                type="text"
                name="name"
                value={this.state.spotUp.name}
                placeholder="Name Of Spot"
                onChange={e => this.handleChange(e)}
              />
              <input
                type="text"
                name="boro"
                value={this.state.spotUp.boro}
                placeholder="Boro"
                onChange={e => this.handleChange(e)}
              />

              <input
                type="text"
                name="address"
                value={this.state.spotUp.address}
                placeholder="Address"
                onChange={e => this.handleChange(e)}
              />
              <input
                type="text"
                name="trains"
                value={this.state.spotUp.trains}
                placeholder="Trains"
                onChange={e => this.handleChange(e)}
              />
              <input
                type="text"
                name="obstacles"
                value={this.state.spotUp.obstacles}
                placeholder="Stuffs to skate..."
                onChange={e => this.handleChange(e)}
              />
              <input
                type="text"
                name="description"
                value={this.state.spotUp.description}
                placeholder="Spot description"
                onChange={e => this.handleChange(e)}
              />
              <input
                type="text"
                name="noteworthy"
                value={this.state.spotUp.noteworthy}
                placeholder="Noteworthy"
                onChange={e => this.handleChange(e)}
              />

              <input
                type="text"
                name="photo_main"
                value={this.state.spotUp.photo_main}
                placeholder="Noteworthy"
                onChange={e => this.handleChange(e)}
              />


            <input type="submit" />
            

            
            </div>
            <button onClick={this.handleDelete}>DELETE</button>
        </form>
          
         
        }
          

      </div>


    )

  }

}

export default SingleSpot;