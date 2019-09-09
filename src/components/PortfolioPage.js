import React, { Component } from "react";
import CardContainer from "./CardContainer";
import "./PortfolioPage.css"

//img import area
const resume = require("../images/portfolio/resume_leejoonmo.jpg");

const daum1 = require("../images/portfolio/daum_01_main.jpg");
const daum2_1 = require("../images/portfolio/daum_02_01.jpg");
const daum2_2 = require("../images/portfolio/daum_02_02.jpg");
const daum2_3 = require("../images/portfolio/daum_02_03.jpg");
const daum2 = require("../images/portfolio/daum_02_overview.jpg");
const daum3 = require("../images/portfolio/daum_03_overview.jpg");
const daum4 = require("../images/portfolio/daum_04_overview.jpg");
const daum5 = require("../images/portfolio/daum_05_overview.jpg");
const daum6 = require("../images/portfolio/daum_06.jpg");

const local1 = require("../images/portfolio/local_01_main.jpg");
const local1_1 = require("../images/portfolio/local_01_add.jpg");
const local2 = require("../images/portfolio/local_02.jpg");
const local3 = require("../images/portfolio/local_03.jpg");
const local4 = require("../images/portfolio/local_04.jpg");
const local5 = require("../images/portfolio/local_05.jpg");

const weather1 = require("../images/portfolio/weather_01_main.jpg");
const weather2 = require("../images/portfolio/weather_02.jpg");
const weather3 = require("../images/portfolio/weather_03.jpg");
const weather4 = require("../images/portfolio/weather_04.jpg");
const weather5 = require("../images/portfolio/weather_05.jpg");

const appstore1 = require("../images/portfolio/appstore_01_main.jpg");
const appstore2 = require("../images/portfolio/appstore_02_add.jpg");
const appstore3 = require("../images/portfolio/appstore_03_list.jpg");
const appstore4 = require("../images/portfolio/appstore_04_sdk.jpg");
const appstore4_1 = require("../images/portfolio/appstore_04_sdk_add.jpg");
const appstore5 = require("../images/portfolio/appstore_05.jpg");
const appstoreMovie = require("../images/portfolio/overview_final.mp4");
const appstoreReact = require("../images/portfolio/appreact_final.mp4");

const center1 = require("../images/portfolio/center_01_main.png");
const center3 = require("../images/portfolio/center_03_ux.png");
const center4 = require("../images/portfolio/center_04_system.png");
const center5 = require("../images/portfolio/center_05_overview.png");
const center6 = require("../images/portfolio/center_06_overview.png");
const centerMovie = require("../images/portfolio/mainproto_final.mp4");

class WorkPage extends Component {
  state = {
    permission: false,
    password: ""
  };

