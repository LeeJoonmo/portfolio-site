import React, { Component } from "react";
import { Route, Switch, Link} from "react-router-dom";


class WorkDetailPage extends Component {



  constructor(props) {
    super(props);
    this.state = { 
      worksData:this.props.worksData
     };
    this._renderWork = this._renderWork.bind(this);
  }

  componentDidMount(){
    window.scrollTo(0,0);
    const body = document.querySelector("body");
    body.style.backgroundColor = "white";
  }

  _renderWork = (props) => {
    const currentWork = this.state.worksData.find((work) =>{
      return work.name === this.props.match.params.id;
    });
    if(currentWork === undefined){
      return <div style  = {{display:'flex', width:'100%', height:'100vh', alignItems:'center', justifyContent:'center'}}>Nothing here, Please go to Main Page :)</div>
    }else
    return currentWork.page;

  }
    
  

  render() {
    const currentIndex = this.state.worksData.findIndex((work) =>{
      return work.name === this.props.match.params.id;
    });
    return (
      <div>
        <Switch>
          <Route
            exact
            path={`/workDetail/${this.props.match.params.id}`}
            render={this._renderWork}
          />
        </Switch>
        <div className = "work-button work-detail-container">
        {currentIndex >0 ? <Link className = "work-button-prev" onClick = {() => {window.scrollTo(0,0);}} to = {`/workDetail/${this.state.worksData[currentIndex -1].name}`}><div>Prev work</div><div className = "work-button-title">{this.state.worksData[currentIndex -1].title}</div></Link> : null}
        {currentIndex === this.state.worksData.length -1 ? null : <Link className = "work-button-next" onClick = {() => {window.scrollTo(0,0);}} to = {`/workDetail/${this.state.worksData[currentIndex +1].name}`}>Next work<div className = "work-button-title">{this.state.worksData[currentIndex +1].title}</div></Link> }
        </div>
      </div>
    );
  }
}

export default WorkDetailPage;
