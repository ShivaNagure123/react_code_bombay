import React from 'react';
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
            <div className='stockMenuContainer'>
                {generateCardsHTML()}
            </div>
        </main>
    )
}

export default Stock;
