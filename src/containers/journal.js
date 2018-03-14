import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { reduxForm } from 'redux-form';
import moment from 'moment';
import axios from 'axios';

import SelectingFormValuesForm from './act_create';

import Card from '../components/card';
import ActForm from './act_form';
import Modal from '../components/modal';

import * as actions from '../actions'
import './journal.css';

// import FeedEvent from '../components/FeedEvent'
// import { FETCH_ACTS } from '../actions/types';


class Journal extends Component {
  
  state = {
    previousDate: '',
    acts: [
        { _id: 'a5aa17fe2b7d3e7f996a30d0sa',
          user: '5aa1734a126c22fe7769a401',
          kind: 'do',
          title: 'so there was that thing',
          description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. ',
          image: 'https://cdn.images.express.co.uk/img/dynamic/143/590x/Nintendo-Switch-Stock-778844.jpg' 
        },
        { _id: 'q5aa17fe2b7d3e7f996a30sd0a',
          user: '5aa1734a126c22fe7769a401',
          kind: 'do',
          title: 'There once was a man',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ',
          image: 'http://www.birminghamtimes.com/wp-content/uploads/2016/01/happy.jpg' 
        },
        { _id: '5aa17fe2b7d3e7f996as30d0a',
          user: '5aa1734a126c22fe7769a401',
          kind: 'thank',
          title: 'Yay so there was that thing',
          description: 'stuff and things Contrary to popular belief, Lorem Ipsum is not simply random text. ',
          image: 'http://c3.thejournal.ie/media/2013/03/state-of-the-nation-children-752x501.jpg' 
        },
        { _id: '5aa17fe2b7d3e7f9s96a30d0a',
          user: '5aa1734a126c22fe7769a401',
          kind: 'do',
          title: 'howowowowowo so there was that thing',
          description: 'why oh why Contrary to popular belief, Lorem Ipsum is not simply random text. ',
          image: 'https://www.lifestan.com/wp-content/uploads/2017/10/happy.jpg' 
        },
        { _id: '5aa17fe2b7d3se7f9s96a30d0a',
          user: '5aa1734a126c22fe7769a401',
          kind: 'do',
          title: 'My golly gee whiz so there was that thing',
          description: 'that sure was something Contrary to popular belief, Lorem Ipsum is not simply random text. ',
          image: 'https://www.livehappy.com/sites/default/files/styles/article_featured/public/main/articles/Happy-People-Sized.jpg?itok=u7umGt7r' 
        },
        { _id: '5aa17fe2sb7d3e7f996a30d0sa',
          user: '5aa1734a126c22fe7769a401',
          kind: 'do',
          title: 'hi there was that thing',
          description: 'so what to popular belief, Lorem Ipsum is not simply random text. ',
          image: 'https://cdn.images.express.co.uk/img/dynamic/143/590x/Nintendo-Switch-Stock-778844.jpg' 
        },
        { 
          _id: 'w15aa17sfe2b7d3e7f9s96a30d0a',
          user: '5aa1734a126c22fe7769a401',
          kind: 'do',
          title: 'howdowowowowo so there was that thing',
          description: 'why oh why Contrary to popular belief, Lorem Ipdsum is not simply random text. ',
          image: 'https://www.lifestan.com/wp-content/uploads/2017/10/happy.jpg' 
        },
        { _id: 'e5adfa17fe2b7d3e7f996a30d0sa',
          user: '5aa1734a126c22fe7769a401',
          kind: 'do',
          title: 'so there was that thing',
          description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. ',
          image: 'https://cdn.images.express.co.uk/img/dynamic/143/590x/Nintendo-Switch-Stock-778844.jpg' 
        },
        { 
          _id: '15aa17fe2b7d3e7f996a30sd0a',
          user: '5aa1734a126c22fe7769a401',
          kind: 'do',
          title: 'There once was a man',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ',
          image: 'http://www.birminghamtimes.com/wp-content/uploads/2016/01/happy.jpg' 
        },
        { _id: '25aa17fe2b7d3e7f996as30d0a',
          user: '5aa1734a126c22fe7769a401',
          kind: 'thank',
          title: 'Yay so there was that thing',
          description: 'stuff and things Contrary to popular belief, Lorem Ipsum is not simply random text. ',
          image: 'http://c3.thejournal.ie/media/2013/03/state-of-the-nation-children-752x501.jpg' 
        },
        { _id: '35aa17fe2b7d3e7f9s96a30d0a',
          user: '5aa1734a126c22fe7769a401',
          kind: 'do',
          title: 'howowowowowo so there was that thing',
          description: 'why oh why Contrary to popular belief, Lorem Ipsum is not simply random text. ',
          image: 'https://www.lifestan.com/wp-content/uploads/2017/10/happy.jpg' 
        },
        { _id: '45aa17fe2b7d3se7f9s96a30d0a',
          user: '5aa1734a126c22fe7769a401',
          kind: 'do',
          title: 'My golly gee whiz so there was that thing',
          description: 'that sure was something Contrary to popular belief, Lorem Ipsum is not simply random text. ',
          image: 'https://www.livehappy.com/sites/default/files/styles/article_featured/public/main/articles/Happy-People-Sized.jpg?itok=u7umGt7r' 
        },
        { _id: '65aa17fe2sb7d3e7f996a30d0sa',
          user: '5aa1734a126c22fe7769a401',
          kind: 'do',
          title: 'hi there was that thing',
          description: 'so what to popular belief, Lorem Ipsum is not simply random text. ',
          image: 'https://cdn.images.express.co.uk/img/dynamic/143/590x/Nintendo-Switch-Stock-778844.jpg' 
        },
        {
          _id: '75aa17sfe2b7d3e7f9s96a30d0a',
          user: '5aa1734a126c22fe7769a401',
          kind: 'do',
          title: 'howdowowowowo so there was that thing',
          description: 'why oh why Contrary to popular belief, Lorem Ipdsum is not simply random text. ',
          image: 'https://www.lifestan.com/wp-content/uploads/2017/10/happy.jpg' 
        },
        { 
          _id: '335aa17fe2b7d3e7f996a30d0sa',
          user: '5aa1734a126c22fe7769a401',
          kind: 'do',
          title: 'so there was that thing',
          description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. ',
          image: 'https://cdn.images.express.co.uk/img/dynamic/143/590x/Nintendo-Switch-Stock-778844.jpg' 
        },
        { 
          _id: '225aa17fe2b7d3e7f996a30sd0a',
          user: '5aa1734a126c22fe7769a401',
          kind: 'do',
          title: 'There once was a man',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ',
          image: 'http://www.birminghamtimes.com/wp-content/uploads/2016/01/happy.jpg' 
        },
        { 
          _id: '115aa17fe2b7d3e7f996as30d0a',
          user: '5aa1734a126c22fe7769a401',
          kind: 'thank',
          title: 'Yay so there was that thing',
          description: 'stuff and things Contrary to popular belief, Lorem Ipsum is not simply random text. ',
          image: 'http://c3.thejournal.ie/media/2013/03/state-of-the-nation-children-752x501.jpg' 
        },
        { 
          _id: '775aa17fe2b7d3e7f9s96a30d0a',
          user: '5aa1734a126c22fe7769a401',
          kind: 'do',
          title: 'howowowowowo so there was that thing',
          description: 'why oh why Contrary to popular belief, Lorem Ipsum is not simply random text. ',
          image: 'https://www.lifestan.com/wp-content/uploads/2017/10/happy.jpg' 
        },
        { 
          _id: 'j5aa17fe2b7d3se7f9s96a30d0a',
          user: '5aa1734a126c22fe7769a401',
          kind: 'do',
          title: 'My golly gee whiz so there was that thing',
          description: 'that sure was something Contrary to popular belief, Lorem Ipsum is not simply random text. ',
          image: 'https://www.livehappy.com/sites/default/files/styles/article_featured/public/main/articles/Happy-People-Sized.jpg?itok=u7umGt7r' 
        },
        { 
          _id: 'jj5aa17fe2sb7d3e7f996a30d0sa',
          user: '5aa1734a126c22fe7769a401',
          kind: 'do',
          title: 'hi there was that thing',
          description: 'so what to popular belief, Lorem Ipsum is not simply random text. ',
          image: 'https://cdn.images.express.co.uk/img/dynamic/143/590x/Nintendo-Switch-Stock-778844.jpg' 
        },
        { 
          _id: 'n5aa17sfe2b7d3e7f9s96a30d0a',
          user: '5aa1734a126c22fe7769a401',
          kind: 'do',
          title: 'howdowowowowo so there was that thing',
          description: 'why oh why Contrary to popular belief, Lorem Ipdsum is not simply random text. ',
          image: 'https://www.lifestan.com/wp-content/uploads/2017/10/happy.jpg' 
        }, 
        { 
          _id: 'nn5aa17fe2b7d3e7f996a30d0sa',
          user: '5aa1734a126c22fe7769a401',
          kind: 'do',
          title: 'so there was that thing',
          description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. ',
          image: 'https://cdn.images.express.co.uk/img/dynamic/143/590x/Nintendo-Switch-Stock-778844.jpg' 
        },
        { 
          _id: '5aa5517fe2b7d3e7f996a30sd0a',
          user: '5aa1734a126c22fe7769a401',
          kind: 'do',
          title: 'There once was a man',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ',
          image: 'http://www.birminghamtimes.com/wp-content/uploads/2016/01/happy.jpg' 
        },
        { 
          _id: '5aa1667fe2b7d3e7f996as30d0a',
          user: '5aa1734a126c22fe7769a401',
          kind: 'thank',
          title: 'Yay so there was that thing',
          description: 'stuff and things Contrary to popular belief, Lorem Ipsum is not simply random text. ',
          image: 'http://c3.thejournal.ie/media/2013/03/state-of-the-nation-children-752x501.jpg' 
        },
        { 
          _id: '5aa17fye2b7d3e7f9s96a30d0a',
          user: '5aa1734a126c22fe7769a401',
          kind: 'do',
          title: 'howowowowowo so there was that thing',
          description: 'why oh why Contrary to popular belief, Lorem Ipsum is not simply random text. ',
          image: 'https://www.lifestan.com/wp-content/uploads/2017/10/happy.jpg' 
        },
        { 
          _id: '5aa17fyye2b7d3se7f9s96a30d0a',
          user: '5aa1734a126c22fe7769a401',
          kind: 'do',
          title: 'My golly gee whiz so there was that thing',
          description: 'that sure was something Contrary to popular belief, Lorem Ipsum is not simply random text. ',
          image: 'https://www.livehappy.com/sites/default/files/styles/article_featured/public/main/articles/Happy-People-Sized.jpg?itok=u7umGt7r' 
        },
        { 
          _id: '5aa17fe2sbyy7d3e7f996a30d0sa',
          user: '5aa1734a126c22fe7769a401',
          kind: 'do',
          title: 'hi there was that thing',
          description: 'so what to popular belief, Lorem Ipsum is not simply random text. ',
          image: 'https://cdn.images.express.co.uk/img/dynamic/143/590x/Nintendo-Switch-Stock-778844.jpg' 
        },
        { 
          _id: '5aa17sfe2b7d3eyyy7f9s96a30d0a',
          user: '5aa1734a126c22fe7769a401',
          kind: 'do',
          title: 'howdowowowowo so there was that thing',
          description: 'why oh why Contrary to popular belief, Lorem Ipdsum is not simply random text. ',
          image: 'https://www.lifestan.com/wp-content/uploads/2017/10/happy.jpg' 
        },
        { 
          _id: '5aa17fe2b7yyd3e7f996a30d0sa',
          user: '5aa1734a126c22fe7769a401',
          kind: 'do',
          title: 'so there was that thing',
          description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. ',
          image: 'https://cdn.images.express.co.uk/img/dynamic/143/590x/Nintendo-Switch-Stock-778844.jpg' 
        },
        { 
          _id: '5aa17fe2b7d3e7yyf996a30sd0a',
          user: '5aa1734a126c22fe7769a401',
          kind: 'do',
          title: 'There once was a man',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ',
          image: 'http://www.birminghamtimes.com/wp-content/uploads/2016/01/happy.jpg' 
        },
        { 
          _id: '5aa17fe2b7d3e7fyy996as30d0a',
          user: '5aa1734a126c22fe7769a401',
          kind: 'thank',
          title: 'Yay so there was that thing',
          description: 'stuff and things Contrary to popular belief, Lorem Ipsum is not simply random text. ',
          image: 'http://c3.thejournal.ie/media/2013/03/state-of-the-nation-children-752x501.jpg' 
        },
        { 
          _id: '5aa17fe2b7d3eyy7f9s96a30d0a',
          user: '5aa1734a126c22fe7769a401',
          kind: 'do',
          title: 'howowowowowo so there was that thing',
          description: 'why oh why Contrary to popular belief, Lorem Ipsum is not simply random text. ',
          image: 'https://www.lifestan.com/wp-content/uploads/2017/10/happy.jpg' 
        },
        { 
          _id: '5aa17fe2b7d3syye7f9s96a30d0a',
          user: '5aa1734a126c22fe7769a401',
          kind: 'do',
          title: 'My golly gee whiz so there was that thing',
          description: 'that sure was something Contrary to popular belief, Lorem Ipsum is not simply random text. ',
          image: 'https://www.livehappy.com/sites/default/files/styles/article_featured/public/main/articles/Happy-People-Sized.jpg?itok=u7umGt7r' 
        },
        { 
          _id: '5aa17fe2sb7dyyy3e7f996a30d0sa',
          user: '5aa1734a126c22fe7769a401',
          kind: 'do',
          title: 'hi there was that thing',
          description: 'so what to popular belief, Lorem Ipsum is not simply random text. ',
          image: 'https://cdn.images.express.co.uk/img/dynamic/143/590x/Nintendo-Switch-Stock-778844.jpg' 
        },
        { 
          _id: '5aa17sfe2b7d3e744f9s96a30d0a',
          user: '5aa1734a126c22fe7769a401',
          kind: 'do',
          title: 'howdowowowowo so there was that thing',
          description: 'why oh why Contrary to popular belief, Lorem Ipdsum is not simply random text. ',
          image: 'https://www.lifestan.com/wp-content/uploads/2017/10/happy.jpg' 
        },
        { 
          _id: '5aa17fe2b7d3e744f996a30d0sa',
          user: '5aa1734a126c22fe7769a401',
          kind: 'do',
          title: 'so there was that thing',
          description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. ',
          image: 'https://cdn.images.express.co.uk/img/dynamic/143/590x/Nintendo-Switch-Stock-778844.jpg' 
        },
        { 
          _id: '5aa17fe2b7d3e7f996a5530sd0a',
          user: '5aa1734a126c22fe7769a401',
          kind: 'do',
          title: 'There once was a man',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ',
          image: 'http://www.birminghamtimes.com/wp-content/uploads/2016/01/happy.jpg' 
        },
        { 
          _id: '5aa17fe2b7d3e777f996as30d0a',
          user: '5aa1734a126c22fe7769a401',
          kind: 'thank',
          title: 'Yay so there was that thing',
          description: 'stuff and things Contrary to popular belief, Lorem Ipsum is not simply random text. ',
          image: 'http://c3.thejournal.ie/media/2013/03/state-of-the-nation-children-752x501.jpg' 
        },
        { 
          _id: '5aa17fe2b7d333e7f9s96a30d0a',
          user: '5aa1734a126c22fe7769a401',
          kind: 'do',
          title: 'howowowowowo so there was that thing',
          description: 'why oh why Contrary to popular belief, Lorem Ipsum is not simply random text. ',
          image: 'https://www.lifestan.com/wp-content/uploads/2017/10/happy.jpg' 
        },
        { 
          _id: '5aa17fe2b7d322se7f9s96a30d0a',
          user: '5aa1734a126c22fe7769a401',
          kind: 'do',
          title: 'My golly gee whiz so there was that thing',
          description: 'that sure was something Contrary to popular belief, Lorem Ipsum is not simply random text. ',
          image: 'https://www.livehappy.com/sites/default/files/styles/article_featured/public/main/articles/Happy-People-Sized.jpg?itok=u7umGt7r' 
        },
        { 
          _id: '5aa17fe2sb7d3e227f996a30d0sa',
          user: '5aa1734a126c22fe7769a401',
          kind: 'do',
          title: 'hi there was that thing',
          description: 'so what to popular belief, Lorem Ipsum is not simply random text. ',
          image: 'https://cdn.images.express.co.uk/img/dynamic/143/590x/Nintendo-Switch-Stock-778844.jpg' 
        },
        { 
          _id: '5aa17sfe2b7d333e7f9s96a30d0a',
        user: '5aa1734a126c22fe7769a401',
        kind: 'do',
        title: 'howdowowowowo so there was that thing',
        description: 'why oh why Contrary to popular belief, Lorem Ipdsum is not simply random text. ',
        image: 'https://www.lifestan.com/wp-content/uploads/2017/10/happy.jpg' 
        },
        { 
          _id: '5aa17fe2b7d3e7f996a30dff0sa',
        user: '5aa1734a126c22fe7769a401',
        kind: 'do',
        title: 'so there was that thing',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. ',
        image: 'https://cdn.images.express.co.uk/img/dynamic/143/590x/Nintendo-Switch-Stock-778844.jpg' 
      },
      { 
        _id: '5aa17fe2b7d3e7f996vvva30sd0a',
        user: '5aa1734a126c22fe7769a401',
        kind: 'do',
        title: 'There once was a man',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ',
        image: 'http://www.birminghamtimes.com/wp-content/uploads/2016/01/happy.jpg' 
      },
      { 
        _id: '5aa17fe2b7d3e7f996vvas30d0a',
        user: '5aa1734a126c22fe7769a401',
        kind: 'thank',
        title: 'Yay so there was that thing',
        description: 'stuff and things Contrary to popular belief, Lorem Ipsum is not simply random text. ',
        image: 'http://c3.thejournal.ie/media/2013/03/state-of-the-nation-children-752x501.jpg' 
      },
      { 
        _id: '5aa17fe2b7d3e7f9ccs96a30d0a',
        user: '5aa1734a126c22fe7769a401',
        kind: 'do',
        title: 'howowowowowo so there was that thing',
        description: 'why oh why Contrary to popular belief, Lorem Ipsum is not simply random text. ',
        image: 'https://www.lifestan.com/wp-content/uploads/2017/10/happy.jpg' 
      },
      { 
        _id: '5aa17fe2b7d3se7f9s9hh6a30d0a',
        user: '5aa1734a126c22fe7769a401',
        kind: 'do',
        title: 'My golly gee whiz so there was that thing',
        description: 'that sure was something Contrary to popular belief, Lorem Ipsum is not simply random text. ',
        image: 'https://www.livehappy.com/sites/default/files/styles/article_featured/public/main/articles/Happy-People-Sized.jpg?itok=u7umGt7r' 
      },
      { 
        _id: '5aa17fe2sb7d3e7jjf996a30d0sa',
        user: '5aa1734a126c22fe7769a401',
        kind: 'do',
        title: 'hi there was that thing',
        description: 'so what to popular belief, Lorem Ipsum is not simply random text. ',
        image: 'https://cdn.images.express.co.uk/img/dynamic/143/590x/Nintendo-Switch-Stock-778844.jpg' 
      },
      { 
        _id: '5aa17sfe2b7d3eee7f9s96a30d0a',
        user: '5aa1734a126c22fe7769a401',
        kind: 'do',
        title: 'howdowowowowo so there was that thing',
        description: 'why oh why Contrary to popular belief, Lorem Ipdsum is not simply random text. ',
        image: 'https://www.lifestan.com/wp-content/uploads/2017/10/happy.jpg' 
      }
    ],
    isModalOpen: false,
    kind: '',
    visibility: 'public',
    name: '',
    title: '',
    description: '',
    image: ''
  }

