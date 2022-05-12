import { MdOutlineSearch } from "react-icons/md";

const SuggestionsSidebar = () => {
  const Suggestion = () => {
    return (
      <li className="flex flex-wrap items-center gap-5 p-2 rounded-md hover:bg-secondary-color-100 dark:hover:bg-secondary-color-dm-100">
        <div className="basis-14 shrink-0">
          <a href="/">
            <img
              className="rounded-[50%]"
              src="https://avatars.dicebear.com/api/avataaars/your-custo0mklod52.svg"
              alt="user-name"
            />
          </a>
        </div>

        <div className="flex flex-col">
          <a href="/" className="font-semibold">
            The cool User
          </a>
          <a href="/" className="text-secondary-color-200 text-sm">
            @theUserName
          </a>
        </div>

        <div className="flex-1">
          <button className="bg-dark-color p-1 xl:w-full rounded-[30rem] text-background-color">
            Follow
          </button>
        </div>
      </li>
    );
  };
  return (
    <aside className="aside hidden lg:flex flex-col gap-2 p-2 sticky top-0 h-screen">
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
      <div className="bg-secondary-color-50 dark:bg-secondary-color-dm-50 rounded-lg p-2">
        <h3 className="font-semibold text-center text-lg">Suggestions for you</h3>
        <ul className="flex flex-col gap-2">
          <Suggestion />
          <Suggestion />
          <Suggestion />
          <Suggestion />
          <Suggestion />
        </ul>
      </div>
    </aside>
  );
};

export { SuggestionsSidebar };
