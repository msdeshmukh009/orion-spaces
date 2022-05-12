import { useState } from "react";
import { GiSettingsKnobs } from "react-icons/gi";
import { MdTrendingUp, MdStarOutline } from "react-icons/md";
import { TextEditor, UserPost, Base, MainTopBar } from "../../components";

const Home = () => {
  const [showSortingOptions, setShowSortingOptions] = useState(false);
  return (
    <Base>
      <MainTopBar title={"Home"} />

      <div className="hidden sm:block">
        <TextEditor />
      </div>

      <div className="flex justify-between p-2 text-xl border-y-2 border-secondary-color-50 dark:border-secondary-color-dm-50">
        <h3>Latest Posts</h3>
        <div className="relative">
          <button title="Sort Posts" onClick={() => setShowSortingOptions(prevState => !prevState)}>
            <GiSettingsKnobs />
          </button>
          <div
            className={`${
              showSortingOptions ? "flex" : "hidden"
            } absolute justify-center flex-col gap-1 top-5 right-4 w-24 text-sm shadow-lg p-1 rounded-md bg-secondary-color-100 dark:bg-secondary-color-dm-100`}
          >
            <div className="flex gap-1 items-center hover:bg-secondary-color-50 dark:hover:bg-secondary-color-dm-50 cursor-pointer p-1 rounded-md">
              <MdTrendingUp /> <span className="flex-1">Trending</span>
            </div>
            <div className="flex gap-1 items-center hover:bg-secondary-color-50 dark:hover:bg-secondary-color-dm-50 cursor-pointer p-1 rounded-md">
              <MdStarOutline /> <span className="flex-1">Latest</span>
            </div>
          </div>
        </div>
      </div>

      <UserPost />
      <UserPost />
      <UserPost />
      <UserPost />
      <UserPost />
      <UserPost />
    </Base>
  );
};
export { Home };