  async componentWillMount() {
    // console.log('this.state compoentnly will mount', this.state, '\n this.props\n', this.props);
    // await this.props.fetchActs()
    // await this.props.fetchUserActs(this.props.currentUser);
    // await this.props.fetchUserActs(1);
    // await this.props.fetchUserActs(this.props.user);
    // console.log('compoentnt will mpoutn user',this.props)
  }

  async componentDidMount() {
    await this.props.fetchActs();
  }


  checkDate(date) {
    // console.log('date', date, 'previousDate',this.state.previousDate);
    this.state.previousDate = date;
  }

  // return this.props.user.acts.map((act) => 
  renderGrid() {
    console.log('thisssssss', this.props);
    return this.state.acts.map((act) => {

      let dateHeader = this.checkDate(act.updated_at, this.state.previousDate);
      let date = moment(act).format('dddd MMM Do')

      return (
        <Card className="uj__act" act={ act } />
      )
      
    })
  }

  renderCommunityGrid() {
    if(!this.props.acts.communityActs) { return <div>loading</div> }

    return this.props.acts.communityActs.map((act) => {
      return (
        <Card className="uj_act" act={ act } />
      )
    })
    // console.log('thisprops', this.props)
  }


  // <div className="uj__act" style={{ backgroundImage: `url(${act.image})`}}>
  //         <h1>{act.user}</h1>
  //       </div>

