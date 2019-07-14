import React, { Component } from "react";
import "../Card.css";

//import images
import img01 from "../../images/workimg/kakaobank/01.jpg";
import img02 from "../../images/workimg/kakaobank/02.jpg";
import img03 from "../../images/workimg/kakaobank/03.jpg";
import img04 from "../../images/workimg/kakaobank/04.jpg";
import img05 from "../../images/workimg/kakaobank/05.jpg";
import img06 from "../../images/workimg/kakaobank/06.jpg";
import img07 from "../../images/workimg/kakaobank/07.jpg";
import img08 from "../../images/workimg/kakaobank/08.jpg";
import img09 from "../../images/workimg/kakaobank/09.jpg";

class Rio extends Component {
  render() {
    return (
      <div>
        <div className="work-detail-container">
          <div className="work-info">
            <div className="work-info-title">카카오 뱅크</div>
            <div className="work-info-detail">
              2015년도 카카오뱅크 인터넷은행 인가를 받기 위한 프로젝트. 
              회사 설립 전 금융위의 인가를 위해 브랜드 메세지와 비전 영상을 제작했다. 
            </div>
            <div className="work-info-add">
              <div>
                2016 <div className="text-bar" />
                Kakao Corp
              </div>
              <div className="work-cowork">
                Cowork with Sungmoon Cho, Youngjin Yun
              </div>
            </div>
          </div>

          <div className="youtube-container">
            <div className="youtube-container-ratio">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/RBu-nQbvDqQ"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="worktitle"
              />
            </div>
          </div>
          <div className="work-uptext">Still Image</div>
          <img className="work-img" src={img01} alt=" "/>
          <img className="work-img" src={img02} alt=" "/>
          <img className="work-img" src={img03} alt=" "/>
          <img className="work-img" src={img04} alt=" "/>
          <img className="work-img" src={img05} alt=" "/>
          <img className="work-img" src={img06} alt=" "/>
          <img className="work-img" src={img07} alt=" "/>
          <img className="work-img" src={img08} alt=" "/>
          <img className="work-img" src={img09} alt=" "/>
        </div>
      </div>
    );
  }
}

export default Rio;
