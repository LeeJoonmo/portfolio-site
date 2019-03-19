import React, { Component } from "react";
import "../Card.css";

// over.addEventListener('mouseenter', _enterEvent);

class TestWork extends Component {
  render() {
    return (
      <div>
        <div className="work-detail-container">
          <div className="work-info">
            <div className="work-info-left">
            
              <div className="work-info-title">Happy Birthday</div>

               <div className="work-info-detail">
                프렌즈 밴드의 생일축하송, 라이언의 출시 1주년을 맞아 다양한
                서비스에서 사용할 수 있도록 생일축하 애니메이션을 제작했다.
              </div>
              
            </div>
            <div className="work-info-add-right">
            <div className="work-info-add">
                <div className="work-info-add-left">
                  
                  <br />
                  
                  <br />
                  
                </div>
                <div className="work-info-add-right">
                  Kakao Corp 
                  <br />
                  Cowork with :<br/> Soohyun Kang<br/> Junggun Park<br/> Hansam Lee <br/>2017 
                </div>
              </div>
            </div>
          </div>
          <div className="youtube-container">
            <div className="youtube-container-ratio">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/XHT7lcLpIyc"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="worktitle"
              />
            </div>
          </div>
          <div style={{ color: "#919191", fontSize: 23, paddingTop:10, paddingBottom: 15, fontWeight:700 }}>Still Image</div>
          <img
            className="work-img"
            src="http://leejoonmo.com/workimg/birthday/01.jpg"
            alt=" "
          />
          <img
            className="work-img"
            src="http://leejoonmo.com/workimg/birthday/02.jpg"
            alt=" "
          />
          <img
            className="work-img"
            src="http://leejoonmo.com/workimg/birthday/03.jpg"
            alt=" "
          />
          <img
            className="work-img"
            src="http://leejoonmo.com/workimg/birthday/04.jpg"
            alt=" "
          />
          <img
            className="work-img"
            src="http://leejoonmo.com/workimg/birthday/05.jpg"
            alt=" "
          />
          <img
            className="work-img"
            src="http://leejoonmo.com/workimg/birthday/06.jpg"
            alt=" "
          />
                    <img
            className="work-img"
            src="http://leejoonmo.com/workimg/birthday/07.jpg"
            alt=" "
          />
                    <img
            className="work-img"
            src="http://leejoonmo.com/workimg/birthday/08.jpg"
            alt=" "
          />
                    <img
            className="work-img"
            src="http://leejoonmo.com/workimg/birthday/09.jpg"
            alt=" "
          />
                    <img
            className="work-img"
            src="http://leejoonmo.com/workimg/birthday/10.jpg"
            alt=" "
          />
          <div className = "work-footer"></div>
        </div>
      </div>
    );
  }
}

export default TestWork;

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
//   <YouTube
//     videoId="2g811Eo7K8U"
//     opts={opts}
//     onReady={this._onReady}
//   />
//     );
//   }

//   _onReady(event) {
//     // access to player in all event handlers via event.target
//     event.target.pauseVideo();
//   }
// }
