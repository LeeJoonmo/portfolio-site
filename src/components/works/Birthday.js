import React, { Component } from "react";
import "../Card.css";

//import images
import img01 from "../../images/workimg/birthday/01.jpg";
import img02 from "../../images/workimg/birthday/02.jpg";
import img03 from "../../images/workimg/birthday/03.jpg";
import img04 from "../../images/workimg/birthday/04.jpg";
import img05 from "../../images/workimg/birthday/05.jpg";
import img06 from "../../images/workimg/birthday/06.jpg";
import img07 from "../../images/workimg/birthday/07.jpg";
import img08 from "../../images/workimg/birthday/08.jpg";
import img09 from "../../images/workimg/birthday/09.jpg";
import img10 from "../../images/workimg/birthday/10.jpg";

class Birthday extends Component {
  
  render() {
    return (
      <div>
        <div className="work-detail-container">
        
        <div className="work-info">
            <div className="work-info-title">Happy Birthday</div>
            <div className="work-info-detail">
            프렌즈 밴드의 생일축하송, 라이언의 출시 1주년을 맞아 다양한
                서비스에서 사용할 수 있도록 생일축하 애니메이션을 제작했다.
              </div>
            <div className="work-info-add">
              <div>2014 <div className="text-bar" />Kakao Corp</div>
              <div className="work-cowork">Cowork with Junggun Park, Hansam Lee
            </div>
            </div>
          </div>

          <div className="youtube-container">
            <div className="youtube-container-ratio">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/AWrXKyFzg0o"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="worktitle"
              />
            </div>
          </div>
          
          <div className = "work-uptext">Still Image</div>
          <img
            className="work-img"
            src={img01}
            alt=" "
          />
          <img
            className="work-img"
            src={img02}
            alt=" "
          />
          <img
            className="work-img"
            src={img03}
            alt=" "
          />
          <img
            className="work-img"
            src={img04}
            alt=" "
          />
          <img
            className="work-img"
            src={img05}
            alt=" "
          />
          <img
            className="work-img"
            src={img06}
            alt=" "
          />
                    <img
            className="work-img"
            src={img07}
            alt=" "
          />
                    <img
            className="work-img"
            src={img08}
            alt=" "
          />
                    <img
            className="work-img"
            src={img09}
            alt=" "
          />
                    <img
            className="work-img"
            src={img10}
            alt=" "
          />
          
        </div>
      </div>
    );
  }
}

export default Birthday;