  render(){
    // console.log('this.props in RENDER', this.props)
    // if(!this.props.user.acts) { return <div> loading </div> }

    return(
        <div className="uj">

          <div className="uj__header">
            
            <div className="uj__header__logo">
              <h1 className="uj__header__logo__do">do</h1>
              <h1 className="uj__header__logo__thank">thank</h1>

            </div>

            <div className="uj__header__buttons">
            
              
                <button className="uj__header__nav__button">
                <Link className="uj__header__nav__button__link" to={'/'}>home</Link>
                </button>
           
              
                <button className="uj__header__nav__button">
                <Link className="uj__header__nav__button__link" to={'/do'} >do</Link>
                </button>
              
              
                <button className="uj__header__nav__button">
                <Link className="uj__header__nav__button__link" to={'/thank'}>thank</Link>
                </button>
              
            </div>

          </div>

          <div className="uj__body">

            <div className="uj__body__box">

              <h2 className="uj__body__box__title">your do thanks</h2>
              <div className="uj__body__userActs">
                { this.renderGrid() }
              </div>
          
              <h2 className="uj__body__box__title">recent community do thanks</h2>
              <div className="uj__body__communityActs">
                { this.renderCommunityGrid() }
              </div>

            </div>
          
          </div>

        </div>
    )

  }
}

