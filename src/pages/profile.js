import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "../api/axios";
import banner from "../assets/img/banner_profile.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getUserArticles } from "../store/actions/userArticlesAction";
import ArticleCard from "../components/article-card";
import { getFollowingUsers } from "../store/actions/followingUsersAction";

const Profile = () => {
  const dispatch = useDispatch();
  const { articles } = useSelector((state) => state.userArticlesReducer);
  const { userInfo } = useSelector((state) => state.userInfoReducer);
  const { profileId } = useParams();
  const { pathname } = useLocation();
  const [profile, setProfile] = useState(null);
  const { followingUsers } = useSelector(
    (state) => state.followingUsersReducer
  );
  const isMyProfile = profileId === userInfo?.username;
  console.log(isMyProfile);

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
      const res = await axios.get(`/users/posts/${profileId}`);
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
    console.log(profileId);
    fetchProfile();
    fetchUserPosts();
  }, []);
  console.log("aaa", profile, "aaa", followingUsers);
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
                        onClick={() => handleFollowUser(profile?.users?.id)}
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
                        onClick={() => handleFollowUser(profile?.users?.id)}
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
      </section>
    </main>
  );
};

export default Profile;
