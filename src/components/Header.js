import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import "./Card.css";
class Header extends Component {
  componentDidMount() {
    let scrollPos = 0;

    const windowHeight = window.innerHeight;
    const header = document.querySelector(".header");

    const _headerScroll = () => {
  
      const scrollY = window.scrollY;
      const showBox = document.querySelectorAll('.showBox-container');
      const about = document.querySelectorAll('.about-category');
      const rightMenu = document.querySelector(".rightMenu");
      const logo = document.querySelector(".logo");

      if (about.length > 0 ){
        header.style.marginTop = '0px';
      } else if (document.body.getBoundingClientRect().top > scrollPos || 30 > scrollY) {
          header.style.marginTop = 0;
        } else {
          header.style.marginTop = "-100px";
        }

      if (showBox.length > 0 && scrollY < windowHeight) { 
       header.style.backgroundColor = 'rgba(255, 255, 255, 0)';
      }else{
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        rightMenu.style.color = 'inherit';
        logo.style.color = 'inherit';
      }

      scrollPos = document.body.getBoundingClientRect().top;
    };

    window.addEventListener("scroll", _headerScroll, {passive:true});

  }
  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="headerContainer">
            <NavLink to="/" className="logo">
              Joonmo
            </NavLink>
            <div className="rightMenu">
            
              <NavLink
                to="/work"
                className="rigthMenu__work rightMenu__child"
                activeClassName="rightMenu-selected"
              >
                WORK
              </NavLink>
              <NavLink
                to="/about"
                className="rigthMenu__about rightMenu__child"
                activeClassName="rightMenu-selected"
              >
                ABOUT
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
