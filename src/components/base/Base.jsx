import "./base.css";
import { MdOutlineEdit } from "react-icons/md";
import { useDispatch } from "react-redux";
import { openPostModal } from "../../features/post/postSlice";
import {
  Sidebar,
  SuggestionsSidebar,
  MobileTopBar,
  MobileBottomBar,
  EditPostModal,
} from "../index";

const Base = ({ children }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-background-color dark:bg-background-color-dm text-text-color dark:text-text-color-dm">
      <MobileTopBar />

      <EditPostModal />

      <div className="p-2 min-h-full max-w-7xl w-full sm:w-4/5 m-auto main-grid-layout">
        <Sidebar />

        <main className="main-container mb-4 flex flex-col min-h-screen border-x-2 py-2 border-secondary-color-50 dark:border-secondary-color-dm-50">
          {children}
        </main>

        <SuggestionsSidebar />

        <MobileBottomBar />

        <div className="flex justify-center fixed bottom-12 text-2xl right-2 sm:hidden">
          <button
            onClick={() => dispatch(openPostModal())}
            className="bg-primary-color-100 hover:bg-primary-color-200 active:bg-primary-color-100 text-secondary-color-100 flex justify-center items-center rounded-[50%] w-16 h-16 p-2 text-center "
          >
            <MdOutlineEdit />
          </button>
        </div>
      </div>
    </div>
  );
};

export { Base };
