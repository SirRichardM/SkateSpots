import React, { Component } from "react"
import { Link, Route, withRouter } from "react-router-dom"
import axios from "axios"
import { verifyUser, singleSpots, putSpot, deleteSpot, commentDaSpot, getComments } from "../services/apiHelper"

class SingleSpot extends Component {
  constructor(props) {
    super(props)

    this.state = {
      show: false,
      comments: [],
      commentData: {
        text: '',
        name: localStorage.getItem('name')
      },
      spot_Id: null,
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

  showComments = async () => {
    const comments = await getComments(this.props.spotId);
    this.setState({
      comments: [...this.state.comments, ...comments]
    })
  }

  oneSpot = async () => {
    const spot = await singleSpots(this.props.spotId);
    console.log(spot)
    this.setState({ spot })
    this.setState({ spot_Id: spot.id })
    this.setState({ userId: spot.user_id })
    this.setState({
      spotUp: {
        name: spot.name,
        boro: spot.boro,
        address: spot.address,
        trains: spot.trains,
        obstacles: spot.obstacles,
        description: spot.description,
        noteworthy: spot.notworthy,
        photo_main: spot.photo_main,
        photo2: spot.photo2,
        photo3: spot.photo3,
        phto4: spot.photo4,
        photo5: spot.photo5
      }
    })
  }

  componentDidMount = async () => {

    verifyUser();
    this.oneSpot();
    this.showComments();
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
    let spotUp = { ...this.state.spotUp };
    spotUp[name] = value;
    this.setState({
      spotUp
    })
    this.setState({ commentData: { text: value, name: localStorage.getItem('name') } })
  }

  handleUpdate = async (e, event) => {
    e.preventDefault()
    verifyUser();
    putSpot(this.props.spotId, event)
    console.log(putSpot(this.props.spotId, event))
  }

  handleDelete = async (e) => {
    e.preventDefault();
    deleteSpot(this.state.spot_Id)
    this.props.history.push("/spot")
  }

  postComment = async (e, comment) => {
    e.preventDefault();
    verifyUser();
    commentDaSpot(this.props.spotId, comment);
    this.setState({
      comments: [...this.state.comments, comment]
    })
  

  }

  showupdate = async (e) => {
    
    
    this.setState ({
      show: true
    })
  }

  hideUpdate = async (e) => {
    this.setState({
      show: false
    })
  }


  render() {

    console.log(this.state.show)

    console.log(this.state.userId);
    // console.log(this.state.spotUp)
    // console.log(this.state.comments)
    return (
      <div>
        window.scrollTo(0,0);
        {this.state.spot &&
          <div className="single">
          
          <div className="locinfo">
          
              <img src={this.state.spot.photo_main} />
              {/* <div className="locinfo"> */}
              <div className="wtf">
              <h2 className="mainsingle">{this.state.spot.name}</h2>
                <h3>{this.state.spot.boro}</h3>
                <h3>{this.state.spot.address}</h3>
                <h4>{this.state.spot.trains}</h4>
              </div>
            </div>
            <br />
            <div className="info">
              <h4>{this.state.spot.obstacles}</h4>
              <p>{this.state.spot.description}</p>
              <p>{this.state.spot.noteworthy}</p>
            </div>
            <div className="singlespotpics">
              <img src={this.state.spot.photo2} />
              <img src={this.state.spot.photo3} />
              <img src={this.state.spot.phto4} />
              <img src={this.state.spot.photo5} />
            </div>

          </div>
        }

        { this.state.show === false ?
          <button onClick={(e) => this.showupdate()}> Show Update Form</button>
            :
          <button onClick={(e) => this.hideUpdate()}>Hide</button>}

        {localStorage.getItem('id') == this.state.userId && localStorage.getItem('name') && localStorage.getItem('id') !== null && (this.state.show === true) &&
           <div className="submitform">
          <form onSubmit={(e) => this.handleUpdate(e, this.state.spotUp)}>
           

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

              <input
                type="text"
                name="photo2"
                value={this.state.spotUp.photo2}
                placeholder="Photo 2"
                onChange={e => this.handleChange(e)}
              />

              <input
                type="text"
                name="photo3"
                value={this.state.spotUp.photo3}
                placeholder="Photo 3"
                onChange={e => this.handleChange(e)}
              />

              <input
                type="text"
                name="phto4"
                value={this.state.spotUp.phto4}
                placeholder="Photo 4"
                onChange={e => this.handleChange(e)}
              />

              <input
                type="text"
                name="photo5"
                value={this.state.spotUp.photo5}
                placeholder="Photo 5"
                onChange={e => this.handleChange(e)}
              />



              <input className="subbutt" type="submit" />



           
            <button onClick={this.handleDelete}>DELETE</button>
          </form>
          </div>

        }

        <br/>

        <h1 className="comintro">Survey says. . .</h1>
        <br />
        {this.state.comments && this.state.comments.map((comment, index) =>
          <div key={index} className="comments">
             <p>{comment.text}</p>  <h5>Yours truly, {comment.name}</h5> 
          </div>
        )}

        {localStorage.getItem('name') &&
          <form className="cominput" onSubmit={(e) => this.postComment(e, this.state.commentData)}>
            <input

              type="text"
              name="text"
              value={this.state.commentData.text}
              onChange={e => this.handleChange(e)}
            />
            <button >Tell us your thoughts..</button>
          </form>
        }

      </div>


    )

  }

}

export default withRouter(SingleSpot);