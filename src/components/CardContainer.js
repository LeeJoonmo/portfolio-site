import React, { Component} from "react";
import { NavLink } from "react-router-dom";
import Card from "./Card";
import "./Card.css";
import Fade from 'react-reveal/Fade';


class CardContainer extends Component {
  state = {
    worksData : this.props.worksData
     
  }
  _enterFunction = e => {
    const cardText = e.target.querySelector(".cardText");
    const cardTextContents = e.target.querySelector(".cardText-contents");
    const cardTitle = e.target.querySelector(".card-title");
    cardTitle.style.opacity = 0;
    cardText.style.opacity = 1;
    cardTextContents.style.paddingTop = '4.5%';
    cardTextContents.style.opacity = 1;
  };

  _leaveFunction = e => {
    const cardText = e.target.querySelector(".cardText");
    const cardTextContents = e.target.querySelector(".cardText-contents");
    const cardTitle = e.target.querySelector(".card-title");
    cardTitle.style.opacity = 1;
    cardText.style.opacity = 0;
    cardTextContents.style.paddingTop = '5.5%';
    cardTextContents.style.opacity = 0;
  };
  componentDidMount() {
    const card = document.querySelectorAll(".card");

    card.forEach((card, i) => {
      card.addEventListener("mouseenter", this._enterFunction);
      card.addEventListener("mouseleave", this._leaveFunction);
    });
  }
  cardList = this.state.worksData.map((work, index) => 

    <NavLink className="card" to = {`/workDetail/${work.name}`} key={index} target="_blank">
      <Card title = {work.title} info = {work.info} thumbnail = {work.thumbnail}/>
    </NavLink>
  )

  
  render() {
    return (
      <div>
          <div className="cardContainer">
            <Fade>
            {this.cardList}
            </Fade>
          </div>
        </div>
    );
  }
}

export default CardContainer;


