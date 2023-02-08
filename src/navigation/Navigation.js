import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import defaultProfImg from '../images/default-prof-image.jpeg';

// import '../../sass/app.scss';
import './navigation.scss'

const Navigation = ( email, imageURL ) => {

    const [profileModalOpen, setProfileModalOpen] = useState(false);

    return (
        <div className='navigation'>
            <div className='navigation--col'>
                <NavLink to='/'>
                    <img src='./amb-logo.png' alt='Logo' className='navigation--homeIcon'/>
                </NavLink>
                <ul className='navigation--items'>
                    <li> 
                        <NavLink to='/' className={e => (e.isActive ? 'navigation--item active' : 'navigation--item')}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='explore' className={e => (e.isActive ? 'navigation--item active' : 'navigation--item')}>Explore</NavLink>
                    </li>
                    
                </ul>
            </div>
            {/* <span className='navigation--profile-col'>
                <div className='navigation--profile-image-container' onClick={() => setProfileModalOpen(!profileModalOpen)}>
                    <img src={defaultProfImg} alt='{email}' className='navigation--profile-image'/>
                </div>
                {profileModalOpen ? 
                    <div className="navigation--profile-modal">
                        <NavLink 
                            to='/account' 
                            className={e => (e.isActive ? 'navigation--profile-modal-item active' : 'navigation--profile-modal-item')} 
                            style={{ transform: 'translateY(-1px)' }}
                        >
                            Account
                        </NavLink>
                        <div className="navigation--profile-modal-item" style={{ transform: 'translateY(-1px)' }}>
                            Logout
                        </div>   
                    </div>
                : <></>}
            </span> */}
        </div>
    );
}

export default Navigation;