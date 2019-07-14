import React, { Component, Fragment } from "react";
import "./Card.css";
import "./Header.css";
import { Link } from "react-router-dom";

class ShowBoxFirst extends Component {
  render() {
    return (
      <Fragment>
        <Link to="/workDetail/arttalk">
          <div className="showBox-wrap">
            <div className="showBox-info">
              <div
                className="showBox-info-inside"
                style={{ color: "white", borderBottomColor: "white" }}
              >
                Art Talk
              </div>
            </div>
            <div
              className="showBox-contents"
              style={{ backgroundColor: "#2F3031" }}
            >
              <img
                className="showBox-img"
                src="http://leejoonmo.com/thumbnail/showboxarttalk.png"
                alt=" "
              />
            </div>
          </div>
        </Link>
      </Fragment>
    );
  }
}

export default ShowBoxFirst;
