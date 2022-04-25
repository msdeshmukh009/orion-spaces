const SuggestionsSidebar = () => {
  const Suggestion = () => {
    return (
      <li className="flex flex-wrap items-center gap-5 p-2 rounded-md hover:bg-secondary-color-100">
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
          <button className="bg-dark-color p-1 w-1/2 xl:w-full rounded-[30rem] text-background-color">
            Follow
          </button>
        </div>
      </li>
    );
  };
  return (
    <aside className="aside flex flex-col gap-2 p-2 sticky top-0 h-screen">
      <div className="bg-secondary-color-50 rounded-md p-2">
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
