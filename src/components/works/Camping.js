import React, { Component } from "react";
import "../Card.css";
//import images
import img01 from "../../images/workimg/camping/01.jpg";
import img02 from "../../images/workimg/camping/02.jpg";
import img03 from "../../images/workimg/camping/03.jpg";
import img04 from "../../images/workimg/camping/04.jpg";
import img05 from "../../images/workimg/camping/05.jpg";
import img06 from "../../images/workimg/camping/06.jpg";
import img07 from "../../images/workimg/camping/07.jpg";
import img08 from "../../images/workimg/camping/08.jpg";
import img09 from "../../images/workimg/camping/09.jpg";
import img10 from "../../images/workimg/camping/10.jpg";


class Camping extends Component {
  render() {
    return (
      <div>
        <div className="work-detail-container">
        <div className="work-info">
            <div className="work-info-title">Friends Camping</div>
            <div className="work-info-detail">
                카카오프렌즈의 캠핑 시즌 상품 및 스토어 일러스트를 위한 영상.
              </div>
            <div className="work-info-add">
              <div>2014 <div className="text-bar" />Kakao Corp</div>
              <div className="work-cowork">Cowork with Junggun Park
            </div>
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

          
        </div>
      </div>
    );
  }
}

export default Camping;
