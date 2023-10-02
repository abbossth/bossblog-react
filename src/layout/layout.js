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
import { useLocation } from "react-router-dom";
import { backToTop } from "../plugins/custom";
import $ from "jquery";
import Top from "../assets/img/ic_top.svg";
import { getUserInfo } from "../store/actions/userInfoAction";
import { getFollowTopics } from "../store/actions/followTopicsAction";
import { getTopics } from "../store/actions/topicsAction";
import { getFollowingUsers } from "../store/actions/followingUsersAction";
import { getSavedArticles } from "../store/actions/savedArticleAction";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { loggedIn, token } = useSelector((state) => state.loginReducer);
  const { currentPage, limit, pagination } = useSelector(
    (state) => state.articleReducer
  );
  const { userInfo } = useSelector((state) => state.userInfoReducer);
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

  const fetchUserInfo = async () => {
    try {
      const res = await axios.get(`/users/me`);
      console.log("me", res?.data);
      dispatch(getUserInfo(res?.data));
    } catch (err) {
      console.log(`Unhandled Error While Fetching User ${err}`);
    }
  };

  const fetchFollowingTopics = async () => {
    try {
      const res = await axios.get(`/follow-topic`);
      console.log("follow-topic", res?.data?.data);
      dispatch(getFollowTopics(res?.data?.data));
    } catch (err) {
      console.log(`Unhandled Error While Fetching Follow Topics ${err}`);
    }
  };

  const fetchTopics = async () => {
    try {
      const res = await axios.get(`/topics`);
      dispatch(getTopics(res?.data?.data));
    } catch (err) {
      console.log(`Unhandled Error While Fetching Topics ${err}`);
    }
  };

  const fetchFollowingUsers = async (id) => {
    try {
      const res = await axios.get(`/follows/followings/${id}`);
      dispatch(getFollowingUsers(res?.data?.data?.follows));
    } catch (error) {
      console.log(`Unhandled Error While fetching following users ${error}`);
    }
  };

  const fetchSavedArticles = async () => {
    try {
      const res = await axios.get(`/saved-posts/giveMine`);
      dispatch(getSavedArticles(res?.data));
      console.log(res?.data);
    } catch (err) {
      console.log(`Unhandled Error in fetching saved articles ${err}`);
    }
  };

  useEffect(() => {
    if (token.length > 0) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }, []);

  useEffect(() => {
    if (loggedIn) {
      fetchUserInfo();
      fetchFollowingTopics();
      fetchSavedArticles();
    }
  }, [loggedIn]);

  useEffect(() => {
    fetchTopics();
    fetchTrendingTopics();
    fetchTrendingArticles();
  }, []);

  useEffect(() => {
    if (userInfo) fetchFollowingUsers(userInfo?.username);
  }, [userInfo]);

  useEffect(() => {
    if (!loggedIn) {
      if (currentPage === 1 || currentPage !== pagination.page) {
        fetchArticles();
      }
    }
  }, [currentPage]);

  useEffect(() => {
    backToTop();
  }, [pathname]);

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
        $(".es-main-navbar").addClass("es-navbar-fixed");
      } else {
        $(".es-main-navbar").removeClass("es-navbar-fixed");
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
    <div className="es-layout">
      <Navbar />
      {children}
      <AuthModal />
      <Comment />
      <Footer />
      <button id="back-top" className="btn">
        <img alt="To Top" src={Top} />
      </button>
    </div>
  );
};

export default Layout;
