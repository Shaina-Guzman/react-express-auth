import { useState, useEffect } from "react";
import CurrentUserContext from "./current-user-context";
import { checkForLoggedInUser } from "../adapters/auth-adapter";

export default function CurrentUserContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const context = { currentUser, setCurrentUser };

  useEffect(() => {
    const fetchCurrentUser = async () => {
      const [user, error] = await checkForLoggedInUser();
      if (error) return setCurrentUser(null);
      console.log(user);
      setCurrentUser(user);
    };
    fetchCurrentUser();
  }, []);

  return (
    <CurrentUserContext.Provider value={context}>
      {children}
    </CurrentUserContext.Provider>
  );
}
