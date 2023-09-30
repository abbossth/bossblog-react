import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import banner from "../assets/img/banner_profile.jpg";
import { getUserInfo } from "../store/actions/userInfoAction";
import axios from "../api/axios";

const ProfileEdit = () => {
  const dispatch = useDispatch();
  const { userInfo, tabImage } = useSelector((state) => state.userInfoReducer);
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [userImg, setUserImg] = useState(null);
  const [tabImg, setTabImg] = useState(null);

  const fetchUserInfo = async () => {
    try {
      const res = await axios.get(`/users/me`);
      console.log("me2", res?.data);
      dispatch(getUserInfo(res?.data));
    } catch (err) {
      console.log(`Unhandled Error While Fetching User ${err}`);
    }
  };

  const uploadNewTabImage = async (image) => {
    const formData = new FormData();
    formData.append("image", image);
    try {
      if (tabImage) {
        const res = await axios.patch(`/users/usertab`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: false,
        });
      } else {
        const res = await axios.post(`/users/usertab`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: false,
        });
      }
      fetchUserInfo();
    } catch (err) {
      console.log(`Unhandled Error While uploading new tab image ${err}`);
    }
  };

  const uploadUserImage = async (image) => {
    const formData = new FormData();
    formData.append("image", image);
    try {
      const res = await axios.patch(`/users/updateimg`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: false,
      });
      fetchUserInfo();
    } catch (err) {
      console.log(`Unhandled Error While uploading user image ${err}`);
    }
  };

  const handleUpdateMyInfo = async () => {
    try {
      const res = await axios.patch(`/users/updateme`, {
        full_name: fullName,
        username,
        email,
        description: bio,
      });
      fetchUserInfo();
    } catch (error) {
      console.log(`Unhandled Error while updating user info ${error}`);
    }
  };

  const handleTabImageUpload = async (e) => {
    e.preventDefault();
    uploadNewTabImage(e.target.files[0]);
  };

  const handleUserImageUpload = async (e) => {
    e.preventDefault();
    uploadUserImage(e.target.files[0]);
  };

  useEffect(() => {
    setFullName(userInfo?.full_name);
    setUsername(userInfo?.username);
    setEmail(userInfo?.email);
    setBio(userInfo?.description);
  }, [userInfo]);

  return (
    <main>
      <section className="es-regular-section es-profile-header-section">
        <div
          className="es-profile-header"
          style={{
            backgroundImage: tabImage ? `url(${tabImage})` : `var(${banner})`,
          }}
        ></div>
        <div className="container">
          <div className="es-btn-update-banner">
            <label for="tabImageUpload" className="btn es-btn-light">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.66732 10.6667H9.33398C9.70065 10.6667 10.0007 10.3667 10.0007 10V6.66667H11.0607C11.654 6.66667 11.954 5.94667 11.534 5.52667L8.47398 2.46667C8.21398 2.20667 7.79398 2.20667 7.53398 2.46667L4.47398 5.52667C4.05398 5.94667 4.34732 6.66667 4.94065 6.66667H6.00065V10C6.00065 10.3667 6.30065 10.6667 6.66732 10.6667ZM4.00065 12H12.0007C12.3673 12 12.6673 12.3 12.6673 12.6667C12.6673 13.0333 12.3673 13.3333 12.0007 13.3333H4.00065C3.63398 13.3333 3.33398 13.0333 3.33398 12.6667C3.33398 12.3 3.63398 12 4.00065 12Z"
                  fill="#000000"
                />
              </svg>
              Yangilash
            </label>
            <input
              id="tabImageUpload"
              type="file"
              className="d-none"
              onChange={handleTabImageUpload}
            />
          </div>
          <div className="es-profile-header-content mt-5">
            <div className="es-profile-header-left-wrp">
              <div className="es-profile-img">
                <img
                  src={
                    userInfo?.user_img
                      ? userInfo?.user_img
                      : require("../assets/img/team.jpg")
                  }
                  alt="profile"
                />
              </div>
              <div className="es-profile-owner sm-hide">
                <h3 className="es-profile-owner-n">{userInfo?.full_name}</h3>
                <label for="uploadUserImg" className="btn es-btn-light">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.66732 10.6667H9.33398C9.70065 10.6667 10.0007 10.3667 10.0007 10V6.66667H11.0607C11.654 6.66667 11.954 5.94667 11.534 5.52667L8.47398 2.46667C8.21398 2.20667 7.79398 2.20667 7.53398 2.46667L4.47398 5.52667C4.05398 5.94667 4.34732 6.66667 4.94065 6.66667H6.00065V10C6.00065 10.3667 6.30065 10.6667 6.66732 10.6667ZM4.00065 12H12.0007C12.3673 12 12.6673 12.3 12.6673 12.6667C12.6673 13.0333 12.3673 13.3333 12.0007 13.3333H4.00065C3.63398 13.3333 3.33398 13.0333 3.33398 12.6667C3.33398 12.3 3.63398 12 4.00065 12Z"
                      fill="#969696"
                    />
                  </svg>
                  Rasmni yangilash
                </label>
                <input
                  className="d-none"
                  type="file"
                  id="uploadUserImg"
                  onChange={handleUserImageUpload}
                />
              </div>
            </div>
            <div className="es-profile-header-right-wrp">
              <div className="es-profile-owner xl-hide">
                <h3 className="es-profile-owner-n">{userInfo?.full_name}</h3>
                <label for="uploadUserImg" className="btn es-btn-light">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.66732 10.6667H9.33398C9.70065 10.6667 10.0007 10.3667 10.0007 10V6.66667H11.0607C11.654 6.66667 11.954 5.94667 11.534 5.52667L8.47398 2.46667C8.21398 2.20667 7.79398 2.20667 7.53398 2.46667L4.47398 5.52667C4.05398 5.94667 4.34732 6.66667 4.94065 6.66667H6.00065V10C6.00065 10.3667 6.30065 10.6667 6.66732 10.6667ZM4.00065 12H12.0007C12.3673 12 12.6673 12.3 12.6673 12.6667C12.6673 13.0333 12.3673 13.3333 12.0007 13.3333H4.00065C3.63398 13.3333 3.33398 13.0333 3.33398 12.6667C3.33398 12.3 3.63398 12 4.00065 12Z"
                      fill="#969696"
                    />
                  </svg>
                  Rasmni yangilash
                </label>
                <input
                  className="d-none"
                  type="file"
                  id="uploadUserImg"
                  onChange={handleUserImageUpload}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="es-regular-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="col-md-12">
                <div className="form-group es-form-group">
                  <label for="name">Ism Familiya</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Abbosbek"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group es-form-group">
                  <label for="username">Foydalanuvchi nomi</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="abbossth"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group es-form-group">
                  <label for="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="bosskodevelopment@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group es-form-group">
                  <label for="bio">Bio</label>
                  <textarea
                    className="form-control"
                    id="bio"
                    rows="4"
                    placeholder="I am student...."
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <button onClick={handleUpdateMyInfo} className="btn es-profile-save">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.6583 0.991667C12.3417 0.675 11.9167 0.5 11.475 0.5H2.16667C1.24167 0.5 0.5 1.25 0.5 2.16667V13.8333C0.5 14.75 1.25 15.5 2.16667 15.5H13.8333C14.75 15.5 15.5 14.75 15.5 13.8333V4.525C15.5 4.08333 15.325 3.65833 15.0083 3.35L12.6583 0.991667ZM8 13.8333C6.61667 13.8333 5.5 12.7167 5.5 11.3333C5.5 9.95 6.61667 8.83333 8 8.83333C9.38333 8.83333 10.5 9.95 10.5 11.3333C10.5 12.7167 9.38333 13.8333 8 13.8333ZM8.83333 5.5H3.83333C2.91667 5.5 2.16667 4.75 2.16667 3.83333C2.16667 2.91667 2.91667 2.16667 3.83333 2.16667H8.83333C9.75 2.16667 10.5 2.91667 10.5 3.83333C10.5 4.75 9.75 5.5 8.83333 5.5Z"
                fill="white"
              />
            </svg>
            Saqlash
          </button>
        </div>
      </section>
    </main>
  );
};

export default ProfileEdit;
