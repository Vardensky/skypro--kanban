import { Link, useNavigate } from "react-router-dom";
import { RoutesObject } from "../../utils/Routes/Routes";
import "./signin.css";
import { useEffect, useRef, useState } from "react";
import { loginUser } from "../../API/auth";

const Login = ({ setAuth }) => {
  const [loginState, setLoginState] = useState("");
  const [passwordState, setPasswordState] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const loginRef = useRef(null);

  useEffect(() => {
    loginRef.current.focus();
  }, []);
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      Login(e);
    }
  };

  async function login(e) {
    e.preventDefault();
    loginUser({ login: loginState, password: passwordState })
      .then(() => {
        const userItem = JSON.parse(localStorage.getItem("user"));

        setAuth(userItem);
        navigate(RoutesObject.MAIN);
      })
      .catch((error) => {
        if (error.message === "Failed to fetch") {
          setError("Ошибка");
        } else {
          setError(error.message);
        }
      });
  }
  return (
    <div className="wrapper">
      <div className="container-signin">
        <div className="modal">
          <div className="modal__block">
            <div className="modal__ttl">
              <h2>Вход</h2>
            </div>
            <form className="modal__form-login" id="formLogIn" action="#">
              <input
              ref={loginRef}
                onKeyDown={handleKeyPress}
                style={{
                  borderColor:
                    error && loginState.trim() === "" ? "red" : "gray",
                }}
                value={loginState}
                onChange={(e) => setLoginState(e.target.value)}
                className="modal__input"
                type="text"
                name="login"
                id="formlogin"
                placeholder="Эл. почта"
              />
              <input
                onKeyDown={handleKeyPress}
                style={{
                  borderColor:
                    error && passwordState.trim() === "" ? "red" : "gray",
                }}
                value={passwordState}
                onChange={(e) => setPasswordState(e.target.value)}
                className="modal__input"
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
              />
              {error && <p style={{ color: "red" }}>{error}</p>}
              <button
                onClick={(e) => login(e)}
                className="modal__btn-enter _hover01"
                id="btnEnter"
                disabled={!!error}
                style={{ backgroundColor: error ? "grey" : "blue" }}
              >
                Войти
              </button>
              <div className="modal__form-group">
                <p>Нужно зарегистрироваться?</p>
                <Link to={RoutesObject.REGISTRATION}>
                  Регистрируйтесь здесь
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
