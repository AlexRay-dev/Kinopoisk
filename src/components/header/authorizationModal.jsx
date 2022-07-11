import { useState } from "react";
import { useDispatch } from "react-redux";

const AuthorizationModal = ({ authorization, setAuthorization }) => {
  const dispatch = useDispatch();

  const defaultLogin = "Admin";
  const defaultPassword = "12345";
  const [login, setLogin] = useState(defaultLogin);
  const [password, setPassword] = useState(defaultPassword);

  function submitHandler() {
    const isValid = login === defaultLogin && password === defaultPassword;
    if (isValid) {
      dispatch({ type: "SET_LOGGED_IN", loggedStatus: true });
      setAuthorization(false);
    } else {
      alert("Неверный логин или пароль");
    }
  }

  return (
    <>
      <div
        className={authorization ? "modal modal--active" : "modal"}
        onClick={() => setAuthorization(false)}
      >
        <div
          className="modal__body"
          onClick={(event) => event.stopPropagation()}
        >
          <input
            className="modal__input"
            type="text"
            placeholder="Login"
            value={login}
            onChange={(event) => setLogin(event.target.value)}
          />
          <input
            className="modal__input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button
            className="modal__submit"
            type="submit"
            onClick={submitHandler}
          >
            Войти
          </button>
        </div>
      </div>
    </>
  );
};
export default AuthorizationModal;
