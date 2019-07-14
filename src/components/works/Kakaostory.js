import React, { Component } from "react";
import "../Card.css";
//import images
import img01 from "../../images/workimg/kakaostory/01.jpg";
import img02 from "../../images/workimg/kakaostory/02.jpg";
import img03 from "../../images/workimg/kakaostory/03.jpg";
import img04 from "../../images/workimg/kakaostory/04.jpg";
import homesoso from "../../images/workimg/kakaostory/homesoso.gif"; // with import
import hometree from "../../images/workimg/kakaostory/hometree.gif"; // with import
import homenewyear from "../../images/workimg/kakaostory/homenewyear.gif"; // with import
import sosoin from "../../images/workimg/kakaostory/sosoin.gif"; // with import

class Kakaostory extends Component {
  render() {
    return (
      <div>
        <div className="work-detail-container">
          <div className="work-info">
            <div className="work-info-title">Kakao Story Like Interaction</div>
            <div className="work-info-detail">
              좋아요 인터렉션의 애니메이션을 제작.
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
              src={img01}
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
              src={img02}
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
              src={img03}
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
              src={img04}
              alt="kakaostory04"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Kakaostory;
