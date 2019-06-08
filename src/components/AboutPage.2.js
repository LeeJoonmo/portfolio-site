import React, { Component } from "react";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import "./Card.css";

const FirstScene = styled.div`
  .container {
    position: relative;
    width: 100%;
    height: 1000px;
  }
  .section {
    height: 95px;
  }
  .big-red-square {
    position: relative;
    background-color: #ffffff;
    padding-top: 30px;
    padding-bottom:30px;
    color: black;
    font-size: 70px;
    font-weight: bold;
    display: inline-block;
    transform: rotate(0deg);
  }


  .black-square {
    position: relative;
    padding-bottom: 15px;
    font-size: 27px;
    font-weight: bold;
    display: inline-block;
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
      <div className="container">
        <FirstScene>
          <div className="container">
            <div className="section" />
            <div
                    className="big-red-square"
                    style={{}}
                  >
                    Hi, I`m Joonmo Lee
                  </div>
                  <div
                    className="black-square"
                    style={{ opacity: 1}}
                  >
                   I make story, then draw about it <br/>
                   I studied at Seoul National University<br/>
                   I`m working at Kakao<br/>
                   I`m Happy<br/>
                  </div>

            <Controller>
            <Scene duration={300} indicators={true} triggerHook={0}>
                <Tween
                  to={{ top: -40, opacity: 0 }}
                  ease="ease.Power3.easeOut"
                  paused={false}
                  duration={0.4}
                >
                  <div
                    className="big-red-square"
                    style={{}}
                  >
                    Hi, I`m Joonmo Lee
                  </div>
                  <br />
                </Tween>
              </Scene>
              <Scene duration={300} indicators={true} triggerHook={0.3}>
                <Tween
                  to={{ opacity: 0 }}
                  ease="ease.Power3.easeOut"
                  paused={false}
                  duration={0.4}
                >
                  <div
                    className="black-square"
                    style={{ opacity: 1}}
                  >
                   Make story, then draw
                  </div>
                  <br />
                </Tween>
              </Scene>
              <Scene duration={300} indicators={true} triggerHook={0.3}>
                <Tween
                  to={{ opacity: 0 }}
                  ease="ease.Power3.easeOut"
                  paused={false}
                  duration={0.4}
                >
                  <div
                    className="black-square"
                    style={{ opacity: 1}}
                  >
                    I studied at Seoul National University
                  </div>
                  <br />
                </Tween>
              </Scene>
              <Scene duration={300} indicators={true} triggerHook={0.3}>
                <Tween
                  to={{ opacity: 0 }}
                  ease="ease.Power3.easeOut"
                  paused={false}
                  duration={0.4}
                >
                  <div
                    className="black-square"
                    style={{ opacity: 1}}
                  >
                    I`m working at Kakao
                  </div>
                  <br />
                </Tween>
              </Scene>

              <div id="trigger-second" style={{ width: 300 }} />
              <Scene duration={300} indicators={true} triggerHook={0.3}>
                <Tween
                  to={{ opacity: 0 }}
                  ease="ease.Power3.easeOut"
                  paused={false}
                  duration={0.4}
                >
                  <div
                    className="black-square"
                    style={{ opacity: 1}}
                  >
                    leejoonmo@gmail.com
                  </div>
                  <br />
                </Tween>
              </Scene>
              <Scene duration={300} indicators={true} triggerHook={0.3}>
                <Tween
                  to={{ opacity: 0 }}
                  ease="ease.Power3.easeOut"
                  paused={false}
                  duration={0.4}
                >
                  <div
                    className="black-square"
                    style={{ opacity: 1}}
                  >
                   I`m interested in broad field of design
                  </div>
                  <br />
                </Tween>
              </Scene>

              <Scene duration={3000} pin={true} triggerHook={0.08}>
                <Timeline
                  wrapper={
                    <div
                      style={{ height: "100vh", backgroundColor: "coral" }}
                    />
                  }
                >
                  <Timeline
                    target={
                      <div
                        style={{
                          position: "absolute",
                          color: "#000000",
                          fontSize: 30,
                          fontWeight: 'bold',
                          backgroundColor: "white",
                          width: "100%",
                          height: 800,
                          opacity: 1
                        }}
                      >
                        <img width = "100%"
            src="http://leejoonmo.com/workimg/daummobile/01.jpg"
            alt=" "
          />
                      </div>
                    }
                  >
                    <Tween to={{ opacity: 1 }} duration={0.3} />
                    <Tween to={{ opacity: 0, marginTop: 30 }} duration={0.2} />
                  </Timeline>

                  <Timeline
                    target={
                      <div
                        style={{
                          position: "absolute",
                          color: "white",
                          fontSize: 50,
                          backgroundColor: "green",
                          width: "100%",
                          height: 800,
                          opacity: 0
                        }}
                      >
                        Branding
                      </div>
                    }
                  >
                    <Tween to={{ opacity: 1 }} duration={0.2} />
                    <Tween to={{ opacity: 1 }} duration={0.7} />
                    <Tween to={{ opacity: 0 }} duration={0.2} />
                  </Timeline>

                  <Timeline
                    target={
                      <div
                        style={{
                          position: "absolute",
                          color: "white",
                          fontSize: 50,
                          backgroundColor: "beige",
                          width: "100%",
                          height: 800,
                          opacity: 0
                        }}
                      >
                        Character
                      </div>
                    }
                  >
                    <Tween to={{ opacity: 1 }} duration={0.2} />
                    <Tween to={{ opacity: 1 }} duration={0.7} />
                  </Timeline>
                </Timeline>
              </Scene>
              <Scene duration={400} triggerHook={0.8} indicators={true}>
                <Tween to={{ scale: 2 }}>
                  <div className="sticky-red-square">I Like</div>
                </Tween>
              </Scene>
              <Scene duration={200} triggerHook={0.8} indicators={true}>
                <Timeline
                  wrapper={
                    <div style={{ height: 1000, backgroundColor: "beige" }} />
                  }
                >
                  <Tween
                    to={{
                      opacity: 1
                    }}
                  >
                    <div className="black-square" style={{ opacity: 0 }}>
                      yaho
                    </div>
                  </Tween>
                  <Tween
                    to={{
                      opacity: 1
                    }}
                  >
                    <div className="black-square" style={{ opacity: 0 }}>
                      yaho
                    </div>
                  </Tween>
                  <Tween
                    to={{
                      opacity: 1
                    }}
                  >
                    <div className="black-square" style={{ opacity: 0 }}>
                      yaho
                    </div>
                  </Tween>
                  <Tween
                    to={{
                      opacity: 1
                    }}
                  >
                    <div className="black-square" style={{ opacity: 0 }}>
                      yaho
                    </div>
                  </Tween>
                  <Tween
                    to={{
                      opacity: 1
                    }}
                  >
                    <div className="black-square" style={{ opacity: 0 }}>
                      yaho
                    </div>
                  </Tween>
                </Timeline>
              </Scene>
              <div style={{ height: 1000, backgroundColor: "#f1f1f1" }} />
            </Controller>
          </div>
        </FirstScene>
      </div>
    );
  }
}

export default AbouPage;

<div style={{ margin: "auto", width: '75%', maxWidth: '1500px' }}>
                    <video
                      width="100%"
                      autoPlay
                      loop
                      muted
                    >
                      <source src={testVideo} type="video/mp4" />
                    </video>
                  </div>