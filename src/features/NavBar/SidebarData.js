import React from 'react';
// import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';
import * as GrIcons from 'react-icons/gr';

export const SidebarData = [
    {
        title: 'Home',
        path: '/dashboard',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Stock',
        path: '/stock',
        icon: <AiIcons.AiOutlineStock />,
        cName: 'nav-text',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Add Stock',
                path: '/stock/addStock',
                icon: <GrIcons.GrAddCircle />
            },
        ]
    },
     {
        title: 'Billing',
        path: '/billing',
        icon: <AiIcons.AiOutlineStock />,
        cName: 'nav-text',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Billing',
                path: '/billing/addBill',
                icon: <GrIcons.GrAddCircle />
            },
        ]
    }


    // ,
    // {
    //     title: 'Reports',
    //     path: '/reports',
    //     icon: <IoIcons.IoIosPaper />,
    //     cName: 'nav-text'
    // },
    // {
    //     title: 'Products',
    //     path: '/products',
    //     icon: <FaIcons.FaCartPlus />,
    //     cName: 'nav-text'
    // },
    // {
    //     title: 'Messages',
    //     path: '/messages',
    //     icon: <FaIcons.FaEnvelopeOpenText />,
    //     cName: 'nav-text'
    // },
    // {
    //     title: 'Support',
    //     path: '/support',
    //     icon: <IoIcons.IoMdHelpCircle />,
    //     cName: 'nav-text'
    // }
];
