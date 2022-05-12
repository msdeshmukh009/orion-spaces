import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="text-text-color bg-background-color dark:text-text-color-dm dark:bg-background-color-dm min-h-screen flex justify-center items-center">
      <main className="h-screen  flex justify-center">
        <form className="w-[25rem] m-auto bg-secondary-color-50 dark:bg-secondary-color-dm-50 p-4 rounded-md shadow-md shadow-secondary-color-100 dark:shadow-secondary-color-dm-100">
          <h2 className="text-lg font-medium title-font mb-5">Sign Up</h2>
          <div className="relative mb-4">
            <label for="email" className="leading-7 text-sm">
              First Name
            </label>
            <input
              type="name"
              id="name"
              name="name"
              className="w-full bg-opacity-20 focus:ring-2 rounded border border-secondary-color-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:text-text-color"
            />
          </div>
          <div className="relative mb-4">
            <label for="email" className="leading-7 text-sm">
              Last Name
            </label>
            <input
              type="lastName"
              id="lastName"
              name="lastName"
              className="w-full bg-opacity-20 focus:ring-2 rounded border border-secondary-color-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:text-text-color"
            />
          </div>
          <div className="relative mb-4">
            <label for="email" className="leading-7 text-sm">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="w-full bg-opacity-20 focus:ring-2 rounded border border-secondary-color-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:text-text-color"
            />
          </div>
          <div className="relative mb-4">
            <label for="email" className="leading-7 text-sm">
              Username
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="w-full bg-opacity-20 focus:ring-2 rounded border border-secondary-color-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:text-text-color"
            />
          </div>
          <div className="relative mb-4">
            <label for="email" className="leading-7 text-sm">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="w-full bg-opacity-20 focus:ring-2 rounded border border-secondary-color-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:text-text-color"
            />
          </div>
          <div className="flex flex-col gap-2">
            <button className="bg-primary-color-100 hover:bg-primary-color-200 active:bg-primary-color-100 text-secondary-color-100 border-0 py-2 px-8 focus:outline-none rounded text-lg">
              Sign Up
            </button>
          </div>
          <div>
            <span className="text-xs mt-3">Already have an account?</span>
            <Link to="/" className="text-primary-color-100 text-xs inline-block ml-2">
              Login
            </Link>
          </div>
        </form>
      </main>
    </div>
  );
};

export { SignUp };
