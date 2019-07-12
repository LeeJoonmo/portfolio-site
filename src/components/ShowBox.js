import React, { Component } from "react";
import "./Header.css";
import SwipeableViews from "react-swipeable-views";
import { virtualize, bindKeyboard } from "react-swipeable-views-utils";
import ShowBoxFirst from "./ShowBoxFirst";
import ShowBoxSecond from "./ShowBoxSecond";
import ShowBoxThird from "./ShowBoxThird";

const VirtualizeSwipeableViews = bindKeyboard(virtualize(SwipeableViews));
let interval = null;

class ShowBox extends Component {
  constructor(props) {
    super(props);
    this.state = { index: 0, white: false };
    this._checkHeaderColor = this._checkHeaderColor.bind(this);
    this._slideRenderer = this._slideRenderer.bind(this);
    this._onChangeIndexFunction = this._onChangeIndexFunction.bind(this);
  }

  _slideRenderer(params) {
    const { index, key } = params;
    let showBoxDiv;

    switch (Math.abs(index) % 3) {
      case 0:
        showBoxDiv = <ShowBoxFirst />;
        break;

      case 1:
        showBoxDiv = <ShowBoxSecond />;
        break;

      case 2:
        showBoxDiv = <ShowBoxThird />;
        break;

      default:
        break;
    }

    return <div key={key}>{showBoxDiv}</div>;
  }
  _next = () => {
    this.setState(state => {
      return { index: state.index + 1 };
    });

    clearInterval(interval);
    interval = setInterval(this._next, 4000);
  };
  _prev = () => {
    this.setState(state => {
      return { index: state.index - 1 };
    });

    clearInterval(interval);
    interval = setInterval(this._next, 4000);
  };

  _onChangeIndexFunction = index => {
    this.setState({
      index
    });

    clearInterval(interval);
    interval = setInterval(this._next, 4000);
  };

  _changeBlackWhite = () => {
    const dots = document.querySelectorAll(".flicking-dot");
    const rightMenu = document.querySelector(".rightMenu");
    const logo = document.querySelector(".logo");
    dots.forEach((dot, index) => {
      if (Math.abs(this.state.index % 3) === index) {
        dot.style.opacity = 1;
      } else {
        dot.style.opacity = 0.3;
      }
    });
    if (this.state.white) {
      logo.style.color = "rgb(255,255,255)";
      rightMenu.style.color = "rgb(255,255,255)";
      dots.forEach(dot => {
        dot.style.backgroundColor = "white";
      });
    } else {
      logo.style.color = "inherit";
      rightMenu.style.color = "inherit";
      dots.forEach(dot => {
        dot.style.backgroundColor = "#989898";
      });
    }
  };

  _checkHeaderColor = () => {
    const showBox = document.querySelectorAll(".showBox-container");
    if (showBox.length === 1) {
      if (window.scrollY < 1000) {
        switch (Math.abs(this.state.index % 3)) {
          case 0:
            this.setState({ white: false });
            this._changeBlackWhite();
            break;

          case 1:
            this.setState({ white: true });
            this._changeBlackWhite();
            break;

          case 2:
            this.setState({ white: true });
            this._changeBlackWhite();

            break;

          default:
            break;
        }
      }
    }
  };

  componentDidMount() {
    this._checkHeaderColor();
    interval = setInterval(this._next, 4000);
    const header = document.querySelector(".header");
    header.style.backgroundColor = "rgba(255, 255, 255, 0)";

    const showBoxContentsWrap = document.querySelector(
      ".showBox-component-wrap"
    );
    const windowHeight = window.innerHeight;
    const debounce = (func, wait = 3, immediate = true) => {
      var timeout;
      return function() {
        var context = this,
          args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    };

    const _handleScroll = () => {
      this._checkHeaderColor();
      const scrollY = window.scrollY;
      if (scrollY < windowHeight) {
        let opacityNum = 1 - 0.6 / (windowHeight / scrollY);
        showBoxContentsWrap.style.opacity = opacityNum.toFixed(2);
      } else {
        return;
      }
    };
    window.addEventListener("scroll", debounce(_handleScroll));
  }

  componentWillUnmount() {
    const header = document.querySelector(".header");
    const rightMenu = document.querySelector(".rightMenu");
    const logo = document.querySelector(".logo");
    header.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
    rightMenu.style.color = "inherit";
    logo.style.color = "inherit";
    clearInterval(interval);
  }
  render() {
    const { index, white } = this.state;
    return (
      <div className="showBox-container" id="showBox-container">
        <div className="showBox-component-wrap">
          <VirtualizeSwipeableViews
            index={index}
            slideRenderer={this._slideRenderer}
            onTransitionEnd={this._checkHeaderColor}
            onChangeIndex={this._onChangeIndexFunction}
          />
          <div className="flicking-dots">
            <div className="flicking-dot" />
            <div className="flicking-dot" />
            <div className="flicking-dot" />
          </div>
          <div className="showBox-button-prev" id="prev" onClick={this._prev}>
            <svg className="showBox-button-svg" height="40" width="24">
              <polyline
                points="14,1 1,14  14, 29 "
                style={{
                  fill: "none",
                  stroke: white === true ? "white" : "#333333",
                  strokeWidth: 2
                }}
              />
            </svg>
          </div>
          <div className="showBox-button-next" id="next" onClick={this._next}>
            <div className="svg-container">
              <svg className="showBox-button-svg" height="40" width="24">
                <polyline
                  points="1,1 14,14  1, 29 "
                  style={{
                    fill: "none",
                    stroke: white === true ? "white" : "#333333",
                    strokeWidth: 2
                  }}
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowBox;
