import { createContext, useState } from "react";
export const TasksContext = createContext(null);

export const TasksProvider = ({children}) => {
  const [tasks, setTasks] = useState();
  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TasksContext.Provider>
  );
};