  componentDidMount() {
    const header = document.querySelector(".header");
    const body = document.querySelector("body");
    const input = document.querySelector("#passinput");
    header.style.display = "none";
    this.state.permission
      ? (body.style.backgroundColor = "black")
      : (body.style.backgroundColor = "white");
    input.focus();
  }
  componentDidUpdate() {
    const header = document.querySelector(".header");
    const body = document.querySelector("body");
    header.style.display = "none";
    this.state.permission
      ? (body.style.backgroundColor = "black")
      : (body.style.backgroundColor = "white");
  }
  _handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    this.setState({
      password: value
    });
  };
  _handleSubmit = event => {
    const value = this.state.password;
    if (value === "naver" || value === "joonmo" || value === "Naver") {
      this.setState({ permission: true });
    } else {
      alert("패스워드가 틀렸습니다.");
    }
    this.setState({ password: "" });
    event.preventDefault();
  };
  _renderPermission = () => {
    return (
      <div style={{ width: "100%", height: 500, marginTop: "150px" }}>
        <div className="formContainer">
          <form onSubmit={this._handleSubmit}>
            <div style={{ width: "100%", fontSize: 15, marginBottom: "40px" }}>
              반갑습니다. 저는 이준모입니다.
              <br /> 포트폴리오에 진행중인 프로젝트가 포함되어 있습니다.
              <br /> Password를 입력해 주세요. 감사합니다 :D
            </div>

            <input
              id="passinput"
              name="numberOfGuests"
              type="string"
              placeholder="Password를 입력해 주세요"
              value={this.state.password}
              onChange={this._handleInputChange}
              className="passwordInput"
            />
            <div>
              <button
                type="submit"
                value="Submit"
                style={{
                  width: "100%",
                  paddingTop: "20px",
                  paddingBottom: "20px",
                  border: "none",
                  marginTop: "30px",
                  fontSize: 16,
                  borderRadius: "3px",
                  backgroundColor: "#3A4861",
                  color: "white"
                }}
              >
                확인
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  _renderPortfolio = () => {
    return (
      <>
        <div>
          <div className="portContainer">
            <div
              style={{
                width: "100%",
                height: "100px",
                backgroundColor: "black"
              }}
            />
            <img src={resume} className="portImg" alt="" />

            <img src={daum1} className="portImg" alt="" />
            <img src={daum2_1} className="portImg" alt="" />
            <img src={daum2_2} className="portImg" alt="" />
            <img src={daum2_3} className="portImg" alt="" />
            <img src={daum2} className="portImg" alt="" />
            <img src={daum3} className="portImg" alt="" />
            <img src={daum4} className="portImg" alt="" />
            <img src={daum5} className="portImg" alt="" />
            <img src={daum6} className="portImg" alt="" />

            <img src={appstore1} className="portImg" alt="" />
            <video
              className="videos"
              id="appstore-video"
              controls
              playsInline
              autoPlay
              loop
              muted
            >
              <source className="video-source" src={appstoreMovie} />
            </video>
            
            <img src={appstore2} className="portImg" alt="" />
            <img src={appstore3} className="portImg" alt="" />
            <img src={appstore4} className="portImg" alt="" />
            <img src={appstore4_1} className="portImg" alt="" />
            <img src={appstore5} className="portImg" alt="" />
            <div className="portText">
              Prototype (React Native)
              <br />
              사용성을 지속적으로 확인하기 위해, <br />
              React Native로 직접 네이티브 앱 프로토타이핑을 했습니다.
            </div>
            <video
              className="videos"
              id="appstore-video"
              controls
              playsInline
              autoPlay
              loop
              muted
            >
              <source className="video-source" src={appstoreReact} />
            </video>

            <img src={center1} className="portImg" alt="" />
            <div style={{ color: "white", fontSize: 18, marginBottom: "13px" }}>
              Prototype (Reactjs)
            </div>
            <video
              className="videos"
              id="appstore-video"
              controls
              playsInline
              autoPlay
              loop
              muted
            >
              <source className="video-source" src={centerMovie} />
            </video>
            <img src={center3} className="portImg" alt="" />
            <img src={center4} className="portImg" alt="" />
            <img src={center5} className="portImg" alt="" />
            <img src={center6} className="portImg" alt="" />

            <img src={local1} className="portImg" alt="" />
            <img src={local1_1} className="portImg" alt="" />
            <img src={local2} className="portImg" alt="" />
            <img src={local3} className="portImg" alt="" />
            <img src={local4} className="portImg" alt="" />
            <img src={local5} className="portImg" alt="" />

            <img src={weather1} className="portImg" alt="" />
            <img src={weather2} className="portImg" alt="" />
            <img src={weather3} className="portImg" alt="" />
            <img src={weather4} className="portImg" alt="" />
            <img src={weather5} className="portImg" alt="" />
            <div
              className="portEndText"
            >
              제 포트폴리오를 봐 주셔서 정말 감사합니다.
              <br /> 진행중인 프로젝트가 포함되어 있어서 보안을 부탁드려요!
              <br />
              브랜딩, 모션, 애니메이션 등 제 다른 작업들은 하단에서 간략히 보실
              수 있습니다 {`:)`}
            </div>
            <div style={{ maxWidth: "1500px", margin: "auto" }}>
              <CardContainer worksData={this.props.worksData} />
              <div
                style={{
                  width: "100%",
                  height: "100px",
                  backgroundColor: "black"
                }}
              />
            </div>
          </div>
        </div>
      </>
    );
  };

  render() {
    console.log(this.state.permission);
    return this.state.permission
      ? this._renderPortfolio()
      : this._renderPermission();
    
  }
}



export default WorkPage;
