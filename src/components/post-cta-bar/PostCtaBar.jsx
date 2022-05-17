import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  MdOutlineModeComment,
  MdOutlineBookmarkBorder,
  MdOutlineShare,
  MdOutlineBookmark,
} from "react-icons/md";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { addLike, deleteLike } from "../../features/post/helpers";

const PostCtaBar = ({ likes, postId, commentCount, token, currentUser, post_Id }) => {
  const { pathname } = useLocation();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const isLiked = likes?.likedBy?.find(user => user.username === currentUser.username);

  return (
    <div className="flex justify-between gap-4 w-full p-2">
      <div className="flex items-center">
        {isLiked ? (
          <button
            onClick={e => {
              e.stopPropagation();
              dispatch(deleteLike({ postId: post_Id, token }));
            }}
            className="flex gap-2 text-xl text-red-color rounded-[30rem] p-2 hover:bg-secondary-color-100 dark:hover:bg-secondary-color-dm-100"
            title="Like"
          >
            <IoMdHeart />
          </button>
        ) : (
          <button
            onClick={e => {
              e.stopPropagation();
              dispatch(addLike({ postId: post_Id, token }));
            }}
            className="flex gap-2 text-xl rounded-[30rem] p-2 hover:bg-secondary-color-100 dark:hover:bg-secondary-color-dm-100"
            title="Like"
          >
            <IoMdHeartEmpty />
          </button>
        )}
        <span className="text-sm p-2 rounded-[50%]">
          {pathname.includes("post") ? "" : likes?.likeCount ? likes?.likeCount : null}
        </span>
      </div>

      <div className="flex">
        <button
          onClick={e => {
            e.stopPropagation();
            if (postId) navigate(`/post/${postId}`);
          }}
          className="flex gap-2 text-xl rounded-[30rem] p-2 hover:bg-secondary-color-100 dark:hover:bg-secondary-color-dm-100"
          title="Reply"
        >
          <MdOutlineModeComment />
        </button>
        <span className="text-sm p-2 rounded-[50%]">
          {pathname.includes("post") ? "" : commentCount > 0 ? commentCount : ""}
        </span>
      </div>

      <button
        onClick={e => {
          e.stopPropagation();
        }}
        className="text-xl rounded-[30rem] p-2 hover:bg-secondary-color-100 dark:hover:bg-secondary-color-dm-100"
        title="Bookmark"
      >
        {pathname === "/bookmark" ? <MdOutlineBookmark /> : <MdOutlineBookmarkBorder />}
      </button>
      <button
        onClick={e => {
          e.stopPropagation();
        }}
        className="text-xl rounded-[30rem] p-2 hover:bg-secondary-color-100 dark:hover:bg-secondary-color-dm-100"
        title="Share"
      >
        <MdOutlineShare />
      </button>
    </div>
  );
};

export { PostCtaBar };
