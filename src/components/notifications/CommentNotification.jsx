import { Link } from "react-router-dom";
import { MdModeComment } from "react-icons/md";
import { Comment } from "../comment/Comment";
import { Avatar } from "../avatar/Avatar";

const CommentNotification = () => {
  return (
    <div className="flex p-2 border-b-2 border-secondary-color-50 dark:border-secondary-color-dm-50">
      <div className="text-4xl text-green-color">
        <MdModeComment />
      </div>

      <div className="w-full">
        <div className="flex">
          <div className="basis-10">
            <Avatar />
          </div>

          <div className="flex flex-col">
            <div className="flex gap-1">
              <Link to="/profile" className="font-semibold pl-2">
                The cool User
              </Link>
              <Link to="/profile" className="text-secondary-color-200">
                @theUserName
              </Link>
            </div>
            <div className="font-bold p-2">Commented on your post</div>
          </div>
        </div>

        <div className="border-2 rounded-lg mt-2 border-secondary-color-50 dark:border-secondary-color-dm-50">
          <Comment />
        </div>
      </div>
    </div>
  );
};

export { CommentNotification };
