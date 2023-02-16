import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/politicly-logo';
import blurbycat from '../assets/blurby-cat.jpg';

import '../App.scss';

const Navigation = ( ) => {

    return (
        <div className='navigation'>
            <div className='navigation logo-container'>
                <Logo />
            </div>
            <h1 className='navigation politicly-brand'>Politic.ly</h1>
            <ul className='navigation nav-items'>
                <li>
                    <NavLink to='/favorites' className={e => (e.isActive ? 'navigation--item active' : 'navigation--item')}>
                        <span className="material-symbols-outlined">
                            favorite
                        </span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/explore' className={e => (e.isActive ? 'navigation--item active' : 'navigation--item')}>
                        <span className="material-symbols-outlined">
                            search
                        </span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/news' className={e => (e.isActive ? 'navigation--item active' : 'navigation--item')}>
                    <span className="material-symbols-outlined">
                        newspaper
                    </span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/account' className={e => (e.isActive ? 'navigation--item active' : 'navigation--item')}>
                        <img className='navigation account-img' src={blurbycat} alt="cat-account"/>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Navigation;