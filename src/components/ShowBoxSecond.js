import React, { Component , Fragment} from "react";
import "./Card.css";
import "./Header.css";
import {Link} from "react-router-dom";
import img from "../images/showbox/sh_weather.jpg";

class ShowBoxThird extends Component {
  render() {
    return (
      <Fragment>
        <Link to = "/workDetail/weather">
        <div className = "showBox-wrap">
        <div className = "showBox-info"><div className = "showBox-info-inside" style = {{color:'#ffffff', borderBottomColor:'white'}}>Kakao Weather collection</div></div>
        <div className = "showBox-contents" style = {{backgroundColor:'#405B9A'}}>
          <img className = "showBox-img" src =  {img} alt =" "></img>
        </div>

        </div>
        </Link>
      </Fragment>
    );
  }
}

export default ShowBoxThird;
