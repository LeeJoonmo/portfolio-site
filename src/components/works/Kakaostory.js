import React, { Component } from "react";
import "../Card.css";
import homesoso from '../../images/homesoso.gif'; // with import
import hometree from '../../images/hometree.gif'; // with import
import homenewyear from '../../images/homenewyear.gif'; // with import
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

          <div style = {{position: 'relative'}}>
            <div style = {{width: '10%', left: '24%', height: "10%", top: "70%", backgroundColor: 'blue', position: 'absolute', zIndex: 6}}></div>
            <img
              className="work-img"
              src="http://leejoonmo.com/workimg/kakaostory/01.jpg"
              alt=" "
              style = {{position: 'relative', zIndex: 3}}
            />
          </div>
          <div style = {{display: "flex", justifyContent: "center", alignItems: "center", marginBottom: 50}}>
            <div style = {{width: "30%", position: "absolute", zIndex: 3}}> <img style = {{width: "100%"}}src = {homesoso}></img></div>
            <img
              style = {{width: "100%"}}
              src="http://leejoonmo.com/workimg/kakaostory/02.jpg"
              alt=" "
            />
          </div>
          <div style = {{display: "flex", justifyContent: "center", alignItems: "center", marginBottom: 50}}>
            <div style = {{width: "30%", position: "absolute", zIndex: 3}}> <img style = {{width: "100%"}}src = {hometree}></img></div>
            <img
              style = {{width: "100%"}}
              src="http://leejoonmo.com/workimg/kakaostory/03.jpg"
              alt=" "
            />
          </div>
          <div style = {{display: "flex", justifyContent: "center", alignItems: "center", marginBottom: 50}}>
            <div style = {{width: "30%", position: "absolute", zIndex: 3}}> <img style = {{width: "100%"}}src = {homenewyear}></img></div>
            <img
              style = {{width: "100%"}}
              src="http://leejoonmo.com/workimg/kakaostory/04.jpg"
              alt=" "
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Kakaostory;
