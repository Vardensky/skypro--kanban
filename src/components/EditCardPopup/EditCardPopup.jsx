import { Link, useNavigate, useParams } from "react-router-dom";
import Calendar from "../Calendar/Calendar";

import Form from "../Form/Form";
import PopStatus from "../PopStatus/PopStatus";
import { RoutesObject } from "../../utils/Routes/Routes";
import { taskDelete, taskEdit } from "../../API/tasks";
import { useContext, useState } from "react";
import { TasksContext } from "../TasksProvider/TasksProvider";
import classNames from "classnames";
import { themeColorLabel } from "../../utils/CardsTheme";

function EditCardPopup() {
  const { setTasks, tasks } = useContext(TasksContext);
  const params = useParams();
  const task = tasks.find((element) => element._id === params.id);
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState(task?.date);
  const [editMode, setEditMode] = useState(false);
  const [description, setDescription] = useState(task?.description);
  const [status, setStatus] = useState(task.status);
  const navigate = useNavigate();

  const saveTask = () => {
    const newTask = {
      ...task,
      description: description,
      date: selected,
      status: status,
    };
    taskEdit(newTask)
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
  };

  const handleEditMode = () => {
    setEditMode(!editMode);
  };
  const deleteTask = () => {
    taskDelete({ id: params.id })
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
  };
  return (
    <div className="pop-browse" id="popBrowse">
      <div className="pop-browse__container">
        <div className="pop-browse__block">
          <div className="pop-browse__content">
            <div className="pop-browse__top-block">
              <h3 className="pop-browse__ttl">{task.title}</h3>
              <div
                className={classNames(
                  "categories__theme",
                  "_active-category",
                  "theme-top",
                  themeColorLabel[task.topic]
                )}
              >
                <p>{task.topic}</p>
              </div>
            </div>

            <PopStatus
              status={status}
              setStatus={setStatus}
              editMode={editMode}
            />
            <div className="pop-browse__wrap">
              <Form
                description={description}
                setDescription={setDescription}
                editMode={editMode}
              />
              <div className="pop-new-card__calendar calendar">
                <p className="calendar__ttl subttl">Даты</p>
                <div className="calendar__block">
                  <Calendar selected={selected} setSelected={setSelected} />
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
            <div
              className={classNames("pop-browse__btn-browse", {
                _hide: editMode,
              })}
            >
              <div className="btn-group">
                <button
                  onClick={handleEditMode}
                  className="btn-browse__edit _btn-bor _hover03"
                >
                  Редактировать задачу
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
            <div
              className={classNames("pop-browse__btn-edit", {
                _hide: !editMode,
              })}
            >
              <div className="btn-group">
                <button
                  onClick={saveTask}
                  className="btn-edit__edit _btn-bg _hover01"
                >
                  Сохранить
                </button>
                <button
                  className="btn-edit__edit _btn-bor _hover03"
                  onClick={handleEditMode}
                >
                  Отменить
                </button>
                <button
                  onClick={deleteTask}
                  className="btn-edit__delete _btn-bor _hover03"
                  id="btnDelete"
                >
                  Удалить задачу
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
