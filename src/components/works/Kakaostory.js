import React, { Component } from "react";
import "../Card.css";
import homesoso from "../../images/homesoso.gif"; // with import
import hometree from "../../images/hometree.gif"; // with import
import homenewyear from "../../images/homenewyear.gif"; // with import
import sosoin from "../../images/sosoin.gif"; // with import
// over.addEventListener('mouseenter', _enterEvent);

class Kakaostory extends Component {
  render() {
    return (
      <div>
        <div className="work-detail-container">
          <div className="work-info">
            <div className="work-info-title">Kakao Story Like Interaction</div>
            <div className="work-info-detail">
              카카오스토리의 좋아요 인터렉션의 애니메이션을 제작했다.
              <br /> 이벤트, 크리스마스, 새해 시즌에 맞춰 디자인했다.
            </div>
            <div className="work-info-add">
              <div>
                2015 <div className="text-bar" />
                Kakao Corp
              </div>
              <div className="work-cowork">
                Cowork with Yein Nam, Jeounghyun Lee
              </div>
            </div>
          </div>

          <div style={{ position: "relative" }}>
            <img
              src={sosoin}
              style={{
                width: "28.4%",
                left: "13.7%",
                top: "52.52%",
                position: "absolute",
                zIndex: 2
              }}
              alt=""
            />

            <img
              className="work-img"
              src="http://leejoonmo.com/workimg/kakaostory/01.jpg"
              alt="kakaostory01"
              style={{ position: "relative" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 50
            }}
          >
            <div style={{ width: "30%", position: "absolute", zIndex: 3 }}>
              {" "}
              <img style={{ width: "100%" }} src={homesoso} alt="" />
            </div>
            <img
              style={{ width: "100%" }}
              src="http://leejoonmo.com/workimg/kakaostory/02.jpg"
              alt="kakaostory02"
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 50
            }}
          >
            <div style={{ width: "30%", position: "absolute", zIndex: 3 }}>
              {" "}
              <img style={{ width: "100%" }} src={hometree} alt="" />
            </div>
            <img
              style={{ width: "100%" }}
              src="http://leejoonmo.com/workimg/kakaostory/03.jpg"
              alt="kakaostory03"
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 50
            }}
          >
            <div style={{ width: "30%", position: "absolute", zIndex: 3 }}>
              {" "}
              <img style={{ width: "100%" }} src={homenewyear} alt="" />
            </div>
            <img
              style={{ width: "100%" }}
              src="http://leejoonmo.com/workimg/kakaostory/04.jpg"
              alt="kakaostory04"
            />
          </div>
          <div style={{padding:"56.25% 0 0 0",position:"relative"}}>
            <iframe
              src="https://player.vimeo.com/video/345725942?autoplay=1&loop=1&title=0&byline=0&portrait=0&background=1"
              style={{position:"absolute", top:0, left:0, width:"100%", height:"100%"}}
              frameborder="0"
              allow="autoplay; fullscreen"
              allowfullscreen
            />
          </div>
          <script src="https://player.vimeo.com/api/player.js" />
        </div>
      </div>
    );
  }
}

export default Kakaostory;


