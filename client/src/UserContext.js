import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    city: "",
    profession: "",
    gender: "",
    phone: "",
    profileImage: "",
  });

  return (
    <UserContext.Provider value={{ formData, setFormData }}>
      {children}
    </UserContext.Provider>
  );
};
