import React, { Component } from "react";

const daum1=require("../images/portfolio/daum_01_main.jpg");
const daum2=require("../images/portfolio/daum_02_overview.jpg");
const daum3=require("../images/portfolio/daum_03_overview.jpg");
const daum4=require("../images/portfolio/daum_04_overview.jpg");
const daum5=require("../images/portfolio/daum_05_overview.jpg");
const daum6=require("../images/portfolio/daum_06.jpg");

const local1=require("../images/portfolio/local_01_main.jpg");
const local2=require("../images/portfolio/local_02.jpg");
const local3=require("../images/portfolio/local_03.jpg");
const local4=require("../images/portfolio/local_04.jpg");
const local5=require("../images/portfolio/local_05.jpg");

const weather1=require("../images/portfolio/weather_01_main.jpg");
const weather2=require("../images/portfolio/weather_02.jpg");
const weather3=require("../images/portfolio/weather_03.jpg");
const weather4=require("../images/portfolio/weather_04.jpg");
const weather5=require("../images/portfolio/weather_05.jpg");

const appstore1=require("../images/portfolio/appstore_01_main.jpg");
const appstore3=require("../images/portfolio/appstore_03_list.jpg");
const appstore4=require("../images/portfolio/appstore_04_sdk.jpg");
const appstore5=require("../images/portfolio/appstore_05.jpg");
const appstore6=require("../images/portfolio/appstore_06.jpg");
const appstoreMovie =require("../images/portfolio/overview_small.mp4");

const center1=require("../images/portfolio/center_01_main.png");
const center2=require("../images/portfolio/center_02_prototype.png");
const center3=require("../images/portfolio/center_03_ux.png");
const center4=require("../images/portfolio/center_04_system.png");
const center5=require("../images/portfolio/center_05_overview.png");
const center6=require("../images/portfolio/center_06_overview.png");



class WorkPage extends Component {
  componentDidMount(){
    const header = document.querySelector('.header');
    const body = document.querySelector('body');
    header.style.display = 'none';
    body.style.backgroundColor = 'black';

  }
  render() {
    return (
      <div>
        <div style={styles.container}>
        <div style = {{width: '100%', height: '100px', backgroundColor:'black'}}></div>
          <img src = {appstore1} style={styles.img} alt=""/>
          <video className="videos" id="appstore-video" style={{width: '100%', marginBottom: '100px'}}controls autoPlay muted>
            <source className="video-source" src={appstoreMovie} />
          </video>
          <img src = {appstore3} style={styles.img} alt=""/>
          <img src = {appstore4} style={styles.img} alt=""/>
          <img src = {appstore5} style={styles.img} alt=""/>
          <img src = {appstore6} style={styles.img} alt=""/>

          <img src = {center1} style={styles.img} alt=""/>
          <img src = {center2} style={styles.img} alt=""/>
          <img src = {center3} style={styles.img} alt=""/>
          <img src = {center4} style={styles.img} alt=""/>
          <img src = {center5} style={styles.img} alt=""/>
          <img src = {center6} style={styles.img} alt=""/>

          <img src = {daum1} style={styles.img} alt=""/>
          <img src = {daum2} style={styles.img} alt=""/>
          <img src = {daum3} style={styles.img} alt=""/>
          <img src = {daum4} style={styles.img} alt=""/>
          <img src = {daum5} style={styles.img} alt=""/>
          <img src = {daum6} style={styles.img} alt=""/>

          <img src = {local1} style={styles.img} alt=""/>
          <img src = {local2} style={styles.img} alt=""/>
          <img src = {local3} style={styles.img} alt=""/>
          <img src = {local4} style={styles.img} alt=""/>
          <img src = {local5} style={styles.img} alt=""/>

          <img src = {weather1} style={styles.img} alt=""/>
          <img src = {weather2} style={styles.img} alt=""/>
          <img src = {weather3} style={styles.img} alt=""/>
          <img src = {weather4} style={styles.img} alt=""/>
          <img src = {weather5} style={styles.img} alt=""/>
        </div>
      </div>
    );
  }
}

const styles = {
  img:{
    width: "100%",
    marginBottom: "100px",
  },
  headerCover: {
    position: "absolute",
    zIndex: 300,
    width: "100%",
    height: "100px",
    backgroundColor: "white",
    opacity:0.5,
  },
  container: {
    width: "67%",
    height: "100px",
    backgroundColor: "white",
    margin: "auto"
  }
};

export default WorkPage;
