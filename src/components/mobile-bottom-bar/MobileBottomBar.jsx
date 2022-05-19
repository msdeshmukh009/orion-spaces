import {
  MdOutlineHome,
  MdHome,
  MdOutlineBookmarkBorder,
  MdOutlineExplore,
  MdOutlineBookmark,
  MdExplore,
} from "react-icons/md";
import { NavLink } from "react-router-dom";

const MobileBottomBar = () => {
  return (
    <div className="block sm:hidden fixed bottom-0 right-0 left-0">
      <nav className="flex justify-between p-2 text-3xl bg-background-color dark:bg-background-color-dm">
        <NavLink to="/home">
          {({ isActive }) => (isActive ? <MdHome /> : <MdOutlineHome />)}
        </NavLink>
        <NavLink to="/explore">
          {({ isActive }) => (isActive ? <MdExplore /> : <MdOutlineExplore />)}
        </NavLink>
        <NavLink to="/bookmark">
          {({ isActive }) => (isActive ? <MdOutlineBookmark /> : <MdOutlineBookmarkBorder />)}
        </NavLink>
      </nav>
    </div>
  );
};

export { MobileBottomBar };