{/* <div className="uj__body__controls">
  <SelectingFormValuesForm onSubmit=  { (results) => console.log("results", results) } />
</div> */}
      //   <div className="uj__body__controls">
      //   <ActForm history={ this.props.history }/>
      // </div>

function mapStateToProps(state) {
  console.log("state map state ot props", state)
  return {
    user: state.auth,
    acts: state.acts
  }
  // return state;
}

export default connect(mapStateToProps, actions)(Journal)




// const FORM_FIELDS = {
//   who: {
//     type: 'input',
//     label: 'what\'s his or her name?',
//     class: 'col-md-6',
//   },
//   for_what: {
//     type: 'input',
//     label: 'for what? school board? congress? president?',
//     class: 'col-md-6',
//   },
//   where: {
//     type: 'input',
//     label: 'where?',
//     class: 'col-md-6',
//   },
//   email: {
//     type: 'input',
//     label: 'what\'s an email or mobile number for them?',
//     class: 'col-md-6',
//   },

//   image: {
//     type: 'input',
//     label: 'please include a link to a good pic of them! not on horrible sweater day...',
//     class: 'col-md-12'
//   },
//   why: {
//     type: 'textarea',
//     label: 'why are they so awesome? why do we need them? what problems can they solve?',
//     class: 'col-md-12',
//   }
// }

