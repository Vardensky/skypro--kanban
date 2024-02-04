import { Route, Routes} from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";
import RegistrationPage from "./pages/RegistrationPage";
import MainPage from "./pages/MainPage";
import { useContext, useState } from "react";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { RoutesObject } from "./utils/Routes/Routes";
import PageWrapper from "./components/PageWrapper/PageWrapper";
import EditCardPopup from "./components/EditCardPopup";
import PopExit from "./components/PopExit";
import { UserContext } from "./components/AuthProvider/AuthProvider";
import NewCardPopup from "./components/NewCardPopup";

const AppRoutes = () => {
  
const {user, updateUser} = useContext(UserContext)


  return (
    <PageWrapper>
      <Routes>
        <Route element={<ProtectedRoute isAuth={user} />}>
          <Route path={RoutesObject.MAIN} element={<MainPage />}>
            <Route path={RoutesObject.CARD} element={<EditCardPopup />} />
            <Route path={RoutesObject.EXIT} element={<PopExit />} />
            <Route path={RoutesObject.ADD} element={<NewCardPopup/>} />
          </Route>
          
        </Route>

        <Route
          path={RoutesObject.LOGIN}
          element={<LoginPage setAuth={updateUser} />}
        />
        <Route path={RoutesObject.NOTFOUND} element={<NotFound />} />
        <Route
          path={RoutesObject.REGISTRATION}
          element={<RegistrationPage />}
        />
      </Routes>
    </PageWrapper>
  );
};

export default AppRoutes;
