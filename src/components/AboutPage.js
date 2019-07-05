import React, { Component } from "react";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import ui01 from "../../src/images/01.png";
// import Character from "../../src/images/character.png";
// import Code from "../../src/images/code.png";

const TextContainer = styled.div`
  width: 400px;
  background-color: white;
  position: absolute;
  left: 5%;
  bottom: 0;
  margin: auto;
  opacity: 0;
  border-radius: 4px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
`;
const TextArea = styled.div`
  padding: 30px;
  color: black;
`;
const TextAreaTitle = styled.div`
  font-size: 25px;
  padding-bottom: 12px;
`;

const FirstScene = styled.div`
  .container {
    position: relative;
    width: 100%;
    height: 1000px;
  }
  .section {
    height: 72px;
  }
  .big-red-square {
    width: 75%;
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

  .black-square {
    width: 75%;
    max-width: 1500px;
    margin: auto;
    position: relative;
    font-size: 24px;
    font-weight: 500;
    line-height: 2;
  }

  .test {
    transition: width 0.3s ease-out;
    width: 100px;
    height: 100px;
    background-color: black;
    margin: 0 !important;

    &.yellow {
      background-color: yellow;
    }
  }
  .zap {
    color: #919191;
  }
`;

class AbouPage extends Component {
  componentDidMount() {
    const header = document.querySelector(".header");
    header.style.backgroundColor = "rgba(255, 255, 255, 0)";
  }
  render() {
    return (
      <div>
        <FirstScene>
          <div className="yaho" style={{ width: "100%" }}>
            <div className="section" />

            <Controller>
              <Scene duration={300} triggerHook={0}>
                <Tween
                  to={{ top: -40, opacity: 0 }}
                  ease="ease.Power3.easeOut"
                  paused={false}
                  duration={0.4}
                >
                  <div className="big-red-square" style={{}}>
                    TestTestTest
                  </div>
                  <br />
                </Tween>
              </Scene>
              <Scene duration={300} triggerHook={0.1}>
                <Tween
                  to={{ opacity: 0 }}
                  ease="ease.Power3.easeOut"
                  paused={true}
                  duration={0.4}
                >
                  <div className="black-square" style={{ opacity: 1 }}>
                    I make story, then draw it
                    <br />
                    I studied at Seoul National University
                    <br />
                    I`m working at Kakao
                    <br />
                    leejoonmo@gmail.com
                    <br />
                    <br />
                    My profession
                  </div>
                </Tween>
              </Scene>
              {/*Full Scene*/}
              <Scene
                duration={"100%"}
                pin={true}
                indicators={true}
                triggerHook={0.1}
              >
                <Timeline
                  wrapper={
                    <div
                      style={{
                        position: "relative",
                        width: "75%",
                        minHeight: "500px",
                        height: "80vh",
                        backgroundColor: "rgb(250, 250, 250)",
                        margin: "auto",
                        overflow: "hidden"
                      }}
                    />
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
                      <img style={{ height: "100%" }} src={ui01} alt = ""/>
                    </div>
                  </Tween>
                  <Timeline
                    target={
                      <TextContainer>
                        <TextArea>
                          <TextAreaTitle>Product Design</TextAreaTitle>서비스
                          특성을 정확히 이해하고, 그에 맞는 디지털 제품을
                          디자인합니다. 개발에 대한 높은 수준의 이해도를
                          바탕으로 디자인 합니다.
                        </TextArea>
                      </TextContainer>
                    }
                  >
                    <Tween
                      from={{opacity: 0}}
                      to={{ opacity: 0.9}}
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
            </Controller>
          </div>
        </FirstScene>
      </div>
    );
  }
}

export default AbouPage;
