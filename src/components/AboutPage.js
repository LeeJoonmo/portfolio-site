import React, { Component } from "react";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import "./Card.css";
import testVideo from "../../src/images/testvideo.mp4";
import about01 from "../../src/images/about01.png";
import white1920 from "../../src/images/white1920.png";

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
    padding-bottom: 15px;
    font-size: 24px;
    font-weight: 500;
    line-height: 2;
    margin-bottom: 65px;
  }

  .test {
    transition: width 0.3s ease-out;
    width: 100px;
    height: 100px;
    background-color: red;
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
              <Scene duration={300} indicators={true} triggerHook={0}>
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
              <Scene duration={300} indicators={true} triggerHook={0.1}>
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
              <Scene duration={"550%"} triggerHook={0} indicators={true} pin>
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
                  <Tween to={{ width: "100%", height: '100%',maxWidth: "inherit" }}>
                    <div
                      style={{
                        width: "75%",
                        height: "95%",
                        position: "absolute",
                        left: 0,
                        right: 0,
                        marginLeft: "auto",
                        marginRight: "auto",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "beige",
                        zIndex: 2
                      }}
                    >
                      <div
                          style={{
                            color: "white",
                            fontSize: 38,
                            width: '100%',
                            height: 190,
                            bottom: 0,
                            backgroundColor:'rgba(0,0,0,.7)',
                            position: "absolute",
                            paddingLeft: 40,
                            paddingTop: 40,
                          }}
                        >
                          UI<br/>
                          <div style = {{fontSize: 24, paddingTop: 10}}>Corporate, Service, Character</div>
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
                          alignItems: "center"
                        }}
                      >
                      <div>
                        <div
                          style={{
                            color: "white",
                            fontSize: 38,
                            width: '100%',
                            height: 190,
                            bottom: 0,
                            backgroundColor:'rgba(0,0,0,.7)',
                            position: "absolute",
                            paddingLeft: 40,
                            paddingTop: 40,
                          }}
                        >
                          Branding<br/>
                          <div style = {{fontSize: 24, paddingTop: 10}}>Corporate, Service, Character</div>
                        </div>
                        <video width="100%" autoPlay loop>
                          <source src={testVideo} />
                        </video>
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
                        backgroundColor: "blue",
                        zIndex: 4,
                        boxShadow: "0px 0px 20px rgba(0,0,0,0.4)"
                      }}
                    >
                      <div
                          style={{
                            color: "white",
                            fontSize: 38,
                            width: '100%',
                            height: 190,
                            bottom: 0,
                            backgroundColor:'rgba(0,0,0,.7)',
                            position: "absolute",
                            paddingLeft: 40,
                            paddingTop: 40,
                          }}
                        >
                          Motion<br/>
                          <div style = {{fontSize: 24, paddingTop: 10}}>Corporate, Service, Character</div>
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
                        left: "100vw",
                        marginLeft: "auto",
                        marginRight: "auto",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "skyblue",
                        zIndex: 5,
                        boxShadow: "0px 0px 20px rgba(0,0,0,0.4)"
                      }}
                    >
                      <div
                          style={{
                            color: "white",
                            fontSize: 38,
                            width: '100%',
                            height: 190,
                            bottom: 0,
                            backgroundColor:'rgba(0,0,0,.7)',
                            position: "absolute",
                            paddingLeft: 40,
                            paddingTop: 40,
                          }}
                        >
                          Character<br/>
                          <div style = {{fontSize: 24, paddingTop: 10}}>Corporate, Service, Character</div>
                        </div>
                    </div>
                  </Tween>
                  <Tween to={{ top: 0, maxWidth: "inherit" }}>
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        top: "100vh",
                        left: 0,
                        right: 0,
                        marginLeft: "auto",
                        marginRight: "auto",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "violet",
                        zIndex: 6,
                        boxShadow: "0px 0px 20px rgba(0,0,0,0.3)"
                      }}
                    >
                      <div
                          style={{
                            color: "white",
                            fontSize: 38,
                            width: '100%',
                            height: 190,
                            bottom: 0,
                            backgroundColor:'rgba(0,0,0,.7)',
                            position: "absolute",
                            paddingLeft: 40,
                            paddingTop: 40,
                          }}
                        >
                          Code<br/>
                          <div style = {{fontSize: 24, paddingTop: 10}}>Corporate, Service, Character</div>
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
