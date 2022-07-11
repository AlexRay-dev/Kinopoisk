const isLoggedIn = (state = false, action) => {
  switch (action.type) {
    case "SET_LOGGED_IN":
      return action.loggedStatus;
    default:
      return state;
  }
};

export default isLoggedIn;
