import axios from 'axios'
import { createContext, useState, useEffect } from 'react'

export const UserContext = createContext({})

export function UserContextProvider({childern}) {
const [user, setUser] = userState(null);
useEffect(() => {
    if(!user) {
        axios.get('/profile').then(({data}) =>{
            setUser(data)
        })
    }
}, [])
    return (
        <UserContext.Provider value={user, setUser}>
        {children}
        </UserContext.Provider>
    )
}