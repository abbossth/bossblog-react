import ProfileIcon from "../assets/img/ic_profile.svg";
import Time from "../assets/img/ic_time.svg";
import Seen from "../assets/img/ic_seen.svg";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/axios";
import banner from "../assets/img/banner_profile.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getUserArticles } from "../store/actions/userArticlesAction";
import ArticleCard from "../components/article-card";

const Profile = () => {
  const dispatch = useDispatch();
  const { articles } = useSelector((state) => state.userArticlesReducer);
  const { profileId } = useParams();
  const [profile, setProfile] = useState(null);
  const fetchProfile = async () => {
    try {
      const res = await axios.get(`/users/public/${profileId}`);
      console.log(res?.data?.data);
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
      console.log("user posts", res.data);
      dispatch(getUserArticles(res.data));
    } catch (err) {
      console.log(
        `Unhandled Error while fetching User posts with username ${profileId}. Error: ${err}`
      );
    }
  };
  console.log("aa", articles);

  const handleFollowUser = () => {};

  useEffect(() => {
    console.log(profileId);
    fetchProfile();
    fetchUserPosts();
  }, []);
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
                  <button
                    onClick={handleFollowUser}
                    className="btn es-btn-primary"
                  >
                    Obuna bo’lish
                  </button>
                </div>
              </div>
              <div className="es-profile-header-right-wrp">
                <div className="es-profile-owner xl-hide">
                  <h3 className="es-profile-owner-n">
                    {profile?.users?.full_name}
                  </h3>
                  <button
                    onClick={handleFollowUser}
                    className="btn es-btn-primary"
                  >
                    Obuna bo’lish
                  </button>
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
