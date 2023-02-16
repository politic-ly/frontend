import { useGoogleLogin, googleLogout } from '@react-oauth/google';
import axios from 'axios';
import React, { useEffect, useState } from 'react';


const LandingPage = ({login}) => {

    // const login = useGoogleLogin({
    //     onSuccess: (codeResponse) => setUser(codeResponse),
    //     onError: (error) => console.log('Login Failed:', error)
    // });

    return (
        <>
        <h2>React Google Login</h2>
        <br/>
        <br/>
        <button onClick={() => login()}>Sign in with Google 🚀 </button>
        </>
    )
}

export default LandingPage