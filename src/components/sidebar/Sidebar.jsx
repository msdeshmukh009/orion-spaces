import {
  MdOutlineHome,
  MdOutlineBookmarkBorder,
  MdOutlinePersonOutline,
  MdOutlineExplore,
  MdNotificationsNone,
  MdOutlineEdit,
  MdOutlineWbSunny,
} from "react-icons/md";
import { BsMoon } from "react-icons/bs";
import { useTheme } from "../../hooks";

const Sidebar = () => {
  const { currentTheme, toggleTheme } = useTheme();
  const NAV_LINK_STYLES =
    "flex items-center justify-center xl:justify-start px-2 py-2 text-xl mb-3 w-fit rounded-[30rem] hover:bg-secondary-color-100 hover:dark:bg-secondary-color-dm-100";

  return (
    <aside className="sidebar col-span-1 hidden sm:flex flex-col gap-4 py-2 xl:p-3 w-20 xl:w-[250px] h-full fixed top-0">
      <div className="text-center xl:text-right text-2xl">
        <button onClick={toggleTheme}>
          <div className="xl:mr-2 text-xl">
            {currentTheme === "dark" ? <MdOutlineWbSunny /> : <BsMoon />}
          </div>
        </button>
      </div>

      <header>
        <a href="/" className="text-primary-color-100 items-center flex w-full text-2xl relative">
          <img src="/assets/logo3.svg" alt="orion-spaces" />
          <span className="hidden w-full px-3 xl:block absolute -bottom-1.5">Orion Spaces</span>
        </a>
      </header>

      <nav className="flex flex-col items-center xl:items-start gap-2">
        <a href="/" className={NAV_LINK_STYLES}>
          <div className="xl:mr-2 flex text-xl">
            <MdOutlineHome />
          </div>

          <span className="hidden xl:block">Home</span>
        </a>

        <a href="/" className={NAV_LINK_STYLES}>
          <div className="xl:mr-2 text-xl">
            <MdOutlineExplore />
          </div>

          <span className="hidden xl:block">Explore</span>
        </a>
        <a href="/" className={NAV_LINK_STYLES}>
          <div className="xl:mr-2 text-xl">
            <MdNotificationsNone />
          </div>

          <span className="hidden xl:block">Notification</span>
        </a>
        <a href="/" className={NAV_LINK_STYLES}>
          <div className="xl:mr-2 text-xl">
            <MdOutlineBookmarkBorder />
          </div>

          <span className="hidden xl:block">Bookmark</span>
        </a>
        <a href="/" className={NAV_LINK_STYLES}>
          <div className="xl:mr-2 text-xl">
            <MdOutlinePersonOutline />
          </div>

          <span className="hidden xl:block">Profile</span>
        </a>
      </nav>

      <div className="hidden xl:block">
        <button className="bg-primary-color-100 hover:bg-primary-color-200 active:bg-primary-color-100 text-secondary-color-100 text-xl rounded-[30rem] p-2 w-3/4">
          Post
        </button>
      </div>
      <div className="flex justify-center xl:hidden">
        <button className="bg-primary-color-100 hover:bg-primary-color-200 active:bg-primary-color-100 text-secondary-color-100 flex justify-center items-center  rounded-[50%] w-12 h-12 p-2 text-center ">
          <MdOutlineEdit />
        </button>
      </div>
    </aside>
  );
};

export { Sidebar };
