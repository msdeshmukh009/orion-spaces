import { Link } from "react-router-dom";
import { Avatar } from "../avatar/Avatar";
import { PostCtaBar } from "../post-cta-bar/PostCtaBar";

const UserPost = () => {
  return (
    <div className="flex gap-2 border-b-2 border-secondary-color-50 py-2 hover:bg-secondary-color-50 dark:border-secondary-color-dm-50 dark:hover:bg-secondary-color-dm-50">
      <div className="basis-14 shrink-0">
        <Avatar />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <div className="flex gap-1">
            <Link to="/profile" className="font-semibold">
              The cool User
            </Link>
            <Link to="/profile" className="text-secondary-color-200">
              @theUserName
            </Link>
          </div>
          <Link to="/post-detail">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quos aliquam consequatur
            cumque, nemo aperiam ratione tempora sequi obcaecati maiores.
          </Link>
        </div>
        <PostCtaBar />
      </div>
    </div>
  );
};

export { UserPost };
