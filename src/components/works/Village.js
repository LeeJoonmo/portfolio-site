import React, { Component } from "react";
import "../Card.css";

class Village extends Component {
  render() {
    return (
      <div>
        <div className="work-detail-container">
          <div className="work-info">
            <div className="work-info-title">Friends Village</div>
                <div className="work-info-detail">
                카카오프렌즈의 캠핑 시즌 상품 및 스토어 일러스트를 위한 영상이다.
                </div>
                <div className="work-info-add">
                    <div>2014 <div className = "text-bar"/>Kakao Corp</div>
                    <div>Cowork with Junggun Park </div>  
                </div>
          </div>
          <div className="youtube-container">
            <div className="youtube-container-ratio">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/mHMNDYkqo5g"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="worktitle"
              />
            </div>
          </div>
          <div className = "work-uptext">Still Image</div>
          <img className="work-img" src="http://leejoonmo.com/workimg/camping/01.jpg" alt=" "/>
          <img className="work-img" src="http://leejoonmo.com/workimg/camping/02.jpg" alt=" "/>
          <img className="work-img" src="http://leejoonmo.com/workimg/camping/03.jpg" alt=" "/>
          <img className="work-img" src="http://leejoonmo.com/workimg/camping/04.jpg" alt=" "/>
          <img className="work-img" src="http://leejoonmo.com/workimg/camping/05.jpg" alt=" "/>
          <img className="work-img" src="http://leejoonmo.com/workimg/camping/06.jpg" alt=" "/>
          <img className="work-img" src="http://leejoonmo.com/workimg/camping/07.jpg" alt=" "/>
          <img className="work-img" src="http://leejoonmo.com/workimg/camping/08.jpg" alt=" "/>
          <img className="work-img" src="http://leejoonmo.com/workimg/camping/09.jpg" alt=" "/>
          <img className="work-img" src="http://leejoonmo.com/workimg/camping/10.jpg" alt=" "/>
          
        </div>
      </div>
    );
  }
}

export default Village;
