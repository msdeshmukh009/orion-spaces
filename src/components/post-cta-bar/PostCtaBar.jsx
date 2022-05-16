import { useLocation } from "react-router-dom";
import {
  MdOutlineModeComment,
  MdOutlineBookmarkBorder,
  MdOutlineShare,
  MdOutlineBookmark,
} from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";

const PostCtaBar = ({ likeCount }) => {
  const { pathname } = useLocation();

  return (
    <div className="flex justify-between gap-4 w-full p-2">
      <div className="flex items-center">
        <button
          onClick={e => {
            e.stopPropagation();
          }}
          className="flex gap-2 text-xl rounded-[30rem] p-2 hover:bg-secondary-color-100 dark:hover:bg-secondary-color-dm-100"
          title="Like"
        >
          <IoMdHeartEmpty />
        </button>
        <span className="text-sm p-2 rounded-[50%]">{likeCount ? likeCount : null}</span>
      </div>

      <div className="flex">
        <button
          onClick={e => {
            e.stopPropagation();
          }}
          className="flex gap-2 text-xl rounded-[30rem] p-2 hover:bg-secondary-color-100 dark:hover:bg-secondary-color-dm-100"
          title="Reply"
        >
          <MdOutlineModeComment />
        </button>
        <span className="text-sm p-2 rounded-[50%]">{}</span>
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
