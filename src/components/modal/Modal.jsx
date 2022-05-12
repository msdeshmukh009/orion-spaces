import { usePostModal } from "../../hooks";

const Modal = ({ children, showModal }) => {
  const { setShowPostModal } = usePostModal();
  return (
    <div
      onClick={e => {
        setShowPostModal(
          !(e.target.classList.contains("parent") || e.target.classList.contains("close-btn"))
        );
      }}
      className={`parent fixed inset-0 bg-modal-bg-color dark:bg-modal-bg-color-dm z-20 ${
        showModal ? "flex justify-center items-center" : "hidden"
      }`}
    >
      {children}
    </div>
  );
};

export { Modal };
