
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';


class Footer extends Component {

  render() {
    return (

      <div id="footer" className="navbar-fixed-bottom" style={{ height: 30, color: "#fff" }}>
        <div className="container-fluid" style={{ backgroundColor: '#004687' }}>
           <div className="row" style={{ paddingTop: 4 }}>

              <div className="col-xs-6 col-md-4">
                <p>
                  <Link to="mailto:call.up.change@gmail.com?Subject=CallUp%20Shout%20Out" target="_top" style={{ color: '#fff' }}>
                    call.up.change@gmail.com
                  </Link>
                </p>
              </div>

              <div className="hidden-xs col-sm-4 col-md-4 text-center">
                <p style={{ fontSize: 1.2 + 'em' }}>
                  Good people cause change. (period)
                </p>
              </div>

              <div className="hidden-xs col-md-4">
                  <p className="pull-right" >
                    Made in Denver, Colorado
                  </p>
              </div>

            </div>
        </div>
      </div>

    );
  }
}

export default Footer;
