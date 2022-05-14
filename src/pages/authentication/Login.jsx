import { useState, useEffect } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { validLoginFormChecker } from "./utils";
import { loginHelper } from "../../features/auth/helpers";
import { Loading } from "../../components";

const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [userInput, setUserInput] = useState({
    username: "",
    password: "",
  });

  const {
    auth: { error, isLoading },
  } = useSelector(state => state);

  const dispatch = useDispatch();

  const changeHandler = e => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };

  useEffect(() => {
    setFormErrors(() => validLoginFormChecker(userInput));
  }, [userInput, submitted]);

  const formSubmitHandler = e => {
    e.preventDefault();

    const { username, password } = userInput;

    setSubmitted(true);
    if (!(Object.values(formErrors).length > 0)) {
      dispatch(loginHelper({ username, password }));
      setFormErrors({});
    }
  };

  const testUser = { username: "adarshbalika", password: "adarshBalika123" };

  const loginWithTestCredentials = e => {
    e.preventDefault();
    setUserInput(testUser);
    dispatch(loginHelper(testUser));
  };

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
            {error && <p className="text-red-color text-center">{error}</p>}
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                onChange={changeHandler}
                value={userInput.username}
                className="w-full bg-opacity-20 focus:ring-2 rounded border border-secondary-color-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:text-text-color"
              />
              {submitted && (
                <span className="text-red-color absolute bottom-[-1.5rem] right-0">
                  {formErrors.username}
                </span>
              )}
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm">
                Password
              </label>
              <input
                type={isPasswordVisible ? "text" : "password"}
                name="password"
                value={userInput.password}
                onChange={changeHandler}
                className="w-full bg-opacity-20 focus:ring-2 rounded border border-secondary-color-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:text-text-color"
              />
              <button
                className="absolute top-9 right-4 text-2xl text-text-color"
                title={isPasswordVisible ? "Hide Password" : "Show Password"}
                onClick={() => setIsPasswordVisible(prevState => !prevState)}
              >
                {isPasswordVisible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </button>
              {submitted && (
                <span className="text-red-color absolute bottom-[-1.5rem] right-0">
                  {formErrors.password}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <button
                disabled={isLoading}
                onClick={formSubmitHandler}
                title="Login"
                className="bg-primary-color-100 hover:bg-primary-color-200 active:bg-primary-color-100 text-secondary-color-100 text-center border-0 py-2 mt-4 px-8 focus:outline-none rounded"
              >
                {isLoading ? (
                  <span className="flex justify-center">
                    <Loading />
                  </span>
                ) : (
                  "Login"
                )}
              </button>
              <button
                onClick={loginWithTestCredentials}
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
