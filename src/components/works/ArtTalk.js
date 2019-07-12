import React, { Component } from "react";
import "../Card.css";
import at01 from "../../images/at01.png";
import at02 from "../../images/at02.png";

class ArtTalk extends Component {
  render() {
    return (
      <div>
        <div className="work-detail-container">
          <div className="work-info">
            <div className="work-info-title">Hyundai Card Art Talk</div>
            <div className="work-info-detail">
              현대카드의 아트톡 포스터와 브로셔
            </div>
            <div className="work-info-add">
              <div>
                2018 <div className="text-bar" />
                Hyundai Card
              </div>
            </div>
          </div>
        

        <img className="work-img" src={at01} alt=" " />
        <img className="work-img" src={at02} alt=" " />
        </div>
      </div>
    );
  }
}

export default ArtTalk;
