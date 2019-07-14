import React, { Component } from "react";
import "../Card.css";
//import images
import img01 from "../../images/workimg/ryanback/01.jpg";
import img02 from "../../images/workimg/ryanback/02.jpg";
import img03 from "../../images/workimg/ryanback/03.jpg";
import img04 from "../../images/workimg/ryanback/04.jpg";
import img05 from "../../images/workimg/ryanback/05.jpg";
import img06 from "../../images/workimg/ryanback/06.jpg";
import img07 from "../../images/workimg/ryanback/07.jpg";
import img08 from "../../images/workimg/ryanback/08.jpg";


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
          <img className="work-img" src={img01} alt=" "/>
          <img className="work-img" src={img02} alt=" "/>
          <img className="work-img" src={img03} alt=" "/>
          <img className="work-img" src={img04} alt=" "/>
          <img className="work-img" src={img05} alt=" "/>
          <img className="work-img" src={img06} alt=" "/>
          <img className="work-img" src={img07} alt=" "/>
          <img className="work-img" src={img08} alt=" "/>
          
        </div>
      </div>
    );
  }
}

export default Ryanback;
