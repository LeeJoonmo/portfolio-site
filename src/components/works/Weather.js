import React, { Component } from "react";
import "../Card.css";

// over.addEventListener('mouseenter', _enterEvent);

class Weather extends Component {
  
  render() {
    return (
      <div>
        <div className="work-detail-container">
          <div className="work-info">
              <div className="work-info-title">Kakao Search Weather </div>
              <div className="work-info-detail">
                카카오톡 #탭과 다음 모바일을 위한 날씨 컬렉션.<br/> 날씨와 미세먼지 정보를 한번에 얻을 수 있도록 디자인했다. 
              </div>
              <div className="work-info-add">
                  <div>2018 <div className = "text-bar"/>Kakao Corp</div>
                  <div>Cowork with Miae Hwang, Seoungwan Beak </div>  
            </div>
          </div>
        
          
          <img
            className="work-img"
            src="http://leejoonmo.com/workimg/weather/01.jpg"
            alt=" "
          />
          <img
            className="work-img"
            src="http://leejoonmo.com/workimg/weather/02.jpg"
            alt=" "
          />
          <img
            className="work-img"
            src="http://leejoonmo.com/workimg/weather/03.jpg"
            alt=" "
          />
          <img
            className="work-img"
            src="http://leejoonmo.com/workimg/weather/04.jpg"
            alt=" "
          />
          <img
            className="work-img"
            src="http://leejoonmo.com/workimg/weather/05.jpg"
            alt=" "
          />
                   
          
        </div>
      </div>
    );
  }
}

export default Weather;

