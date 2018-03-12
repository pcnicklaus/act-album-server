import React, { Component } from 'react';
import { Link } from 'react-router';
import * as actions from '../actions';

/*
      TO DOOOOOOOO
  - create a list and loop over it for the suffs

*/

class Resources extends Component {

  renderList = () => {
    return(
      <div className="col-md-12">

          <div className="row">

            <a href="https://ballotpedia.org/Open_seats_in_the_2017_state_legislative_elections">
              <img src="../images/bp.png" className="img img-responsive"/>
            </a>
          </div>
          <div className="row">
            <p style={{ fontSize: 1.2 + 'em', textAlign: 'center' }}>
              ballotpedia is a wicked awesome resource and my number one go to resource for all things elections.
            </p>
          </div>

      </div>
    )
  }

  render() {
    return (
      <div style={{ marginBottom: 100 }}>
        <div className="container-fluid" id="resources" style={{ marginBotton: 50 }}>

          <div className="row" style={{ paddingTop: 40, paddingBottom: 30, backgroundColor: '#BBBEBE', lineHeight: 0.85 }}>
            <div className='col-md-2'></div>
            <div className='col-md-8'
              style={{ marginTop: 90, marginBottom: 50, color: '#f6f6f6', paddingLeft: 10, paddingTop: 10, paddingBottom: 10, borderRadius: 5 }}
              >
              <p style={ styles.h3 }>Resources</p>
            </div>
          </div>

          <div className="row" style={{ paddingTop: 40, paddingBottom: 60, backgroundColor: '#fff', color: '#000000', fontSize: 1.2 + 'em' }}>

            <div className="col-md-2"></div>

            <div className="col-md-8">
              <h2 style={{ fontFamily: 'Lobster', fontSize: 3 + 'em' }}>The plan is...</h2>

              <p>...to create an app that not only makes it easy to activate and empower people, but also makes it really easy for them to participate in a local and national level. This is going to involve several different steps:
              </p>
              <ol>
                <li>Identifying and creating a bot/scraper or something that will go out and grab all the info about the open / uncontested elections throughout the country</li>
                <li>Putting this info on our site in an easy, searchable way</li>
              </ol>
              <p>
                Okay, so it isn't a ridiculously long list but that doesn't mean it isnt hard or going to be a quick project...
              </p>
              <p>
                What it does mean is if anyone wants to help, youd be on my Christmas card list for eternity! But, in lieu of the app, onward thusly to some good ole fashioned links and stuff :)
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">

                { this.renderList() }


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
