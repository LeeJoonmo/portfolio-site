import React, { Component , Fragment} from "react";
import "./Card.css";
import "./Header.css";
import {Link} from "react-router-dom";

class ShowBoxThird extends Component {
  render() {
    return (
      <Fragment>
        <Link to = "/workDetail/weather">
        <div className = "showBox-wrap">
        <div className = "showBox-info"><div className = "showBox-info-inside" style = {{color:'#ffffff', borderBottomColor:'white'}}>Kakao Weather collection</div></div>
        <div className = "showBox-contents" style = {{backgroundColor:'#405B9A'}}>
          <img className = "showBox-img" src =  "http://leejoonmo.com/workimg/weather/01.jpg" alt =" "></img>
        </div>

        </div>
        </Link>
      </Fragment>
    );
  }
}

export default ShowBoxThird;
