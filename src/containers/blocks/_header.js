import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
// import { Navbar, Nav, NavItem, Route } from 'react-bootstrap';
// import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';


class Header extends Component {

  render() {
    return(
      <nav className="navbar" style={{ backgroundColor: '#004687', border: 'none' }}>
        <div className="container-fluid" style={{ color: "#fff" }}>
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar" style={{ color: '#fff' }}>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="/" className="navbar-brand" style={{ paddingTop: 7 }}><img src="../../images/callup_logo_white.svg" style={{ height: 40 }}/></Link>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav navbar-right" style={{ fontFamily: "Nunito", fontSize: 1.2 + 'em' }}>

              <li className="active"><Link to="/">home</Link></li>
              <li className="active"><Link to="/callup">call up</Link></li>
              <li className="active"><Link to="/story">the story</Link></li>
              <li className="active"><Link to="/resources">resources</Link></li>

            	<li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" href="#">sign<span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><Link to="/signup"><span className="glyphicon glyphicon-user"></span> up</Link></li>
                  <li><Link to="/signin"><span className="glyphicon glyphicon-log-in"></span> in</Link></li>
                  <li><Link to="/signout"><span className="glyphicon glyphicon-log-out"></span> out</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }

}
export default Header;
