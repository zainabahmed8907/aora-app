import { getCurrentUser } from "@/lib/appwrite";
import { useContext, createContext, useState, useEffect } from "react";

export const GlobalContext = createContext();

export const useGlobalContext=()=>useContext(GlobalContext);


export const GlobalContextProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn]=useState(false);
    const [user,setUser]=useState(null);
    const [isLoading, setLoading]=useState(true);

    useEffect(() => {
      getCurrentUser()
        .then((res) => {
            setIsLoggedIn(true);
            setUser(res);
            console.log(res.$id);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }, []);
  

  return (
    <GlobalContext.Provider value={{
        isLoggedIn, 
        user, 
        isLoading, 
        setIsLoggedIn, 
        setUser
    }}>
        {children}
    </GlobalContext.Provider>
  )
};
