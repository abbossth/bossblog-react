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
import { Link } from "react-router-dom";

const Comment = () => {
  const dispatch = useDispatch();
  const { loggedIn } = useSelector((state) => state.loginReducer);
  const { userInfo } = useSelector((state) => state.userInfoReducer);
  const { comment, commentId, count } = useSelector(
    (state) => state.modalsReducer
  );
  const [comments, setComments] = useState([]);
  const [replies, setReplies] = useState([]);
  const [newCommentMessage, setNewCommentMessage] = useState("");
  const [newReplyMessage, setNewReplyMessage] = useState("");
  const [selectedCommentId, setSelectedCommentId] = useState("");

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
      setNewCommentMessage("");
      fetchComments();
    } catch (error) {
      console.log(`Unhandled Error while posting new comment ${error}`);
    }
  };

  const postNewReply = async (id) => {
    if (!newReplyMessage?.length) return;
    try {
      const res = await axios.post(`/comments`, {
        post_id: commentId,
        comment: newReplyMessage,
        reply: id,
      });
      setNewReplyMessage("");
      fetchCommentReplies(selectedCommentId);
    } catch (error) {
      console.log(`Unhandled Error while posting new comment ${error}`);
    }
  };

  const fetchCommentReplies = async (id) => {
    try {
      const res = await axios.get(`/comments/replies/${id}`);
      setReplies(res?.data?.data);
    } catch (error) {
      console.log(`Unhandled Error while fetching comment replies ${error}`);
    }
  };

  useEffect(() => {
    if (commentId) fetchComments();
  }, [commentId]);

  useEffect(() => {
    if (!comment) {
      setComments([]);
      setReplies([]);
    }
  }, [comment]);

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
              <h5 className="modal-title">Izohlar ({count})</h5>
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

            <div className="es-modal-comment-list" id="replyAccordion">
              {comments &&
                comments.map((c) => {
                  return (
                    <div key={c?.id} className="es-modal-comment-item">
                      <div className="es-comment-item-info">
                        <Link
                          to={`/profile/${c?.user?.username}`}
                          onClick={() => dispatch(closeCommentModal())}
                        >
                          <img
                            src={
                              c?.user?.user_img
                                ? `${c?.user?.user_img}`
                                : Profile
                            }
                            alt="profile"
                          />
                          {c?.user?.full_name}
                        </Link>
                        <div className="es-comment-item-date">
                          {moment(c?.createdAt).format("ll")}
                        </div>
                      </div>
                      <div className="es-comment-item-text">{c?.comment}</div>
                      {/* <button className="btn es-comment-item-text-more">
                        More
                      </button> */}
                      <div className="es-comment-item-reaction">
                        <button className="btn es-like-btn">
                          <img src={LikeIcon} alt="like" />4
                        </button>
                        <button
                          className="btn es-btn-light"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapseComment-${c?.id}`}
                          aria-expanded="true"
                          aria-controls="collapseOne"
                          onClick={() => {
                            fetchCommentReplies(c?.id);
                            setSelectedCommentId(c?.id);
                          }}
                        >
                          <img src={Reply} alt="reply" /> Replies
                        </button>
                      </div>
                      <div
                        className="collapse"
                        id={`collapseComment-${c?.id}`}
                        aria-labelledby="replyAccordion"
                        data-bs-parent="#replyAccordion"
                      >
                        <div className="card card-body es-card-body">
                          {loggedIn && (
                            <>
                              <div className="form-group mb-3">
                                <textarea
                                  className="form-control"
                                  placeholder="Izohingiz matni bayon qiling"
                                  rows="5"
                                  value={newReplyMessage}
                                  onChange={(e) =>
                                    setNewReplyMessage(e.target.value)
                                  }
                                ></textarea>
                              </div>
                              <button
                                className="btn es-btn-light"
                                onClick={() => postNewReply(c?.id)}
                              >
                                Chop etish
                              </button>
                            </>
                          )}
                          <div className="es-modal-comment-list">
                            {replies &&
                              replies.map((r) => {
                                return (
                                  <div className="es-modal-comment-item">
                                    <div className="es-comment-item-info">
                                      <Link
                                        to={`/profile/${r?.user?.username}`}
                                      >
                                        <img
                                          src={
                                            r?.user?.user_img
                                              ? `${r?.user?.user_img}`
                                              : Profile
                                          }
                                          alt="profile"
                                        />
                                        {r?.user?.full_name}
                                      </Link>
                                      <div className="es-comment-item-date">
                                        {moment(r?.createdAt).format("ll")}
                                      </div>
                                    </div>
                                    <div className="es-comment-item-text">
                                      {r?.comment}
                                    </div>
                                    {/* <div className="es-comment-item-reaction">
                                      <button className="btn es-like-btn">
                                        <img src={LikeIcon} alt="like" />4
                                      </button>
                                      <button
                                        className="btn es-btn-light"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target={`#collapseComment-${r?.id}`}
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                        onClick={() =>
                                          fetchCommentReplies(r?.id)
                                        }
                                      >
                                        <img src={Reply} alt="reply" /> Replies
                                      </button>
                                    </div> */}
                                  </div>
                                );
                              })}
                          </div>
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
              */}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Comment;
