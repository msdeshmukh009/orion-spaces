import { useContext } from "react";
import { PostModalContext } from "../context";

const usePostModal = () => {
  const { showPostModal, setShowPostModal } = useContext(PostModalContext);

  const togglePostModal = () => {
    setShowPostModal(prevState => !prevState);
  };

  return { showPostModal, togglePostModal, setShowPostModal };
};

export { usePostModal };
