import { useState } from "react";
import { useParams } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import { Base, Loading, MainTopBar, UserPost, UpdateProfileModal } from "../../components";

const Profile = () => {
  const [showUpdateProfileModal, setShowUpdateProfileModal] = useState(false);
  const {
    auth: { userData },
    user: { users, isLoading },
  } = useSelector(state => state);

  const { username } = useParams();

  const dispatch = useDispatch();

  const currentUser = users.find(user => user.username === username);

  const currentUserInitials = `${
    currentUser?.firstName ? currentUser?.firstName[0].toUpperCase() : ""
  } ${currentUser?.lastName ? currentUser?.lastName[0].toUpperCase() : ""}`;

  return (
    <Base>
      <main>
        <MainTopBar title={currentUser?.username} />

        <UpdateProfileModal
          showUpdateProfileModal={showUpdateProfileModal}
          setShowUpdateProfileModal={setShowUpdateProfileModal}
          currentUser={currentUser}
        />

        {currentUser?.username === userData.username ? (
          <div className="flex justify-end px-2">
            <button className="text-xl" title="Log Out" onClick={() => dispatch(logout())}>
              <MdLogout />
            </button>
          </div>
        ) : null}

        <section className="flex flex-col items-center">
          {currentUser?.profileUrl ? (
            <div className="w-40 h-40 border-2 rounded-[50%] border-secondary-color-50 dark:border-secondary-color-dm-50">
              {isLoading ? (
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
          ) : (
            <button className="border-2 px-4 py-1 rounded-[30rem] font-bold border-secondary-color-100 hover:bg-secondary-color-100 dark:hover:bg-secondary-color-dm-100">
              Follow
            </button>
          )}

          <div className="max-w-lg text-center my-2">
            <p>{currentUser?.bio}</p>
            <a href="cool-user.com" target="_blank" className="text-primary-color-100">
              {currentUser?.website}
            </a>
          </div>
        </section>

        <section className="flex p-2 w-72 m-auto rounded-lg bg-secondary-color-100 dark:bg-secondary-color-dm-100">
          <div className="flex-1 flex flex-col text-center">
            <span>Following</span>
            <span>{currentUser?.following.length}</span>
          </div>
          <div className="flex-1 flex flex-col text-center">
            <span>Posts</span>
            <span>0</span>
          </div>
          <div className="flex-1 flex flex-col text-center">
            <span>Followers</span>
            <span>{currentUser?.followers.length}</span>
          </div>
        </section>

        <section className="mt-2 p-2">
          <h2 className="text-xl font-bold mb-2">Your Posts</h2>
          <UserPost />
          <UserPost />
          <UserPost />
          <UserPost />
        </section>
      </main>
    </Base>
  );
};

export { Profile };
