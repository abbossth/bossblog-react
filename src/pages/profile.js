import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "../api/axios";
import banner from "../assets/img/banner_profile.jpg";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserArticles,
  loadMoreUserArticles,
} from "../store/actions/userArticlesAction";
import ArticleCard from "../components/article-card";
import { getFollowingUsers } from "../store/actions/followingUsersAction";
import { showAuthSignInOptions } from "../store/actions/modalAction";

const Profile = () => {
  const dispatch = useDispatch();
  const { loggedIn } = useSelector((state) => state.loginReducer);
  const { articles, limit, currentPage, pagination } = useSelector(
    (state) => state.userArticlesReducer
  );
  const { userInfo } = useSelector((state) => state.userInfoReducer);
  const { profileId } = useParams();
  const [profile, setProfile] = useState(null);
  const { followingUsers } = useSelector(
    (state) => state.followingUsersReducer
  );
  const isMyProfile = profileId === userInfo?.username;

  const loadMoreHandler = () => {
    dispatch(loadMoreUserArticles());
  };

  const fetchFollowingUsers = async (id) => {
    try {
      const res = await axios.get(`/follows/followings/${id}`);
      dispatch(getFollowingUsers(res?.data?.data?.follows));
    } catch (error) {
      console.log(`Unhandled Error While fetching following users ${error}`);
    }
  };

  const fetchProfile = async () => {
    try {
      const res = await axios.get(`/users/public/${profileId}`);
      console.log("dd", res?.data?.data);
      setProfile(res?.data?.data);
    } catch (err) {
      console.log(
        `Unhandled Error while fetching profile of ${profileId}, ${err}`
      );
    }
  };

  const fetchUserPosts = async () => {
    try {
      const res = await axios.get(
        `/users/posts/${profileId}?limit=${limit}&page=${currentPage}`
      );
      dispatch(getUserArticles(res.data));
    } catch (err) {
      console.log(
        `Unhandled Error while fetching User posts with username ${profileId}. Error: ${err}`
      );
    }
  };

  const handleFollowUser = async (id) => {
    try {
      const res = await axios.post(`/follows/following`, {
        follow_id: id,
      });
      console.log(res?.data);
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
      console.log(res?.data);
      fetchFollowingUsers(userInfo?.username);
    } catch (err) {
      console.log(`Unhandled Error while unfollowing user. Error: ${err}`);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  useEffect(() => {
    fetchUserPosts();
  }, [currentPage]);

  return (
    <main>
      <section className="es-regular-section es-profile-header-section">
        <div
          className="es-profile-header"
          style={{
            backgroundImage: profile?.users?.tab_url
              ? `url(${profile.users.tab_url})`
              : `var(${banner})`,
          }}
        ></div>
        <div className="container">
          {profile && (
            <div className="es-profile-header-content">
              <div className="es-profile-header-left-wrp">
                <div className="es-profile-img">
                  <img
                    src={
                      profile.users.user_img
                        ? profile.users.user_img
                        : require("../assets/img/team.jpg")
                    }
                    alt="profile"
                  />
                </div>
                <div className="es-profile-owner sm-hide">
                  <h3 className="es-profile-owner-n">
                    {profile?.users?.full_name}
                  </h3>
                  {!isMyProfile &&
                    (!!followingUsers.find(
                      (u) => u.followers.id === profile?.users?.id
                    ) ? (
                      <button
                        onClick={() => handleUnfollowUser(profile?.users?.id)}
                        className="btn es-btn-primary-outline"
                      >
                        Obuna bo’lingan
                      </button>
                    ) : (
                      <button
                        onClick={() =>
                          loggedIn
                            ? handleFollowUser(profile?.users?.id)
                            : dispatch(showAuthSignInOptions())
                        }
                        className="btn es-btn-primary"
                      >
                        Obuna bo’lish
                      </button>
                    ))}
                </div>
              </div>
              <div className="es-profile-header-right-wrp">
                <div className="es-profile-owner xl-hide">
                  <h3 className="es-profile-owner-n">
                    {profile?.users?.full_name}
                  </h3>
                  {!isMyProfile &&
                    (!!followingUsers.find(
                      (u) => u.followers.id === profile?.users?.id
                    ) ? (
                      <button
                        onClick={() => handleUnfollowUser(profile?.users?.id)}
                        className="btn es-btn-primary-outline"
                      >
                        Obuna bo’lingan
                      </button>
                    ) : (
                      <button
                        onClick={() =>
                          loggedIn
                            ? handleFollowUser(profile?.users?.id)
                            : dispatch(showAuthSignInOptions())
                        }
                        className="btn es-btn-primary"
                      >
                        Obuna bo’lish
                      </button>
                    ))}
                </div>
                <div className="es-profile-aricles">
                  <div className="es-profile-ar-h">Maqolalar</div>
                  <div className="es-profile-ar-n">{profile?.postsCount}</div>
                </div>
                <div className="es-profile-followers">
                  <div className="es-profile-ar-h">Obunachilar</div>
                  <div className="es-profile-ar-n">
                    {profile?.followersCount}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <section className="es-regular-section">
        <div className="container">
          <div className="es-profile-bio">
            {profile && profile?.users?.description}
          </div>
        </div>
      </section>
      <section className="es-regular-section">
        <div className="container">
          <div className="es-article-list">
            {articles.map((x, idx) => {
              return <ArticleCard key={"article-" + idx} article={x} />;
            })}
          </div>
        </div>
        {currentPage !== pagination.totalPages && (
          <div className="es-more-article">
            <button
              className="btn es-btn-light es-btn-save"
              onClick={loadMoreHandler}
            >
              <svg
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.209 2.2917C10.8507 0.933368 8.92571 0.150034 6.80904 0.366701C3.75071 0.675034 1.23404 3.15837 0.892376 6.2167C0.434043 10.2584 3.55904 13.6667 7.50071 13.6667C10.159 13.6667 12.4424 12.1084 13.509 9.8667C13.7757 9.30837 13.3757 8.6667 12.759 8.6667C12.4507 8.6667 12.159 8.83337 12.0257 9.10837C11.084 11.1334 8.82571 12.4167 6.35904 11.8667C4.50904 11.4584 3.01738 9.95003 2.62571 8.10003C1.92571 4.8667 4.38404 2.00003 7.50071 2.00003C8.88404 2.00003 10.1174 2.57503 11.0174 3.48337L9.75904 4.7417C9.23404 5.2667 9.60071 6.1667 10.3424 6.1667H13.334C13.7924 6.1667 14.1674 5.7917 14.1674 5.33337V2.3417C14.1674 1.60003 13.2674 1.22503 12.7424 1.75003L12.209 2.2917Z"
                  fill="#969696"
                />
              </svg>
              Ko’proq yuklash
            </button>
          </div>
        )}
      </section>
    </main>
  );
};

export default Profile;
