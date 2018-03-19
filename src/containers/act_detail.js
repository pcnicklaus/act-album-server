import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../actions';
import SocialShare from '../components/social_share';

import './act_detail.css';

class ActDetail extends Component {

  state = {}

  async componentDidMount() {
    console.log('this.props componeont did moutn act detail', this.props)
    // const { _id } = this.props.params;
    await this.props.fetchAct(this.props.params.id);
  }


  render() {

    console.log('this.props', this.props)

    if(!this.props.act) { 
      return <div>loading</div>
    }
    const act = this.props.act;

    const dateString = new Date(act.updatedAt)
    // console.log('dateString', dateString.toDateString().toString());
    // console.log('dateString', typeof dateString.toDateString());

    // if (!act.title) { return <div>yo</div>; }
    // console.log('callup2', Objecallup['signatures'].length)
    // console.log('ccallup3', callup.signatures.length)
    return (
      <div>
        <div className="home__header">
            <div className="home__header__logo">
                <h1 className="home__header__logo__do">do</h1>
                <h1 className="home__header__logo__thank">thank</h1>
            </div>
        </div>

        <div className="actDetail">

          <div className="actDetail__content">

            <div className="actDetail__verbiage">
              
              <div className="actDetail__title">
                <h2>{ act.title }</h2>
              </div>
              
              <div className="actDetail__body">
                <h3 className="actDetail__verbiage__kind">
                { act.kind }</h3>

                <h6 className="actDetail__verbiage__date">
                { dateString.toDateString() }</h6>

                <h6 className="actDetail__verbiage__description">
                { act.description }</h6>
              </div>

            </div>
              
            <div className="actDetail__image" style={{ backgroundImage: `url(${act.image})`}}>
            </div>

          </div>
        </div>


      </div>
    )
  }

}
  // <p>{ this.state.votes.count() }s Booms</p>

function mapStateToProps(state) {
  console.log('map state to prps', state)
  return {
    act: state.acts.activeAct
  }
}

export default connect(mapStateToProps, actions)(ActDetail);

// style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}

// <div >
//   <ul >
//     <li><i className="fa fa-clock-o"></i>{ this.props.callup.date }</li>
//     <li><Link className="list-group" href="#"><i className="fa fa-comments-o"></i>12</Link></li>
//     <li><Link href="#"><i className="fa fa-facebook"> </i>21</Link></li>
//     <li><Link href="#"><i className="fa fa-twitter"> </i>5</Link></li>
//   </ul>
// </div>
