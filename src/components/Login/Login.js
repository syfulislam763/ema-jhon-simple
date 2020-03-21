import React from 'react';
import Auth from './UseAuth';

const Login = () => {
    const auth = Auth();
    console.log(auth.user);

    const handleSignIn = () => {
        auth.signInWithGoogle()
        .then(res => {
            window.location.pathname = '/order';
        })
    }
    const handleSignOut = () => {
        auth.signOut()
        .then(res => {
            window.location.pathname = '/';
        })
    }

    return (
        <div>
            <h1>lets join party</h1>
            {auth.user 
                ? <button onClick={handleSignOut}>Sign Out</button>
                : <button onClick={handleSignIn}>Sign In</button>
            }
        </div>
    );
};

export default Login;