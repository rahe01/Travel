import { createContext, useEffect, useState } from "react";

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import app from "../Firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth/cordova";




export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({ children }) => {


    const [user , setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email , password) => {

        setLoading(true)
        return createUserWithEmailAndPassword(auth,email, password)
    }

    const createUserWithGoogle =() =>
        {
            setLoading(true)
            const provider = new GoogleAuthProvider();
            return signInWithPopup(auth, provider)
        }

        const singIn =(email, password) =>{
            setLoading(true)
            return signInWithEmailAndPassword(auth, email, password)
        }

        const logOut =() =>{
            setLoading(true)
            return signOut(auth)
        }


        useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
              setUser(currentUser);
              setLoading(false);
            });
            return () => {
              unsubscribe();
            };
          }, []);
























    const authInfo = {
        user, createUser, createUserWithGoogle , singIn , logOut , loading

    }
   




    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;