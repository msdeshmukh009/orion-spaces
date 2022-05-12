import { IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineModeComment, MdOutlineBookmarkBorder, MdOutlineShare } from "react-icons/md";
import { Link } from "react-router-dom";
import { Avatar } from "../avatar/Avatar";

const UserPost = () => {
  return (
    <div className="flex gap-2 border-b-2 border-secondary-color-50 py-2 hover:bg-secondary-color-50 dark:border-secondary-color-dm-50 dark:hover:bg-secondary-color-dm-50">
      <div className="basis-14 shrink-0">
        <Avatar />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <div className="flex gap-1">
            <a href="/" className="font-semibold">
              The cool User
            </a>
            <a href="/" className="text-secondary-color-200">
              @theUserName
            </a>
          </div>
          <Link to="/post-detail">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quos aliquam consequatur
            cumque, nemo aperiam ratione tempora sequi obcaecati maiores.
          </Link>
        </div>
        <div className="flex justify-between gap-4 mr-2">
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
      </div>
    </div>
  );
};

export { UserPost };
