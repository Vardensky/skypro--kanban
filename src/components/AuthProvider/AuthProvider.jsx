import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RoutesObject } from "../../utils/Routes/Routes";

export const UserContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const logaout = () => {
    setUser(null)
    navigate(RoutesObject.LOGIN)
    localStorage.removeItem("user")
  }
  const getUserFromLocaleStorage = () => {
    try {
      const userLocalStorage = JSON.parse(localStorage.getItem("user"));
      console.log(userLocalStorage);
      setUser(userLocalStorage);
      if (userLocalStorage){
        navigate(RoutesObject.MAIN);
      }
     
      
    } catch (error) {
      setUser(null);
    }
  };
  useEffect(() => {
    getUserFromLocaleStorage();
  }, []);
  const updateUser = (newUser) => {
    setUser(newUser);
  };
  return (
    <UserContext.Provider value={{ user, updateUser, logaout }}>
      {children}
    </UserContext.Provider>
  );
};
