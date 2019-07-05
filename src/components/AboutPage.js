import React, { Component } from "react";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import ui01 from "../../src/images/01.png";
import Character from "../../src/images/character.png";
import Code from "../../src/images/code.png";
import TestVideo from "../../src/images/testvideo.mp4";
import MotionVideo from "../../src/images/motionvideo.mp4";

const imageStyle = {
  height: "100%",
  
}
const ImageContainer = styled.div`
  position: relative;
  min-height: 500px;
  height: 80vh;
  background-color: rgb(245,245,245);
  margin: auto;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const VideoContainer = styled.div`
  position: relative;
  min-height: 500px;
  height: 80vh;
  background-color: rgb(50,50,50);
  margin: auto;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
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
`;
const TextContainerWhite = styled.div`
  width: 400px;
  color: white;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  left: 5%;
  bottom: 0;
  margin: auto;
  opacity: 0;
  border-radius: 4px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  border: 1px solid white;
`;
const Container = styled.div`
  width: 75%;
  max-width: 1500px;
  margin: auto;
`;
const TextArea = styled.div`
  padding: 30px;
`;

const TextAreaTitle = styled.div`
  font-size: 25px;
  padding-bottom: 12px;
`;
const SectionHeight = styled.div`
  height: 100px;
`;

const MyTitle = styled.div`
  font-size: 24px;
  font-weight: 500;
  padding-top: 50px;
  padding-bottom: 20px;
  color: rgba(0, 0, 0, 0.3);
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
    font-size: 70px;
    font-weight: bold;
  }

  .profile-info {
    max-width: 1500px;
    margin: auto;
    position: relative;
    font-size: 24px;
    font-weight: 500;
    line-height: 2;
  }
`;

class AboutPage extends Component {
  componentDidMount() {
    const header = document.querySelector(".header");
    header.style.backgroundColor = "rgba(255, 255, 255, 0)";
  }
  render() {
    return (
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
            <Scene duration={300} triggerHook={0.1}>
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
            {/*First Scene*/}
            <Scene
              duration={"100%"}
              pin={true}
              indicators={true}
              triggerHook={0.1}
            >
              <Timeline
                wrapper={
                  <ImageContainer></ImageContainer>
                }
              >
                <Tween
                  to={{ opacity: 1 }}
                  ease="ease.Power3.easeOut"
                  paused={false}
                  duration={0.01}
                >
                                    <div
                    style={{
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <img style={ imageStyle} src={ui01} alt="" />
                  </div>
                </Tween>
                <Timeline
                  target={
                    <TextContainer>
                      <TextArea>
                        <TextAreaTitle>Product Design</TextAreaTitle>서비스
                        특성을 정확히 이해하고, 그에 맞는 디지털 제품을
                        디자인합니다. 개발에 대한 높은 수준의 이해도를 바탕으로
                        디자인 합니다.
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
                    to={{ top: 50, bottom: "inherit" }}
                    ease="ease.Power3.easeOut"
                    paused={false}
                  />
                </Timeline>
              </Timeline>
            </Scene>
            <SectionHeight />
            {/*Second Scene*/}
            <Scene
              duration={"100%"}
              pin={true}
              indicators={true}
              triggerHook={0.1}
            >
              <Timeline wrapper={<VideoContainer />}>
                <Tween
                  to={{ opacity: 1 }}
                  ease="ease.Power3.easeOut"
                  paused={false}
                  duration={0.01}
                >
                  <video
                    style={ {width: "100%"} }
                    onplaying="this.controls=false"
                    loop
                    autoPlay
                    muted
                  >
                    <source src={TestVideo} />
                  </video>
                </Tween>
                <Timeline
                  target={
                    <TextContainer>
                      <TextArea>
                        <TextAreaTitle>Branding</TextAreaTitle>
                        기업브랜딩, 서비스브랜딩, 캐릭터 브랜딩 및 마케팅을
                        다룹니다.
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
                    to={{ top: 50, bottom: "inherit" }}
                    ease="ease.Power3.easeOut"
                    paused={false}
                  />
                </Timeline>
              </Timeline>
            </Scene>
            <SectionHeight />
            {/*Third Scene*/}
            <Scene
              duration={"100%"}
              pin={true}
              indicators={true}
              triggerHook={0.1}
            >
              <Timeline wrapper={<VideoContainer />}>
                <Tween
                  to={{ opacity: 1 }}
                  ease="ease.Power3.easeOut"
                  paused={false}
                  duration={0.01}
                >
                  <video
                    style={{ width: "100%" }}
                    onplaying="this.controls=false"
                    loop
                    autoPlay
                    muted
                  >
                    <source src={MotionVideo} />
                  </video>
                </Tween>
                <Timeline
                  target={
                    <TextContainer>
                      <TextArea>
                        <TextAreaTitle>Motion</TextAreaTitle>
                        모션 표현에 대한 강점이 있습니다. 영상, 인터렉션을
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
                    to={{ top: 50, bottom: "inherit" }}
                    ease="ease.Power3.easeOut"
                    paused={false}
                  />
                </Timeline>
              </Timeline>
            </Scene>
            <SectionHeight />
            {/*Third Scene*/}
            <Scene
              duration={"100%"}
              pin={true}
              indicators={true}
              triggerHook={0.1}
            >
              <Timeline wrapper={<ImageContainer />}>
                <Tween
                  to={{ opacity: 1 }}
                  ease="ease.Power3.easeOut"
                  paused={false}
                  duration={0.01}
                >
                  <img alt="" src={Character} style={{ width: "100%" }} />
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
                    to={{ top: 50, bottom: "inherit" }}
                    ease="ease.Power3.easeOut"
                    paused={false}
                  />
                </Timeline>
              </Timeline>
            </Scene>
            <SectionHeight />
            {/*First Scene*/}
            <Scene
              duration={"100%"}
              pin={true}
              indicators={true}
              triggerHook={0.1}
            >
              <Timeline wrapper={<ImageContainer />}>
                <Tween
                  to={{ opacity: 1 }}
                  ease="ease.Power3.easeOut"
                  paused={false}
                  duration={0.01}
                >
                  <div
                    style={{
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <img style={ imageStyle} src={Code} alt="" />
                  </div>
                </Tween>
                <Timeline
                  target={
                    <TextContainer>
                      <TextArea>
                        <TextAreaTitle>Code</TextAreaTitle>서비스 더 좋은
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
                    to={{ top: 50, bottom: "inherit" }}
                    ease="ease.Power3.easeOut"
                    paused={false}
                  />
                </Timeline>
              </Timeline>
            </Scene>
            <SectionHeight />
          </Controller>
        </FirstScene>
      </Container>
    );
  }
}

export default AboutPage;
