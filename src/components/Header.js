import React from 'react';
import logo from '../assets/logo.png'

const Header = () =>{
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
	  <a className="navbar-brand" href=""><img src={logo} alt="logo" style={{height:27, width:160}}/></a>
	  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
	    <span className="navbar-toggler-icon"></span>
	  </button>
	</nav>
    )
}
export default Header;