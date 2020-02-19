import React from "react"
import  Login  from "./Login"
import { checkPropTypes } from "prop-types"


function Header(props) {

  

  return (
    <div className="header" >
      <div className="loginmobile">
      <h1 className="head">spotted.</h1>
      
      <Login handleLogin={props.handleLogin} handleLogout={props.handleLogout}  />
      </div>
    </div>
  )
}

export default Header;