import React, { useState, useContext, createContext } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) 
{ 
    const [user, setUser] = useState(null);
    const [info,setInfo]=useState({});
    const [org,setOrg]=useState(null);
    const login = (data) => {
        setUser(data);
    };
   const logino=(data)=>{
    setOrg(data);
   };
    const logout = () => {
        setUser(null);
        setInfo(null);
        setOrg(null);
    };
    const addInfo = (key, value) => 
        {
        setInfo((prevInfo) =>
            ({
           ...prevInfo, [key]: value 
            }));
      };
     
   /*   const fetchProfile = async (username) => {
        try {
            const token = localStorage.getItem('token'); // Get token from storage
            const response = await axios.get(`${process.env.BACKEND}/userpage`, {
                params: { username }, // Pass username as a query parameter
            });

            setInfo(response.data.data); // Assuming data contains the user info
            return response.data.data;
        } catch (error) {
            console.error('Error fetching profile data:', error);
            return null; // Return null if fetching fails
        }
    };
*/
    return (
        <UserContext.Provider value={{ user,info,org, login, logino, logout , addInfo}}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    return useContext(UserContext);
}
