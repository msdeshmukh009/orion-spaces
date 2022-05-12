import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineEdit, MdOutlineDeleteOutline } from "react-icons/md";
import { Avatar } from "../avatar/Avatar";
import { PostCtaBar } from "../post-cta-bar/PostCtaBar";

const UserPost = () => {
  const [showPostOptions, setShowPostOptions] = useState(false);
  const { pathname } = useLocation();

  return (
    <div className="flex rounded-md border-b-2 border-secondary-color-50 py-2 hover:bg-secondary-color-50 dark:border-secondary-color-dm-50 dark:hover:bg-secondary-color-dm-50">
      <div className="basis-14 shrink-0">
        <Avatar />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <div className="flex gap-1 px-2">
            <Link to="/profile" className="font-semibold">
              The cool User
            </Link>
            <Link to="/profile" className="text-secondary-color-200">
              @theUserName
            </Link>
          </div>
          <Link to="/post-detail" className="px-2 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quos aliquam consequatur
            cumque, nemo aperiam ratione tempora sequi obcaecati maiores.
          </Link>
        </div>
        <PostCtaBar />
      </div>
      {pathname === "/profile" && (
        <div className="relative">
          <button
            onClick={() => setShowPostOptions(prevState => !prevState)}
            className="p-2 hover:bg-secondary-color-100 dark:hover:bg-secondary-color-dm-100 rounded-[30rem]"
          >
            <BsThreeDots />
          </button>
          <div
            className={`${
              showPostOptions ? "flex" : "hidden"
            } absolute justify-center flex-col gap-1 top-5 right-4 w-32 text-sm shadow-lg p-1 rounded-md bg-secondary-color-100 dark:bg-secondary-color-dm-100`}
          >
            <div className="flex gap-1 items-center hover:bg-secondary-color-50 dark:hover:bg-secondary-color-dm-50 cursor-pointer p-1 rounded-md">
              <MdOutlineEdit /> <span className="flex-1">Edit Post</span>
            </div>
            <div className="flex gap-1 items-center hover:text-red-color hover:bg-secondary-color-50 dark:hover:bg-secondary-color-dm-50 cursor-pointer p-1 rounded-md">
              <MdOutlineDeleteOutline /> <span className="flex-1">Delete Post</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export { UserPost };
