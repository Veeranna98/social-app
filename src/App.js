import { useState, createContext, useContext } from "react";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
export const UserContext = createContext();
export default function App() {
  const [user, setUser] = useState("John");
  const [flag, setFlag] = useState(0);
 
  return (
    <>
      <UserContext.Provider value={{ user, setUser, flag, setFlag } }>
       
        {flag==0||flag==1?<Login/>:<Home/>}
     
      </UserContext.Provider>
    </>
  );
}
