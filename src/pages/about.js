import React from "react";
import Slider from "react-slick";
import Next from "../assets/img/ic_right_white.svg";
import Prev from "../assets/img/ic_left_white.svg";
import IconDown from "../assets/img/ic_down_blue_solid.svg";
import Appstore from "../assets/img/ic_appstore_white.svg";
import GooglePlay from "../assets/img/ic_googleplay_white.svg";
import MobileApp from "../assets/img/app_img_sm.svg";
import { Link } from "react-router-dom";

const About = () => {
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button
        onClick={onClick}
        className={`btn slick-prev slick-arrow ${className}`}
        aria-label="Previous"
        type="button"
      >
        <img src={Prev} />
      </button>
    );
  }
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button
        onClick={onClick}
        className={`btn slick-next slick-arrow ${className}`}
        aria-label="Next"
        type="button"
      >
        <img src={Next} />
      </button>
    );
  }
  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <main>
      <section className="es-article-header">
        <div className="es-av-header">
          <div className="container">
            <div className="es-av-title">
              O‘zbek ma’naviy boy davlat, ammo internet kontenti-chi?
            </div>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to={"/"}>Asosiy</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Loyiha haqida
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      <section className="es-regular-section">
        <div className="container">
          <div className="es-map-container">
            <img
              className="img-fluid es-uzb-map"
              src={require("../assets/img/about_banner.png")}
              alt="uzb"
            />
            <div className="es-av-title text-center">
              O'zbeklar yangi yilni yangi yil deb nomlangan bayram bilan
              nishonlaydilar. Ular yangi yil daraxtini bezashadi, yangi yil
              bayramini nishonlashadi va bir-birlariga sovg'alar berishadi.
            </div>
            <button className="btn es-btn-light es-btn-save">
              Siz ham bilim ulashing
            </button>
          </div>
        </div>
      </section>
      <section className="es-regular-section">
        <div className="container">
          <h2 className="es-section-title">Employees</h2>
          <Slider {...settings} className="employees-slider">
            <div className="es-employee">
              <div className="es-employee-img">
                <a href="#">
                  <img
                    src={require("../assets/img/team.jpg")}
                    className="img-fluid"
                    alt="team"
                  />
                </a>
              </div>
              <img className="es-employee-arrow" src={IconDown} alt="down" />
              <div className="es-employee-name">
                <a href="#">Khamrayev Shokhrukh</a>
              </div>
              <div className="es-employee-role">General manager</div>
            </div>
            <div className="es-employee">
              <div className="es-employee-img">
                <a href="#">
                  <img
                    src={require("../assets/img/team.jpg")}
                    className="img-fluid"
                    alt="team"
                  />
                </a>
              </div>
              <img className="es-employee-arrow" src={IconDown} alt="down" />
              <div className="es-employee-name">
                <a href="#">Khamrayev Shokhrukh</a>
              </div>
              <div className="es-employee-role">General manager</div>
            </div>
            <div className="es-employee">
              <div className="es-employee-img">
                <a href="#">
                  <img
                    src={require("../assets/img/team.jpg")}
                    className="img-fluid"
                    alt="team"
                  />
                </a>
              </div>
              <img className="es-employee-arrow" src={IconDown} alt="down" />
              <div className="es-employee-name">
                <a href="#">Khamrayev Shokhrukh</a>
              </div>
              <div className="es-employee-role">General manager</div>
            </div>
            <div className="es-employee">
              <div className="es-employee-img">
                <a href="#">
                  <img
                    src={require("../assets/img/team.jpg")}
                    className="img-fluid"
                    alt="team"
                  />
                </a>
              </div>
              <img className="es-employee-arrow" src={IconDown} alt="down" />
              <div className="es-employee-name">
                <a href="#">Khamrayev Shokhrukh</a>
              </div>
              <div className="es-employee-role">General manager</div>
            </div>
            <div className="es-employee">
              <div className="es-employee-img">
                <a href="#">
                  <img
                    src={require("../assets/img/team.jpg")}
                    className="img-fluid"
                    alt="team"
                  />
                </a>
              </div>
              <img className="es-employee-arrow" src={IconDown} alt="down" />
              <div className="es-employee-name">
                <a href="#">Khamrayev Shokhrukh</a>
              </div>
              <div className="es-employee-role">General manager</div>
            </div>
            <div className="es-employee">
              <div className="es-employee-img">
                <a href="#">
                  <img
                    src={require("../assets/img/team.jpg")}
                    className="img-fluid"
                    alt="team"
                  />
                </a>
              </div>
              <img className="es-employee-arrow" src={IconDown} alt="down" />
              <div className="es-employee-name">
                <a href="#">Khamrayev Shokhrukh</a>
              </div>
              <div className="es-employee-role">General manager</div>
            </div>
          </Slider>
        </div>
      </section>
      <section className="es-regular-section es-mobile-app-section">
        <div className="container">
          <div className="es-mobile-app-container">
            <div className="es-mobile-app-content">
              <div className="es-mobile-app-title">BossBlog</div>
              <div className="es-mobile-app-desc">
                Mobil ilova bilan o’qish yana ham qulayroq
              </div>
              <nav className="nav">
                <a className="nav-link active" href="#">
                  <img className="img-fluid" src={Appstore} alt="appstore" />
                </a>
                <a className="nav-link" href="#">
                  <img
                    className="img-fluid"
                    src={GooglePlay}
                    alt="googleplay"
                  />
                </a>
              </nav>
            </div>
            <div className="es-mobile-app-img">
              <img
                className="img-fluid"
                src={require("../assets/img/app_img.png")}
                alt="app"
              />
              <img className="img-fluid" src={MobileApp} alt="app" />
            </div>
          </div>
        </div>
      </section>
      <section className="es-regular-section">
        <div className="container">
          <div className="es-article-text">
            Yarim tunda ular yangi yilni kutib olish uchun O'zbekiston
            madhiyasini kuylaydilar va bayramni davom ettiradilar. Bundan
            tashqari, o'zbeklar uchun eng mashhur bayram Navro'z bo'ladi va u
            eng tarixiy biri hisoblanadi. Rangli an'anaviy liboslar va
            dasturxondagi turli xil taomlar bayramning asosiy namunasini oladi.
            Biroq, bayramning asosiy taomi Sumalak bo'lib, uni butun tun
            qaynatish kerak.
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
