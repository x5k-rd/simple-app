import axios from 'axios'
import { createContext, useState, useEffect } from 'react'


export const UserContext = createContext({})


// this code block is applied to the entire app 
export function UserContextProvider({children}) {
    // assume nobody is logged in
const [user, setUser] = useState(null);
// this is applied everytime a page is opened, verifies JWT token at each interaction
useEffect(() => {
    if(!user) {
        axios.get('/profile').then(({data}) => {
            setUser(data)
        })
    }
}, [])
    return (
        // allows to access state everywhere within app
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}