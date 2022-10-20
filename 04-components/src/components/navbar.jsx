import React from 'react';

//Stateless Functional Component - SFC
//Converting below into SFC - defining a function that return . . .
const NavBar = (props) => {
  return (
  <nav className='navbar bg-light'>
    <a className='navbar-brand' href='#'>
      NavBar
      <span className="badge text-bg-secondary">
        {/* {this.props.totalCounters} //only works in CLASS COMPONENT */}
        {props.totalCounters}
      </span>
      {/* totalCounters - from APP.JS */}
    </a>
  </nav>
    );
}

export default NavBar;

