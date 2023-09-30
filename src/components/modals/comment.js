import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Close from "../../assets/img/ic_close (2).svg";
import { closeCommentModal } from "../../store/actions/modalAction";
import LikeIcon from "../../assets/img/ic_like.svg";
import Reply from "../../assets/img/ic_reply.svg";
import Profile from "../../assets/img/ic_profile.svg";
import moment from "moment";

const Comment = () => {
  const dispatch = useDispatch();
  const { loggedIn } = useSelector((state) => state.loginReducer);
  const { userInfo } = useSelector((state) => state.userInfoReducer);
  const { comment } = useSelector((state) => state.modalsReducer);
  const { commentId } = useSelector((state) => state.modalsReducer);
  const [isExpanded, setExpanded] = useState(false);
  const [comments, setComments] = useState([]);
  const [newCommentMessage, setNewCommentMessage] = useState("");

  const hideCommentModal = () => {
    dispatch(closeCommentModal());
  };

  const fetchComments = async () => {
    try {
      const res = await axios.get(`/comments/${commentId}`);
      console.log(res?.data?.data);
      setComments(res?.data?.data);
    } catch (error) {
      console.log(`Unhandled Error while fetching comments ${error}`);
    }
  };

  const postNewComment = async () => {
    if (!newCommentMessage?.length) return;
    try {
      const res = await axios.post(`/comments`, {
        post_id: commentId,
        comment: newCommentMessage,
      });
      fetchComments();
    } catch (error) {
      console.log(`Unhandled Error while posting new comment ${error}`);
    }
  };

  useEffect(() => {
    if (commentId) fetchComments();
  }, [commentId]);

  return (
    <Modal
      show={comment}
      onHide={hideCommentModal}
      animation={false}
      className="modal fade p-0"
      id="commentModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="commentModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog es-comment-modal" role="document">
        <div className="modal-content">
          <div className="container">
            <div className="modal-header border-0">
              <h5 className="modal-title">Izohlar ({comments?.length})</h5>
              <button
                type="button"
                className="btn close p-0"
                data-dismiss="modal"
                aria-label="Close"
                onClick={hideCommentModal}
              >
                <span aria-hidden="true">
                  <img src={Close} alt="close" />
                </span>
              </button>
            </div>
            {loggedIn && (
              <div className="es-new-comment-wrp">
                <div className="es-new-comment-writer">
                  <img
                    className="img-fluid"
                    src={userInfo?.user_img ? `${userInfo?.user_img}` : Profile}
                    alt="profile"
                  />
                  {userInfo?.full_name}
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    placeholder="Izohingiz matni bayon qiling"
                    rows="5"
                    value={newCommentMessage}
                    onChange={(e) => setNewCommentMessage(e.target.value)}
                  ></textarea>
                </div>
                <button
                  onClick={postNewComment}
                  className="btn es-btn-light btn-sm"
                >
                  Chop etish
                </button>
              </div>
            )}

            <div className="es-modal-comment-list">
              {comments &&
                comments.map((c) => {
                  console.log(c);
                  return (
                    <div className="es-modal-comment-item">
                      <div className="es-comment-item-info">
                        <a href="#">
                          <img
                            src={
                              c?.user?.user_img
                                ? `${c?.user?.user_img}`
                                : Profile
                            }
                            alt="profile"
                          />
                          {c?.user?.full_name}
                        </a>
                        <div className="es-comment-item-date">
                          {moment(c?.createdAt).format("ll")}
                        </div>
                      </div>
                      <div className="es-comment-item-text">{c?.comment}</div>
                      <button className="btn es-comment-item-text-more">
                        More
                      </button>
                      <div className="es-comment-item-reaction">
                        <button className="btn es-like-btn">
                          <img src={LikeIcon} alt="like" />4
                        </button>
                        <button
                          className="btn es-btn-light"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapseComment-${1}`}
                          aria-expanded="false"
                          aria-controls="collapseExample"
                        >
                          <img src={Reply} alt="reply" /> Reply
                        </button>
                      </div>
                      <div className="collapse" id={`collapseComment-${1}`}>
                        <div className="card card-body es-card-body">
                          <div className="form-group">
                            <textarea
                              className="form-control"
                              placeholder="Izohingiz matni bayon qiling"
                              rows="5"
                            ></textarea>
                          </div>
                          <button className="btn es-btn-light">
                            Chop etish
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              {/* <div className="es-modal-comment-item">
                <div className="es-comment-item-info">
                  <a href="#">
                    <img src={Profile} alt="profile" />
                    Ilhomjon Davlatov
                  </a>
                  <div className="es-comment-item-date">17 Sep 2020</div>
                </div>
                <div className="es-comment-item-text">
                  Wow, I've been using Axios for data fetching in my React
                  projects, but I didn't know about React Query. The code
                  example you provided looks clean and concise. I'll definitely
                  give it a try in my next project. Thanks for introducing me to
                  a new approa
                </div>
                <button className="btn es-comment-item-text-more">More</button>
                <div className="es-comment-item-reaction">
                  <button className="btn es-like-btn">
                    <img src={LikeIcon} alt="like" />4
                  </button>
                  <button
                    className="btn es-btn-light"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapseComment-${2}`}
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    <img src={Reply} alt="reply" /> Reply
                  </button>
                </div>
                <div className="collapse" id={`collapseComment-${2}`}>
                  <div className="card card-body es-card-body">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        placeholder="Izohingiz matni bayon qiling"
                        rows="5"
                      ></textarea>
                    </div>
                    <button className="btn es-btn-light">Chop etish</button>
                  </div>
                </div>
              </div>
              <div className="es-modal-comment-item">
                <div className="es-comment-item-info">
                  <a href="#">
                    <img src={Profile} alt="profile" />
                    Ilhomjon Davlatov
                  </a>
                  <div className="es-comment-item-date">17 Sep 2020</div>
                </div>
                <div className="es-comment-item-text">
                  Wow, I've been using Axios for data fetching in my React
                  projects, but I didn't know about React Query. The code
                  example you provided looks clean and concise. I'll definitely
                  give it a try in my next project. Thanks for introducing me to
                  a new approa
                </div>
                <button className="btn es-comment-item-text-more">More</button>
                <div className="es-comment-item-reaction">
                  <button className="btn es-like-btn">
                    <img src={LikeIcon} alt="like" />4
                  </button>
                  <button
                    className="btn es-btn-light"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapseComment-${3}`}
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    <img src={Reply} alt="reply" /> Reply
                  </button>
                </div>
                <div className="collapse" id={`collapseComment-${3}`}>
                  <div className="card card-body es-card-body">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        placeholder="Izohingiz matni bayon qiling"
                        rows="5"
                      ></textarea>
                    </div>
                    <button className="btn es-btn-light">Chop etish</button>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Comment;
