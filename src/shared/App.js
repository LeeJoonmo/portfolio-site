import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "../components/Header";
import MainPage from "../components/MainPage";
import AboutPage from "../components/AboutPage";
import WorkPage from "../components/WorkPage";
import WorkDetailPage from "../components/WorkDetailPage";
import { Birthday, Cheerup, Popcorn, Muzicon, Rio, Helloryan, Ryanback, Friendspop, Kakaodriver, Camping, Typeface, Village, Daummobile, Kakaostory, Daumlocal, Weather} from "../components/works";


class App extends Component {
  state = {
  
    worksData : [
   //   {title: 'Drawer', name: 'drawer', info: 'Bookmark Service', date:2018, category: 'ui', thumbnail : 'http://leejoonmo.com/thumbnail/mockup.png', page : <Birthday />},
      {title: 'Kakao Search Weather', name: 'weather', info: 'Portal Collection', date:2018, category: 'ui', thumbnail : 'http://leejoonmo.com/thumbnail/weather.jpg', page : <Weather />},
      {title: 'Daum Mobile', name: 'daummobile', info: 'Portal Service', date:2018, category: 'ui', thumbnail : 'http://leejoonmo.com/thumbnail/daummobile.jpg', page : <Daummobile />},
      {title: 'Daum Local UX', name: 'daumlocal', info: 'Portal Collection', date:2017, category: 'ui', thumbnail : 'http://leejoonmo.com/thumbnail/daumlocal.jpg', page : <Daumlocal />},
      {title: 'Kakao Story Like', name: 'kakaostory', info: 'Event Interaction', date:2016, category: 'ui', thumbnail : 'http://leejoonmo.com/thumbnail/kakaostory.jpg', page : <Kakaostory />},
      {title: 'Happy Birthday', name: 'birthday', info: 'Character Branding Animation', date:2017, category: 'branding', thumbnail : 'http://leejoonmo.com/thumbnail/birthday.jpg', page : <Birthday />},
       {title: 'Cheerup', name: 'cheerup', info: 'Character Branding Animation', date:2017, category: 'branding', thumbnail : 'http://leejoonmo.com/thumbnail/cheerup.jpg', page : <Cheerup/> },
       {title: 'Friends Popcorn', name: 'popcorn', info: 'Game Marketing Animation', date:2017, category: 'branding', thumbnail : 'http://leejoonmo.com/thumbnail/popcorn.jpg', page : <Popcorn />},
       {title: 'Muzi&Con', name: 'muzicon', info: 'Character Branding Animation', date:2016, category: 'branding', thumbnail : 'http://leejoonmo.com/thumbnail/muzicon.jpg', page : <Muzicon />},
       {title: '뜻밖의 리우', name: 'rio', info: 'Character Branding Animation', date:2016, category: 'branding', thumbnail : 'http://leejoonmo.com/thumbnail/rio.jpg', page: <Rio/>},
       {title: 'Hello Ryan', name: 'helloryan', info: 'Character Branding Animation', date:2016, category: 'branding', thumbnail : 'http://leejoonmo.com/thumbnail/helloryan.jpg', page: <Helloryan/>},
       {title: '돌아온 라이언', name: 'ryanback', info: 'Character Branding Animation', date:2016, category: 'branding', thumbnail : 'http://leejoonmo.com/thumbnail/ryanback.jpg', page: <Ryanback/>},
       {title: 'Friends Pop', name: 'friendspop', info: 'Game Marketing Animation', date:2015, category: 'branding', thumbnail : 'http://leejoonmo.com/thumbnail/friendspop.jpg', page: <Friendspop/>},
       {title: 'KakaoDriver', name: 'kakaodriver', info: 'Service Marketing Movie', date:2015, category: 'branding', thumbnail : 'http://leejoonmo.com/thumbnail/kakaodriver.jpg', page: <Kakaodriver/>},
       {title: 'Kakao Typeface', name: 'typeface', info: 'Typeface Branding Animation', date:2015, category: 'branding', thumbnail : 'http://leejoonmo.com/thumbnail/typeface.jpg', page: <Typeface/>},
       {title: 'Friends Camping', name: 'camping', info: 'Character Branding Animation', date:2014, category: 'branding', thumbnail : 'http://leejoonmo.com/thumbnail/camping.jpg',  page: <Camping/>},
       {title: 'Friends Village', name: 'village', info: 'Store Branding Animation', date:2014, category: 'branding', thumbnail : 'http://leejoonmo.com/thumbnail/village.jpg', page:<Village/>},
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
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
