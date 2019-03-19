import React, { Component } from "react";
import "../Card.css";

class Ryanback extends Component {
  render() {
    return (
      <div>
        <div className="work-detail-container">
        <div className="work-info">
              <div className="work-info-title">돌아온 라이언</div>
               <div className="work-info-detail">
               라이언 출시 후 두번째 라이언 스페셜이 공개되었다. 
출시 때 마케팅에서 라이언의 성격을 각인시키는 데 목적을 두었다면, 두번째는 라이언의 시놉시스와 컨셉 스토리를 보여주는 데 주목했다.
              </div>
            <div className="work-info-add">
            <div>2016 <div className = "text-bar"/>Kakao Corp</div>
           <div>Cowork with Junggun Park 
            </div>
            </div>
          </div>
          
          <div className="youtube-container">
            <div className="youtube-container-ratio">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/AgETVeGwWKs"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="worktitle"
              />
            </div>
          </div>
          <div className = "work-uptext">Still Image</div>
          <img className="work-img" src="http://leejoonmo.com/workimg/ryanback/01.jpg" alt=" "/>
          <img className="work-img" src="http://leejoonmo.com/workimg/ryanback/02.jpg" alt=" "/>
          <img className="work-img" src="http://leejoonmo.com/workimg/ryanback/03.jpg" alt=" "/>
          <img className="work-img" src="http://leejoonmo.com/workimg/ryanback/04.jpg" alt=" "/>
          <img className="work-img" src="http://leejoonmo.com/workimg/ryanback/05.jpg" alt=" "/>
          <img className="work-img" src="http://leejoonmo.com/workimg/ryanback/06.jpg" alt=" "/>
          <img className="work-img" src="http://leejoonmo.com/workimg/ryanback/07.jpg" alt=" "/>
          <img className="work-img" src="http://leejoonmo.com/workimg/ryanback/08.jpg" alt=" "/>
          
        </div>
      </div>
    );
  }
}

export default Ryanback;
