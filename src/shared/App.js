import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "../components/Header";
import MainPage from "../components/MainPage";
import AboutPage from "../components/AboutPage";
import WorkPage from "../components/WorkPage";
import WorkDetailPage from "../components/WorkDetailPage";
import PortfolioPage from "../components/PortfolioPage";
import {Kakaobank, Birthday, Cheerup, Popcorn, Muzicon, Rio, Helloryan, Ryanback, Friendspop, Kakaodriver, Camping, Typeface, Village, Daummobile, Kakaostory, Daumlocal, Weather, ArtTalk} from "../components/works";
//import thumbnail Images
import th_arttalk from "../images/thumbnail/arttalk.jpg";
import th_birthday from "../images/thumbnail/birthday.jpg";
import th_camping from "../images/thumbnail/camping.jpg";
import th_cheerup from "../images/thumbnail/cheerup.jpg";
import th_daumlocal from "../images/thumbnail/daumlocal.jpg";
import th_daummobile from "../images/thumbnail/daummobile.jpg";
import th_friendspop from "../images/thumbnail/friendspop.jpg";
import th_helloryan from "../images/thumbnail/helloryan.jpg";
import th_kakaobank from "../images/thumbnail/kakaobank.png";
import th_kakaodriver from "../images/thumbnail/kakaodriver.jpg";
import th_kakaostory from "../images/thumbnail/kakaostory.jpg";
import th_muzicon from "../images/thumbnail/muzicon.jpg";
import th_popcorn from "../images/thumbnail/popcorn.jpg";
import th_rio from "../images/thumbnail/rio.jpg";
import th_ryanback from "../images/thumbnail/ryanback.jpg";
import th_typeface from "../images/thumbnail/typeface.jpg";
import th_village from "../images/thumbnail/village.jpg";
import th_weather from "../images/thumbnail/weather.jpg";

