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
        <div className='navigation logo-container'>
            <Logo />
        </div>
        <div>Login</div>
        <br/>
        <br/>
        <Button variant="contained" style={{backgroundColor: '#67B9A5', height:'50px', width:'200px'}} onClick={() => login()}>Citizen</Button>
        </div>
    )
}

export default LandingPage