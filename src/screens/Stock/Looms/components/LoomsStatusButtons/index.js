import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Layout } from '../../../../../config/routes'
import PageHeader from '../../../../../components/PageHeader'
import StockData from '../../../constants';
import Card from '../../../components/Card';


const LoomsStatusButtons = () => {
    const loomType = localStorage.getItem('loomType');
    const handleClick = (BtnStatus) => {
        localStorage.setItem('loomsBtnStatus', BtnStatus);
    }
    const generateButtonsHTML = () => {
        const menuItemsHTML = [];
        StockData.loomButtons.forEach(((data, idx) => {
            menuItemsHTML.push(<Card key={idx}
                id={data.id}
                size={data.size}
                image={data.hasImage}
                imageSrc={data.imageSrc}
                content={<Link to={`/stock/looms/${loomType}/${data.id}`} onClick={() => handleClick(data.id)} className='loomsStatusBtnTitle'>
                            <span>{data.title}</span>
                        </Link>}
            />);
        }));
        return menuItemsHTML;
    };
    return (
        <Layout>
            <main id='loomsStatusBtnContainer'>
                <PageHeader title='Looms' placeholder='Stock > Looms > Status' />
                <div className='flex-break'></div>
                <div className='loomsStatusBtnMenuContainer'>
                    {generateButtonsHTML()}
                </div>
            </main>
        </Layout>
    )
}

export default LoomsStatusButtons;
