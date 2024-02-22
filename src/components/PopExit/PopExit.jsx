import { Link } from "react-router-dom";
import { RoutesObject } from "../../utils/Routes/Routes";
import { useContext } from "react";
import { UserContext } from "../AuthProvider/AuthProvider";

function PopExit() {
  const { logaout } = useContext(UserContext);
  return (
    <div className="pop-exit" id="popExit">
      <div className="pop-exit__container">
        <div className="pop-exit__block">
          <div className="pop-exit__ttl">
            <h2>Выйти из аккаунта?</h2>
          </div>
          <form className="pop-exit__form" id="formExit" action="#">
            <div className="pop-exit__form-group">
              <button
                className="pop-exit__exit-yes _hover01"
                id="exitYes"
                onClick={logaout}
              >
                Да, выйти
              </button>
              <button className="pop-exit__exit-no _hover03" id="exitNo">
                <Link to={RoutesObject.MAIN}>Нет, остаться</Link>{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PopExit;
