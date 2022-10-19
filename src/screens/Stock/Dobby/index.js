import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../../components/PageHeader';
import Card from '../components/Card';
import StockData from '../constants';
import { Layout } from '../../../config/routes';

const Dobby = () => {
    const handleClick = (dobbyType) => {
        localStorage.setItem('dobbyType', dobbyType);
    }
    const generateCardsHTML = () => {
        const menuItemsHTML = [];
        StockData.dobby.forEach(((data, idx) => {
            menuItemsHTML.push(<Card key={idx}
                id={data.id}
                size={data.size}
                image={data.hasImage}
                imageSrc={data.imageSrc}
                content={<Link to={data.path} onClick={() => handleClick(data.type)} className='dobbyCardTitle'>
                    <span>{data.title}</span>
                </Link>}
            />);
        }));
        return menuItemsHTML;
    };
    return (
        <Layout>
            <main id='dobbyContainer'>
                <PageHeader title='Dobby' placeholder='Stock > Dobby' />
                <div className='flex-break'></div>
                <div className='dobbyMenuContainer'>
                    {generateCardsHTML()}
                </div>
            </main>
        </Layout>
    )
}

export default Dobby;
