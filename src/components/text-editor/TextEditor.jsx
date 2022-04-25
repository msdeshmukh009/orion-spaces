const TextEditor = () => {
  return (
    <div className="flex gap-2 py-2 border-b-2 border-secondary-color-50">
      <div className="basis-14 shrink-0">
        <a href="/">
          <img
            className="rounded-[50%]"
            src="https://avatars.dicebear.com/api/avataaars/your-custom-seed52.svg"
            alt="user-name"
          />
        </a>
      </div>
      <div className="w-full">
        <textarea
          rows="3"
          className="w-full focus:outline-none py-3 placeholder:text-xl placeholder:text"
          placeholder="Whats Happening?"
        ></textarea>
        <div className="flex justify-end px-2">
          <button className="bg-primary-color-100 hover:bg-primary-color-200 active:bg-primary-color-100 text-secondary-color-100 w-1/4 p-2 rounded-[30rem]">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export { TextEditor };
