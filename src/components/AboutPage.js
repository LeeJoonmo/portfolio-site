import React, { Component } from "react";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import ui01 from "../../src/images/ui01.png";
import Character from "../../src/images/character.png";
import Code from "../../src/images/code.png";
import TestVideo from "../../src/images/testvideo.mp4";
import MotionVideo from "../../src/images/motionvideo.mp4";
import Footer from "./Footer";
const imageStyle = {
  height: "100%"
};
const SectionWrap = styled.div`
  height: 90vh;
  width: 100%;
  @media (max-width: 420px) {
    height: 100vh;
  }
`;
const ImageContainer = styled.div`
  position: relative;
  background-color: rgb(245, 245, 245);
  min-height: 500px;
  margin: auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ImageWrap = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 420px) {
    height: 100vh;
  }
`;
const FirstImageWrap = styled.div`
  height: 80vh;
  display: flex;
  margin-top: 5vh;
  justify-content: center;
  align-items: center;
  @media (max-width: 420px) {
    height: 100vh;
  }
`;
const VideoWrap = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 420px) {
    height: 100vh;
  }
`;
const ImageSection = styled.div`
  height: 10vh;
  width: 100%;
  background-color: white;
  @media (max-width: 420px) {
    height: 0;
  }
`;
const FirstImageSection = styled.div`
  height: 0;
  width: 100%;
  background-color: blue;
  @media (max-width: 420px) {
    height: 0;
  }
`;
const VideoContainer = styled.div`
  position: relative;
  min-height: 500px;
  height: 100%;
  background-color: rgb(50, 50, 50);
  margin: auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 420px) {
    height: 100vh;
  }
`;

const TextContainer = styled.div`
  width: 400px;
  color: black;
  background-color: white;
  position: absolute;
  left: 5%;
  bottom: 0;
  margin: auto;
  opacity: 0;
  border-radius: 4px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  font-size: 15px;
  @media (max-width: 420px) {
    width: 90%;
  }
`;
const TextArea = styled.div`
  padding: 25px 30px 30px 30px;
`;

const TextAreaTitle = styled.div`
  padding-bottom: 15px;
  font-size: 25px;
  @media (max-width: 420px) {
    font-size: 20px;
  }
`;
const SectionHeight = styled.div`
  height: 30px;
`;

const Container = styled.div`
  width: 75%;
  max-width: 1500px;
  margin: auto;
  @media (max-width: 420px) {
    width: 90%;
  }
`;

const ContentsContainer = styled.div`
  width: 75%;
  max-width: 1500px;
  margin: auto;
  @media (max-width: 420px) {
    width: 100%;
  }
`;

const MyTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  padding-top: 20px;
  padding-bottom: 20px;
  color: rgba(0, 0, 0, 0.3);
  @media (max-width: 420px) {
    font-size: 16px;
    padding-top: 24px;
    padding-bottom: 20px;
  }
`;

const FirstScene = styled.div`
  .section {
    height: 72px;
  }
  .profile-title {
    max-width: 1500px;
    margin: auto;
    position: relative;
    background-color: #ffffff;
    padding-top: 15px;
    padding-bottom: 30px;
    color: black;
    font-size: 55px;
    font-weight: bold;
    padding-bottom: 12px;
    @media (max-width: 420px) {
      font-size: 30px;
    }
  }

  .profile-info {
    max-width: 1500px;
    margin: auto;
    position: relative;
    font-size: 20px;
    font-weight: 500;
    line-height: 2;
    padding-top: 10px;
    @media (max-width: 420px) {
      font-size: 16px;
      line-height: 1.9;
    }
  }
`;

