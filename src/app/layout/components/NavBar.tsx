import React, {RC} from 'react';
import logoImg from '@assets/images/logo.png';

const NavBar:RC = () => {
    return (
        <div className="app-navbar flex items-center h-full">
            <img src={logoImg} height={30} alt="" />
        </div>
    );
};


export default NavBar;