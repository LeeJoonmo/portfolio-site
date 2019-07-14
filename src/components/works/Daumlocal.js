import React, { Component } from "react";
import "../Card.css";
//import images
import img01 from "../../images/workimg/daumlocal/01.jpg";
import img02 from "../../images/workimg/daumlocal/02.jpg";
import img03 from "../../images/workimg/daumlocal/03.jpg";
import img04 from "../../images/workimg/daumlocal/04.jpg";

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
        
          <img className="work-img" src={img01} alt=" "/>
          <img className="work-img" src={img02} alt=" "/>
          <img className="work-img" src={img03} alt=" "/>
          <img className="work-img" src={img04} alt=" "/>
         
        </div>
      </div>
    );
  }
}

export default Daumlocal;

