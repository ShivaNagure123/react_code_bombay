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
            item={data}
            />);
        }));
        return menuItemsHTML;
    };
    return (
        <>
                <nav className={openSidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items'>
                    `   <li className='navbar-toggle' >
                            <Link to='#' className='header-menu-bars'>
                                <AiIcons.AiOutlineClose onClick={showSidebar}/>
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
