// src/assets/pages/UserContext.jsx
import { createContext, useState, useEffect, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Check localStorage for stored user info and set it as the initial state
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    if (user) {
      // Store user info in localStorage whenever it changes
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      // Remove user info from localStorage when the user logs out or is set to null
      localStorage.removeItem("user");
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
