import React, { Component } from "react";
import "../Card.css";

// over.addEventListener('mouseenter', _enterEvent);

class Popcorn extends Component {
  render() {
    return (
      <div>
        <div className="work-detail-container">

          <div className="work-info">
            <div className="work-info-title">Friends Popcorn</div>
            <div className="work-info-detail">
              카카오게임의 프렌즈팝콘 마케팅 애니메이션. 프렌즈 팝콘의
               게임요소인 밤낮 바꾸기를 포인트로 잡아 제작하였다. 시리즈로 고기
               뒤집기와 라이언 구하기편이 있다.
              </div>
            <div className="work-info-add">
              <div>2016 <div className="text-bar" />Kakao Corp</div>
              <div className="work-cowork">Cowork with Junggun park, Hansam Lee
            </div>
            </div>
          </div>

          <div className="youtube-container">
            <div className="youtube-container-ratio">
              <iframe
                title="worktitle"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                width="788.54"
                height="443"
                type="text/html"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                src="https://www.youtube.com/embed/-CfhjhaxQJs?"
                allowFullScreen
              >
              </iframe>
            </div>
          </div>
          <div className="work-uptext">Series Movie - 라이언 구하기</div>
          <div className="youtube-container">
            <div className="youtube-container-ratio">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/zVOOur1JuzA"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="worktitle"
              />
            </div>
          </div>
          <div className="work-uptext">Series Movie - 고기굽기</div>
          <div className="youtube-container">
            <div className="youtube-container-ratio">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/RWPFVv4AJhM"
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
            src="http://leejoonmo.com/workimg/popcorn/01.jpg"
            alt=" "
          />
          <img
            className="work-img"
            src="http://leejoonmo.com/workimg/popcorn/02.jpg"
            alt=" "
          />
          <img
            className="work-img"
            src="http://leejoonmo.com/workimg/popcorn/03.jpg"
            alt=" "
          />
          <img
            className="work-img"
            src="http://leejoonmo.com/workimg/popcorn/04.jpg"
            alt=" "
          />
          <img
            className="work-img"
            src="http://leejoonmo.com/workimg/popcorn/05.jpg"
            alt=" "
          />
        </div>
      </div>
    );
  }
}

export default Popcorn;
