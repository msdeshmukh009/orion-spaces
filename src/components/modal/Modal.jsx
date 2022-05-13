const Modal = ({ children, showModal }) => {
  return (
    <div
      className={`parent fixed inset-0 bg-modal-bg-color dark:bg-modal-bg-color-dm z-20 ${
        showModal ? "flex justify-center items-center" : "hidden"
      }`}
    >
      {children}
    </div>
  );
};

export { Modal };
