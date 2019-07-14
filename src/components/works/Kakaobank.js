import React, { Component } from "react";
import "../Card.css";

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
          <img
            className="work-img"
            src="http://leejoonmo.com/workimg/kakaobank/01.jpg"
            alt=" "
          />
          <img
            className="work-img"
            src="http://leejoonmo.com/workimg/kakaobank/02.jpg"
            alt=" "
          />
          <img
            className="work-img"
            src="http://leejoonmo.com/workimg/kakaobank/03.jpg"
            alt=" "
          />
          <img
            className="work-img"
            src="http://leejoonmo.com/workimg/kakaobank/04.jpg"
            alt=" "
          />
          <img
            className="work-img"
            src="http://leejoonmo.com/workimg/kakaobank/05.jpg"
            alt=" "
          />
          <img
            className="work-img"
            src="http://leejoonmo.com/workimg/kakaobank/06.jpg"
            alt=" "
          />
          <img
            className="work-img"
            src="http://leejoonmo.com/workimg/kakaobank/07.jpg"
            alt=" "
          />
                    <img
            className="work-img"
            src="http://leejoonmo.com/workimg/kakaobank/08.jpg"
            alt=" "
          />
                    <img
            className="work-img"
            src="http://leejoonmo.com/workimg/kakaobank/09.jpg"
            alt=" "
          />

        </div>
      </div>
    );
  }
}

export default Rio;
