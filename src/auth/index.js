// check user is logged in or not
export const isLoggedIn = () => {
  let data = localStorage.getItem("user");
  if (data === null) {
    return false;
  } else {
    return true;
  }
};

// login function to store the token in local storage
export const doLogin = (data, next) => {
  localStorage.setItem("user", JSON.stringify(data));
  next();
};

// logout function to remove the token from local storage
export const doLogout = (next) => {
  localStorage.removeItem("user");
  next();
};

// get the logged in user details
export const getCurrentUserDetails = () => {
  if (!isLoggedIn()) return null;

  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};
