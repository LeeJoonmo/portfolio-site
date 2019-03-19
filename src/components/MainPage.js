import React, { Component } from "react";
import CardContainer from "./CardContainer";
import ShowBox from "./ShowBox";


class MainPage extends Component {
  state = {
    worksData: this.props.worksData
  }
  render() {
    return (
      <div>
        <ShowBox/>
        <div className = "container" >
        <div className = "main-title">Works</div>
        <CardContainer worksData = {this.state.worksData}/>
        <div className = "footer">
Love today.
</div>
        </div>
      </div>
    );
  }
}

export default MainPage;