// class CallUp extends Component {

//   handleFormSubmit(formData) {
//     console.log('formData', formData)
//     const { resetForm } = this.props;
//     this.props.createCallUp(formData, () => { this.props.history.push('/') });
//   }

//   renderField(configObject, field) {
//     //there's one field helper per field. it has all the good stuff
//     const fieldHelper = this.props.fields[field]

//     return (
//       <fieldset className={`form-group ${configObject.class} ${ fieldHelper.touched && fieldHelper.invalid ? 'has-danger' : '' }`} key={ configObject.label }>
//         <label>{ configObject.label }</label>
//         <configObject.type type={ field.type } className="form-control" {...fieldHelper} />
//         <div className="text-help">
//           { fieldHelper.touched ? fieldHelper.error : '' }
//         </div>
//       </fieldset>
//     )
//   }

//   render() {

//     const { handleSubmit } = this.props;

//     return (
//       <div style={{ marginBottom: 50 }}>
//         <div className="container">
//           <div className="row">
//             <div className="col-md-1"></div>
//             <div style={{ textAlign: 'center' ,backgroundColor: '#ff442c', maxWidth: 1000, marginLeft: 'auto', marginRight: 'auto', marginTop: 50, marginBottom: 50, padding: 50, color: '#fff', borderRadius: 25, }}>
//               <h3 style={ styles.title }>CALL UP SOMEONE!</h3>
//               <h3 style={{ fontFamily: 'Lobster', fontSize: 4.25 + 'em' }}>Good people cause change</h3>
//               <h3 style={{ fontFamily: 'Droid Sans', fontSize: 5 + 'em' }}>Help us find them</h3>
//             </div>
//           </div>

