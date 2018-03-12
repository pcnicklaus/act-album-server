import React, { Component } from 'react';
import { Link } from 'react-router';
import * as actions from '../actions';


class Story extends Component {

  render() {
    return (
      <div>
        <div className="container-fluid" id="story" style={{ marginBotton: 50 }}>

          <div className="row" style={{ paddingTop: 40, paddingBottom: 30, backgroundColor: '#BBBEBE', lineHeight: 0.85 }}>
            <div className='col-md-5'><img src="../images/amazing_image.jpg" className="img img-responsive" style={{ maxHeight: 800 }}/></div>
            <div className='col-md-7' style={{ marginTop: 90, color: '#f6f6f6', paddingLeft: 10, paddingTop: 10, paddingBottom: 10, borderRadius: 5 }}>
              <p style={ styles.h3 }>This is the story</p>
              <p style={ styles.h4 }>How an image</p>
              <p style={ styles.h5 }>Caused a guy to have an idea</p>
              <h6 style={ styles.h6 }>That he hopes will help really cause change.</h6>
            </div>
          </div>

          <div className="story row" style={{ paddingTop: 40, paddingBottom: 60, backgroundColor: '#fff', color: '#000000', fontSize: 1.2 + 'em' }}>

            <div className="col-md-2"></div>
            <div className="col-md-8">
              <h2 style={{ fontFamily: 'Lobster', fontSize: 3 + 'em' }}>A long time ago...</h2>
              <p style={{ fontSize: .5 + 'em' }}>actualy it was only 6 or so months ago... </p>
              <p>there once was an idealist, who  was crushed by reality. He fell into a profound malaise before descending even further into the depths of nihilism and apathy because of the toxic divisiveness and partisanship that gripped his country... I hope you werent expectin a happy story, were you? </p>
              <p>This idealist found hope in the passionate people he encountered and realized that if he could find away to put these people in positions with some power, they would cause change for the good. But how could he do this? The couple that he tried himself politely humored him, then brushed him aside because he was just one person. Dun-dun-da-da-daaaaaaaa, Call Up was born.
              </p>
            </div>
          </div>
          <div className="container-fluid" style={{ paddingTop: 40, marginLeft: -10, marginRight: -10, paddingBottom:40, fontSize: 1.2 + 'em', backgroundColor: '#C7FFFD'}}>
            <h4 style={{ fontSize: 3 + 'em', fontFamily: 'Nunito', marginTop: 30, textAlign: 'center' } }>Now time for a super quick Q&A</h4>
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-8">
                <h4 style={{ fontFamily: 'Shadows Into Light', fontSize: 1.5 + 'em' }}>What do you hope to achieve here?</h4>
                <p>Our main goal is to help people activate other people. We know there are amazing, badass people everywhere and we know the world would be a much better place if we could convince them to represent us. We want to make this easier. In our fantasy dream world, Call Up helps any and everyone participate, empower, support, manage, volunteer for and fund any person for any position that makes the world better. </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-8" style={{ paddingBottom: 100 }}>
                <h4 style={{ fontFamily: 'Shadows Into Light', fontSize: 1.5 + 'em' }}>What can we do to help?</h4>
                <p>Anything!! Everything!!! Something!! Not Nothing!!! Wait, that work… Am I still typing… :)  But seriously, drop us a line at call.up.change@gmail.com because we could sure use your help!!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

const styles = {
  image: {
    maxHeight: 300,
  },
  h3: {
    fontSize: 8.7 + "em",
    fontFamily: 'Lobster'
  },
  h4: {
    fontSize: 11 + "em",
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


export default Story;


// <div>
//   <h4>So why the name, nom.nom.nom?</h4>
//   <p>Good question and no clue! Just kidding, i just wanted to make it sound more profound then cutting off the beginning of nominate and repeating it two more times because it kinda sounded cool and Cookie Monster-ish… In fact (pic of cookie)  we are endorsed by him… just kidding and please don’t sue us PBS! We don’t have anything to take!! </p>
// </div>
