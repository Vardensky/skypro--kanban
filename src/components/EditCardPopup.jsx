import { Link, useNavigate, useParams } from "react-router-dom";
import Calendar from "./Calendar";

import Form from "./Form";
import PopStatus from "./PopStatus";
import { RoutesObject } from "../utils/Routes/Routes";
import { taskDelete } from "../API/tasks";
import { useContext, useState } from "react";
import { TasksContext } from "./TasksProvider/TasksProvider";

function EditCardPopup() {
  const [error, setError] = useState(null);
  const { setTasks } = useContext(TasksContext);
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);
  const deleteTask = () => {
    taskDelete({ id: params.id })
      .then((response) => {
        setTasks(response.tasks);
        navigate(RoutesObject.MAIN);
      })
      .catch((error) => {
        if (error.message === "Failed to fetch") {
          setError("ошибка соединения");
        } else {
          setError(error.message);
        }
      });
  };
  return (
    <div className="pop-browse" id="popBrowse">
      <div className="pop-browse__container">
        <div className="pop-browse__block">
          <div className="pop-browse__content">
            <div className="pop-browse__top-block">
              <h3 className="pop-browse__ttl">Название задачи</h3>
              <div className="categories__theme theme-top _orange _active-category">
                <p className="_orange">Web Design</p>
              </div>
            </div>
            <PopStatus />
            <div className="pop-browse__wrap">
              <Form />
              <div className="pop-new-card__calendar calendar">
                <p className="calendar__ttl subttl">Даты</p>
                <div className="calendar__block">
                  <Calendar />
                  <input type="hidden" id="datepick_value" value="08.09.2023" />
                  
                </div>
              </div>
            </div>
            <div className="theme-down__categories theme-down">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__theme _orange _active-category">
                <p className="_orange">Web Design</p>
              </div>
            </div>
            <div className="pop-browse__btn-browse ">
              <div className="btn-group">
                <button className="btn-browse__edit _btn-bor _hover03">
                  <a href="#">Редактировать задачу</a>
                </button>
                <p style={{ color: "red" }}>{error}</p>
                <button
                  onClick={deleteTask}
                  className="btn-browse__delete _btn-bor _hover03"
                >
                  Удалить задачу
                </button>
              </div>
              <button className="btn-browse__close _btn-bg _hover01">
                <Link to={RoutesObject.MAIN}>Закрыть</Link>
              </button>
            </div>
            <div className="pop-browse__btn-edit _hide">
              <div className="btn-group">
                <button className="btn-edit__edit _btn-bg _hover01">
                  <a href="#">Сохранить</a>
                </button>
                <button className="btn-edit__edit _btn-bor _hover03">
                  <a href="#">Отменить</a>
                </button>
                <button
                  className="btn-edit__delete _btn-bor _hover03"
                  id="btnDelete"
                >
                  <a href="#">Удалить задачу</a>
                </button>
              </div>
              <button className="btn-edit__close _btn-bg _hover01">
                <Link to={RoutesObject.MAIN}>Закрыть</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditCardPopup;
