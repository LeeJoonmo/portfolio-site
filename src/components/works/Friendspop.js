import React, { Component } from "react";
import "../Card.css";
//import images
import img01 from "../../images/workimg/friendspop/01.jpg";
import img02 from "../../images/workimg/friendspop/02.jpg";
import img03 from "../../images/workimg/friendspop/03.jpg";
import img04 from "../../images/workimg/friendspop/04.jpg";
import img05 from "../../images/workimg/friendspop/05.jpg";
import img06 from "../../images/workimg/friendspop/06.jpg";
import img07 from "../../images/workimg/friendspop/06.jpg";

class Friednspop extends Component {
  render() {
    return (
      <div>
        <div className="work-detail-container">
        <div className="work-info">
            <div className="work-info-title">Friends Pop</div>
            <div className="work-info-detail">
            카카오프렌즈 IP를 이용한 첫번째 게임인 프렌즈팝의 마케팅 영상을 제작했다. 
춤을 추는 제이지를 이용하여 신나게 블럭 세개를 맞추는 게임요소를 표현하였다.
              </div>
            <div className="work-info-add">
              <div>2015 <div className="text-bar" />Kakao Corp</div>
              <div className="work-cowork">Cowork with Junggun Park, Jinwook Choi
            </div>
            </div>
          </div>

          <div className="youtube-container">
            <div className="youtube-container-ratio">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/fLkfdl0VEko"
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
        </div>
      </div>
    );
  }
}

export default Friednspop;
