import React, { Component } from "react";
import "../Card.css";
//import images
import img01 from "../../images/workimg/daummobile/01.jpg";
import img02 from "../../images/workimg/daummobile/02.jpg";
import img03 from "../../images/workimg/daummobile/03.jpg";
import img04 from "../../images/workimg/daummobile/04.jpg";
import img05 from "../../images/workimg/daummobile/05.jpg";
import img06 from "../../images/workimg/daummobile/06.jpg";


class Daummobile extends Component {
  
  render() {
    return (
      <div>
        <div className="work-detail-container">
        <div className="work-info">
            <div className="work-info-title">Daum Mobile <br/>UI Update</div>
            <div className="work-info-detail">
            다음 모바일의 통합검색 개편. 
              </div>
            <div className="work-info-add">
              <div>2018 <div className="text-bar" />Kakao Corp</div>
              <div className="work-cowork">Cowork with Minjeung Kim as PM, Jaemin Lee, Seoyoung Choi
            </div>
            </div>
          </div>
        
          <img className="work-img" src={img01} alt=" "/>
          <img className="work-img" src={img02} alt=" "/>
          <img className="work-img" src={img03} alt=" "/>
          <img className="work-img" src={img04} alt=" "/>
          <img className="work-img" src={img05} alt=" "/>
          <img className="work-img" src={img06} alt=" "/>
                   
          
        </div>
      </div>
    );
  }
}

export default Daummobile;