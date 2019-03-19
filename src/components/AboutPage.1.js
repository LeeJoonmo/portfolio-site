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
          <div className="about-category">PROFESSION</div>UI/UX
          <br />
          Interaction
          <br />
          Motion
          <br />
          Character
          <br />
          Branding
          <br />
          Illustration
        </div>
        <div className="about-box third">
          {" "}
          <div className="about-category">LIKE</div>Animal
          <br />
          Nature
          <br />
          Comics
          <br />
          Photography
          <br />
          Drawing
          <br />
          Friends
          <br />
          Game
        </div>
      </div>
      <div className ="about-detail">
          이야기하고 그리는 일을 합니다. <br/>
            항상 즐거운 마음으로 생활합니다.<br/>새로운 것을 경험하고, 만들어가는 것을 좋아하며 <br/>시야를 넓히기 위해 많은 공부를 하고 있습니다.
      </div>
      </div>
      
    );
  }
}

export default AbouPage;
