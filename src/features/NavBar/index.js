import React from 'react';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import PropTypes from 'prop-types';
import MenuItem from './MenuItem';

const Navbar = ({
    openSidebar,
    showSidebar,
}) => {
    const createMenuItemsHTML = () => {
        const menuItemsHTML = [];
        SidebarData.forEach(((data, idx) => {
            menuItemsHTML.push(<MenuItem key={idx}
            cName={data.cName}
            path={data.path}
            icon={data.icon}
            title={data.title}    
            />);
        }));
        return menuItemsHTML;
    };
    return (
        <>
                <nav className={openSidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <Link to='#' className='header-menu-bars'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                            
                        </li>
                    {createMenuItemsHTML()}
                    </ul>
                </nav>
        </>
    );
}

Navbar.propTypes = {
    openSidebar: PropTypes.bool,
    showSidebar: PropTypes.func.isRequired,
};

export default Navbar;
