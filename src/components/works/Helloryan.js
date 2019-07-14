import React, { Component } from "react";
import "../Card.css";

//import images
import img01 from "../../images/workimg/helloryan/01.jpg";
import img02 from "../../images/workimg/helloryan/02.jpg";
import img03 from "../../images/workimg/helloryan/03.jpg";
import img04 from "../../images/workimg/helloryan/04.jpg";
import img05 from "../../images/workimg/helloryan/05.jpg";
import img06 from "../../images/workimg/helloryan/06.jpg";
import img07 from "../../images/workimg/helloryan/07.jpg";
import img08 from "../../images/workimg/helloryan/08.jpg";

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
          <img className="work-img" src={img01} alt=" "/>
          <img className="work-img" src={img02} alt=" "/>
          <img className="work-img" src={img03} alt=" "/>
          <img className="work-img" src={img04} alt=" "/>
          <img className="work-img" src={img05} alt=" "/>
          <img className="work-img" src={img06} alt=" "/>
          <img className="work-img" src={img07} alt=" "/>
          <img className="work-img" src={img08} alt=" "/>
          
        </div>
      </div>
    );
  }
}

export default Helloryan;
