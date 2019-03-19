import React, { Component } from "react";
import "../Card.css";
class Typeface extends Component {
  render() {
    return (
      <div>
        <div className="work-detail-container">
          <div className="work-info">
              <div className="work-info-title">Kakao Typeface</div>
               <div className="work-info-detail">
               카카오의 브랜드 서체인 '카카오체'를 위한 영상이다. 
카카오체는 카카오의 기업문화와 회사의 사고방식을 토대로 만들어졌다. 
형태 포인트들을 실사 촬영 이미지와 모션그래픽을 사용하여 표현하였다.
              </div>
            <div className="work-info-add">
            <div>2014 <div className = "text-bar"/>Kakao Corp</div>
           <div>Cowork with Seungeun Kim, Junggun Park 
            </div>
            </div>
          </div>
          <div className="youtube-container">
            <div className="youtube-container-ratio">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/AD24BTvgvio"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="worktitle"
              />
            </div>
          </div>
          <div className = "work-uptext">Still Image</div>
          <img className="work-img" src="http://leejoonmo.com/workimg/typeface/01.jpg" alt=" "/>
          <img className="work-img" src="http://leejoonmo.com/workimg/typeface/02.jpg" alt=" "/>
          <img className="work-img" src="http://leejoonmo.com/workimg/typeface/03.jpg" alt=" "/>
          <img className="work-img" src="http://leejoonmo.com/workimg/typeface/04.jpg" alt=" "/>
          <img className="work-img" src="http://leejoonmo.com/workimg/typeface/05.jpg" alt=" "/>
          <img className="work-img" src="http://leejoonmo.com/workimg/typeface/06.jpg" alt=" "/>
          <img className="work-img" src="http://leejoonmo.com/workimg/typeface/07.jpg" alt=" "/>
          <img className="work-img" src="http://leejoonmo.com/workimg/typeface/08.jpg" alt=" "/>
          <img className="work-img" src="http://leejoonmo.com/workimg/typeface/09.jpg" alt=" "/>
          <img className="work-img" src="http://leejoonmo.com/workimg/typeface/10.jpg" alt=" "/>
          <img className="work-img" src="http://leejoonmo.com/workimg/typeface/11.jpg" alt=" "/>
          <img className="work-img" src="http://leejoonmo.com/workimg/typeface/12.jpg" alt=" "/>
          
        </div>
      </div>
    );
  }
}

export default Typeface;
