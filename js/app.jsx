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
const tekla = require("file-loader!../images/magda.JPG");
const iza = require("file-loader!../images/tisposo_onas_Iza.jpg");
const contact = require("file-loader!../images/contact.jpg");
const venue = require("file-loader!../images/venue.jpg");
const photographer = require("file-loader!../images/photographer.jpg");
const music = require("file-loader!../images/music.jpg");
const flowers = require("file-loader!../images/flowers.jpg");
const themee = require("file-loader!../images/themee.jpg");
const elsee = require("file-loader!../images/else.jpg");
class App extends React.Component {
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

class Home extends React.Component {
  render() {
    return (
      <section id="home" style={{
        backgroundImage: 'url(./js/' + backgroundPic + ')'
      }}>
        <div className="container">
          <div id="header">
            <div className="col-12">
                  <nav id="navi">
                    <a href="#home" style={{
                      color: 'deeppink'
                    }}>HOME</a>
                    <a href="#aboutUs" style={{
                      color: 'darkturquoise'
                    }}>O NAS</a>
                    <a href="#howItWorks" style={{
                      color: 'deeppink'
                    }}>JAK TO DZIAŁA</a>
                    <a href="#offer" style={{
                      color: 'darkturquoise'
                    }}>OFERTA</a>
                    <a href="#gallery" style={{
                      color: 'deeppink'
                    }}>GALERIA</a>
                    <a href="#contact" style={{
                      color: 'darkturquoise'
                    }}>KONTAKT</a>
                  </nav>
                </div>
              </div>
              <div id="foot">
                <p className="textBlue">Organizacja oraz Koordynacja</p>
                <p className="textPink">Ślubów oraz Wesel</p>
              </div>
            </div>
          </section>
          ); } }
          class AboutUs extends React.Component{
            constructor(props){
              super(props)
              this.state = {
                display: "none",
                displayL: "none",
                displayI: "none"
              }
            }
            clickMagda = ()=>{
              this.setState({display: "block"})
            }
            leaveMagda = ()=>{
              this.setState({display:"none"})
            }
            clickLogo = ()=>{
              this.setState({displayL:"block"})
            }
            leaveLogo = ()=>{
              this.setState({displayL:"none"})
            }
            clickIza = ()=>{
              this.setState({displayI:"block"})
            }
            leaveIza = ()=>{
              this.setState({displayI:"none"})
            }
            render() {
            return (
              <section id="aboutUs">
                <div className="container">
                  <div className="row titleId">
                    <div className="col-12">
                      <div className="titleOnas">Krótka historia naszej firmy</div>
                    </div>
                  </div>
                  <div className="row idCards">
                    <div className="col-4">

                      <div className="frame" onMouseLeave={this.leaveMagda}>
                        <div onMouseEnter={this.clickMagda} className="onasPicMadzia" style={{
                          backgroundImage: 'url(./js/' + tekla + ')'
                        }}><div className="aboutMagda" style={{display: this.state.display}}>Nazywam się Magdalena Tekiel, dla przyjaciół Tekla. Jestem w szczęśliwym związku od ponad 5 lat i za nic nie zamieniłabym sekundy spędzonej z moją drugą połówką. Przez 17 lat byłam profesjonalną siatkarką co umożliwiło mi na rozwinięcie w sobie roli team leadera, silnych cech organizacyjnych oraz opanowania w trudnych sytuacjach. Fach ten obdarzył mnie również możliwością podróżowania. Przez 4 lata mieszkałam w USA oraz rok we Włoszech. Z wykształcenia jestem dyplomatką, co pozwoliło mi na wzorowe opanowanie sztuki sovoir - vivre. Od powrotu do Polski pracowałam w sprzedaży, marketingu oraz zajmowałam się rozwojem biznesu na rożnych płaszczyznach organizacji. Od zawsze wiedziałam, że celem mojego życia jest uszczęśliwianie ludzi, a obecna praca przy tak wyjątkowych wydarzeniach zakochanych w sobie osób jest dla mnie jego spełnieniem. </div></div>
                        <p className="smallTittleOnas">Magdalena Tekiel</p>
                        <p className="smallTittleOnasDescript">Wedding Planner</p>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="frameLogo" onMouseLeave={this.leaveLogo}>
                        <div onMouseEnter={this.clickLogo} className="onasPicLogo" style={{
                          backgroundImage: 'url(./js/' + logo + ')'
                        }}><div className="aboutLogo" style={{display: this.state.displayL}}>Ti Sposo jest nową agencją na rynku usług ślubnych.
Ti Sposo Original Weddings to kolejny, najnowszy profil działalności firmy  PERFEKT Zofia Wróblewska funkcjonującej  na rynku od 1994 roku. Ten segment firmy zarządzany jest przez dwie kreatywne i pełne dobrej energii młode kobiety: Magdalenę Tekiel oraz Izabelę Zackiewicz.
Ti SposoOriginalWeddings zajmuje się kompleksową organizacją ślubów, służy profesjonalną poradą oraz ratuje w nieoczekiwanych okolicznościach w dniu ślubu.
Magdalena oraz Izabela organizują uroczystości biorąc pod uwagę gust klienta oraz łącząc go z własnymi inspiracjami i wyobraźnią. Energiczny zespół Ti Sposo jest otwarty na wyzwania czyli organizacje najbardziej niespotykanych ślubów i wesel.
Ti Sposo Original Weddings wyróżnia się na rynku usług ślubnych doświadczeniem ze Stanów Zjednoczonych Ameryki - potentata na rynku ślubnym. To doświadczenie  zapewni oryginalne, niespotykane rozwiązania, które uczynią Państwa ślub i wesele wydarzeniem niezapomnianym i wyjątkowym. </div></div>
                        <p className="smallTittleOnasLogo">Nasza Agencja</p>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="frameIza" onMouseLeave={this.leaveIza}>
                        <div onMouseEnter={this.clickIza} className="onasPicIza" style={{
                          backgroundImage: 'url(./js/' + iza + ')'
                        }}><div className="aboutMagda" style={{display: this.state.displayI}}>Nazywam się Izabela Zackiewicz. Jestem szczęśliwą mężatką, a ślub rzeczywiście był jednym z najwspanialszych dni w moim życiu. Od prawie dwudziestu lat jestem wyczynowym sportowcem, co nauczyło mnie dyscypliny, organizacji czasu, i przede wszystkim działania w sytuacjach stresowych. Z wykształcenia jestem psychologiem, a dyplom uzyskałam w USA gdzie mieszkałam kilka lat. Lubię poznawać nowe kultury, dlatego przez krótki okres czasu mieszkałam również w Szwajcarii i Niemczech. Podróże nauczyły mnie otwartości na ludzi. Uwielbiam śluby i wesela, ponieważ taki jak i ludzi – nie ma dwóch takich samych. </div></div>
                        <p className="smallTittleOnas">Izabela Zackiewicz</p>
                        <p className="smallTittleOnasDescript">Wedding Planner</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
          }
}
          class HowItWorks extends React.Component{render() {
            return (
              <section id="howItWorks">
                <div className="container"></div>
              </section>
            );
          }
}
          class Offer extends React.Component{render() {
            return (
              <section id="offer">
                <div className="container">
                 <div className="row">
                  <div className="col-12 offerText">
                    Nasza Oferta Zawiera Międzyinnymi:
                  </div>
                 </div>
                 <div className="row offerRow">
                   <div className="col-2">
                       <div className="offerPics" style={{
                         backgroundImage: 'url(./js/' + venue + ')'
                       }}></div>
                     <p className="offerTextEach"><b>VENUE</b><br/>Pomoc w znalezieniu oraz podpisaniu umowy z najodpowiedniejszym miejscem na uroczystość.</p>
                     </div>
                   <div className="col-2 extra">
                       <div className="offerPics " style={{
                         backgroundImage: 'url(./js/' + music + ')'
                       }}></div>
                     <p className="offerTextEach"><b>MUZYKA</b><br/>Pomoc w znalezieniu oraz podpisaniu umowy z najodpowiedniejszym DJ-em lub zespołem muzycznym.</p>
                     </div>
                     <div className="col-2 extra">
                         <div className="offerPics " style={{
                           backgroundImage: 'url(./js/' + photographer + ')'
                         }}></div>
                       <p className="offerTextEach"><b>FOTO & VIDEO</b><br/>Pomoc w znalezieniu oraz podpisaniu umowy z najodpowiedniejszą ekipą fotograficzną i/lub filmową.</p>
                     </div>
                     <div className="col-2 extra">
                           <div className="offerPics " style={{
                             backgroundImage: 'url(./js/' + flowers + ')'
                           }}></div>
                         <p className="offerTextEach"><b>FLORYSTYKA</b><br/>Pomoc w znalezieniu oraz podpisaniu umowy z najodpowiedniejszą firmą florystyczną.</p>
                     </div>
                     <div className="col-2">
                         <div className="offerPics" style={{
                           backgroundImage: 'url(./js/' + themee + ')'
                         }}></div>
                       <p className="offerTextEach"><b>TEMAT PRZEWODNI</b><br/>Pomoc przy wymyślaniu tematu przewodniego ślubu oraz wesela, oraz pomoc przy znjadowaniu odpowiednich akcesoriów do tematu przewodniego.</p>
                     </div>
                     <div className="col-2">
                         <div className="offerPics" style={{
                           backgroundImage: 'url(./js/' + elsee + ')'
                         }}></div>
                       <p className="offerTextEach"><b>CAŁA RESZTA</b><br/>Pomoc przy organizacji papeterii ślubnej, formalności ślubnych, ubioru do ślubu, wizażu, samochodu i wszystkiego czego Para Młoda sobie wymyśli.</p>
                     </div>
                   </div>
                </div>
              </section>
            );
          }
}
          class Gallery extends React.Component{render() {
            return (
              <section id="gallery">
                <div className="container"></div>
                <div id="galleryBody">
                  <div className="row">
                    <div className="col-3">
                      <div className="galleryPic" style={{
                        backgroundImage: 'url(./js/' + usaPic + ')'
                      }}><p className="picNames">Jesienne Wesele</p></div>
                    </div>
                    <div className="col-3">
                      <div className="galleryPic" style={{
                        backgroundImage: 'url(./js/' + violetPic + ')'
                      }}><p className="picNames">Amerykańskie Wesele</p></div>
                    </div>
                    <div className="col-3">
                      <div className="galleryPic" style={{
                        backgroundImage: 'url(./js/' + flowersPic + ')'
                      }}><p className="picNames">Różowe Wesele</p></div>
                    </div>
                    <div className="col-3">
                      <div className="galleryPic" style={{
                        backgroundImage: 'url(./js/' + lightpinkPic + ')'
                      }}><p className="picNames">Wesele z Chrzcinami</p></div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-3">
                      <div className="galleryPic" style={{
                        backgroundImage: 'url(./js/' + bluePic + ')'
                      }}><p className="picNames">Szafirowe Wesele</p></div>
                      <div className="galleryPic" style={{
                        backgroundImage: 'url(./js/' + whitePic + ')'
                      }}><p className="picNames">Białe Wesele</p></div>
                      <div className="galleryPic" style={{
                        backgroundImage: 'url(./js/' + naturaPic + ')'
                      }}><p className="picNames">Industrialne Wesele</p></div>
                      <div className="galleryPic" style={{
                        backgroundImage: 'url(./js/' + mountainsPic + ')'
                      }}><p className="picNames">Góralskie Wesele</p></div>
                    </div>
                  </div>
                </div>

              </section>
            );
          }
}
          class Contact extends React.Component{render() {
            return (
              <section id="contact" style={{
                backgroundImage: 'url(./js/' + contact + ')'
              }}>
                <div className="container">
                  <div className="row">
                    <div className="col-4"/>
                    <div className="col-4">
                      <div className="contactText">
                        <h2>IKJ Perfekt<br/> Ti Sposo Original Weddings<br/> Zofia Wróblewska</h2>
                        <p>
                          NIP: 5271010450 <br/>REGON:010860841<br/>Ul. Dębicka 29/3<br/>01-462 Warszawa
                        </p>
                      </div>
                    </div>
                  </div>
                    <div className="col-4"/>
                  <div className="row contactRow">
                    <div className="col-4 contactTextGirls contactMagda">
                      <h1>Magdalena Tekiel</h1>
                      <p>Telefon:<br/><b>516 684 841</b><br/>Email:<br/> <b>magdalena.tekiel@gmail.com</b></p>
                    </div>
                    <div className="col-4 contactTextGirls ">
                      <p className="contactIza">Izabela Zackiewicz </p>
                      <p>Telefon:<br/><b>664 435 449</b><br/>Email:<br/> <b>zackiewicz.iza@gmail.com</b></p>
                    </div>
                  </div>
                </div>
              </section>
            );
          }
}
          document.addEventListener('DOMContentLoaded', function(){ReactDOM.render(
            <App/>, document.getElementById('app'));
})
