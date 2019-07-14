import React, { Component, Fragment } from "react";
import "./Card.css";
import "./Header.css";
import { Link } from "react-router-dom";
class ShowBoxSecond extends Component {
  render() {
    return (
      <Fragment>
        <Link to="/workDetail/daummobile">
          <div className="showBox-wrap">
            <div className="showBox-info" style={{ color: "#333333" }}>
              <div className="showBox-info-inside">Daum Mobile</div>
            </div>
            <div
              className="showBox-contents"
              style={{ backgroundColor: "#F3F4F6" }}
            >
              <img
                className="showBox-img"
                src="http://leejoonmo.com/workimg/daummobile/tomain.jpg"
                alt=" "
              />
            </div>
          </div>
        </Link>
      </Fragment>
    );
  }
}

export default ShowBoxSecond;
