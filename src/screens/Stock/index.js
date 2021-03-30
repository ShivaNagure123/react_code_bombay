import React from 'react';
import PageHeader from '../../components/PageHeader';
import Card from './components/Card';
import StockData from './constants';

const Stock = () => {
    const generateCardsHTML = () => {
        const menuItemsHTML = [];
        StockData.forEach(((data, idx) => {
            menuItemsHTML.push(<Card key={idx}
                id={data.id}
                size={data.size}
                image={data.hasImage}
                imageSrc={data.imageSrc}
                content={data.content}
            />);
        }));
        return menuItemsHTML;
    };
    return (
        <main id='stockContainer'>
            <PageHeader title='Stock' placeholder='Stock' />
            <div className='flex-break'></div>
            <div className='stockMenuContainer'>
                {generateCardsHTML()}
            </div>
        </main>
    )
}

export default Stock;
