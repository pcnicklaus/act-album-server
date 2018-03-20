import React, { Component } from 'react';
import { Link } from 'react-router';
import * as actions from '../actions';
import './story.css';


class Story extends Component {

  render() {
    return (
      <div >
        <div className="story" id="story">
          <div className="home__header">
            <div className="home__header__logo">
              <h1 className="home__header__logo__do">do</h1>
              <h1 className="home__header__logo__thank">thank</h1>
            </div>
          </div>
          <div class="story__body">
            <div className="story__title">
                <p>Our Story</p>
            </div>

            <div className="story__content">

              <div className="story__content__one">
                <h2 >A long time ago...</h2>
                <p className="story__content__one__subhead">actually it was only 6 or so months ago... </p>
                <p className="story__para__one">There once was an idealist, who  was crushed by reality. He fell into a profound malaise before descending even further into the depths of nihilism and apathy because of the toxic divisiveness and partisanship that gripped his country... I hope you werent expectin a happy story, were you? </p>
                <p>This idealist found hope in the passionate people he encountered and realized that if he could find away to put these people in positions with some power, they would cause change for the good. But how could he do this? The couple that he tried himself politely humored him, then brushed him aside because he was just one person. Dun-dun-da-da-daaaaaaaa, Call Up was born.
                </p>
              </div>

              <div className="story__content__two" >
                <h2 className="story__content__two__title">Now time for a super quick Q&A...</h2>
                <div className="story__content__two__body">
                  <h4><span>Q.</span>What do you hope to achieve here?</h4>
                  <p><span>A.</span>Our main goal is to help people activate other people. We know there are amazing, badass people everywhere and we know the world would be a much better place if we could convince them to represent us. We want to make this easier. In our fantasy dream world, Call Up helps any and everyone participate, empower, support, manage, volunteer for and fund any person for any position that makes the world better. </p>
                </div>
              </div>

              <div className="story__content__three">
                <h2>What can you do to help?</h2>
                <p>Anything! Everything! Something! Not Nothing! Soon? Sooner? Late? Latte? That sounds delicious!! Wait a second... Am I still typing? But seriously, drop us a line at act <a href="mailto:do.thank.album@gmail.com?Subject=Help%20sweet%20help" className="mailto--link" target="_top">do.thank.album@gmail.com</a> because we could sure use your help!!</p>
              </div>

            

            </div>
          </div>
          

        </div>
      </div>

    )

  }

}




export default Story;
