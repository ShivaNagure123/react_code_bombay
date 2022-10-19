import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const MenuItem = ({ item }) => { 
    const [subNav,setSubNav] = useState(false);
    const showSubNav = () => {
        setSubNav(!subNav)
    }

    const generateSubNavMenuHTML = () => {
        const menuItemsHTML = [];
        item.subNav.forEach(((data, idx) => {
            menuItemsHTML.push(
                <div key={idx} className="subMenuDropDown" onClick={() => setSubNav(!subNav)}>
                    <Link  to={data.path} className='subMenuLink title' >
                        {data.icon}
                        <span className='userProfileMenuName'>{data.title}</span>
                    </Link>
                </div>
            );
            
        }));
        
        return menuItemsHTML;
        
    };
    return (
            <>
                <li className={item.cName}>
                    <Link to={item.path} className='menuItemLink title-xLarge' onClick={item.subNav && 
                       showSubNav}>
                        {item.icon}
                        <span className='menuTitle'>{item.title}</span>
                        <span className='subMenuIcon'>
                        {item.subNav && subNav ? item.iconOpened :item.subNav ? item.iconClosed: null }
                        </span>
                    </Link>
                {subNav && generateSubNavMenuHTML()}
                    
                </li>
                
            </>
        );
}
export default MenuItem;
