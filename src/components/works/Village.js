import React, { Component } from "react";
import "../Card.css";
import { Controller, Scene } from "react-scrollmagic";
import { Tween } from "react-gsap";
import styled from "styled-components";
//import images
import img01 from "../../images/workimg/village/01.jpg";
import img02 from "../../images/workimg/village/02.jpg";
import img03 from "../../images/workimg/village/03.jpg";
import img04 from "../../images/workimg/village/04.jpg";
import img05 from "../../images/workimg/village/05.jpg";


const StyledImg = styled.img`
flex-basis:max-content;
height:600px;
`;
const imgStyle = {
  flexBasis:"max-content",
  height: 600,
}

const ImgWrapper=styled.div`
  background-color:#f5f5f5;
  height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
`;

const WorkContainer=styled.div`
  width:100%;
  margin:auto;
  overflow:hidden;
`;
class Village extends Component {
  render() {
    return (
      <div>
        <div className="work-detail-container">
          <div className="work-info">
            <div className="work-info-title">Friends Village</div>
            <div className="work-info-detail">
              카카오프렌즈 스토어와 카카오 본사 로비를 위한 일러스트와 영상.
            </div>
            <div className="work-info-add">
              <div>
                2014 <div className="text-bar" />
                Kakao Corp
              </div>
              <div>Cowork with Junggun Park, Jinwook Choi </div>
            </div>
          </div>
          
          <div className="youtube-container">
            <div className="youtube-container-ratio">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/2TJXtx04xQk"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="worktitle"
              />
            </div>
          </div>
          <div style={{height:60}}></div>
          <WorkContainer>
          <Controller>
            <Scene  duration={19000} pin={true} triggerHook={0}>
              <Tween to={{ left: -19500 }}>
                <div style={{ display: "flex", alignItems: 'center',  position: "relative", left: 0 }}>
                <ImgWrapper>
                  <StyledImg src={img01} alt="" />
                  </ImgWrapper>
                  <ImgWrapper>
                  <img style={imgStyle} src={img02} alt="" />
                  </ImgWrapper>
                  <ImgWrapper>
                  <img style={imgStyle} src={img03} alt="" />
                  </ImgWrapper>
                  <ImgWrapper>
                  <img style={imgStyle} src={img04} alt="" />
                  </ImgWrapper>
                  <ImgWrapper>
                  <img style={imgStyle} src={img05} alt="" />
                  </ImgWrapper>
                </div>
              </Tween>
            </Scene>
          </Controller>
          </WorkContainer>
        </div>
        <div style={{height: 100}}/>
      </div>
    );
  }
}

export default Village;
