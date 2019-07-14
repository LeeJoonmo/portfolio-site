import React, { Component } from "react";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
import { Tween } from "react-gsap";
import ui01 from "../../src/images/about/ui01.png";
import Character from "../../src/images/about/character.png";
import Code from "../../src/images/about/code.png";
import MotionGif from "../../src/images/about/motionvideo.gif";
import Footer from "./Footer";
import Branding01 from "../../src/images/about/testvideo.gif";

const Container = styled.div`
  width: 75%;
  max-width: 1500px;
  margin: auto;
  @media (max-width: 510px) {
    width: 90%;
  }
`;
const AboutImg = styled.img`
  border-radius: 4px;
`;
const MyTitle = styled.div`
  font-size: 20px;
  padding-top: 40px;
  padding-bottom: 20px;
  color: rgba(0,0,0,0.3);
  @media (max-width: 510px) {
    font-size: 16px;
    padding-top: 30px;
    padding-bottom: 10px;
  }
`;

const FirstScene = styled.div`
  .section {
    height: 80px;
  }
  .profile-title {
    max-width: 1500px;
    margin: auto;
    position: relative;
    background-color: #ffffff;
    padding-top: 15px;
    padding-bottom: 40px;
    color: black;
    font-size: 50px;
    padding-bottom: 12px;
    @media (max-width: 510px) {
      font-size: 25px;
      padding-bottom: 0px;
    }
  }

  .profile-info {
    max-width: 1500px;
    margin: auto;
    position: relative;
    font-size: 20px;
    font-weight: 500;
    line-height: 2;
    padding-top: 20px;
    color: rgba(0,0,0,0.3);
    @media (max-width: 510px) {
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
    const addressName = "leejoonmo";
    const address = "gmail.com"
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
                   안녕하세요 이준모 입니다.
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
                    이야기를 만들고, 그리는 일을 합니다.
                    <br />
                    서울대학교 시각디자인과에서 공부했습니다. 
                    <br />
                    카카오에서 디자이너로 일하고 있습니다.
                    <br />
                    메일주소는 {addressName + "@" + address} 입니다.
                    <MyTitle>저는 다음과 같은 일들을 합니다</MyTitle>
                  </div>
                </Tween>
              </Scene>
            </Controller>
          </FirstScene>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between"
            }}
          >
            <Card>
              <AboutImg src={ui01} width="100%" alt=""/>
              <Title>Product Design</Title>
              <Info>
                서비스 특성을 정확히 이해하고, 그에 맞는 디지털 제품을
                디자인합니다. 좋은 디자인을 위해 기술과 트렌드에 대한 연구를
                계속합니다.
              </Info>
            </Card>
            <Card>
            <AboutImg src={Branding01} width="100%" alt=""/>
              <Title>Branding</Title>
              <Info>
                사랑받는 브랜드를 만듭니다. 기업브랜딩, 서비스브랜딩, 캐릭터
                브랜딩 및 마케팅을 합니다.
              </Info>
            </Card>
            <Card>
            <AboutImg src={MotionGif} width="100%" alt=""/>
              <Title>Motion</Title>
              <Info>
                생명력 있는 움직임을 만듭니다. 영상, 인터렉션을 사용하여
                매력적인 디자인을 할 수 있습니다.
              </Info>
            </Card>
            <Card>
              <AboutImg src={Character} width="100%" alt=""/>
              <Title>Character</Title>
              <Info>
                캐릭터 브랜딩을 담당하여, 브랜드자산으로서 카카오프렌즈의 성장을
                초기부터 함께했습니다.
              </Info>
            </Card>
            <Card>
              <AboutImg src={Code} width="100%" alt=""/>
              <Title>Code</Title>
              <Info>
                더 좋은 디자인을 위해 Hi-fi 프로토타입을 거칩니다. 일정 수준의
                앱, 웹 빌드가 가능합니다. Javascript, React, React-native,
                Framer를 사용합니다.
              </Info>
            </Card>
          </div>
          <Footer />
        </Container>
      </div>
    );
  }
}
const Title = styled.div`
  padding-top: 3px;
  padding-bottom: 7px;
  font-size: 17px;
  @media (max-width: 510px) {
    font-size:16px;
    padding-bottom:5px;
    width: 100%;
  }
`;
const Info = styled.div`
  font-size: 15px;
  color: rgba(0, 0, 0, 0.3);
`;
const Card = styled.div`
  width: 49%;
  margin-bottom: 40px;
  line-height:1.7;
  @media (max-width: 510px) {
    width: 100%;
  }
`;

export default AboutPage;
