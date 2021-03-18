import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import Navbar from '../NavBar';


const Header = () => {
    const [openSidebar, setOpenSidebar] = useState(false);
    const showSidebar = () => setOpenSidebar(!openSidebar);
    return (
        <IconContext.Provider value={{ color: '#fff' }}>
            <header className='header'>
                <Link to='#' className='menu-bars'>
                    <FaIcons.FaBars onClick={showSidebar} />
                </Link>
                <p className='title-xLarge projectTitle'>Inventory Management System</p>
                <p className='title-xLarge projectTitle'>Profile</p>
                
                <Navbar openSidebar={openSidebar} showSidebar={showSidebar}/>
            </header>
        </IconContext.Provider >
    )
}

export default Header;
