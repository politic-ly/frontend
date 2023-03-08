import React from 'react';
import { Button } from '@mui/material';
import Logo from '../assets/politicly-logo';

const LandingPage = ({login}) => {

    // const login = useGoogleLogin({
    //     onSuccess: (codeResponse) => setUser(codeResponse),
    //     onError: (error) => console.log('Login Failed:', error)
    // });

    return (
        <div className="container">
            <div className='logo logo-container'>
                <Logo />
            </div>
            <div className="login-title">Login</div>
            <Button variant="contained" className="button citizen" onClick={() => login()}>Citizen</Button>
            <Button variant="contained" className="button politican" onClick={() => login()}>Politican</Button>
            <Button variant="contained" className="button admin" onClick={() => login()}>Admin</Button>
        </div>
    )
}

export default LandingPage