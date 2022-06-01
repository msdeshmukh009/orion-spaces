import { useState, useRef, useEffect } from "react";
import { MdOutlineClose, MdClose, MdOutlineImage, MdOutlineEmojiEmotions } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import Picker from "emoji-picker-react";
import { Modal } from "../modal/Modal";
import { Avatar } from "../avatar/Avatar";
import { addPost, editPost } from "../../features/post/helpers";
import { closePostModal, setEditPostObj } from "../../features/post/postSlice";
import { uploadImage } from "../../utils";
import toast from "react-hot-toast";
import { useDetectClickOutside } from "../../hooks";

const EditPostModal = () => {
  const [postData, setPostData] = useState(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
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
    setPostData(editPostObj);
    return () => {
      setPostData(null);
    };
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

  const handleSubmit = async e => {
    e.preventDefault();
    if (postData) {
      if (
        postData?.postImageUrl !== editPostObj?.postImageUrl ||
        postData?.content !== editPostObj?.content
      ) {
        const toastId = toast.loading(`${editPostObj ? "Updating" : "Adding"} Post...`);
        if (typeof postData?.postImageUrl === "object") {
          const url = await uploadImage(postData.postImageUrl);

          editPostObj
            ? dispatch(
                editPost({
                  postData: { ...postData, postImageUrl: url },
                  token,
                  post: editPostObj,
                  toastId,
                })
              )
            : dispatch(addPost({ postData: { ...postData, postImageUrl: url }, token, toastId }));
        } else {
          editPostObj
            ? dispatch(editPost({ postData: postData, token, post: editPostObj, toastId }))
            : dispatch(addPost({ postData: postData, token, toastId }));
        }
      }
    }
    setPostData({ content: "" });
    dispatch(closePostModal());
    dispatch(setEditPostObj(null));
  };

  const handleModalClose = () => {
    setPostData({ content: "" });
    dispatch(closePostModal());
    dispatch(setEditPostObj(null));
  };

  const emojiPickerRef = useRef(null);

  useDetectClickOutside(emojiPickerRef, setShowEmojiPicker);

  const onEmojiClick = (event, emojiObject) => {
    event.preventDefault();
    setPostData(prevState => ({
      ...prevState,
      content: `${
        prevState?.content ? `${prevState.content}${emojiObject.emoji}` : `${emojiObject.emoji}`
      }`,
    }));
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
              value={postData?.content}
              onChange={e => setPostData({ ...postData, content: e.target.value })}
              rows="3"
              className="w-full focus:outline-none p-3 placeholder:text-xl placeholder:text bg-background-color dark:bg-background-color-dm resize-none"
              placeholder="Whats Happening?"
            ></textarea>
            {postData?.postImageUrl ? (
              <div className="relative">
                <img
                  src={
                    typeof postData?.postImageUrl === "object"
                      ? URL.createObjectURL(postData?.postImageUrl)
                      : postData?.postImageUrl
                  }
                  className="w-full max-h-72 m-auto rounded-md my-4"
                  alt=""
                />
                <button
                  title="Remove Image"
                  className="rounded-[50%] p-1 bg-background-color-dm absolute top-2 left-2"
                  onClick={() => setPostData({ ...postData, postImageUrl: "" })}
                >
                  <MdClose />
                </button>
              </div>
            ) : null}
            <div className="flex justify-between px-2 mt-2">
              <div className="flex items-center gap-4 ">
                <label
                  className="text-2xl  cursor-pointer hover:text-primary-color-100"
                  title="Add Image"
                >
                  <input
                    type="file"
                    className="hidden"
                    onInput={e =>
                      setPostData({
                        ...postData,
                        postImageUrl: e.target.files[0],
                      })
                    }
                    accept="image/*"
                  />
                  <MdOutlineImage />
                </label>
                <div ref={emojiPickerRef} className="relative">
                  <button
                    onClick={e => {
                      e.preventDefault();
                      setShowEmojiPicker(prevState => !prevState);
                    }}
                    className="text-2xl hover:text-primary-color-100 cursor-pointer"
                    title="Add Emojis"
                  >
                    <MdOutlineEmojiEmotions />
                  </button>
                  <div
                    ref={emojiPickerRef}
                    className={`${showEmojiPicker ? "block" : "hidden"} text-[#171717]`}
                  >
                    <Picker
                      onEmojiClick={onEmojiClick}
                      pickerStyle={{
                        position: "absolute",
                        boxShadow: "none",
                        height: "12rem",
                        maxWidth: "18 rem",
                      }}
                    />
                  </div>
                </div>
              </div>
              <button
                onClick={handleSubmit}
                disabled={!postData?.content?.trim().length && !postData?.postImageUrl}
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
