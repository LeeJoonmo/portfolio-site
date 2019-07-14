import React, { Component } from "react";
import "../Card.css";
//import images
import img01 from "../../images/workimg/rio/01.jpg";
import img02 from "../../images/workimg/rio/02.jpg";
import img03 from "../../images/workimg/rio/03.jpg";
import img04 from "../../images/workimg/rio/04.jpg";
import img05 from "../../images/workimg/rio/05.jpg";
import img06 from "../../images/workimg/rio/06.jpg";
import img07 from "../../images/workimg/rio/07.jpg";
import img08 from "../../images/workimg/rio/08.jpg";

class Rio extends Component {
  render() {
    return (
      <div>
        <div className="work-detail-container">
          <div className="work-info">
            <div className="work-info-title">뜻밖의 리우</div>
            <div className="work-info-detail">
              2016 리우데자네이루 올림픽을 맞아 응원의 메세지를 전달하는
              캠페인이다. 카카오프렌즈가 가진 '일상'이라는 키워드와 올림픽 주요
              종목들을 연결시켜, '뜻밖의 리우' 상황을 표현했다.
            </div>
            <div className="work-info-add">
              <div>
                2016 <div className="text-bar" />
                Kakao Corp
              </div>
              <div className="work-cowork">
                Cowork with Rae Kim, Soohyun Kang,&nbsp;{" "}
                <div>Junggun Park </div>
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
          <div className="work-uptext">Still Image</div>
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

export default Rio;
