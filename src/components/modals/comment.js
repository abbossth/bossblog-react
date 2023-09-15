import React from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Close from "../../assets/img/ic_close (2).svg";
import { closeCommentModal } from "../../store/actions/modalAction";
import LikeIcon from "../../assets/img/ic_like.svg";
import Reply from "../../assets/img/ic_reply.svg";
import { useCollapse } from "react-collapsed";
import Profile from "../../assets/img/ic_profile.svg";

const Comment = () => {
  const config = {
    duration: 1000
  };
  
  const { articles } = useSelector((state) => state.articleReducer);
  const { comment } = useSelector((state) => state.modalsReducer);
  const { getCollapseProps, getToggleProps } = useCollapse(config);
  const dispatch = useDispatch();

  const hideCommentModal = () => {
    dispatch(closeCommentModal());
  };

  

  return (
    <Modal
      show={comment}
      onHide={hideCommentModal}
      animation={false}
      className="modal fade p-0"
      id="commentModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="commentModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog es-comment-modal" role="document">
        <div className="modal-content">
          <div className="container">
            <div className="modal-header border-0">
              <h5 className="modal-title">
                Izohlar (5)
              </h5>
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
            <div className="es-new-comment-wrp">
              <div className="es-new-comment-writer">
                <img
                  className="img-fluid"
                  src={Profile}
                  alt="profile"
                />
                Ilhomjon Davlatov
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  placeholder="Izohingiz matni bayon qiling"
                  rows="5"
                ></textarea>
              </div>
              <button className="btn es-btn-light">Chop etish</button>
            </div>
            <div className="es-modal-comment-list">
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
                    {...getToggleProps()}
                    className="btn  es-btn-light"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseReply1"
                    aria-expanded="false"
                    aria-controls="collapseReply1"
                  >
                    <img src={Reply} alt="reply" /> Reply
                  </button>
                </div>
                <div 
                  {...getCollapseProps()}
                  className="collapse" id="collapseReply1">
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
                    <img src={LikeIcon} alt="like" /> 4
                  </button>
                  <button
                    className="btn  es-btn-light"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseReply2"
                    aria-expanded="false"
                    aria-controls="collapseReply2"
                  >
                    <img src={Reply} alt="reply" /> Reply
                  </button>
                </div>
                <div className="collapse" id="collapseReply2">
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
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Comment;
