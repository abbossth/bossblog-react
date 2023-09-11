import Logo from "../assets/img/logo.svg";
import Twitter from "../assets/img/ic_twitter.svg";
import YouTube from "../assets/img/ic_youtube.svg";
import Facebook from "../assets/img/ic_facebook.svg";
import Appstore from "../assets/img/ic_appstore.svg";
import Googleplay from "../assets/img/ic_googleplay.svg";
import LogoIcon from "../assets/img/ic_logo.png";

const Footer = () => {
  return (
    <footer className="es-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <div className="es-footer-logo">
              <a href="#">
                <img
                  className="img-fluid es-footer-logo-ic"
                  src={LogoIcon}
                  alt="BossBlog"
                />
                <img className="img-fluid" src={Logo} alt="BossBlog" />
              </a>
            </div>
          </div>
          <div className="col-md-7">
            <nav className="nav es-footer-nav">
              <a className="nav-link active" href="#">
                Loyiha haqida
              </a>
              <a className="nav-link" href="#">
                Yordam
              </a>
              <a className="nav-link" href="#">
                Foydalanish shartlari
              </a>
              <a className="nav-link" href="#">
                Maxfiylik siyosati
              </a>
            </nav>
            <div className="es-footer-blog-info">
              Ushbu loyihaning maqsadi oʻzbek tilida ilmiy maqolalar onlayn chop
              etish orqali milliy kontentni boyitish va hamjamiyatni
              kengaytirish.
            </div>
            <div className="es-footer-copyright">
              © Copyright 2023 Boss Blog inc.
            </div>
          </div>
          <div className="col-md-3">
            <div className="es-footer-socials">
              <nav className="nav">
                <a className="nav-link active" href="#">
                  <img src={Facebook} alt="facebook" />
                </a>
                <a className="nav-link" href="#">
                  <img src={Twitter} alt="twitter" />
                </a>
                <a className="nav-link" href="#">
                  <img src={YouTube} alt="youTube" />
                </a>
              </nav>
              <nav className="nav">
                <a className="nav-link active" href="#">
                  <img className="img-fluid" src={Appstore} alt="appstore" />
                </a>
                <a className="nav-link" href="#">
                  <img
                    className="img-fluid"
                    src={Googleplay}
                    alt="googleplay"
                  />
                </a>
              </nav>
            </div>
          </div>
        </div>
        <div className="es-footer-copyright-sm xl-hide">
          © Copyright 2023 Boss Blog inc.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
