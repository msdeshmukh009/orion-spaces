import { MdOutlineModeComment, MdOutlineBookmarkBorder, MdOutlineShare } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";

const PostCtaBar = () => {
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
        <MdOutlineBookmarkBorder />
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
