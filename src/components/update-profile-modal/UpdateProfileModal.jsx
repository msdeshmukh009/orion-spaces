import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdPhotoCamera } from "react-icons/md";
import { updateUser } from "../../features/user/helpers";
import { setLoading } from "../../features/user/userSlice";
import { Modal } from "../modal/Modal";

const UpdateProfileModal = ({ showUpdateProfileModal, setShowUpdateProfileModal, currentUser }) => {
  const [profile, setProfile] = useState(currentUser);
  const [imageUrl, setImageUrl] = useState("");

  const {
    auth: { token },
  } = useSelector(state => state);

  const dispatch = useDispatch();

  const cloudinaryUrl = "https://api.cloudinary.com/v1_1/dxebdqoxr/image/upload";

  const currentUserInitials = `${
    currentUser?.firstName ? currentUser?.firstName[0].toUpperCase() : ""
  } ${currentUser?.lastName ? currentUser?.lastName[0].toUpperCase() : ""}`;

  const updateUserDetails = async e => {
    e.preventDefault();
    if (imageUrl) {
      dispatch(setLoading());
      const file = imageUrl;
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "orion-spaces");
      formData.append("folder", "orion-spaces");

      try {
        const res = await fetch(cloudinaryUrl, {
          method: "POST",
          body: formData,
        });

        const { url } = await res.json();

        dispatch(updateUser({ token, userData: { ...profile, profileUrl: url } }));
      } catch (err) {
        console.error(err);
      }
      setImageUrl("");
    } else {
      dispatch(updateUser({ token, userData: profile }));
    }
  };

  return (
    <Modal showModal={showUpdateProfileModal}>
      <div className="bg-secondary-color-100 dark:bg-secondary-color-dm-100 w-96 rounded-md p-4">
        <h1 className="text-xl text-center">Update Profile</h1>

        <div className=" mt-2 flex justify-center">
          <div className="relative w-32">
            {currentUser?.profileUrl ? (
              <div className="w-40 border-2 rounded-[50%] border-secondary-color-50 dark:border-secondary-color-dm-50">
                <img
                  className="rounded-[50%] w-40 h-40"
                  src={imageUrl ? URL.createObjectURL(imageUrl) : currentUser?.profileUrl}
                  alt={`${currentUser?.firstName} ${currentUser?.lastName}`}
                />
              </div>
            ) : imageUrl ? (
              <div className="w-40 h-40 border-2 rounded-[50%] border-secondary-color-50 dark:border-secondary-color-dm-50">
                <img
                  className="rounded-[50%] w-full h-full"
                  src={URL.createObjectURL(imageUrl)}
                  alt={`${currentUser?.firstName} ${currentUser?.lastName}`}
                />
              </div>
            ) : (
              <div className="bg-primary-color-100 w-40 h-40 rounded-[50%] flex justify-center items-center text-3xl">
                {currentUserInitials}
              </div>
            )}
            <label className="cursor-pointer absolute bottom-0 right-2 font-bold text-lg bg-background-color text-text-color p-1 rounded-[50%]">
              <input
                className="hidden"
                type="file"
                onChange={e => setImageUrl(e.target.files[0])}
              />
              <MdPhotoCamera />
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-2">
          <div className="flex flex-col">
            <span className="font-bold">Username</span>
            <span>@{currentUser?.username}</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold">Name</span>
            <span>{`${currentUser?.firstName} ${currentUser?.lastName}`}</span>
          </div>

          <label className="flex flex-col gap-1">
            <span className="font-bold">Bio</span>
            <input
              value={profile.bio}
              onChange={e => setProfile(prev => ({ ...prev, bio: e.target.value }))}
              className="w-full bg-opacity-20 focus:ring-2 rounded border border-secondary-color-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:text-text-color"
              type="text"
            />
          </label>

          <label className="flex flex-col gap-1">
            <span className="font-bold">Website</span>
            <input
              value={profile.website}
              onChange={e => setProfile(prev => ({ ...prev, website: e.target.value }))}
              className="w-full bg-opacity-20 focus:ring-2 rounded border border-secondary-color-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:text-text-color"
              type="url"
            />
          </label>
        </div>
        <div className="mt-4 flex justify-end">
          <button
            onClick={() => {
              setImageUrl("");
              setProfile(currentUser);
              setShowUpdateProfileModal(false);
            }}
            className="hover:bg-red-color border-2 mr-auto rounded-md p-2"
          >
            Cancel
          </button>
          <button
            onClick={e => {
              updateUserDetails(e);
              setShowUpdateProfileModal(false);
            }}
            className="bg-green-color hover:opacity-70 rounded-md p-2"
          >
            Update
          </button>
        </div>
      </div>
    </Modal>
  );
};

export { UpdateProfileModal };
