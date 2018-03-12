import React, { Component } from 'react';
import logo from '../images/callup-favicon.png';

import Header from '../containers/blocks/_header';

import './app.css';


class App extends Component {

  async componentWillUnmount() {
    await localStorage.removeItem('token');
  }

  render() {
    return (
      <div className="Home" id="home">

        <div className="navigation">

          <input type="checkbox" className="navigation__checkbox" id="navi__toggle" />
        
          <label htmlFor="navi__toggle" className="navigation__button">
            <span className="navigation__icon">&nbsp;</span>
          </label>

          <div className="navigation__background">&nbsp;</div>
        
          <nav className="navigation__nav">
            <ul className="navigation__list">

              <li className="navigation__item">
                <a href="#popup" className="navigation__link">
                  <span>01</span>
                  About
                </a>
              </li>

              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  <span>02</span>
                  Do
                </a>
              </li>
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  <span>03</span>
                  Thank
                </a>
              </li>
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                <span>04</span>
                  Stuff
                </a>
              </li>

            </ul>
          </nav>

        </div>
        {/* <Header /> */}
        { this.props.children }
      </div>
    );
  }
}

export default App;
