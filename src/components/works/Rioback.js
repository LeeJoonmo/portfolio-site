import React, { Component } from "react";
import "../Card.css";

class Rio extends Component {
  render() {
    return (
      <div>
        <div className="work-detail-container">
        <div className="work-info">
              <div className="work-info-title">뜻밖의 리우</div>
               <div className="work-info-detail">
               2016 리우데자네이루 올림픽을 맞아 응원의 메세지를 전달하는 캠페인이다. 
카카오프렌즈가 가진 '일상'이라는 키워드와 올림픽 주요 종목들을 연결시켜, '뜻밖의 리우' 상황을 표현했다.
              </div>
            <div className="work-info-add">
            <div>2016 <div className = "text-bar"/>Kakao Corp</div>
           <div>Cowork with Rae Kim, Soohyun Kang, Junggun Park 
            </div>
            </div>
          </div>


          
          <div className="youtube-container">
            <div className="youtube-container-ratio">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/IBb_mjVB4Ak"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="worktitle"
              />
            </div>
          </div>
          <div className = "work-uptext">Still Image</div>
          <img className="work-img" src="http://leejoonmo.com/workimg/rio/01.jpg" alt=" "/>
          <img className="work-img" src="http://leejoonmo.com/workimg/rio/02.jpg" alt=" "/>
          <img className="work-img" src="http://leejoonmo.com/workimg/rio/03.jpg" alt=" "/>
          <img className="work-img" src="http://leejoonmo.com/workimg/rio/04.jpg" alt=" "/>
          <img className="work-img" src="http://leejoonmo.com/workimg/rio/05.jpg" alt=" "/>
          <img className="work-img" src="http://leejoonmo.com/workimg/rio/06.jpg" alt=" "/>
          <img className="work-img" src="http://leejoonmo.com/workimg/rio/07.jpg" alt=" "/>
          <img className="work-img" src="http://leejoonmo.com/workimg/rio/08.jpg" alt=" "/>
        </div>
      </div>
      </div>
    );
  }
}

export default Rio;
