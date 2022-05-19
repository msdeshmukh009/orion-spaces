import { useSelector } from "react-redux";
import { Modal } from "../modal/Modal";
import { MdClose } from "react-icons/md";
import { User } from "../user/User";
import { useRef } from "react";
import { useDetectClickOutside } from "../../hooks";

const LikesModal = ({ post, showLikesModal, setShowLikesModal }) => {
  const {
    auth: { userData, token },
    user: { users },
  } = useSelector(state => state);

  const likeListRef = useRef(null);

  useDetectClickOutside(likeListRef, setShowLikesModal);

  const currentUser = users.find(user => user?.username === userData?.username);

  return (
    <Modal showModal={showLikesModal}>
      <div
        ref={likeListRef}
        className=" bg-secondary-color-50 dark:bg-secondary-color-dm-50 p-2 rounded-md w-80 max-h-80  overflow-auto no-scrollbar"
      >
        <div className="flex justify-end">
          <button
            onClick={() => setShowLikesModal(false)}
            className="p-2 rounded-[50%] hover:bg-secondary-color-100 dark:hover:bg-secondary-color-dm-100"
          >
            <MdClose />
          </button>
        </div>
        <div>
          <h1 className="text-xl text-center">Liked by</h1>

          {post?.likes?.likedBy.map(user => (
            <User key={user._id} user={user} token={token} currentUser={currentUser} />
          ))}
        </div>
      </div>
    </Modal>
  );
};

export { LikesModal };
