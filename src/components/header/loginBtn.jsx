import { useDispatch, useSelector } from "react-redux";

const LoginBtn = ({ setAuthorization }) => {
  const loginStatus = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();

  function clickHandler() {
    if (loginStatus) {
      dispatch({ type: "SET_LOGGED_IN", loggedStatus: false });
    } else {
      setAuthorization(true);
    }
  }

  return (
    <button className="login" onClick={clickHandler}>
      {loginStatus ? "Logout" : "Login"}
    </button>
  );
};

export default LoginBtn;