class AboutPage extends Component {
  componentDidMount() {
    const header = document.querySelector(".header");
    header.style.backgroundColor = "rgba(255, 255, 255, 0)";
  }
  render() {
    return (
      <div>
        <Container>
          <FirstScene>
            <div className="section" />
            <Controller>
              <Scene duration={300} triggerHook={0}>
                <Tween
                  to={{ top: -40, opacity: 0 }}
                  ease="ease.Power3.easeOut"
                  paused={false}
                  duration={0.4}
                >
                  <div className="profile-title" style={{}}>
                    I am Joonmo Lee
                  </div>
                </Tween>
              </Scene>
              <Scene duration={300} triggerHook={0}>
                <Tween
                  to={{ opacity: 0 }}
                  ease="ease.Power3.easeOut"
                  paused={true}
                  duration={0.4}
                >
                  <div className="profile-info" style={{ opacity: 1 }}>
                    I make story, then draw it
                    <br />
                    I studied at Seoul National University
                    <br />
                    I`m working at Kakao
                    <br />
                    leejoonmo@gmail.com
                    <MyTitle>My Professions are</MyTitle>
                  </div>
                </Tween>
              </Scene>
            </Controller>
          </FirstScene>
        </Container>
        <ContentsContainer>
          <Controller>
            {/*First Scene*/}
            <Scene duration={"170%"} pin={true} triggerHook={0}>
              <Timeline wrapper={<ImageContainer />}>
                <Tween
                  to={{ opacity: 1 }}
                  ease="ease.Power3.easeOut"
                  paused={false}
                  duration={0.01}
                >
                  <SectionWrap>
                    <FirstImageSection />
                    <FirstImageWrap>
                      <img style={imageStyle} src={ui01} alt="" />
                    </FirstImageWrap>
                  </SectionWrap>
                </Tween>
                <Timeline
                  target={
                    <TextContainer>
                      <TextArea>
                        <TextAreaTitle>Product Design</TextAreaTitle>
                        서비스 특성을 정확히 이해하고, 그에 맞는 디지털 제품을
                        디자인합니다. 좋은 디자인을 위해 기술과 트렌드에 대한 연구를 계속합니다.
                      </TextArea>
                    </TextContainer>
                  }
                >
                  <Tween
                    from={{ opacity: 0 }}
                    to={{ opacity: 0.9 }}
                    duration={0.15}
                  />
                  <Tween
                    from={{ bottom: 50 }}
                    to={{ top: "13vh", bottom: "inherit" }}
                    ease="ease.Power3.easeOut"
                    paused={false}
                  />
                </Timeline>
              </Timeline>
            </Scene>
            <SectionHeight />
            {/*Second Scene*/}
            <Scene duration={"170%"} pin={true} triggerHook={0}>
              <Timeline wrapper={<VideoContainer />}>
                <Tween
                  to={{ opacity: 1 }}
                  ease="ease.Power3.easeOut"
                  paused={false}
                  duration={0.01}
                >
                  <SectionWrap className = "SectionWrap">
                    <ImageSection className = "ImageSection"/>
                    <VideoWrap>
                      <video
                        style={{ width: "100%" }}
                        onplaying="this.controls=false"
                        loop
                        autoPlay
                        muted
                      >
                        <source src={TestVideo} />
                      </video>
                    </VideoWrap>
                  </SectionWrap>
                </Tween>
                <Timeline
                  target={
                    <TextContainer>
                      <TextArea>
                        <TextAreaTitle>Branding</TextAreaTitle>
                        사랑받는 브랜드를 만듭니다. 기업브랜딩, 서비스브랜딩, 캐릭터 브랜딩 및 마케팅을 합니다.
                        
                      </TextArea>
                    </TextContainer>
                  }
                >
                  <Tween
                    from={{ opacity: 0 }}
                    to={{ opacity: 0.9 }}
                    duration={0.15}
                  />
                  <Tween
                    from={{ bottom: 50 }}
                    to={{ top: "15vh", bottom: "inherit" }}
                    ease="ease.Power3.easeOut"
                    paused={false}
                  />
                </Timeline>
              </Timeline>
            </Scene>
            <SectionHeight />
            {/*Third Scene*/}
            <Scene duration={"170%"} pin={true} triggerHook={0}>
              <Timeline wrapper={<VideoContainer />}>
                <Tween
                  to={{ opacity: 1 }}
                  ease="ease.Power3.easeOut"
                  paused={false}
                  duration={0.01}
                >
                  <SectionWrap>
                    <ImageSection />
                    <VideoWrap>
                      <video
                        style={{ width: "100%" }}
                        onplaying="this.controls=false"
                        loop
                        autoPlay
                        muted
                      >
                        <source src={MotionVideo} />
                      </video>
                    </VideoWrap>
                  </SectionWrap>
                </Tween>
                <Timeline
                  target={
                    <TextContainer>
                      <TextArea>
                        <TextAreaTitle>Motion</TextAreaTitle>
                        생명력 있는 움직임을 만듭니다. 영상, 인터렉션을
                        사용하여 매력적인 디자인을 할 수 있습니다.
                      </TextArea>
                    </TextContainer>
                  }
                >
                  <Tween
                    from={{ opacity: 0 }}
                    to={{ opacity: 0.9 }}
                    duration={0.15}
                  />
                  <Tween
                    from={{ bottom: 50 }}
                    to={{ top: "15vh", bottom: "inherit" }}
                    ease="ease.Power3.easeOut"
                    paused={false}
                  />
                </Timeline>
              </Timeline>
            </Scene>
            <SectionHeight />
            {/*Third Scene*/}
            <Scene duration={"170%"} pin={true} triggerHook={0}>
              <Timeline wrapper={<ImageContainer />}>
                <Tween
                  to={{ opacity: 1 }}
                  ease="ease.Power3.easeOut"
                  paused={false}
                  duration={0.01}
                >
                  <SectionWrap>
                    <ImageSection />
                    <ImageWrap>
                      <img style={{ width: "100%" }} src={Character} alt="" />
                    </ImageWrap>
                  </SectionWrap>
                </Tween>
                <Timeline
                  target={
                    <TextContainer>
                      <TextArea>
                        <TextAreaTitle>Character</TextAreaTitle>
                        캐릭터 브랜딩을 담당하여, 브랜드자산으로서
                        카카오프렌즈의 성장을 초기부터 함께했습니다.
                      </TextArea>
                    </TextContainer>
                  }
                >
                  <Tween
                    from={{ opacity: 0 }}
                    to={{ opacity: 0.9 }}
                    duration={0.15}
                  />
                  <Tween
                    from={{ bottom: 50 }}
                    to={{ top: "15vh", bottom: "inherit" }}
                    ease="ease.Power3.easeOut"
                    paused={false}
                  />
                </Timeline>
              </Timeline>
            </Scene>
            <SectionHeight />
            {/*First Scene*/}
            <Scene duration={"170%"} pin={true} triggerHook={0}>
              <Timeline wrapper={<ImageContainer />}>
                <Tween
                  to={{ opacity: 1 }}
                  ease="ease.Power3.easeOut"
                  paused={false}
                  duration={0.01}
                >
                  <SectionWrap className = "SectionWrap">
                    <ImageSection className = "ImageSection"/>
                    <ImageWrap>
                      <img style={imageStyle} src={Code} alt="" />
                    </ImageWrap>
                  </SectionWrap>
                </Tween>
                <Timeline
                  target={
                    <TextContainer>
                      <TextArea>
                        <TextAreaTitle>Code</TextAreaTitle>더 좋은
                        디자인을 위해 Hi-fi 프로토타입을 거칩니다. 일정 수준의
                        앱, 웹 빌드가 가능합니다. Javascript, React,
                        React-native, Framer를 사용합니다.
                      </TextArea>
                    </TextContainer>
                  }
                >
                  <Tween
                    from={{ opacity: 0 }}
                    to={{ opacity: 0.9 }}
                    duration={0.15}
                  />
                  <Tween
                    from={{ bottom: 50 }}
                    to={{ top: "15vh", bottom: "inherit" }}
                    ease="ease.Power3.easeOut"
                    paused={false}
                  />
                </Timeline>
              </Timeline>
            </Scene>
            <SectionHeight />
          </Controller>
        </ContentsContainer>
        <Footer/>
      </div>
    );
  }
}

export default AboutPage;
