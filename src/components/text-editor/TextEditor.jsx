import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineImage, MdOutlineEmojiEmotions, MdClose } from "react-icons/md";
import Picker from "emoji-picker-react";
import { Avatar } from "../avatar/Avatar";
import { addPost } from "../../features/post/helpers";
import { closePostModal } from "../../features/post/postSlice";
import { uploadImage } from "../../utils/uploadImage";
import toast from "react-hot-toast";
import { useDetectClickOutside } from "../../hooks";

const TextEditor = () => {
  const {
    auth: { token, userData },
    posts: { showPostModal },
  } = useSelector(state => state);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [content, setContent] = useState("");
  const [postImageUrl, setPostImageUrl] = useState("");
  const contentRef = useRef(null);

  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();
    if (postImageUrl) {
      const toastId = toast.loading("Adding post...");
      const url = await uploadImage(postImageUrl);
      dispatch(addPost({ postData: { content, postImageUrl: url }, token, toastId }));
    } else {
      dispatch(addPost({ postData: { content }, token }));
    }
    setContent("");
    setPostImageUrl("");
    dispatch(closePostModal());
  };

  useEffect(() => {
    if (!showPostModal && contentRef.current) {
      contentRef.current.focus();
    }
  }, [showPostModal]);
  const emojiPickerRef = useRef(null);

  useDetectClickOutside(emojiPickerRef, setShowEmojiPicker);

  const onEmojiClick = (event, emojiObject) => {
    event.preventDefault();
    setContent(prevState => `${prevState}${emojiObject.emoji}`);
  };
  return (
    <div className="flex gap-2 p-2">
      <div className="hidden sm:block basis-14 shrink-0">
        <Avatar username={userData.username} />
      </div>
      <form className="w-full">
        <textarea
          ref={contentRef}
          value={content}
          onChange={e => setContent(e.target.value)}
          rows="3"
          className="w-full focus:outline-none p-3 placeholder:text-xl placeholder:text bg-background-color dark:bg-background-color-dm resize-none"
          placeholder="Whats Happening?"
        ></textarea>
        {postImageUrl ? (
          <div className="relative">
            <img
              src={URL.createObjectURL(postImageUrl)}
              className="w-full max-h-72 m-auto rounded-md my-4"
              alt=""
            />
            <button
              title="Remove Image"
              className="rounded-[50%] p-1 bg-background-color-dm absolute top-2 left-2"
              onClick={() => setPostImageUrl("")}
            >
              <MdClose />
            </button>
          </div>
        ) : null}
        <div className="flex justify-between px-2 mt-2 border-t-2 border-secondary-color-50 dark:border-secondary-color-dm-50 py-2">
          <div className="flex items-center gap-4 ">
            <label
              className="text-2xl  cursor-pointer hover:text-primary-color-100"
              title="Add Image"
            >
              <input
                type="file"
                className="hidden"
                onInput={e => setPostImageUrl(e.target.files[0])}
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
                  }}
                />
              </div>
            </div>
          </div>
          <button
            onClick={handleSubmit}
            disabled={!content.trim().length && !postImageUrl}
            className="bg-primary-color-100 hover:bg-primary-color-200 active:bg-primary-color-100 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-primary-color-100 text-secondary-color-100 w-1/4 p-2 rounded-[30rem]"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export { TextEditor };