//           <div style={{ marginBottom: 50 }}>
//             <form
//               className="callup-form"
//               onSubmit={ handleSubmit(this.handleFormSubmit.bind(this)) }
//               style={ styles.form }
//               >
//               <div className="row">
//                 <div className="col-md-1"></div>
//                 <div className="col-md-10">
//                   <div className="row">
//                     { _.map(FORM_FIELDS, this.renderField.bind(this)) }
//                   </div>
//                 </div>
//                 <div className="col-md-11" style={{ marginTop: 10, marginBottom: 20 }}>
//                 <button action="submit" className="btn pull-right" style={{ backgroundColor: '#004687', color: '#fff', fontFamily: 'Comfortaa', fontSize: 1.2 + 'em' }}>Call Up</button>
//                 </div>
//               </div>
//             </form>
//           </div>

//         </div>
//       </div>
//     );
//   }
// }

// const styles = {
//   title: {
//     fontSize: 6 + 'em',
//     fontFamily: 'Dosis',
//   },

//   form: {
//     fontFamily: 'QuickSand',
//     fontSize: 1.2 + 'em',
//     fontWeight: 'bold',
//   }

// }


// function validate(values) {
//   const errors = {};
  
//   _.map(FORM_FIELDS, (field, value) => {
//     if(!values[value]) {
//       errors[value] = `enter a ${value}`
//     }
//   })

