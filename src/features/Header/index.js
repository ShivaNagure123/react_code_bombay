import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IconContext } from 'react-icons';
// import * as IoIcons from 'react-icons/ioChevron';
import * as FaIcons from 'react-icons/fa';
import * as BiIcons from 'react-icons/bi';
import { Link, useHistory } from 'react-router-dom';
import Navbar from '../NavBar';
import { userProfileData } from './constants';
import { logOutUser } from '../../redux/actions/AuthActions';


const Header = () => {
    const currentUser = useSelector(state => state.auth);
    const history = useHistory();
    const dispatch =useDispatch();
    const [openSidebar, setOpenSidebar] = useState(false);
    const [openUserProfile, setOpenUserProfile] = useState(false);
    const showSidebar = () => setOpenSidebar(!openSidebar);
    const generateUserProfileMenuHTML = () => {
        const menuItemsHTML = [];
        userProfileData.forEach(((data, idx) => {
            menuItemsHTML.push(
                <Link to={data.path} className='userProfileMenuLink title' key={idx}>
                    {data.icon}
                    <span className='userProfileMenuName'>{data.title}</span>
                </Link>
            );
        }));
        return menuItemsHTML;
    };
    const handleLogOut = () => {
        
        alert('you are logged out!..');
        dispatch(logOutUser());
        history.push('/');


    }
    return (
        <IconContext.Provider value={{ color: '#fff' }}>
            <header className='header'>
                <Link to='#' className='header-menu-bars'>
                    <FaIcons.FaBars onClick={showSidebar} />
                </Link>
                <section id='headerContainer'>
                    <p className='title-xLarge header-title'>Customer Relationship Management - CRM</p>
                </section>
            
                <section id='userProfileContainer'>
                    <div className="userProfileDropdown" onClick={() => setOpenUserProfile(!openUserProfile)}>
                        <button className="userProfileBtn">
                            <FaIcons.FaUser />
                            <span className='title-xLarge userProfileName'>Hi, {currentUser.user.username}</span>
                        </button>
                        {openUserProfile &&
                            <div className="userProfile-dropdown-content" onClick={() => setOpenUserProfile(!openUserProfile)}>
                                {generateUserProfileMenuHTML()}
                                <hr/>
                                <div className='logOutBtn userProfileMenuLink' onClick={() => handleLogOut()}>
                                    <IconContext.Provider value={{ className: "userProfileIcons" }}>
                                        <BiIcons.BiLogOut />
                                    </IconContext.Provider>
                                    <span className='title userProfileMenuName'>Log-Out</span>
                                </div>
                            </div>
                        }
                    </div>
                
                </section>
                <Navbar openSidebar={openSidebar} showSidebar={showSidebar}/>
            </header>
        </IconContext.Provider >
    )
}

export default Header;
