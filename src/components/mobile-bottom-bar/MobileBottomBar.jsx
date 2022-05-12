import {
  MdOutlineHome,
  MdOutlineExplore,
  MdNotificationsNone,
  MdOutlineBookmarkBorder,
} from "react-icons/md";

const MobileBottomBar = () => {
  return (
    <div className="block sm:hidden fixed bottom-0 right-0 left-0">
      <nav className="flex justify-between p-2 text-3xl bg-background-color dark:bg-background-color-dm">
        <a href="/">
          <MdOutlineHome />
        </a>
        <a href="/">
          <MdOutlineExplore />
        </a>
        <a href="/">
          <MdNotificationsNone />
        </a>
        <a href="/">
          <MdOutlineBookmarkBorder />
        </a>
      </nav>
    </div>
  );
};

export { MobileBottomBar };
