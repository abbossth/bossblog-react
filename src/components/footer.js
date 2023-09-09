import Logo from "../assets/img/logo.svg";
import Twitter from  "../assets/img/ic_twitter.svg";
import YouTube from  "../assets/img/ic_youtube.svg";
import Facebook from "../assets/img/ic_facebook.svg";
import Appstore from  "../assets/img/ic_appstore.svg";
import Googleplay from  "../assets/img/ic_googleplay.svg";

const Footer = () => {
  return (
    <footer class="es-footer">
      <div class="container">
        <div class="row">
          <div class="col-md-2">
            <div class="es-footer-logo">
              <a href="#">
                <img
                  class="img-fluid es-footer-logo-ic"
                  src={require("../assets/img/ic_logo.png")}
                  alt="BossBlog"
                />
                <img class="img-fluid" src={Logo} alt="BossBlog" />
              </a>
            </div>
          </div>
          <div class="col-md-7">
            <nav class="nav es-footer-nav">
              <a class="nav-link active" href="#">
                Loyiha haqida
              </a>
              <a class="nav-link" href="#">
                Yordam
              </a>
              <a class="nav-link" href="#">
                Foydalanish shartlari
              </a>
              <a class="nav-link" href="#">
                Maxfiylik siyosati
              </a>
            </nav>
            <div class="es-footer-blog-info">
              Ushbu loyihaning maqsadi oʻzbek tilida ilmiy maqolalar onlayn chop
              etish orqali milliy kontentni boyitish va hamjamiyatni
              kengaytirish.
            </div>
            <div class="es-footer-copyright">
              © Copyright 2023 Boss Blog inc.
            </div>
          </div>
          <div class="col-md-3">
            <div class="es-footer-socials">
              <nav class="nav">
                <a class="nav-link active" href="#">
                  <img src={Facebook} alt="facebook" />
                </a>
                <a class="nav-link" href="#">
                  <img src={Twitter} alt="twitter" />
                </a>
                <a class="nav-link" href="#">
                  <img src={YouTube} alt="youTube" />
                </a>
              </nav>
              <nav class="nav">
                <a class="nav-link active" href="#">
                  <img class="img-fluid" src={Appstore} alt="appstore" />
                </a>
                <a class="nav-link" href="#">
                  <img class="img-fluid" src={Googleplay} alt="googleplay" />
                </a>
              </nav>
            </div>
          </div>
        </div>
        <div class="es-footer-copyright-sm xl-hide">
          © Copyright 2023 Boss Blog inc.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
