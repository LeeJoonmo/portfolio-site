import React, { Component } from "react";
import "../Card.css";

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
          <img className="work-img" src="http://leejoonmo.com/workimg/friendspop/01.jpg" alt=" "/>
          <img className="work-img" src="http://leejoonmo.com/workimg/friendspop/02.jpg" alt=" "/>
          <img className="work-img" src="http://leejoonmo.com/workimg/friendspop/03.jpg" alt=" "/>
          <img className="work-img" src="http://leejoonmo.com/workimg/friendspop/04.jpg" alt=" "/>
          <img className="work-img" src="http://leejoonmo.com/workimg/friendspop/05.jpg" alt=" "/>
          <img className="work-img" src="http://leejoonmo.com/workimg/friendspop/06.jpg" alt=" "/>
          <img className="work-img" src="http://leejoonmo.com/workimg/friendspop/07.jpg" alt=" "/>
          
        </div>
      </div>
    );
  }
}

export default Friednspop;
