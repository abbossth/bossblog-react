import { useEffect, useState } from "react";
import axios from "../api/axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import moment from "moment/moment";
import { ReactComponent as ProfilePhoto } from "../assets/img/profile_img.svg";
import { ReactComponent as TelegramIcon } from "../assets/img/ic_telegram.svg";
import { ReactComponent as FacebookIcon } from "../assets/img/ic_facebook (2).svg";
import { ReactComponent as TwitterIcon } from "../assets/img/ic_twiter.svg";
import { ReactComponent as DateIcon } from "../assets/img/ic_date.svg";
import { ReactComponent as TimeIcon } from "../assets/img/ic_time_dark.svg";
import { ReactComponent as CommentIcon } from "../assets/img/ic_comments.svg";
import {
  showAuthSignInOptions,
  showCommentModal,
} from "../store/actions/modalAction";
import {
  getArticleReactionsActions,
  removeArticleReactionActions,
} from "../store/actions/reactionsAction";
import { getFollowingUsers } from "../store/actions/followingUsersAction";
import ArticleReader from "../components/articleReader/articleReader";

const Article = () => {
  const dispatch = useDispatch();
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);
  const { postReactions } = useSelector((state) => state.postReactionsReducer);
  const { userInfo } = useSelector((state) => state.userInfoReducer);
  const isMyProfile = article?.user?.username === userInfo?.username;
  const { followingUsers } = useSelector(
    (state) => state.followingUsersReducer
  );
  const { loggedIn } = useSelector((state) => state.loginReducer);
  const isReactionExist = postReactions.find((r) => r === articleId);

  const fetchArticle = async () => {
    try {
      const res = await axios.get(`/posts/${articleId}`);
      console.log("Article: ", res?.data?.data);
      setArticle(res?.data?.data);
    } catch (err) {
      console.log(
        `Unhandled Error while fetching an article with id ${articleId}. Error: ${err}`
      );
    }
  };

  const ToggleReactionToPost = async (id) => {
    if (!isReactionExist) {
      try {
        const res = await axios.get(`/reaction/create/${id}`);
        fetchArticle();
        return dispatch(getArticleReactionsActions(`${id}`));
      } catch (err) {
        console.log(`Unhandled Error while creating a reaction to post ${err}`);
        return;
      }
    } else {
      try {
        const res = await axios.get(`/reaction/delete/${id}`);
        fetchArticle();
        return dispatch(removeArticleReactionActions(`${id}`));
      } catch (err) {
        console.log(
          `Unhandled Error while deleting a reaction from post ${err}`
        );
        return;
      }
    }
  };

  const handleFollowUser = async (id) => {
    try {
      const res = await axios.post(`/follows/following`, {
        follow_id: id,
      });
      fetchFollowingUsers(userInfo.username);
    } catch (err) {
      console.log(`Unhandled Error while following user. Error: ${err}`);
    }
  };

  const handleUnfollowUser = async (id) => {
    try {
      const res = await axios.post(`/follows/unfollow`, {
        follow_id: id,
      });
      fetchFollowingUsers(userInfo?.username);
    } catch (err) {
      console.log(`Unhandled Error while unfollowing user. Error: ${err}`);
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

  const handleShowComment = (count) => {
    dispatch(showCommentModal(articleId, count));
  };

  const handleReactionToggle = () => {
    ToggleReactionToPost(articleId);
  };

  useEffect(() => {
    fetchArticle();
  }, []);

  if (article) {
    return (
      <main>
        <section className="es-article-header es-regular-section">
          <div className="es-av-header">
            <div className="container">
              <div className="es-av-title">{article?.title}</div>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/" className="text-primary">
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    {/* {article?.title} */}
                    Maqola
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </section>
        <section className="es-regular-section">
          <div className="container">
            <div className="es-av-article-info">
              <div className="es-av-writer">
                <Link to={`/profile/${article?.user?.username}`}>
                  {article?.user?.user_img && (
                    <img
                      width={50}
                      src={`${article?.user?.user_img}`}
                      alt="profile"
                    />
                  )}
                  {!article?.user?.user_img && (
                    <ProfilePhoto className="me-2" />
                  )}
                  <span>{article?.user?.full_name}</span>
                </Link>
                {!isMyProfile &&
                  (!!followingUsers.find(
                    (u) => u.followers.id === article?.user?.id
                  ) ? (
                    <div className="d-flex align-items-center">
                      <button
                        onClick={() => handleUnfollowUser(article?.user?.id)}
                        className="btn es-btn-follow-outline"
                      >
                        Obuna bo’lingan
                      </button>
                    </div>
                  ) : (
                    <div className="d-flex align-items-center">
                      <button
                        onClick={() =>
                          loggedIn
                            ? handleFollowUser(article?.user?.id)
                            : dispatch(showAuthSignInOptions())
                        }
                        className="btn es-btn-follow"
                      >
                        Obuna bo’lish
                      </button>
                    </div>
                  ))}
              </div>
              <div className="es-av-nav">
                <nav className="nav">
                  <div className="nav-link pl-0 active">
                    <DateIcon />
                    {moment(article?.createdAt).format("ll")}
                  </div>
                  <div className="nav-link">
                    <TimeIcon />
                    <span>{Math.floor(article?.readingTime / 60)} daqiqa</span>
                  </div>
                  <button
                    className="nav-link btn"
                    data-target="#commentModal"
                    data-toggle="modal"
                    onClick={() => handleShowComment(article?.comments.length)}
                  >
                    <CommentIcon />
                    <span>{article?.comments.length} Izoh</span>
                  </button>
                </nav>
                <div className="es-btns-sm">
                  <button className="btn es-btn-light es-btn-save">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 10 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.33398 0H1.66732C0.933984 0 0.333984 0.6 0.333984 1.33333V12L5.00065 10L9.66732 12V1.33333C9.66732 0.6 9.06732 0 8.33398 0Z"
                        fill="#969696"
                      />
                    </svg>
                    {/* <span>Saqlash</span> */}
                  </button>
                </div>
              </div>
            </div>
            <ArticleReader blocks={article?.body?.blocks} />
            <div className="es-av-footer">
              <div className="es-av-sending">
                <div className="es-av-sending-title">Ulashish</div>
                <Link to="#">
                  <FacebookIcon />
                </Link>
                <Link to="#">
                  <TelegramIcon />
                </Link>
                <Link to="#">
                  <TwitterIcon />
                </Link>
              </div>
              <div className="es-av-reaction">
                <button
                  onClick={handleReactionToggle}
                  className={`btn es-btn-light es-btn-save ${
                    isReactionExist && "active"
                  }`}
                >
                  <svg
                    width="20"
                    className="me-2"
                    height="17"
                    viewBox="0 0 20 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.934 0.716722L6.31732 5.33339C6.00898 5.64172 5.83398 6.06672 5.83398 6.50839V14.8334C5.83398 15.7501 6.58398 16.5001 7.50065 16.5001H15.0007C15.6673 16.5001 16.2673 16.1001 16.534 15.4917L19.2507 9.15005C19.9507 7.50006 18.7423 5.66672 16.9507 5.66672H12.2423L13.034 1.85006C13.1173 1.43339 12.9923 1.00839 12.6923 0.708389C12.2007 0.225056 11.4173 0.225056 10.934 0.716722ZM2.50065 16.5001C3.41732 16.5001 4.16732 15.7501 4.16732 14.8334V8.16672C4.16732 7.25006 3.41732 6.50006 2.50065 6.50006C1.58398 6.50006 0.833984 7.25006 0.833984 8.16672V14.8334C0.833984 15.7501 1.58398 16.5001 2.50065 16.5001Z"
                      fill="#969696"
                    />
                  </svg>{" "}
                  <span>{article?.clups}</span>
                </button>
                <button className="btn es-btn-light es-btn-save">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.7667 2.5H7.23333C7.01667 2.5 6.8 2.59167 6.65 2.74167L2.74167 6.65C2.59167 6.8 2.5 7.01667 2.5 7.23333V12.7583C2.5 12.9833 2.59167 13.1917 2.74167 13.35L6.64167 17.25C6.8 17.4083 7.01667 17.5 7.23333 17.5H12.7583C12.9833 17.5 13.1917 17.4083 13.35 17.2583L17.25 13.3583C17.4083 13.2 17.4917 12.9917 17.4917 12.7667V7.23333C17.4917 7.00833 17.4 6.8 17.25 6.64167L13.35 2.74167C13.2 2.59167 12.9833 2.5 12.7667 2.5ZM10 14.4167C9.4 14.4167 8.91667 13.9333 8.91667 13.3333C8.91667 12.7333 9.4 12.25 10 12.25C10.6 12.25 11.0833 12.7333 11.0833 13.3333C11.0833 13.9333 10.6 14.4167 10 14.4167ZM10 10.8333C9.54167 10.8333 9.16667 10.4583 9.16667 10V6.66667C9.16667 6.20833 9.54167 5.83333 10 5.83333C10.4583 5.83333 10.8333 6.20833 10.8333 6.66667V10C10.8333 10.4583 10.4583 10.8333 10 10.8333Z"
                      fill="#969696"
                    />
                  </svg>{" "}
                  Shikoyat qilish
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return;
};

export default Article;
