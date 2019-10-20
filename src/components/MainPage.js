import React, { Component } from "react";
import CardContainer from "./CardContainer";
import ShowBox from "./ShowBox";
import Footer from "./Footer";

class MainPage extends Component {
  state = {
    worksData: this.props.worksData
  };
  render() {
    return (
      <div>
        <ShowBox />
        <div className="container">
          <div className="main-title" style={{ color: "#333333" }}>
            Works
          </div>
          <CardContainer worksData={this.state.worksData} target="self" titleColor="#333333"/>
          <Footer />
        </div>
      </div>
    );
  }
}

export default MainPage;
