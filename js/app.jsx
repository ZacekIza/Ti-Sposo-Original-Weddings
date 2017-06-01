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

        <div id="galleryBody">
          <div className="col-3">
            <div>aaaa</div>
            <div>bbbbb</div>
            <div>ccccc</div>
            <div>ddddd</div>
          </div>
          <div className="col-3">
            <div>eeeeee</div>
            <div>fffff</div>
            <div>ggggg</div>
            <div>hhhhh</div>
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
