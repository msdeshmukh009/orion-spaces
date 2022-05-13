import { createContext, useState } from "react";

const PostModalContext = createContext();

const PostModalProvider = ({ children }) => {
  const [showPostModal, setShowPostModal] = useState(false);

  return (
    <PostModalContext.Provider value={{ showPostModal, setShowPostModal }}>
      {children}
    </PostModalContext.Provider>
  );
};

export { PostModalContext, PostModalProvider };
