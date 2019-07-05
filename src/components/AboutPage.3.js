import React, { Component } from "react";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import ui01 from "../../src/images/01.png";
import Character from "../../src/images/character.png";
import Code from "../../src/images/code.png";

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
                    Joonmo Lee
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
                    My profession
                  </div>
                </Tween>
              </Scene>
              {/*Full Scene*/}
              <Scene duration={"550%"} triggerHook={0} pin>
                <Timeline
                  wrapper={
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        height: "100vh",
                        overflow: "hidden"
                      }}
                    />
                  }
                >
                  <Tween
                    to={{
                      width: "100%",
                      marginTop: 0,
                      height: "100%",
                      maxHeight: "1968px",
                      maxWidth: "3500px"
                    }}
                  >
                    <div
                      style={{
                        marginTop: 50,
                        width: "75%",
                        maxWidth: "1500px",
                        minHeight: "700px",
                        overflow: "hidden",
                        position: "absolute",
                        left: 0,
                        right: 0,
                        marginLeft: "auto",
                        marginRight: "auto",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#F6F6F6",
                        zIndex: 2
                      }}
                    >
                      <img
                        src={ui01}
                        style={{ height: "100%", maxHeight: "900px" }}
                        alt=""
                      />
                      <div
                        style={{
                          color: "white",
                          fontSize: 38,
                          width: "100%",
                          height: 190,
                          bottom: 0,
                          backgroundColor: "rgba(0,0,0,.7)",
                          position: "absolute",
                          paddingLeft: 40,
                          paddingTop: 40
                        }}
                      >
                        Product Design
                        <br />
                        <div style={{ fontSize: 20, paddingTop: 15 }}>
                          서비스 특성을 정확히 이해하고, 그에 맞는 디지털 제품을
                          디자인합니다. 개발에 대한 높은 수준의 이해도를
                          바탕으로 디자인 합니다.
                        </div>
                      </div>
                    </div>
                  </Tween>
                  <Tween
                    to={{ left: "0px", width: "100%", maxWidth: "inherit" }}
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        left: "110vw",
                        right: 0,
                        marginLeft: "auto",
                        marginRight: "auto",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "black",
                        zIndex: 3,
                        boxShadow: "0px 0px 20px rgba(0,0,0,0.3)"
                      }}
                    >
                      <div
                        style={{
                          positon: "relative",
                          diplay: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          width: "100%"
                        }}
                      >
                        <div>
                          <div
                            style={{
                              color: "white",
                              fontSize: 38,
                              width: "100%",
                              height: 190,
                              bottom: 0,
                              backgroundColor: "rgba(0,0,0,.7)",
                              position: "absolute",
                              paddingLeft: 40,
                              paddingTop: 40
                            }}
                          >
                            Branding
                            <br />
                            <div style={{ fontSize: 20, paddingTop: 15 }}>
                              기업브랜딩, 서비스브랜딩, 캐릭터 브랜딩 및
                              마케팅을 다룹니다.
                            </div>
                          </div>
                          <img src={Code} style={{ width: "100%" }} />
                        </div>
                      </div>
                    </div>
                  </Tween>
                  <Tween
                    to={{ right: "0px", width: "100%", maxWidth: "inherit" }}
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        right: "110vw",
                        marginLeft: "auto",
                        marginRight: "auto",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "black",
                        zIndex: 4,
                        boxShadow: "0px 0px 20px rgba(0,0,0,0.4)"
                      }}
                    >
                      <div
                        style={{
                          color: "white",
                          fontSize: 38,
                          width: "100%",
                          height: 190,
                          bottom: 0,
                          backgroundColor: "rgba(0,0,0,.7)",
                          position: "absolute",
                          paddingLeft: 40,
                          paddingTop: 40
                        }}
                      >
                        Motion
                        <br />
                        <div style={{ fontSize: 20, paddingTop: 15 }}>
                          모션 표현에 대한 강점이 있습니다. 영상, 인터렉션을
                          사용하여 매력적인 디자인을 할 수 있습니다.
                        </div>
                      </div>
                      <img src={Code} style={{ width: "100%" }} />
                    </div>
                  </Tween>
                  <Tween
                    to={{ left: "0px", width: "100%", maxWidth: "inherit" }}
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        left: "110vw",
                        marginLeft: "auto",
                        marginRight: "auto",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "black",
                        overflow: "hidden",
                        zIndex: 4,
                        boxShadow: "0px 0px 20px rgba(0,0,0,0.4)"
                      }}
                    >
                      <img src={Character} style={{ width: "100%" }} />
                      <div
                        style={{
                          color: "white",
                          fontSize: 38,
                          width: "100%",
                          height: 190,
                          bottom: 0,
                          backgroundColor: "rgba(0,0,0,.7)",
                          position: "absolute",
                          paddingLeft: 40,
                          paddingTop: 40
                        }}
                      >
                        Character
                        <br />
                        <div style={{ fontSize: 20, paddingTop: 15 }}>
                          캐릭터 브랜딩을 담당하여, 브랜드자산으로서
                          카카오프렌즈의 성장을 초기부터 함께했습니다.
                        </div>
                      </div>
                    </div>
                  </Tween>
                  <Tween to={{ marginTop: 0, top: 0, maxWidth: "inherit" }}>
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        top: "100vh",
                        marginTop: 70,
                        left: 0,
                        right: 0,
                        marginLeft: "auto",
                        marginRight: "auto",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "black",
                        zIndex: 6,
                        boxShadow: "0px 0px 20px rgba(0,0,0,0.3)"
                      }}
                    >
                      <img src={Code} style={{ width: "100%" }} />
                      <div
                        style={{
                          color: "white",
                          fontSize: 38,
                          width: "100%",
                          height: 190,
                          bottom: 0,
                          backgroundColor: "rgba(0,0,0,.7)",
                          position: "absolute",
                          paddingLeft: 40,
                          paddingTop: 40
                        }}
                      >
                        Code
                        <br />
                        <div style={{ fontSize: 20, paddingTop: 15 }}>
                          더 좋은 디자인을 위해 Hi-fi 프로토타입을 거칩니다.
                          일정 수준의 앱, 웹 빌드가 가능합니다. Javascript,
                          React, React-native, Framer를 사용합니다.
                        </div>
                      </div>
                    </div>
                  </Tween>
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
