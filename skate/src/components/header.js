import React from "react"
import  Login  from "./Login"
import { checkPropTypes } from "prop-types"


function Header(props) {

  

  return (
    <div className="header" >
      <h1 className="head">spotted.</h1>
      <Login handleLogin={props.handleLogin} handleLogout={props.handleLogout}  />
      
    </div>
  )
}

export default Header;