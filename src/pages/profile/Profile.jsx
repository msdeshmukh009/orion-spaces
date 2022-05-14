import { useState } from "react";
import { MdLogout, MdPhotoCamera } from "react-icons/md";
import { useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import { Avatar, Base, MainTopBar, Modal, UserPost } from "../../components";

const Profile = () => {
  const [showUpdateProfileModal, setShowUpdateProfileModal] = useState(false);

  const dispatch = useDispatch();

  return (
    <Base>
      <Modal showModal={showUpdateProfileModal}>
        <div className="bg-secondary-color-100 dark:bg-secondary-color-dm-100 w-96 rounded-md p-4">
          <h1 className="text-xl text-center">Update Profile</h1>
          <div className=" mt-2 flex justify-center">
            <div className="relative w-32">
              <Avatar />
              <button className="absolute bottom-1 right-4 font-bold text-lg bg-secondary-color-dm-50 rounded-[50%]">
                <MdPhotoCamera />
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <div className="flex flex-col">
              <span className="font-bold">Username</span>
              <span>@theUserName</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold">Name</span>
              <span>The cool user</span>
            </div>

            <label className="flex flex-col gap-1">
              <span className="font-bold">Bio</span>
              <input
                className="w-full bg-opacity-20 focus:ring-2 rounded border border-secondary-color-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:text-text-color"
                type="text"
              />
            </label>

            <label className="flex flex-col gap-1">
              <span className="font-bold">Website</span>
              <input
                className="w-full bg-opacity-20 focus:ring-2 rounded border border-secondary-color-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:text-text-color"
                type="url"
              />
            </label>
          </div>
          <div className="mt-4 flex justify-end">
            <button
              onClick={() => setShowUpdateProfileModal(false)}
              className="hover:bg-red-color border-2 mr-auto rounded-md p-2"
            >
              Cancel
            </button>
            <button
              onClick={() => setShowUpdateProfileModal(false)}
              className="bg-green-color hover:opacity-70 rounded-md p-2"
            >
              Update
            </button>
          </div>
        </div>
      </Modal>

      <main>
        <MainTopBar title={"The Cool User"} />

        <div className="flex justify-end px-2">
          <button className="text-xl" title="Log Out" onClick={() => dispatch(logout())}>
            <MdLogout />
          </button>
        </div>

        <section className="flex flex-col items-center">
          <div className="w-40 border-2 rounded-[50%] border-secondary-color-50 dark:border-secondary-color-dm-50">
            <Avatar />
          </div>

          <div className="flex flex-col my-2 text-center">
            <a href="/" className="font-semibold text-lg">
              The cool User
            </a>

            <a href="/" className="text-secondary-color-200 text-lg">
              @theUserName
            </a>
          </div>

          <button
            onClick={() => setShowUpdateProfileModal(true)}
            className="border-2 px-4 py-1 rounded-[30rem] font-bold border-secondary-color-100 hover:bg-secondary-color-100 dark:hover:bg-secondary-color-dm-100"
          >
            Edit Profile
          </button>

          <div className="max-w-lg text-center my-2">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, sint minus. Cum ea
              repellat minima.
            </p>
            <a href="cool-user.com" target="_blank" className="text-primary-color-100">
              cool-user.com
            </a>
          </div>
        </section>

        <section className="flex p-2 w-72 m-auto rounded-lg bg-secondary-color-100 dark:bg-secondary-color-dm-100">
          <div className="flex-1 flex flex-col text-center">
            <span>Following</span>
            <span>0</span>
          </div>
          <div className="flex-1 flex flex-col text-center">
            <span>Posts</span>
            <span>2k</span>
          </div>
          <div className="flex-1 flex flex-col text-center">
            <span>Followers</span>
            <span>37.3k</span>
          </div>
        </section>

        <section className="mt-2 p-2">
          <h2 className="text-xl font-bold mb-2">Your Posts</h2>
          <UserPost />
          <UserPost />
          <UserPost />
        </section>
      </main>
    </Base>
  );
};

export { Profile };
