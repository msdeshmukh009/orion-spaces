import { useState, useRef, useEffect } from "react";
import { MdOutlineClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "../modal/Modal";
import { Avatar } from "../avatar/Avatar";
import { addPost, editPost } from "../../features/post/helpers";
import { closePostModal, setEditPostObj } from "../../features/post/postSlice";

const EditPostModal = () => {
  const [content, setContent] = useState("");
  const {
    posts: { showPostModal, editPostObj },
    auth: { token, userData },
  } = useSelector(state => state);

  const contentBoxRef = useRef(null);

  const textAreaRef = useRef(null);

  const dispatch = useDispatch();

  const focusHandler = () => {
    textAreaRef.current && textAreaRef.current.focus();
  };

  /*** Effect to set content ***/
  useEffect(() => {
    setContent(editPostObj?.content);
  }, [editPostObj]);

  /*** Effect to focus the text area ***/
  useEffect(() => {
    focusHandler();
  });

  /*** Effect to handle click outside ***/
  useEffect(() => {
    const checkIfClickedOutside = e => {
      if (contentBoxRef && contentBoxRef.current && !contentBoxRef.current.contains(e.target)) {
        dispatch(closePostModal());
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [contentBoxRef, dispatch]);

  const handleSubmit = e => {
    e.preventDefault();
    if (content) {
      editPostObj
        ? dispatch(editPost({ postData: { content }, token, post: editPostObj }))
        : dispatch(addPost({ postData: { content }, token }));
      setContent("");
      dispatch(setEditPostObj(null));
      dispatch(closePostModal());
    }
  };

  const handleModalClose = () => {
    setContent("");
    dispatch(closePostModal());
    dispatch(setEditPostObj(null));
  };

  return (
    <Modal showModal={showPostModal}>
      <div
        ref={contentBoxRef}
        className="bg-secondary-color-50 dark:bg-secondary-color-dm-100 w-4/5 xl:w-1/3  p-2 rounded-md"
      >
        <div className="w-full flex justify-end">
          <button className="p-2" onClick={handleModalClose}>
            <MdOutlineClose />
          </button>
        </div>

        <div className="flex gap-2 p-2">
          <div className="hidden sm:block basis-14 shrink-0">
            <Avatar username={userData?.username} />
          </div>
          <form className="w-full">
            <textarea
              ref={textAreaRef}
              value={content}
              onChange={e => setContent(e.target.value)}
              rows="3"
              className="w-full focus:outline-none p-3 placeholder:text-xl placeholder:text bg-background-color dark:bg-background-color-dm resize-none"
              placeholder="Whats Happening?"
            ></textarea>
            <div className="flex justify-end px-2 mt-2">
              <button
                onClick={handleSubmit}
                disabled={!content?.trim().length}
                className="bg-primary-color-100 hover:bg-primary-color-200 active:bg-primary-color-100 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-primary-color-100 text-secondary-color-100 w-1/4 p-2 rounded-[30rem]"
              >
                {editPostObj ? "Update" : "Post"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export { EditPostModal };
