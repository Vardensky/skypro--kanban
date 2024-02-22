import { useContext, useEffect, useState } from "react";

import HeaderContainer from "../components/HeaderContainer/HeaderContainer";



import Cards from "../components/Cards/Cards";
import { Outlet } from "react-router-dom";
import { getTasks } from "../API/tasks";
import { TasksContext } from "../components/TasksProvider/TasksProvider";
import { Container } from "../shared/Common.styled";
import { DragDropContext } from 'react-beautiful-dnd';

const MainPage = () => {
  
  const [isLoading, setIsLoading] = useState(true);
  const [popExit, setPopExit] = useState(false);
  const [error, setError] = useState(null);

  const { tasks, setTasks } = useContext(TasksContext);

  function handleExit() {
    setPopExit(!popExit);
  }

  useEffect(() => {
    getTasks()
      .then((data) => {
        setTasks(data.tasks);
        setIsLoading(false);
      })
      .catch(() => {
        setError("Не удалось загрузить данные с свервера, попробуйте позже");
      });
  }, []);

  return (
    <div className="wrapper">
      {/* <NewCardPopup cards={cards} setCards={setCards} /> */}

      <header>
        <HeaderContainer handleExit={handleExit} />
      </header>
      <main className="main">
        <Container>
          {error ? (
            <p style={{ color: "red", padding: "2em", textAlign: "center" }}>
              {error}
            </p>
          ) : (
            <Cards isLoading={isLoading} cards={tasks} />
          )}
        </Container>
      </main>
      <Outlet />
    </div>
  );
};

export default MainPage;
