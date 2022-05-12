import { useLocation } from "react-router-dom";
import {
  MdOutlineModeComment,
  MdOutlineBookmarkBorder,
  MdOutlineShare,
  MdOutlineBookmark,
} from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";

const PostCtaBar = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex justify-between gap-4 w-full p-2">
      <button
        className="flex gap-2 text-xl rounded-sm p-2 hover:bg-secondary-color-100 dark:hover:bg-secondary-color-dm-100"
        title="Like"
      >
        <IoMdHeartEmpty /> <span className="text-sm">2</span>
      </button>
      <button
        className="flex gap-2 text-xl rounded-sm p-2 hover:bg-secondary-color-100 dark:hover:bg-secondary-color-dm-100"
        title="Reply"
      >
        <MdOutlineModeComment /> <span className="text-sm">2</span>
      </button>
      <button
        className="text-xl rounded-sm p-2 hover:bg-secondary-color-100 dark:hover:bg-secondary-color-dm-100"
        title="Bookmark"
      >
        {pathname === "/bookmark" ? <MdOutlineBookmark /> : <MdOutlineBookmarkBorder />}
      </button>
      <button
        className="text-xl rounded-sm p-2 hover:bg-secondary-color-100 dark:hover:bg-secondary-color-dm-100"
        title="Share"
      >
        <MdOutlineShare />
      </button>
    </div>
  );
};

export { PostCtaBar };
