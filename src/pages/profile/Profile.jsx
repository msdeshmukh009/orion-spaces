import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../features/post/helpers";
import { logout } from "../../features/auth/authSlice";
import { followUser, unFollowUser } from "../../features/user/helpers";
import { restBookmarks } from "../../features/bookmark/bookmarkSlice";
import {
  Base,
  Loading,
  MainTopBar,
  UserPost,
  UpdateProfileModal,
  FollowInfoModal,
} from "../../components";

const Profile = () => {
  const [showUpdateProfileModal, setShowUpdateProfileModal] = useState(false);
  const [showFollowersModal, setShowFollowersModal] = useState(false);
  const [showFollowing, setShowFollowing] = useState(false);

  const {
    auth: { token, userData },
    user: { users, uploadingPhoto },
    posts: { posts },
  } = useSelector(state => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  const { username } = useParams();

  const currentUser = users.find(user => user.username === username);

  const authUser = users.find(user => user.username === userData?.username);

  const currentUsersPosts = posts.filter(post => post.username === username);

  const currentUserInitials = `${
    currentUser?.firstName ? currentUser?.firstName[0].toUpperCase() : ""
  } ${currentUser?.lastName ? currentUser?.lastName[0].toUpperCase() : ""}`;

  return (
    <Base>
      <main>
        <MainTopBar title={currentUser?.username} />

        <FollowInfoModal
          setShowFollowersModal={setShowFollowersModal}
          showFollowersModal={showFollowersModal}
          currentUser={currentUser}
          showFollowing={showFollowing}
        />

        <UpdateProfileModal
          showUpdateProfileModal={showUpdateProfileModal}
          setShowUpdateProfileModal={setShowUpdateProfileModal}
          currentUser={authUser}
        />

        {currentUser?.username === userData.username ? (
          <div className="flex justify-end px-2">
            <button
              className="text-xl"
              title="Log Out"
              onClick={() => {
                dispatch(restBookmarks());
                dispatch(logout());
              }}
            >
              <MdLogout />
            </button>
          </div>
        ) : null}

        <section className="flex flex-col items-center">
          {currentUser?.profileUrl ? (
            <div className="w-40 h-40 border-2 rounded-[50%] border-secondary-color-50 dark:border-secondary-color-dm-50">
              {uploadingPhoto ? (
                <div className="flex h-full justify-center items-center">
                  <Loading />
                </div>
              ) : (
                <>
                  {currentUser?.profileUrl ? (
                    <img
                      className="rounded-[50%] w-full h-full"
                      src={currentUser?.profileUrl}
                      alt="user-name"
                    />
                  ) : (
                    <div className="bg-primary-color-100 w-14 h-14 rounded-[50%] flex justify-center items-center text-xl">
                      {currentUserInitials}
                    </div>
                  )}
                </>
              )}
            </div>
          ) : (
            <div className="bg-primary-color-100 w-40 h-40 rounded-[50%] flex justify-center items-center text-3xl">
              {currentUserInitials}
            </div>
          )}

          <div className="flex flex-col my-2 text-center">
            <a href="/" className="font-semibold text-lg">
              {`${currentUser?.firstName} ${currentUser?.lastName}`}
            </a>

            <a href="/" className="text-secondary-color-200 text-lg">
              @{currentUser?.username}
            </a>
          </div>

          {currentUser?.username === userData?.username ? (
            <button
              onClick={() => setShowUpdateProfileModal(true)}
              className="border-2 px-4 py-1 rounded-[30rem] font-bold border-secondary-color-100 hover:bg-secondary-color-100 dark:hover:bg-secondary-color-dm-100"
            >
              Edit Profile
            </button>
          ) : currentUser?.followers.find(user => user?.username === userData?.username) ? (
            <button
              onClick={() => dispatch(unFollowUser({ followUserId: currentUser._id, token }))}
              className="border-2 px-4 py-1 rounded-[30rem] font-bold hover:text-red-color hover:border-red-color border-secondary-color-100 hover:bg-secondary-color-100 dark:hover:bg-secondary-color-dm-100"
            >
              Unfollow
            </button>
          ) : (
            <button
              onClick={() => dispatch(followUser({ followUserId: currentUser._id, token }))}
              className="border-2 px-4 py-1 rounded-[30rem] font-bold border-secondary-color-100 hover:bg-secondary-color-100 dark:hover:bg-secondary-color-dm-100"
            >
              Follow
            </button>
          )}

          <div className="max-w-lg text-center my-2">
            <p>{currentUser?.bio}</p>
            <a
              href={currentUser?.website}
              target="_blank"
              rel="noreferrer"
              className="text-primary-color-100"
            >
              {currentUser?.website}
            </a>
          </div>
        </section>

        <section className="flex p-2 w-72 m-auto rounded-lg bg-secondary-color-100 dark:bg-secondary-color-dm-100">
          <div
            onClick={() => {
              setShowFollowing(true);
              setShowFollowersModal(true);
            }}
            className="cursor-pointer flex-1 flex flex-col text-center"
          >
            <span>Following</span>
            <span>{currentUser?.following.length}</span>
          </div>
          <div className="flex-1 flex flex-col text-center">
            <span>Posts</span>
            <span>{currentUsersPosts.length}</span>
          </div>
          <div
            onClick={() => {
              setShowFollowing(false);
              setShowFollowersModal(true);
            }}
            className="cursor-pointer flex-1 flex flex-col text-center"
          >
            <span>Followers</span>
            <span>{currentUser?.followers.length}</span>
          </div>
        </section>

        <section className="mt-2 p-2">
          <h2 className="text-xl font-bold mb-2">
            {username === userData?.username ? "Your" : `${currentUser?.firstName}'s`} Posts
          </h2>
          {currentUsersPosts.map(post => (
            <UserPost key={post._id} post={post} />
          ))}
        </section>
      </main>
    </Base>
  );
};

export { Profile };
