import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from 'axios';

export const AppContext = createContext()

export const AppContextProvider = (props)=>{

    axios.defaults.withCredentials = true;
    
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userData, setUserData] = useState(null)

    const getAuthState = async() =>{
        try {
            const { data } = await axios.get(`${backendUrl}/api/auth/is-auth`);
            if(data.success){
                setIsLoggedIn(true)
                getUserData()
            } else{
                setIsLoggedIn(false);
            }
        } catch (error) {
            setIsLoggedIn(false);
            // toast.error(error?.response?.data?.message || "Failed to check auth state.");
        }
    }

    //Function to Fetch user data
    const getUserData = async () => {
        try {
          const { data } = await axios.get(`${backendUrl}/api/user/data`);
          if (data.success) {
            setUserData(data.userData);
          } else {
            toast.error(data.message);
            setUserData(null); // Clear user data if the response is not successful
          }
        } catch (error) {
          setUserData(null); // Clear user data on error
          toast.error(error?.response?.data?.message || "An error occurred while fetching user data");
        }
    };

    useEffect(() => {
        getAuthState();
    }, []);

    const value = {
        backendUrl,
        isLoggedIn, setIsLoggedIn,
        userData, setUserData,
        getUserData
    }
    
    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
} 