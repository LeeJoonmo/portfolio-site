import React, { Component } from "react";
import "../Card.css";
// over.addEventListener('mouseenter', _enterEvent);

class Muzicon extends Component {
  render() {
    return (
      <div>
        <div className="work-detail-container">
        <div className="work-info">
            <div className="work-info-title">Muzi & Con Special</div>
            <div className="work-info-detail">
            무지를 키운 정체불명의 악어 콘, 캐릭터의 탄생배경과 컨셉을 표현한 브랜딩 애니메이션이다.
무지&콘 스페셜 이모티콘에 맞추어 출시 티저영상 또한 제작했다.
              </div>
            <div className="work-info-add">
              <div>2016 <div className="text-bar" />Kakao Corp</div>
              <div className="work-cowork">Cowork with Junggun park
            </div>
            </div>
          </div>

          <div className="youtube-container">
            <div className="youtube-container-ratio">
              <iframe
                title = "worktitle"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                width="788.54"
                height="443"
                type="text/html"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                src="https://www.youtube.com/embed/dBTsTF972UU"
                allowFullScreen
              >
              </iframe>
            </div>
          </div>
          <div className="work-uptext">Teaser Movie</div>
          <div className="youtube-container">
            <div className="youtube-container-ratio">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/xyZjniR39oY"
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
            src="http://leejoonmo.com/workimg/muzicon/01.jpg"
            alt=" "
          />
          <img
            className="work-img"
            src="http://leejoonmo.com/workimg/muzicon/02.jpg"
            alt=" "
          />
          <img
            className="work-img"
            src="http://leejoonmo.com/workimg/muzicon/03.jpg"
            alt=" "
          />
          <img
            className="work-img"
            src="http://leejoonmo.com/workimg/muzicon/04.jpg"
            alt=" "
          />
          <img
            className="work-img"
            src="http://leejoonmo.com/workimg/muzicon/05.jpg"
            alt=" "
          />
                    <img
            className="work-img"
            src="http://leejoonmo.com/workimg/muzicon/06.jpg"
            alt=" "
          />
                    <img
            className="work-img"
            src="http://leejoonmo.com/workimg/muzicon/07.jpg"
            alt=" "
          />
                    <img
            className="work-img"
            src="http://leejoonmo.com/workimg/muzicon/08.jpg"
            alt=" "
          />
                    <img
            className="work-img"
            src="http://leejoonmo.com/workimg/muzicon/09.jpg"
            alt=" "
          />
                    <img
            className="work-img"
            src="http://leejoonmo.com/workimg/muzicon/10.jpg"
            alt=" "
          />

        </div>
      </div>
    );
  }
}

export default Muzicon;
