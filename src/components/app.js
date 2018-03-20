import React, { Component } from 'react';
import { Link } from 'react-router';


import './app.css';


class App extends Component {

  async componentWillUnmount() {
    console.log('firing');
    await localStorage.removeItem('token');
  }

  componentDidMount() {
    console.log('logcal storage', localStorage);
  }

  closeNav = () => {
    // document.getElementById('navi_toggle').checked = 'false';
  }

//   <div className="home__header">
//   <div className="home__header__logo">
//     <h1 className="home__header__logo__do">do</h1>
//     <h1 className="home__header__logo__thank">thank</h1>
//   </div>
// </div>

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
                <Link to={"/"} className="navigation__link" onClick={ this.closeNav }>
                  Home
                </Link>
              </li>
              <li className="navigation__item">
                <Link to={"/do"} className="navigation__link" onClick={ this.closeNav }>
                  Do
                </Link>
              </li>

              <li className="navigation__item">
                <Link to={"/thank" }className="navigation__link" onClick={ this.closeNav }>
                  Thank
                </Link>
              </li>
              <li className="navigation__item">
                <Link to={"/journal"} className="navigation__link" onClick={ this.closeNav }>
                  Journal
                </Link>
              </li>
              <li className="navigation__item">
                <Link to={"/story"} className="navigation__link" onClick={ this.closeNav }>
                  Story
                </Link>
              </li>
              <li className="navigation__item">
                <Link to={"/resources"} className="navigation__link" onClick={ this.closeNav }>
                  Resources
                </Link>
              </li>

              
              <li className="navigation__item">
                <Link to={"/signup"} className="navigation__link" onClick={ this.closeNav }>
                  sign up
                </Link>
              </li>
              <li className="navigation__item">
                <Link to={"/signin"} className="navigation__link" onClick={ this.closeNav }>
                  Sign in
                </Link>
              </li>
              <li className="navigation__item">
                <Link to={"/signout"} className="navigation__link" onClick={ this.closeNav }>
                  Sign out
                </Link>
              </li>

            </ul>
          </nav>

        </div>
        { this.props.children }
      </div>
    );
  }
}

export default App;
