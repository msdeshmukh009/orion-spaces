import { Link } from "react-router-dom";
import { Avatar } from "../avatar/Avatar";
import { PostCtaBar } from "../post-cta-bar/PostCtaBar";

const Comment = () => {
  return (
    <div className="flex p-2 border-t-2 border-secondary-color-50 dark:border-secondary-color-dm-50">
      <Link to="/" className="basis-12">
        <Avatar />
      </Link>

      <div className="flex flex-1 flex-col items-center">
        <span className="w-full">
          <span className="flex px-2">
            <a href="/" className="font-semibold ">
              The cool User
            </a>
            <a href="/" className="text-secondary-color-200 ml-1">
              @theUserName
            </a>
          </span>
          <span className="px-2">
            <span className="text-secondary-color-200">replying to</span>
            <Link to="/" className="text-primary-color-100 ml-1">
              @theUserName
            </Link>
          </span>
        </span>
        <span className="w-full block mt-2 px-2">Lorem ipsum dolor sit amet.</span>

        <PostCtaBar />
      </div>
    </div>
  );
};

export { Comment };
