import React, { Component } from 'react';
import {
  ShareButtons,
  ShareCounts,
  generateShareIcon,
} from 'react-share';

// import exampleImage from './da3d8140e097582c686c2b72bd80d582.png';

const {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  PinterestShareButton,
  VKShareButton,
  OKShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  RedditShareButton,
} = ShareButtons;

const {
  FacebookShareCount,
  GooglePlusShareCount,
  LinkedinShareCount,
  PinterestShareCount,
  VKShareCount,
  OKShareCount,
  RedditShareCount,
} = ShareCounts;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');
const PinterestIcon = generateShareIcon('pinterest');
const VKIcon = generateShareIcon('vk');
const OKIcon = generateShareIcon('ok');
const TelegramIcon = generateShareIcon('telegram');
const WhatsappIcon = generateShareIcon('whatsapp');
const RedditIcon = generateShareIcon('reddit');

class SocialShare extends Component {
  render() {
    const shareUrl = 'http://github.com';
    const title = 'GitHub';

    return (
      <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: 15 }} id="social_share">

        <div style={ styles.shareButtons }>
          <FacebookShareButton
            url={String(window.location)}
            title={`Good people cause change! ${this.props.callup.who} for ${ this.props.callup.for_what }!! ${this.props.callup.why}. calloutchange.herokuapp.com/${this.props.callup._id}`}
            className="social_share_buttons">
            <FacebookIcon
              size={40}
              round />
          </FacebookShareButton>
        </div>

        <div style={ styles.shareButtons }>
          <TwitterShareButton
            url={String(window.location)}
            title={`${this.props.callup.who} for ${ this.props.callup.for_what }!! Good people cause change! Help us find em! #callup`}
            className="social_share_buttons">
            <TwitterIcon
              size={40}
              round />
          </TwitterShareButton>
        </div>


        <div style={ styles.shareButtons }>
          <WhatsappShareButton
            url={String(window.location)}
            title={`${this.props.callup.who} for ${ this.props.callup.for_what }!! Good people cause change! Help us find em! callupchange.herokuapp.com`}
            separator=":: "
            className="social_share_buttons">
            <WhatsappIcon size={40}
              round
            />
          </WhatsappShareButton>
        </div>

        <div style={ styles.shareButtons }>
          <GooglePlusShareButton
            url={String(window.location)}
            className="social_share_buttons">
            <GooglePlusIcon
              size={40}
              round
              />
          </GooglePlusShareButton>
        </div>

        <div style={ styles.shareButtons }>
          <LinkedinShareButton
            url={String(window.location)}
            title={`Good people cause change! ${this.props.callup.who} for ${ this.props.callup.for_what }!! ${this.props.callup.why}. calloutchange.herokuapp.com/${this.props.callup._id}`}
            windowWidth={750}
            windowHeight={600}
            className="social_share_buttons">
            <LinkedinIcon
              size={40}
              round
               />
          </LinkedinShareButton>
        </div>

        <div style={ styles.shareButtons }>
          <RedditShareButton
            url={String(window.location)}
            title={`Good people cause change! ${this.props.callup.who} for ${ this.props.callup.for_what }!! ${this.props.callup.why}. calloutchange.herokuapp.com/${this.props.callup._id}`}
            windowWidth={660}
            windowHeight={460}
            className="social_share_buttons"
          >
            <RedditIcon
              size={40}
              round
            />
          </RedditShareButton>
        </div>

      </div>
    );
  }
}

const styles = {
  shareButtons: {
    display: 'inline-block',
    width: 16 + '%',
    verticalAlign: 'top',
  }
}

export default SocialShare;

// <div style={ styles.shareButtons }>
//   <img src='../../images/bomb_button.svg' style={{ height: 40, width: 32}}/>
// </div>
