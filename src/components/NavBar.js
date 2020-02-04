import React from 'react';
import {NavLink, Link } from 'react-router-dom';


class Navbar extends React.Component {

  render(){
  return (

   <div>
     <NavLink to="/home"> Home </NavLink> <br></br>
      <NavLink to="/movies"> Movies </NavLink> <br></br>
       <NavLink to="/directors"> Directors </NavLink> <br></br>
        <NavLink to="/actors"> Actors </NavLink> <br></br>
    </div>
  )
  }
}

export default Navbar;
