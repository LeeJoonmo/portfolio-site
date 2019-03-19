import React, { Component } from "react";
import "../Card.css";

// over.addEventListener('mouseenter', _enterEvent);

class Kakaostory extends Component {
  
  render() {
    return (
      <div>
        <div className="work-detail-container">
        <div className="work-info">
            <div className="work-info-title">Kakao Story Event Interaction</div>
            <div className="work-info-detail">
            카카오스토리의 좋아요 인터렉션의 애니메이션을 제작했다.<br/> 이벤트, 크리스마스, 새해 시즌에 맞춰 디자인했다. 
              </div>
            <div className="work-info-add">
              <div>2015 <div className="text-bar" />Kakao Corp</div>
              <div className="work-cowork">Cowork with Yein Nam, Jeounghyun Lee
            </div>
            </div>
          </div>
        
          
          <img
            className="work-img"
            src="http://leejoonmo.com/workimg/kakaostory/01.jpg"
            alt=" "
          />
          <img
            className="work-img"
            src="http://leejoonmo.com/workimg/kakaostory/02.jpg"
            alt=" "
          />
          <img
            className="work-img"
            src="http://leejoonmo.com/workimg/kakaostory/03.jpg"
            alt=" "
          />
          <img
            className="work-img"
            src="http://leejoonmo.com/workimg/kakaostory/04.jpg"
            alt=" "
          />

                   
          
        </div>
      </div>
    );
  }
}

export default Kakaostory;

