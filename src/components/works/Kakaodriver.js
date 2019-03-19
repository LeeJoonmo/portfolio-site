import React, { Component } from "react";
import "../Card.css";

class Kakaodriver extends Component {
  render() {
    return (
      <div>
        <div className="work-detail-container">
        <div className="work-info">
            <div className="work-info-title">Kakao Driver</div>
            <div className="work-info-detail">
            카카오 드라이버 출시 마케팅. 카카오드라이버 서비스를 소개하고 기사님들을 모집하는 마케팅이다. 
기존 대리운전 업체의 심한 공격을 방어하고 골목상권 침해라는 프레임을 벗기는 데 목적을 두고 제작하였다.
크리에이티브 플래닝과 일부 제작을 담당했다. 
              </div>
            <div className="work-info-add">
              <div>2015 <div className="text-bar" />Kakao Corp - Mobility</div>
              <div className="work-cowork">Cowork with Youngjin Yun, Sungmoon Cho
            </div>
            </div>
          </div>
          
          <div className="youtube-container">
            <div className="youtube-container-ratio">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/ALQX5wq_Pnw"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="worktitle"
              />
            </div>
          </div>
          <div className = "work-uptext">Still Image</div>
          <img className="work-img" src="http://leejoonmo.com/workimg/kakaodriver/01.jpg" alt=" "/>
          <img className="work-img" src="http://leejoonmo.com/workimg/kakaodriver/02.jpg" alt=" "/>
          <img className="work-img" src="http://leejoonmo.com/workimg/kakaodriver/03.jpg" alt=" "/>
          <img className="work-img" src="http://leejoonmo.com/workimg/kakaodriver/04.jpg" alt=" "/>
          <img className="work-img" src="http://leejoonmo.com/workimg/kakaodriver/05.jpg" alt=" "/>
          <img className="work-img" src="http://leejoonmo.com/workimg/kakaodriver/06.jpg" alt=" "/>
          <img className="work-img" src="http://leejoonmo.com/workimg/kakaodriver/07.jpg" alt=" "/>
          <img className="work-img" src="http://leejoonmo.com/workimg/kakaodriver/08.jpg" alt=" "/>
          <img className="work-img" src="http://leejoonmo.com/workimg/kakaodriver/09.jpg" alt=" "/>
          
        </div>
      </div>
    );
  }
}

export default Kakaodriver;
