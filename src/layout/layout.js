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
import { useLocation } from "react-router-dom";
import { backToTop } from "../plugins/custom";
import $ from "jquery";
import Top from "../assets/img/ic_top.svg";

const Layout = ({ children }) => {
  const { pathname } = useLocation();
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
    if (currentPage === 1 || currentPage !== pagination.page) {
      fetchArticles();
    }
  }, [currentPage]);

  useEffect(() => {
    backToTop();
  }, [pathname]);

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
