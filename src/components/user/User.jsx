import { useDispatch } from "react-redux";
import { followUser, unFollowUser } from "../../features/user/helpers";
import { Link } from "react-router-dom";

const User = ({ user, currentUser, token }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-wrap items-center gap-2 p-2 rounded-md hover:bg-secondary-color-100 dark:hover:bg-secondary-color-dm-100">
      <div className="basis-14 shrink-0">
        {user?.profileUrl ? (
          <Link to={`/profile/${user?.username}`}>
            <img
              className="rounded-[50%]"
              src={user?.profileUrl}
              alt={`${user?.firstName} ${user?.lastName}`}
            />
          </Link>
        ) : (
          <div className="bg-primary-color-100 w-14 h-14 rounded-[50%] flex justify-center items-center text-3xl">{`${user?.firstName[0].toUpperCase()} ${user?.lastName[0].toUpperCase()}`}</div>
        )}
      </div>

      <div className="flex-1 flex flex-col">
        <Link to={`/profile/${user?.username}`} className="font-semibold">
          {`${user?.firstName} ${user?.lastName}`}
        </Link>
        <Link to={`/profile/${user?.username}`} className="text-secondary-color-200 text-sm">
          @{`${user?.username}`}
        </Link>
      </div>

      <div className="text-center">
        {user?.username === currentUser?.username ? (
          <span>You</span>
        ) : currentUser?.following.find(eachUser => eachUser?.username === user?.username) ? (
          <button
            onClick={() => dispatch(unFollowUser({ followUserId: user._id, token }))}
            title={`Follow ${user?.firstName} ${user?.lastName} `}
            className="border-2 border-secondary-color-50 px-2 py-1 xl:w-full rounded-[30rem] text-background-color hover:text-red-color hover:border-red-color"
          >
            Unfollow
          </button>
        ) : (
          <button
            onClick={() => dispatch(followUser({ followUserId: user._id, token }))}
            title={`Follow ${user?.firstName} ${currentUser?.lastName} `}
            className="bg-dark-color px-2 py-1 xl:w-full rounded-[30rem] text-background-color"
          >
            Follow
          </button>
        )}
      </div>
    </div>
  );
};
export { User };
