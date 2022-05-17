import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { followUser, unFollowUser } from "../../features/user/helpers";
import { Modal } from "../modal/Modal";
import { useEffect, useRef } from "react";
import { useDetectClickOutside } from "../../hooks";

const FollowInfoModal = ({
  showFollowersModal,
  currentUser,
  setShowFollowersModal,
  showFollowing,
}) => {
  const dispatch = useDispatch();

  const followListRef = useRef(null);

  useDetectClickOutside(followListRef, setShowFollowersModal);

  const { token, userData } = useSelector(state => state.auth);

  useEffect(() => {
    setShowFollowersModal(false);
  }, [currentUser, setShowFollowersModal]);

  const User = ({ user }) => {
    return (
      <div className="flex flex-wrap items-center gap-2 p-2 rounded-md hover:bg-secondary-color-100 dark:hover:bg-secondary-color-dm-100">
        <div className="basis-14 shrink-0">
          {user.profileUrl ? (
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
          {user?.username === userData?.username ? (
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

  const showMessage = () => {
    if (showFollowing && currentUser?.following.length === 0) {
      return "Not following anyone";
    }
    if (currentUser?.followers.length === 0 && !showFollowing) {
      return "No followers";
    }
    return "";
  };

  return (
    <Modal showModal={showFollowersModal}>
      <div
        ref={followListRef}
        className=" bg-secondary-color-50 dark:bg-secondary-color-dm-50 p-2 rounded-md w-80 max-h-80  overflow-auto no-scrollbar"
      >
        <div className="flex justify-end">
          <button onClick={() => setShowFollowersModal(false)}>x</button>
        </div>
        <div>
          <h1 className="text-xl text-center">{showFollowing ? "Following" : "Followers"}</h1>

          {showFollowing
            ? currentUser?.following.map(user => <User key={user._id} user={user} />)
            : currentUser?.followers.map(user => <User key={user._id} user={user} />)}
          <h2 className="text-center mt-2">{showMessage()}</h2>
        </div>
      </div>
    </Modal>
  );
};

export { FollowInfoModal };
