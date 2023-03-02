import React from 'react';


const LandingPage = ({login}) => {

    // const login = useGoogleLogin({
    //     onSuccess: (codeResponse) => setUser(codeResponse),
    //     onError: (error) => console.log('Login Failed:', error)
    // });

    return (
        <div style={{backgroundColor: '#F5F5F5', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', minHeight: '100vh'}}>
        <br/>
        <br/>
        <div style={{backgroundColor:'white', height:'50px', width:'200px'}} onClick={() => login()}>Login as Citizen</div>
        </div>
    )
}

export default LandingPage