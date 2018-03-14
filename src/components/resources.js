import React, { Component } from 'react';
import { Link } from 'react-router';
import * as actions from '../actions';

import './resources.css';

/*
      TO DOOOOOOOO
  - create a list and loop over it for the suffs

*/

class Resources extends Component {

  renderList = () => {
    return(
      <div className="resources__link">

          <div>

            <a href="https://ballotpedia.org/Open_seats_in_the_2017_state_legislative_elections">
              <img src="../images/bp.png" className="img img-responsive"/>
            </a>
          </div>
          <div>
            <p>
              ballotpedia is a wicked awesome resource and my number one go to resource for all things elections.
            </p>
          </div>

      </div>
    )
  }

  render() {
    return (
      <div >
        <div className="resources" id="resources">
          <div className="home__header">
            <div className="home__header__logo">
              <h1 className="home__header__logo__do">do</h1>
              <h1 className="home__header__logo__thank">thank</h1>
            </div>
          </div>
          <div className="resouces__body">
          
            <div className="resources__title">
              <p>Resources</p>
            </div>

            <div>

              <div className="resources__content">
                <h2>Coming Soon!!!</h2>

                

              </div>
              
            </div>

          </div>
          
        </div>
      </div>


    )
  }

}

// =Dosis|Droid+Sans|Lobster|Nunito|PT+Sans+Narrow|Quicksand|Shadows+Into+Light|Varela+Round
const styles = {
  image: {
    maxHeight: 300,
  },
  h3: {
    fontSize: 9 + "em",
    fontFamily: 'Lobster'
  },
  h4: {
    fontSize: 9.8 + "em",
    fontFamily: 'Shadows Into Light',
  },
  h5: {
    fontSize: 4.2 + 'em',
    fontFamily: 'Nunito',
  },
  h6: {
    fontSize: 2.9 + 'em',
    fontFamily: 'Dosis',
  }
}


export default Resources;


// <div>
//   <h4>So why the name, nom.nom.nom?</h4>
//   <p>Good question and no clue! Just kidding, i just wanted to make it sound more profound then cutting off the beginning of nominate and repeating it two more times because it kinda sounded cool and Cookie Monster-ish… In fact (pic of cookie)  we are endorsed by him… just kidding and please don’t sue us PBS! We don’t have anything to take!! </p>
// </div>


// <p>...to create an app that not only makes it easy to activate and empower people, but also makes it really easy for them to participate in a local and national level. This is going to involve several different steps:
// </p>
// <ol className="resources__content__list">
//   <li>Identifying and creating a bot/scraper or something that will go out and grab all the info about the open / uncontested elections throughout the country</li>
//   <li>Putting this info on our site in an easy, searchable way</li>
// </ol>
// <p>
//   Okay, so it isn't a ridiculously long list but that doesn't mean it isnt hard or going to be a quick project...
// </p>
// <p>
//   What it does mean is if anyone wants to help, youd be on my Christmas card list for eternity! But, in lieu of the app, onward thusly to some good ole fashioned links and stuff :)
// </p>

// <div className="resources__content__links">

// <h2>Links and Resources are Coming Soon!</h2>

// </div>