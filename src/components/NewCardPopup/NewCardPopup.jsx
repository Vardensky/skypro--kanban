import { useContext, useEffect, useState } from "react";

import Calendar from "../Calendar/Calendar";
import CalendarNav from "../CalendarNav/CalendarNav";
import { Link, useNavigate } from "react-router-dom";
import { RoutesObject } from "../../utils/Routes/Routes";
import { postNewTask } from "../../API/tasks";
import { TasksContext } from "../TasksProvider/TasksProvider";
import classNames from "classnames";

function NewCardPopup() {
  const [selected, setSelected] = useState();
  const [taskValue, setTaskValue] = useState({
    title: "",
    topic: "",
    status: "Без статуса",
    description: "",
    date: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setTasks } = useContext(TasksContext);

  function addCard() {
    postNewTask(taskValue)
      .then((response) => {
        setTasks(response.tasks);
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
  useEffect(() => {
    setTaskValue({ ...taskValue, date: selected });
  }, [selected]);
  return (
    <div className="pop-new-card" id="popNewCard">
      <div className="pop-new-card__container">
        <div className="pop-new-card__block">
          <div className="pop-new-card__content">
            <h3 className="pop-new-card__ttl">Создание задачи</h3>
            <Link to={RoutesObject.MAIN} className="pop-new-card__close">
              &#10006;
            </Link>
            <div className="pop-new-card__wrap">
              <form
                className="pop-new-card__form form-new"
                id="formNewCard"
                action="#"
              >
                <div className="form-new__block">
                  <label htmlFor="formTitle" className="subttl">
                    Название задачи
                  </label>
                  <input
                    value={taskValue.title}
                    onChange={(event) => {
                      setTaskValue({ ...taskValue, title: event.target.value });
                    }}
                    className="form-new__input"
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                  />
                </div>
                <div className="form-new__block">
                  <label htmlFor="textArea" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    value={taskValue.description}
                    onChange={(event) => {
                      setTaskValue({
                        ...taskValue,
                        description: event.target.value,
                      });
                    }}
                    className="form-new__area"
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                  ></textarea>
                </div>
              </form>
              <div className="pop-new-card__calendar calendar">
                <p className="calendar__ttl subttl">Даты</p>
                <div className="calendar__block">
                  <CalendarNav />
                  <Calendar setSelected={setSelected} selected={selected} />
                  <input type="hidden" id="datepick_value" value="08.09.2023" />
                  <div className="calendar__period">
                    <p className="calendar__p date-end">
                      Выберите срок исполнения{" "}
                      <span className="date-control"></span>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="pop-new-card__categories categories">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__themes">
                <label className="categories__label">
                  <input
                    checked={taskValue.topic === "Web Design"}
                    value="Web Design"
                    onChange={(event) =>
                      setTaskValue({ ...taskValue, topic: event.target.value })
                    }
                    type="radio"
                  />
                  <div
                    className={classNames("categories__theme", "_orange", {
                      "_active-category": taskValue.topic === "Web Design",
                    })}
                  >
                    <p className="_orange">Web Design</p>
                  </div>
                </label>
                {/* categories__theme _orange _active-category */}
                <label className="categories__label">
                  <input
                    checked={taskValue.topic === "Research"}
                    value="Research"
                    onChange={(event) =>
                      setTaskValue({ ...taskValue, topic: event.target.value })
                    }
                    type="radio"
                  />
                  <div
                    className={classNames("categories__theme", "_green", {
                      "_active-category": taskValue.topic === "Research",
                    })}
                  >
                    <p className="_green">Research</p>
                  </div>
                </label>

                <label className="categories__label">
                  <input
                    checked={taskValue.topic === "Copywriting"}
                    value="Copywriting"
                    onChange={(event) =>
                      setTaskValue({ ...taskValue, topic: event.target.value })
                    }
                    type="radio"
                  />
                  <div
                    className={classNames("categories__theme", "_purple", {
                      "_active-category": taskValue.topic === "Copywriting",
                    })}
                  >
                    <p className="_purple">Copywriting</p>
                  </div>
                </label>
              </div>
            </div>
            <p style={{ color: "red" }}>{error}</p>
            <button
              onClick={addCard}
              className="form-new__create _hover01"
              id="btnCreate"
            >
              Создать задачу
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewCardPopup;
