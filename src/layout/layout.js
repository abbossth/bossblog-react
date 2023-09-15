import { useEffect } from "react";
import axios from "../api/axios";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Comment from "../components/modals/comment";
import AuthModal from "../components/modals/authModal";
import { useDispatch, useSelector } from "react-redux";
import { getTrendingTopics } from "../store/actions/trendingTopicsAction";
import { getTrendingArticles } from "../store/actions/trendingArticlesAction";
import { getArticles } from "../store/actions/articleAction";
import MenuModal from "../components/modals/menuModal";
import $ from "jquery";
import Top from "../assets/img/ic_top.svg";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const { currentPage, limit, pagination, articles } = useSelector(
    (state) => state.articleReducer
  );
  const fetchTrendingTopics = async () => {
    try {
      const res = await axios.get(`/topics/tranding`);
      dispatch(getTrendingTopics(res?.data?.data));
    } catch (err) {
      console.log(`Unhandled Error in trending topics ${err}`);
    }
  };

  const fetchTrendingArticles = async () => {
    try {
      const res = await axios.get(`/posts/tranding`);
      dispatch(getTrendingArticles(res?.data?.data));
    } catch (err) {
      console.log(`Unhandled Error in trending articles ${err}`);
    }
  };

  const fetchArticles = async () => {
    try {
      const res = await axios.get(`/posts?page=${currentPage}&limit=${limit}`);
      dispatch(getArticles(res?.data));
    } catch (err) {
      console.log(`Unhandled Error in fetching articles ${err}`);
    }
  };

  useEffect(() => {
    fetchTrendingTopics();
    fetchTrendingArticles();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = $(window).scrollTop();
      const t = $("#back-top");

      if (scrollTop > 350) {
        t.addClass("visible");
      } else {
        t.removeClass("visible");
      }

      if (scrollTop > 0) {
        $(".es-main-navbar ").addClass("es-navbar-fixed");
      } else {
        $(".es-main-navbar ").removeClass("es-navbar-fixed");
      }
    };

    const handleBackToTop = (e) => {
      e.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, 200);
    };

    $(window).on("scroll", handleScroll);
    const t = $("#back-top");
    if (t.length) {
      t.on("click", handleBackToTop);
    }

    return () => {
      $(window).off("scroll", handleScroll);
      if (t.length) {
        t.off("click", handleBackToTop);
      }
    };
  }, []);
  return (
    <div>
      <Navbar />
      {children}
      <AuthModal />
      <MenuModal />
      <Comment />
      <Footer />
      <button id="back-top" className="btn">
        <img alt="To Top" src={Top} />
      </button>
    </div>
  );
};

export default Layout;
