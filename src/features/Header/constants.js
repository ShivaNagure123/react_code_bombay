import React from 'react';
import { IconContext } from "react-icons";
// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
import * as CgIcons from 'react-icons/cg';
import * as MdIcons from 'react-icons/md';


export const userProfileData = [
    {
        title: 'My Profile',
        path: '/myprofile',
        icon:
            <IconContext.Provider value={{ className: "userProfileIcons" }}>
                <CgIcons.CgProfile />
            </IconContext.Provider>
    },
    {
        title: 'Other',
        path: '/other',
        icon:
            <IconContext.Provider value={{ className: "userProfileIcons" }}>
                <MdIcons.MdDevicesOther />
            </IconContext.Provider>
    }
];
