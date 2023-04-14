import { createContext, useState } from "react";

export const UserContext = createContext();

// Provider for admin user status
export const UserProvider = (props) => {
  const [admin, setAdmin] = useState(false);

  return (
    <UserContext.Provider value={[admin, setAdmin]}>
      {props.children}
    </UserContext.Provider>
  );
};

export default { UserContext, UserProvider };
