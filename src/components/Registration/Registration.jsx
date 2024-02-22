import { Link, useNavigate } from "react-router-dom";
import { RoutesObject } from "../../utils/Routes/Routes";
import "./signup.css";
import { useEffect, useRef, useState } from "react";
import { userRegistation } from "../../API/auth";

const Registration = () => {
  const [loginState, setLoginState] = useState("");
  const [passwordState, setPasswordState] = useState("");
  const [nameState, setNameState] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const loginRef = useRef(null);

  useEffect(() => {
    loginRef.current.focus();
  }, []);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      registration(e);
    }
  };
  async function registration(e) {
    e.preventDefault();

    await userRegistation({
      login: loginState,
      name: nameState,
      password: passwordState,
    })
      .then(() => {
        navigate(RoutesObject.LOGIN);
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
      <div className="container-signup">
        <div className="modal">
          <div className="modal__block">
            <div className="modal__ttl">
              <h2>Регистрация</h2>
            </div>
            <form className="modal__form-login" id="formLogUp" action="#">
              <input
              ref={loginRef}
                style={{
                  borderColor:
                    error && nameState.trim() === "" ? "red" : "gray",
                }}
                value={nameState}
                onChange={(e) => setNameState(e.target.value)}
                onKeyDown={handleKeyPress}
                className="modal__input first-name"
                type="text"
                name="first-name"
                id="first-name"
                placeholder="Имя"
              />
              <input
                style={{
                  borderColor:
                    error && loginState.trim() === "" ? "red" : "gray",
                }}
                value={loginState}
                onChange={(e) => setLoginState(e.target.value)}
                onKeyDown={handleKeyPress}
                className="modal__input login"
                type="text"
                name="login"
                id="loginReg"
                placeholder="Эл. почта"
              />
              <input
                style={{
                  borderColor:
                    error && passwordState.trim() === "" ? "red" : "gray",
                }}
                value={passwordState}
                onChange={(e) => setPasswordState(e.target.value)}
                onKeyDown={handleKeyPress}
                className="modal__input password-first"
                type="password"
                name="password"
                id="passwordFirst"
                placeholder="Пароль"
              />
              {error && <p style={{ color: "red" }}>{error}</p>}
              <button
                onClick={(e) => registration(e)}
                className="modal__btn-signup-ent _hover01"
                id="SignUpEnter"
              >
                Зарегистрироваться
              </button>
              <div className="modal__form-group">
                <p>
                  Уже есть аккаунт?{" "}
                  <Link to={RoutesObject.LOGIN}>Войдите здесь</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Registration;
