import { useState, useEffect } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signupHelper } from "../../features/auth/helpers";
import { validFormChecker } from "./utils";
import { Loading } from "../../components";

const SignUp = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [userInput, setUserInput] = useState({
    name: "",
    lastName: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const {
    auth: { isLoading, error },
  } = useSelector(state => state);

  const dispatch = useDispatch();

  const changeHandler = e => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };

  useEffect(() => {
    setFormErrors(() => validFormChecker(userInput));
  }, [userInput, submitted]);

  const formSubmitHandler = e => {
    e.preventDefault();

    const { name: firstName, lastName, username, password } = userInput;

    setSubmitted(true);
    if (!(Object.values(formErrors).length > 0)) {
      dispatch(signupHelper({ firstName, lastName, username, password }));
      setFormErrors({});
    }
  };

  return (
    <div className="text-text-color bg-background-color dark:text-text-color-dm dark:bg-background-color-dm min-h-screen flex justify-center items-center">
      <main className="h-screen  flex justify-center">
        <form className="w-[25rem] m-auto bg-secondary-color-50 dark:bg-secondary-color-dm-50 p-4 rounded-md shadow-md shadow-secondary-color-100 dark:shadow-secondary-color-dm-100">
          <h2 className="text-lg font-medium title-font mb-5">Sign Up</h2>
          {error && <p className="text-red-color text-center">{error}</p>}
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm">
              First Name
            </label>
            <input
              type="name"
              id="name"
              name="name"
              value={userInput.name}
              onChange={changeHandler}
              className="w-full bg-opacity-20 focus:ring-2 rounded border border-secondary-color-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:text-text-color"
            />
            {submitted && (
              <span className="text-red-color absolute bottom-[-1.5rem] right-0">
                {formErrors.name}
              </span>
            )}
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm">
              Last Name
            </label>
            <input
              type="lastName"
              id="lastName"
              name="lastName"
              value={userInput.lastName}
              onChange={changeHandler}
              className="w-full bg-opacity-20 focus:ring-2 rounded border border-secondary-color-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:text-text-color"
            />
            {submitted && (
              <span className="text-red-color absolute bottom-[-1.5rem] right-0">
                {formErrors.lastName}
              </span>
            )}
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm">
              Username
            </label>
            <input
              type="text"
              id="userName"
              name="username"
              value={userInput.username}
              onChange={changeHandler}
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
              onClick={e => {
                e.preventDefault();
                setIsPasswordVisible(prevState => !prevState);
              }}
            >
              {isPasswordVisible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </button>
            {(submitted || userInput.password.length > 3) && (
              <span className="text-red-color absolute bottom-[-1.5rem] right-0">
                {formErrors.password}
              </span>
            )}
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={userInput.confirmPassword}
              onChange={changeHandler}
              className="w-full bg-opacity-20 focus:ring-2 rounded border border-secondary-color-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:text-text-color"
            />
            {(submitted || userInput.confirmPassword.length > 3) && (
              <span className="text-red-color absolute bottom-[-1.5rem] right-0">
                {formErrors.confirmPassword}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <button
              disabled={isLoading}
              onClick={formSubmitHandler}
              className="bg-primary-color-100 hover:bg-primary-color-200 active:bg-primary-color-100 text-secondary-color-100 border-0 mt-4 py-2 px-8 focus:outline-none rounded text-lg"
            >
              {isLoading ? (
                <span className="flex justify-center">
                  <Loading />
                </span>
              ) : (
                "Sign Up"
              )}
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
