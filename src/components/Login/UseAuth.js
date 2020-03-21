import React, { useContext, useEffect } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebaseConfig";
import { useState, createContext } from "react";
import { Route, Redirect } from "react-router-dom";

firebase.initializeApp(firebaseConfig);


const AuthContext = createContext()

export const AuthContextProvider = (props) => {
    const auth = Auth();
    return <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
}
export const useAuth = () => useContext(AuthContext);


export const PrivateRoute = ({ children, ...rest }) => {
    const auth = useAuth();
    return (
      <Route
        {...rest}
        render={({ location }) =>
          auth.user ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }



const getUser = user => {
    const {displayName, email, photoURL} = user;
    return { name: displayName, email: email, photo: photoURL}
}

const Auth = () => {
    const [user, setUser] = useState(null);
    
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        return firebase.auth().signInWithPopup(provider)
        .then(res => {
            const signedUser = getUser(res.user);
            setUser(signedUser);
            return res.user
        })
        .catch(err => {
            console.log(err);
            return err.message;
        })
    }
    const signOut = () => {
        return firebase.auth().signOut().then(function() {
            setUser(null)
          }).catch(function(error) {
            console.log(error);
          });
    }

    useEffect(() => {
        firebase.auth().onAuthStateChanged(function(usr) {
            if (usr) {
              const current = getUser(usr);
              console.log(current)
              setUser(current);
            } else {
              // No user is signed in.
            }
          });
    }, [])

    return {
        user,
        signInWithGoogle,
        signOut
    }
}

export default Auth;