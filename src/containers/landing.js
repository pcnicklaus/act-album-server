import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import './landing.css';

import * as actions from '../actions/index';


class Home extends Component {


  // Dosis|Droid+Sans|Lobster|Nunito|PT+Sans+Narrow|Quicksand|Shadows+Into+Light|Varela+Round


  render() {

    return(
      <section>
        <div className="container">

          <div className="header">

            <div className="uj">
              <div className="uj__header home__logo">
                <div className="uj__header__logo">
                  <h1 className="uj__header__logo__do">do</h1>
                  <h1 className="uj__header__logo__thank">thank</h1>
                </div>
              </div>
            </div>
            <div className="header--verbiage">
              <h1 className="header--believe">We believe</h1>
              <h2 className="header--small">small acts can cause</h2>
              <h1 className="header--change">big change</h1>
              
            </div>
            
          </div>

          <div className="how">
            <div className="how__title">
            <h2>Our four step plan</h2> 
            <h2>to change the world</h2>
            <p>and by that we mean how we hope to spread good while helping people be happier</p>
            </div>
            <div className="how__two">
              <div className="how__two__left">
                <div className="how__box__verbiage">
                  <h2>One</h2>
                  <p>Do good / help others</p>
                </div>
              </div>
              <div className="how__two__right">
                <div className="how__box__verbiage">
                  <h2>Two</h2>
                  <p>Make a record (and share)</p>
                </div>
              </div>
            </div>
            <div className="how__three">
              <div className="how__three__left">
                <div className="how__box__verbiage">
                  <h2>Three</h2>
                  <p>Thank people / show gratitude</p>
                </div>
              </div>
              <div className="how__three__right">
                <div className="how__box__verbiage">
                  <h2>Four</h2>
                  <p>Make a record (and share)</p>
                </div>
              </div>
            </div>
            <div className="how__conclusion">
            <h2>we hope that makes sense</h2>
            <h2>and you're ready to give it a shot</h2>
            </div>
          </div>

          <div className="do">
            <div className="do--verbiage">
              <h2>do</h2>
              <p>(help, share, volunteer...)</p>
            </div>
            <Link to="/do" className="link">
              <div className="do--image"></div>
            </Link>
          </div>


          <div className="thank">
            <div className="thank--image"></div>
            <div className="thank--verbiage">
                <h2>thank</h2>
                <p>(appreciate, commend...)</p>
            </div>
          </div>

            <div className="journal">
              <div className="journal--verbiage">
                <h2>journal</h2>
                <p>(all the good! yay!)</p>
              </div>
              <Link to={`/journal`} className="link">
                <div className="journal--image"></div>
              </Link>
            </div>

        </div>

      </section>
      
    )
  }

}

function mapStateToProps(state){
  console.log('state', state);
  return state
};

export default connect(mapStateToProps, actions)(Home)

