import React, { Component , Fragment} from "react";
import "./Card.css";
class Card extends Component {
  render() {
    return (
      <Fragment>
      <div className = "card-wrap">
        <div className="cardText">
          <div className="cardText-contents">
            <div className="cardText_title">{this.props.title}</div>
            <div className="cardText_info">{this.props.info}</div>
          </div>
        </div>
        <img className="cardImg" src={this.props.thumbnail} alt={this.props.title} />
      </div>
      <div className = "card-title">{this.props.title}</div>
      </Fragment>
    );
  }
}

export default Card;
