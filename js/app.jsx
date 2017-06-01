import React from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
  Route,
  Link,
  IndexLink,
  IndexRoute,
  hashHistory
} from 'react-router';
import style from '../scss/main.scss';
const logo = require("file-loader!../images/logo.png");
const backgroundPic = require("file-loader!../images/tisposo_onas_IzaMagdazlogo.jpg");
const usaPic = require("file-loader!../images/usa.jpg");
const lightpinkPic = require("file-loader!../images/lightpink.jpg");
const flowersPic = require("file-loader!../images/kwiaty.jpg");
const violetPic = require("file-loader!../images/fiolet.jpg");
const whitePic = require("file-loader!../images/white.jpg");
const bluePic = require("file-loader!../images/blue.jpg");
const naturaPic = require("file-loader!../images/natura.jpg");
const mountainsPic = require("file-loader!../images/mountains.jpg");

class App extends React.Component{
  render() {
    return (
      <div>
        <Home/>
        <AboutUs/>
        <HowItWorks/>
        <Offer/>
        <Gallery/>
        <Contact/>
      </div>
    );
  }
}
class Home extends React.Component{
  render() {
    return (
      <section id="home" style={{backgroundImage: 'url(./js/' +backgroundPic + ')'}}>
        <div className="container" >
          <div id="header">
            <div className="col-12">
            <nav>
              <a href="#home" style={{color: 'deeppink'}}>HOME</a>
              <a href="#aboutUs" style={{color: 'darkturquoise'}}>O NAS</a>
              <a href="#howItWorks" style={{color: 'deeppink'}}>JAK TO DZIAŁA</a>
              <a href="#offer" style={{color: 'darkturquoise'}}>OFERTA</a>
              <a href="#gallery" style={{color: 'deeppink'}}>GALERIA</a>
              <a href="#contact" style={{color: 'darkturquoise'}}>KONTAKT</a>
            </nav>
          </div>
          </div>
          <div id="foot">
            <p className="textBlue">Organizacja oraz Koordynacja</p>
            <p className="textPink">Ślubów oraz Wesel</p>
          </div>
        </div>
      </section>
    );
  }
}
class AboutUs extends React.Component{
  render() {
    return (
      <section id="aboutUs">
       <div className="container">
        <div className="row idCards">
          <div className="col-4">
            <div>Magdalena Tekiel</div>
            <div>Nasza Agencj Ślubna</div>
            <div>Izabela Zackiewicz</div>
          </div>
        </div>
       </div>
      </section>
    );
  }
}
class HowItWorks extends React.Component{
  render() {
    return (
      <section id="howItWorks">
        <div className="container">

        </div>
      </section>
    );
  }
}
class Offer extends React.Component{
  render() {
    return (
      <section id="offer">
        <div className="container">

        </div>
      </section>
    );
  }
}
class Gallery extends React.Component{
  render() {
    return (
      <section id="gallery">
        <div className="container">

        </div>
        <div id="galleryBody">
          <div className="row">
           <div className="col-3">
             <div className="galleryPic" style={{backgroundImage: 'url(./js/' +usaPic + ')'}}></div>
           </div>
           <div className="col-3">
             <div className="galleryPic" style={{backgroundImage: 'url(./js/' +violetPic + ')'}}></div>
            </div>
            <div className="col-3">
              <div className="galleryPic" style={{backgroundImage: 'url(./js/' +flowersPic + ')'}}></div>
            </div>
            <div className="col-3">
             <div className="galleryPic" style={{backgroundImage: 'url(./js/' +lightpinkPic + ')'}}></div>
            </div>
           </div>
          <div className="row">
           <div className="col-3">
             <div className="galleryPic" style={{backgroundImage: 'url(./js/' +bluePic + ')'}}></div>
             <div className="galleryPic" style={{backgroundImage: 'url(./js/' +whitePic + ')'}}></div>
             <div className="galleryPic" style={{backgroundImage: 'url(./js/' +naturaPic + ')'}}></div>
             <div className="galleryPic" style={{backgroundImage: 'url(./js/' +mountainsPic + ')'}}></div>
           </div>
          </div>
        </div>

      </section>
    );
  }
}
class Contact extends React.Component{
  render() {
    return (
      <section id="contact">
        <div className="container">

        </div>
      </section>
    );
  }
}
document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
