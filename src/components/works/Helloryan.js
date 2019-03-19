import React, { Component } from "react";
import "../Card.css";

// over.addEventListener('mouseenter', _enterEvent);

class Helloryan extends Component {
  render() {
    return (
      <div>
        <div className="work-detail-container">

          <div className="work-info">
            <div className="work-info-title">Hello! Ryan</div>
            <div className="work-info-detail">
              오래도록 준비한 카카오프렌즈의 신규캐릭터 '라이언'에 대한 출시 마케팅이다.
  카카오프렌즈 내 라이언의 포지션을 굳히기 위하여, 라이언의 성격을 직접적으로 반복 전달했다.
  또한 기존 라인업에 쉽게 녹아들도록 다른 캐릭터들과 함께 모든 에피소드를 구성했다.
              </div>
            <div className="work-info-add">
              <div>2016 <div className="text-bar" />Kakao Corp</div>
              <div className="work-cowork">Cowork with Junggun Park, Jinwook Choi
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
          <div className = "work-uptext">Still Image</div>
          <img className="work-img" src="http://leejoonmo.com/workimg/helloryan/01.jpg" alt=" "/>
          <img className="work-img" src="http://leejoonmo.com/workimg/helloryan/02.jpg" alt=" "/>
          <img className="work-img" src="http://leejoonmo.com/workimg/helloryan/03.jpg" alt=" "/>
          <img className="work-img" src="http://leejoonmo.com/workimg/helloryan/04.jpg" alt=" "/>
          <img className="work-img" src="http://leejoonmo.com/workimg/helloryan/05.jpg" alt=" "/>
          <img className="work-img" src="http://leejoonmo.com/workimg/helloryan/06.jpg" alt=" "/>
          <img className="work-img" src="http://leejoonmo.com/workimg/helloryan/07.jpg" alt=" "/>
          <img className="work-img" src="http://leejoonmo.com/workimg/helloryan/08.jpg" alt=" "/>
          
        </div>
      </div>
    );
  }
}

export default Helloryan;
