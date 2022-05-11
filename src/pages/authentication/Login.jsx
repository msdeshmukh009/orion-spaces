import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";

const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <div className="text-text-color bg-background-color dark:text-text-color-dm dark:bg-background-color-dm min-h-screen flex justify-center items-center">
      <main className="w-4/5 flex gap-8 justify-center rounded-md xl:shadow-lg shadow-secondary-color-dm-100">
        <div className="flex-1 hidden xl:flex justify-center flex-col gap-2 p-2">
          <div>
            <img className="w-full" src="/assets/logo3.svg" alt="orion-spaces" />
          </div>
          <div className="flex flex-col justify-center items-end p-2">
            <span className="text-xl leading-9">Meet like minded people.</span>
            <span className="text-xl leading-9">Make new friends.</span>
            <span className="text-xl leading-9">
              Join <span className="text-primary-color-100 text-4xl leading-9">Spaces</span>
            </span>
          </div>
        </div>
        <section className="flex-1 flex items-center">
          <form
            onSubmit={e => e.preventDefault()}
            className="w-full md:w-1/2 xl:w-3/5 m-auto bg-secondary-color-50 dark:bg-secondary-color-dm-50 p-4 rounded-md shadow-md shadow-secondary-color-100 dark:shadow-secondary-color-dm-100"
          >
            <h2 className="text-lg font-medium title-font mb-5">Login</h2>
            <div className="relative mb-4">
              <label for="email" className="leading-7 text-sm">
                Email
              </label>
              <input
                type="email"
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
                type={isPasswordVisible ? "text" : "password"}
                name="password"
                className="w-full bg-opacity-20 focus:ring-2 rounded border border-secondary-color-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:text-text-color"
              />
              <button
                className="absolute top-9 right-4 text-2xl text-text-color"
                title={isPasswordVisible ? "Hide Password" : "Show Password"}
                onClick={() => setIsPasswordVisible(prevState => !prevState)}
              >
                {isPasswordVisible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </button>
            </div>
            <div className="flex flex-col gap-2">
              <Link
                to="/home"
                title="Login"
                className="bg-primary-color-100 hover:bg-primary-color-200 active:bg-primary-color-100 text-secondary-color-100 text-center border-0 py-2 px-8 focus:outline-none rounded"
              >
                Login
              </Link>
              <button
                title="Login as guest"
                className="bg-background-color-100 hover:bg-primary-color-200 active:bg-primary-color-100 text-primary-color-100 hover:text-secondary-color-100 border-2 py-2 px-8 focus:outline-none rounded"
              >
                Login with test credentials
              </button>
            </div>
            <div>
              <span className="text-xs mt-3">Dont have an account?</span>
              <Link to="/sign-up" className="text-primary-color-100 text-xs inline-block ml-2">
                Create new account
              </Link>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export { Login };
