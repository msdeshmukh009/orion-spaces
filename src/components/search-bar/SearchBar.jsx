import { MdOutlineSearch } from "react-icons/md";

const SearchBar = () => {
  return (
    <div className="flex sticky p-2 top-0 w-full border-secondary-color-50 dark:border-secondary-color-dm-50">
      <div className="sticky flex items-center px-2 top-0 w-full border-2 rounded-[30rem] dark:bg-secondary-color-dm-50 border-secondary-color-50 dark:border-secondary-color-dm-50">
        <span className="text-xl basis-8">
          <MdOutlineSearch />
        </span>
        <div className="flex-1">
          <input
            className="w-full p-2 focus:outline-none dark:bg-secondary-color-dm-50"
            type="search"
            placeholder="Search"
          />
        </div>
      </div>
    </div>
  );
};

export { SearchBar };
