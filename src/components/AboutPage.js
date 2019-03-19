import React, { Component } from "react";
import "./Card.css";

class AbouPage extends Component {
  componentDidMount() {
    const header = document.querySelector(".header");
    header.style.backgroundColor = "rgba(255, 255, 255, 0)";
  }
  render() {
    return (
        <div className ="container">
      <div className="about-container">
        <div className="about-box first">
        <div className="about-category">I</div>
          Studed in <br />
          Seoul National University
          <div style = {{width:8, backgroundColor:'#d8d8d8', height:1, marginTop:9, marginBottom:9}}/>
          Working at <br />
          Kakao Corp.<br />
          <div style = {{width:8, backgroundColor:'#d8d8d8', height:1, marginTop:9, marginBottom:9}}/>
          <div>leejoonmo@gmail.com</div>
          <div>joonmo_ <span style = {{color:'#d8d8d8'}}>Instagram</span></div>
        </div>
        <div className="about-box second">
          {" "}
          <div className="test-category">PROFESSION</div>
          <div className = "test-detail">UI/UX</div>
          
        </div>

        </div>
      </div>
      
    );
  }
}

export default AbouPage;
