import React, { createContext, useContext, useEffect, useState } from 'react';

import { AuthContext } from './Context';

export const UserInfoContext = createContext();


const UserContext = ({ children }) => {
    const { user } = useContext(AuthContext);
    // console.log(user.email);
    const [userInfo, setUserInfo] = useState(null);
    console.log(userInfo);



    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`https://server-side-12.vercel.app/user?email=${user?.email}`);
                const jsonData = await response.json();
                console.log(jsonData);
                setUserInfo(jsonData);
            } catch (e) {
                console.error(e);
            }
        };
        fetchData();
    }, [user]);

    const userData = { userInfo }
    return (
        <UserInfoContext.Provider value={userData}>
            {children}
        </UserInfoContext.Provider>
    )
}
export default UserContext;