import React, { Component } from "react";
import "../Card.css";

// over.addEventListener('mouseenter', _enterEvent);

class Daummobile extends Component {
  
  render() {
    return (
      <div>
        <div className="work-detail-container">
        <div className="work-info">
            <div className="work-info-title">Daum Mobile <br/>UI Update</div>
            <div className="work-info-detail">
            다음 모바일의 통합검색 개편. 모바일 검색 전체 개편을 한 후, 카카오톡에 검색결과가 들어가게 되었다. 
              </div>
            <div className="work-info-add">
              <div>2018 <div className="text-bar" />Kakao Corp</div>
              <div className="work-cowork">Cowork with Minjeung Kim as PM, Jaemin Lee, Seoyoung Choi
            </div>
            </div>
          </div>
        
          
          <img
            className="work-img"
            src="http://leejoonmo.com/workimg/daummobile/01.jpg"
            alt=" "
          />
          <img
            className="work-img"
            src="http://leejoonmo.com/workimg/daummobile/02.jpg"
            alt=" "
          />
          <img
            className="work-img"
            src="http://leejoonmo.com/workimg/daummobile/03.jpg"
            alt=" "
          />
          <img
            className="work-img"
            src="http://leejoonmo.com/workimg/daummobile/04.jpg"
            alt=" "
          />
          <img
            className="work-img"
            src="http://leejoonmo.com/workimg/daummobile/05.jpg"
            alt=" "
          />
          <img
            className="work-img"
            src="http://leejoonmo.com/workimg/daummobile/06.jpg"
            alt=" "
          />
                   
          
        </div>
      </div>
    );
  }
}

export default Daummobile;

// import YouTube from "react-youtube";
// const opts = {
//     width: "1280",
//     height: "720",
//     playerVars: {
//       // https://developers.google.com/youtube/player_parameters
//       autoplay: 0,
//       rel: 0
//     }
//   };
// import React from 'react';

// class Example extends React.Component {
//   render() {
//     const opts = {
//       height: '390',
//       width: '640',
//       playerVars: { // https://developers.google.com/youtube/player_parameters
//         autoplay: 1
//       }
//     };

//     return (
  // <YouTube
  //   videoId="2g811Eo7K8U"
  //   opts={opts}
  //   onReady={this._onReady}
  // />
//     );
//   }

//   _onReady(event) {
//     // access to player in all event handlers via event.target
//     event.target.pauseVideo();
//   }
// }
