import { createContext, useContext, useEffect, useState } from "react";
import {auth,  db} from "../firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword , signOut,onAuthStateChanged} from "firebase/auth";
import { setDoc , doc} from "firebase/firestore" 
const AuthContext = createContext();

export const AuthContextProvider=({children})=>
{
    const [user,setUser] = useState({})

    const signUp = (email,password) =>
    {
        createUserWithEmailAndPassword(auth,email,password)
        setDoc(doc(db,'users',email),
        {
            savedShows:[]
        })
    }
    const logOut=()=>
    {
        return signOut(auth)
    }
    const signIn = (email,password) =>
    {
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>
    {
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>
        {
            setUser(currentUser)
        })
        return ()=>
        {
            unsubscribe()
        }
    },[])
    return(
        <AuthContext.Provider value={{user,signUp,logOut,signIn}}>
        {children}
        </AuthContext.Provider>
    )
}
export function UserAuth()
{
    return useContext(AuthContext)
}



