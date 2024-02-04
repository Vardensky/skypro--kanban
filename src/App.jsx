import "./App.css";
import AppRoutes from "./AppRoutes";
import { GlobalStyle } from "./GlobalStyles";
import { AuthProvider } from "./components/AuthProvider/AuthProvider";
import { TasksProvider } from "./components/TasksProvider/TasksProvider";

function App() {
  return (
    <>
      <GlobalStyle />
      <AuthProvider>
        <TasksProvider>
          <AppRoutes />
        </TasksProvider>
      </AuthProvider>
    </>
  );
}

export default App;
