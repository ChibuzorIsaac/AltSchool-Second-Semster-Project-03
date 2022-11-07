import { useState } from "react";
import { createContext, useContext } from "react";

export const UserContext = createContext({
  user: null,
  logIn: () => {},
  logOut: () => {},
});

const USER = { name: "Guest", isGuestUser: true };

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(USER);

  function logIn(username) {
    setUser({ isGuestUser: false, name: username });
  }
  function logOut() {
    setUser(USER)
  }

  return (
    <UserContext.Provider value={{ user, logIn, logOut }}>{children}</UserContext.Provider>
  );
};

export const useUserContext = () => {
  const { user, logIn, logOut } = useContext(UserContext);

  return { user, logIn, logOut };
};
