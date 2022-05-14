var passwordFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

const validFormChecker = userInput => {
  const { name, lastName, username, password, confirmPassword, agreement } = userInput;
  const err = {};
  if (!name) {
    err.name = "Enter valid name";
  }

  if (!lastName) {
    err.lastName = "Enter valid lastname";
  }

  if (!username) {
    err.username = "Enter valid username";
  }

  if (!password) {
    err.password = "Enter valid password";
  } else if (!password.match(passwordFormat)) {
    err.password = "Too weak!!";
  }
  if (!confirmPassword) {
    err.confirmPassword = "Confirm the password";
  } else if (confirmPassword !== password) {
    err.confirmPassword = "Password should match";
  }

  if (agreement === "not agree") {
    err.agreement = "Please check this box if you want to proceed";
  }
  return err;
};
const validLoginFormChecker = userInput => {
  const { username, password } = userInput;
  const err = {};

  if (!username) {
    err.username = "Enter valid username";
  }

  if (!password) {
    err.password = "Enter valid password";
  }

  return err;
};

export { validFormChecker, validLoginFormChecker };
