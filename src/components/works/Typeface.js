import React, { Component } from "react";
import "../Card.css";

//import images
import img01 from "../../images/workimg/typeface/01.jpg";
import img02 from "../../images/workimg/typeface/02.jpg";
import img03 from "../../images/workimg/typeface/03.jpg";
import img04 from "../../images/workimg/typeface/04.jpg";
import img05 from "../../images/workimg/typeface/05.jpg";
import img06 from "../../images/workimg/typeface/06.jpg";
import img07 from "../../images/workimg/typeface/07.jpg";
import img08 from "../../images/workimg/typeface/08.jpg";
import img09 from "../../images/workimg/typeface/09.jpg";
import img10 from "../../images/workimg/typeface/10.jpg";
import img11 from "../../images/workimg/typeface/11.jpg";
import img12 from "../../images/workimg/typeface/12.jpg";


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
          <img className="work-img" src={img01} alt=" "/>
          <img className="work-img" src={img02} alt=" "/>
          <img className="work-img" src={img03} alt=" "/>
          <img className="work-img" src={img04} alt=" "/>
          <img className="work-img" src={img05} alt=" "/>
          <img className="work-img" src={img06} alt=" "/>
          <img className="work-img" src={img07} alt=" "/>
          <img className="work-img" src={img08} alt=" "/>
          <img className="work-img" src={img09} alt=" "/>
          <img className="work-img" src={img10} alt=" "/>
          <img className="work-img" src={img11} alt=" "/>
          <img className="work-img" src={img12} alt=" "/>
          
        </div>
      </div>
    );
  }
}

export default Typeface;
