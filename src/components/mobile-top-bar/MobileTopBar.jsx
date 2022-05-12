import { SearchBar } from "../search-bar/SearchBar";

const MobileTopBar = () => {
  return (
    <div className="sm:hidden sticky py-2 px-4 flex gap-2 items-center top-0 w-full bg-background-color dark:bg-background-color-dm z-10">
      <div className="basis-12">
        <a href="/">
          <img
            className="rounded-[50%] w-full"
            src="https://avatars.dicebear.com/api/avataaars/your-custom-seed52.svg"
            alt="user-name"
          />
        </a>
      </div>

      <div className="w-3/4 m-auto">
        <SearchBar />
      </div>
    </div>
  );
};

export { MobileTopBar };
