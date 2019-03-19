import React, { Component , Fragment} from "react";
import "./Card.css";
import "./Header.css";
import {Link} from "react-router-dom";

class ShowBoxFirst extends Component {
  render() {
    return (
      <Fragment>
        <Link to = "/workDetail/kakaostory"><div className = "showBox-wrap">
        <div className = "showBox-info"><div className = "showBox-info-inside" style = {{color:'#333333', borderBottomColor:'#333333'}}>Kakao Story Interaction</div></div>
            <div className = "showBox-contents" style = {{backgroundColor:'#ECF0FC'}}>
          <img className = "showBox-img" src =  "http://leejoonmo.com/workimg/kakaostory/tomain.jpg" alt =" "></img>
        </div>

        </div></Link>
      </Fragment>
    );
  }
}

export default ShowBoxFirst;
