import { Avatar } from "../avatar/Avatar";

const TextEditor = () => {
  return (
    <div className="flex gap-2 p-2">
      <div className="hidden sm:block basis-14 shrink-0">
        <Avatar />
      </div>
      <div className="w-full">
        <textarea
          rows="3"
          className="w-full focus:outline-none p-3 placeholder:text-xl placeholder:text bg-background-color dark:bg-background-color-dm resize-none"
          placeholder="Whats Happening?"
        ></textarea>
        <div className="flex justify-end px-2 mt-2">
          <button className="bg-primary-color-100 hover:bg-primary-color-200 active:bg-primary-color-100 text-secondary-color-100 w-1/4 p-2 rounded-[30rem]">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export { TextEditor };
