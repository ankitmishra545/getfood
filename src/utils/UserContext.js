import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "DefaultName",
});

export default UserContext;
