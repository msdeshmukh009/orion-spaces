import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Avatar } from "../avatar/Avatar";
import { addPost } from "../../features/post/helpers";
import { closePostModal } from "../../features/post/postSlice";

const TextEditor = () => {
  const {
    auth: { token, userData },
    posts: { showPostModal },
  } = useSelector(state => state);

  const [content, setContent] = useState("");
  const contentRef = useRef(null);

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (content) {
      dispatch(addPost({ postData: { content }, token }));
      setContent("");
      dispatch(closePostModal());
    }
  };

  useEffect(() => {
    if (!showPostModal && contentRef.current) {
      contentRef.current.focus();
    }
  }, [showPostModal]);

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
        <div className="flex justify-end px-2 mt-2">
          <button
            onClick={handleSubmit}
            disabled={!content.trim().length}
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