//   return errors;
// }
// export default reduxForm({
//   form: 'callup',
//   fields: _.keys(FORM_FIELDS),
//   validate
// }, null, actions)(CallUp);

//// Dosis|Droid+Sans|Lobster|Nunito|PT+Sans+Narrow|Quicksand|Shadows+Into+Light|Varela+Round

// <Modal
//   isOpen={this.state.isModalOpen}
//   onClose={() => this.closeModal()}
// >

//   <div>
//     <h1>Give a boom!</h1>
//     <p>In other words, sign a nomination/petition for them!</p>

//     <hr  />

//     <fieldset className='form-group'>

//       <input id="thank" name="kind" type="radio" className="actForm__radio__input" value="do" onChange={this.handleChange} />
//       <label htmlFor="thank" className="actForm__radio__label">Do</label>

//       <input id="thank" name="kind" type="radio" className="actForm__radio__input" value="thank" onChange={this.handleChange} />
//       <label htmlFor="thank" className="actForm__radio__label">Thank</label>

//     </fieldset>

//     <fieldset className='form-group'>

//       <input id="kind" name="visibility" type="radio" className="actForm__radio__input" value="do" onChange={this.handleChange}  />
//       <label htmlFor="kind" className="actForm__radio__label">Share</label>

//       <input id="kind" name="visibility" type="radio" className="actForm__radio__input" value="private" onChange={this.handleChange}  />
//       <label htmlFor="private" className="actForm__radio__label">Private</label>

//     </fieldset>

//     <fieldset className='form-group'>
//       <label>Image URL</label>
//       <input id='formImage' className='form-control' name='image' type='text'  onChange={this.handleChange} value={this.state.image} />
//     </fieldset>

//     <fieldset className='form-group'>
//       <label>Name</label>
//       <input id='formName' className='form-control' name='name' type='text' required onChange={this.handleChange} value={this.state.name} />
//     </fieldset>
//     <fieldset className='form-group'>
//       <label>Title</label>
//       <input
//         id='formEmail' className='form-control' name='title' type='text'  onChange={this.handleChange} value={this.state.title} />
//     </fieldset>
//     <fieldset className='form-group'>
//         <label>Description</label>
//         <input id='formDescription' className='form-control' name='description' type='text'  onChange={this.handleChange} value={this.state.description} />
//     </fieldset>
//     <fieldset className='form-group'>
//         <label>Image URL</label>
//         <input id='formImage' className='form-control' name='image' type='text'  onChange={this.handleChange} value={this.state.image} />
//     </fieldset>


//     <button
//       type="button"
//       className="btn-group pull-right"
//       onClick={ () => this.closeModal() }
//       style={{ color: '#fffff', padding: 10, backgroundColor: '#004687', border: 'none', width: 110 }}
//     >
//       <p style={{ fontSize: 1.2 + 'em', justifyContent: 'center', margin: 0, color: '#fff' }}>Close
//       </p>

//     </button>

//     <button
//       type="button"
//       className='btn-group pull-right'
//       onClick={() => this.createNewAct() }
//       style={{ color: '#fffff', padding: 10, backgroundColor: '#ff442c', border: 'none', width: 120, marginRight: 1 }}
//     >
//       <p style={{ fontSize: 1.2 + 'em', justifyContent: 'center', margin: 0, color: '#fff' }}>
//         Boooooom!!
//       </p>
//     </button>


//   </div>
// </Modal>