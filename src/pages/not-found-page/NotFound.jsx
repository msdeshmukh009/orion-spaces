import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="bg-background-color-dm text-text-color-dm h-screen w-screen flex flex-col gap-4 justify-center items-center">
      <h1 className="text-4xl">404 Page Not Found</h1>
      <Link
        className="bg-primary-color-100 hover:bg-primary-color-200 active:bg-primary-color-100 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-primary-color-100 text-secondary-color-100 p-2 rounded-[30rem]"
        to="/home"
      >
        Go back home
      </Link>
    </div>
  );
};

export { NotFound };
