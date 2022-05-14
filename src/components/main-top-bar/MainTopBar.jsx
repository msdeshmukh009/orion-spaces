import { useLocation, useNavigate } from "react-router-dom";
import { MdOutlineArrowBack } from "react-icons/md";
import { SearchBar } from "../search-bar/SearchBar";

const MainTopBar = ({ title }) => {
  const { pathname } = useLocation();

  const navigate = useNavigate();

  return (
    <header className="sticky top-0 border-b-2 border-secondary-color-50 dark:border-secondary-color-dm-50">
      <div className="hidden p-2 sm:flex gap-2 items-center  bg-background-color dark:bg-background-color-dm">
        {pathname !== "/home" && (
          <button
            onClick={() => navigate(-1)}
            className="cursor-pointer p-2 rounded-[50%] hover:bg-secondary-color-100 dark:hover:bg-secondary-color-dm-100"
          >
            <MdOutlineArrowBack />
          </button>
        )}
        <h1 className="text-xl">{title}</h1>
      </div>

      <div className="hidden sm:block lg:hidden">
        <SearchBar />
      </div>
    </header>
  );
};

export { MainTopBar };
