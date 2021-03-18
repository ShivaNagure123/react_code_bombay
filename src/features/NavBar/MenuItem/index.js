import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MenuItem = ({
    cName,
    path,
    icon,
    title,
}) => (<>
    <li className={cName}>
        <Link to={path} className='menuItemLink title-xLarge'>
            {icon}
            <span className='menuTitle'>{title}</span>
        </Link>
    </li>
</>);

MenuItem.propTypes = {
    cName: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
};

export default MenuItem;
