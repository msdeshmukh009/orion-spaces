import { useSelector, useDispatch } from "react-redux";
import { Avatar } from "../avatar/Avatar";
import { SearchBar } from "../search-bar/SearchBar";
import { MdOutlineWbSunny } from "react-icons/md";
import { BsMoon } from "react-icons/bs";
import { toggleTheme } from "../../features/user/userSlice";

const MobileTopBar = () => {
  const { userData } = useSelector(state => state.auth);

  const { currentTheme } = useSelector(state => state.user);

  const dispatch = useDispatch();

  return (
    <div className="sm:hidden sticky py-2 px-4 flex gap-2 items-center top-0 w-full bg-background-color dark:bg-background-color-dm z-20  ">
      <div className="basis-12">
        <Avatar username={userData?.username} />
      </div>

      <div className="w-3/4 m-auto">
        <SearchBar />
      </div>

      <div className="text-center xl:text-right text-2xl">
        <button onClick={() => dispatch(toggleTheme())}>
          <div className="xl:mr-2 text-xl">
            {currentTheme === "dark" ? <MdOutlineWbSunny /> : <BsMoon />}
          </div>
        </button>
      </div>
    </div>
  );
};

export { MobileTopBar };
