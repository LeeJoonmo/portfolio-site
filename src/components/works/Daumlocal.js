import React, { Component } from "react";
import "../Card.css";

// over.addEventListener('mouseenter', _enterEvent);

class Daumlocal extends Component {
  
  render() {
    return (
      <div>
        <div className="work-detail-container">
        <div className="work-info">
            <div className="work-info-title">Local Search</div>
            <div className="work-info-detail">
            다음 검색의 장소 검색 컬렉션을 개편하고 운영. <br/>방대하고 다양한 로컬 데이터를 디테일하게 다루었던 프로젝트. 
              </div>
            <div className="work-info-add">
              <div>2018 <div className="text-bar" />Kakao Corp</div>
              <div className="work-cowork">Cowork with Daun Cho, Sewon Cho
            </div>
            </div>
          </div>
        
          <img
            className="work-img"
            src="http://leejoonmo.com/workimg/daumlocal/01.jpg"
            alt=" "
          />
          <img
            className="work-img"
            src="http://leejoonmo.com/workimg/daumlocal/02.jpg"
            alt=" "
          />
          <img
            className="work-img"
            src="http://leejoonmo.com/workimg/daumlocal/03.jpg"
            alt=" "
          />
          <img
            className="work-img"
            src="http://leejoonmo.com/workimg/daumlocal/04.jpg"
            alt=" "
          />

                   
          
        </div>
      </div>
    );
  }
}

export default Daumlocal;

