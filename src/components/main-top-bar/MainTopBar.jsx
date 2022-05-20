import { useLocation, useNavigate } from "react-router-dom";
import { MdOutlineArrowBack, MdOutlineWbSunny } from "react-icons/md";
import { BsMoon } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { SearchBar } from "../search-bar/SearchBar";
import { toggleTheme } from "../../features/user/userSlice";

const MainTopBar = ({ title }) => {
  const { pathname } = useLocation();

  const navigate = useNavigate();

  const { currentTheme } = useSelector(state => state.user);

  const dispatch = useDispatch();

  return (
    <header className="hidden sm:block sticky z-10 top-0 bg-background-color dark:bg-background-color-dm border-b-2 border-secondary-color-50 dark:border-secondary-color-dm-50">
      <div className="flex justify-between">
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
        <div className="text-center xl:text-right text-2xl">
          <button onClick={() => dispatch(toggleTheme())}>
            <div className="xl:mr-2 text-xl">
              {currentTheme === "dark" ? <MdOutlineWbSunny /> : <BsMoon />}
            </div>
          </button>
        </div>
      </div>

      <div className="hidden sm:block lg:hidden bg-background-color dark:bg-background-color-dm">
        <SearchBar />
      </div>
    </header>
  );
};

export { MainTopBar };
