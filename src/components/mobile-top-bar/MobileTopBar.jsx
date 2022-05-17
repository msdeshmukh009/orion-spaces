import { useSelector } from "react-redux";
import { Avatar } from "../avatar/Avatar";
import { SearchBar } from "../search-bar/SearchBar";

const MobileTopBar = () => {
  const { userData } = useSelector(state => state.auth);
  return (
    <div className="sm:hidden sticky py-2 px-4 flex gap-2 items-center top-0 w-full bg-background-color dark:bg-background-color-dm z-10">
      <div className="basis-12">
        <Avatar username={userData?.username} />
      </div>

      <div className="w-3/4 m-auto">
        <SearchBar />
      </div>
    </div>
  );
};

export { MobileTopBar };
