import React, { Component } from "react";
import "../Card.css";

// over.addEventListener('mouseenter', _enterEvent);

class Cheerup extends Component {
  render() {
    return (
      <div>
        <div className="work-detail-container">

          <div className="work-info">
            <div className="work-info-title">Cheer Up</div>
            <div className="work-info-detail">
              세계적 테러와 재난, 대한민국의 혼란스러운 시국으로 많은 사람들이 힘들어 하고 있던 시기에 Cheer up 메세지를 전달하고자 했다.
  이모티콘과 서비스 이벤트들을 통한 캠페인을 했다.
              </div>
            <div className="work-info-add">
              <div>2016 <div className="text-bar" />Kakao Corp</div>
              <div className="work-cowork">Cowork with Junggun Park Hansam Lee
            </div>
            </div>
          </div>

          <div className="youtube-container">
            <div className="youtube-container-ratio">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/5z_Qw5IsJok"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="worktitle"
              />
            </div>
          </div>
          <div className = "work-uptext">Still Image</div>
          <img
            className="work-img"
            src="http://leejoonmo.com/workimg/cheerup/01.jpg"
            alt=" "
          />
          <img
            className="work-img"
            src="http://leejoonmo.com/workimg/cheerup/02.jpg"
            alt=" "
          />
          <img
            className="work-img"
            src="http://leejoonmo.com/workimg/cheerup/03.jpg"
            alt=" "
          />
          <img
            className="work-img"
            src="http://leejoonmo.com/workimg/cheerup/04.jpg"
            alt=" "
          />
          <img
            className="work-img"
            src="http://leejoonmo.com/workimg/cheerup/05.jpg"
            alt=" "
          />
          <img
            className="work-img"
            src="http://leejoonmo.com/workimg/cheerup/06.jpg"
            alt=" "
          />
                    <img
            className="work-img"
            src="http://leejoonmo.com/workimg/cheerup/07.jpg"
            alt=" "
          />
                    <img
            className="work-img"
            src="http://leejoonmo.com/workimg/cheerup/08.jpg"
            alt=" "
          />
                    <img
            className="work-img"
            src="http://leejoonmo.com/workimg/cheerup/09.jpg"
            alt=" "
          />


        </div>
      </div>
    );
  }
}

export default Cheerup;