class App extends Component {
  state = {
  
    worksData : [
   //   {title: 'Drawer', name: 'drawer', info: 'Bookmark Service', date:2018, category: 'ui', thumbnail : 'http://leejoonmo.com/thumbnail/mockup.png', page : <Birthday />},
      {title: 'Kakao Search Weather', name: 'weather', info: 'Portal Collection', date:2018, category: 'ui', thumbnail : {th_weather}, page : <Weather />},
      {title: 'Daum Mobile', name: 'daummobile', info: 'Portal Service', date:2018, category: 'ui', thumbnail : {th_daummobile}, page : <Daummobile />},
      {title: 'Art Talk', name: 'arttalk', info: 'Branding', date:2018, category: 'branding', thumbnail : {th_arttalk}, page : <ArtTalk />},
      {title: 'Daum Local UX', name: 'daumlocal', info: 'Portal Collection', date:2017, category: 'ui', thumbnail : {th_daumlocal}, page : <Daumlocal />},
      {title: 'Kakao Story Like', name: 'kakaostory', info: 'Event Interaction', date:2016, category: 'ui', thumbnail : {th_kakaostory}, page : <Kakaostory />},
      {title: 'Happy Birthday', name: 'birthday', info: 'Character Branding Animation', date:2017, category: 'character', thumbnail : {th_birthday}, page : <Birthday />},
       {title: 'Cheerup', name: 'cheerup', info: 'Character Branding Animation', date:2017, category: 'character', thumbnail : {th_cheerup}, page : <Cheerup/> },
       {title: 'Friends Popcorn', name: 'popcorn', info: 'Game Marketing Animation', date:2017, category: 'branding', thumbnail : {th_popcorn}, page : <Popcorn />},
       {title: 'Kakao Bank Vision', name: 'kakaobank', info: 'Vision Movie', date:2016, category: 'branding', thumbnail : {th_kakaobank}, page : <Kakaobank />},
       {title: 'Muzi&Con', name: 'muzicon', info: 'Character Branding Animation', date:2016, category: 'character', thumbnail : {th_muzicon}, page : <Muzicon />},
       {title: '뜻밖의 리우', name: 'rio', info: 'Character Branding Animation', date:2016, category: 'character', thumbnail : {th_rio}, page: <Rio/>},
       {title: 'Hello Ryan', name: 'helloryan', info: 'Character Branding Animation', date:2016, category: 'character', thumbnail :{th_helloryan}, page: <Helloryan/>},
       {title: '돌아온 라이언', name: 'ryanback', info: 'Character Branding Animation', date:2016, category: 'character', thumbnail : {th_ryanback}, page: <Ryanback/>},
       {title: 'Friends Pop', name: 'friendspop', info: 'Game Marketing Animation', date:2015, category: 'branding', thumbnail : {th_friendspop}, page: <Friendspop/>},
       {title: 'KakaoDriver', name: 'kakaodriver', info: 'Service Marketing Movie', date:2015, category: 'branding', thumbnail : {th_kakaodriver}, page: <Kakaodriver/>},
       {title: 'Kakao Typeface', name: 'typeface', info: 'Typeface Branding Animation', date:2015, category: 'branding', thumbnail : {th_typeface}, page: <Typeface/>},
       {title: 'Friends Camping', name: 'camping', info: 'Character Branding Animation', date:2014, category: 'character', thumbnail : {th_camping},  page: <Camping/>},
       {title: 'Friends Village', name: 'village', info: 'Store Branding Animation', date:2014, category: 'character', thumbnail : {th_village}, page:<Village/>},
       
     ],
     worksDataPort : [
      //   {title: 'Drawer', name: 'drawer', info: 'Bookmark Service', date:2018, category: 'ui', thumbnail : 'http://leejoonmo.com/thumbnail/mockup.png', page : <Birthday />},
         
         
         {title: 'Art Talk', name: 'arttalk', info: 'Branding', date:2018, category: 'branding', thumbnail : {th_arttalk}, page : <ArtTalk />},
         
         {title: 'Kakao Story Like', name: 'kakaostory', info: 'Event Interaction', date:2016, category: 'ui', thumbnail : {th_kakaostory}, page : <Kakaostory />},
         {title: 'Happy Birthday', name: 'birthday', info: 'Character Branding Animation', date:2017, category: 'character', thumbnail : {th_birthday}, page : <Birthday />},
          {title: 'Cheerup', name: 'cheerup', info: 'Character Branding Animation', date:2017, category: 'character', thumbnail : {th_cheerup}, page : <Cheerup/> },
          {title: 'Friends Popcorn', name: 'popcorn', info: 'Game Marketing Animation', date:2017, category: 'branding', thumbnail : {th_popcorn}, page : <Popcorn />},
          {title: 'Kakao Bank Vision', name: 'kakaobank', info: 'Vision Movie', date:2016, category: 'branding', thumbnail : {th_kakaobank}, page : <Kakaobank />},
          {title: 'Muzi&Con', name: 'muzicon', info: 'Character Branding Animation', date:2016, category: 'character', thumbnail : {th_muzicon}, page : <Muzicon />},
          {title: '뜻밖의 리우', name: 'rio', info: 'Character Branding Animation', date:2016, category: 'character', thumbnail : {th_rio}, page: <Rio/>},
          {title: 'Hello Ryan', name: 'helloryan', info: 'Character Branding Animation', date:2016, category: 'character', thumbnail :{th_helloryan}, page: <Helloryan/>},
          {title: '돌아온 라이언', name: 'ryanback', info: 'Character Branding Animation', date:2016, category: 'character', thumbnail : {th_ryanback}, page: <Ryanback/>},
          {title: 'Friends Pop', name: 'friendspop', info: 'Game Marketing Animation', date:2015, category: 'branding', thumbnail : {th_friendspop}, page: <Friendspop/>},
          {title: 'KakaoDriver', name: 'kakaodriver', info: 'Service Marketing Movie', date:2015, category: 'branding', thumbnail : {th_kakaodriver}, page: <Kakaodriver/>},
          {title: 'Kakao Typeface', name: 'typeface', info: 'Typeface Branding Animation', date:2015, category: 'branding', thumbnail : {th_typeface}, page: <Typeface/>},
          {title: 'Friends Camping', name: 'camping', info: 'Character Branding Animation', date:2014, category: 'character', thumbnail : {th_camping},  page: <Camping/>},
          {title: 'Friends Village', name: 'village', info: 'Store Branding Animation', date:2014, category: 'character', thumbnail : {th_village}, page:<Village/>},
          
        ]
   
}

_renderMainPage = () =>{
  return <MainPage worksData = {this.state.worksData}/>
}
_renderWorkPage = () =>{
  return <WorkPage worksData = {this.state.worksData}/>
}
_renderWorkDetailPage = (props) =>{
  return <WorkDetailPage {...props} worksData = {this.state.worksData}/>
}
_renderPortfolioPage = (props) =>{
  return <PortfolioPage {...props} worksData = {this.state.worksDataPort}/>
}


  render() {
    return (
      <BrowserRouter>
      
        <div>

            <Header />
            <Switch>
              
              <Route exact path="/" render={this._renderMainPage} />
              <Route path="/work" render={this._renderWorkPage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/workDetail/:id" render= {this._renderWorkDetailPage} />
              <Route path="/portfolio" render= {this._renderPortfolioPage} />
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
