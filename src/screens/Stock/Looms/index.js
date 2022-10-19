import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../../components/PageHeader';
import Card from '../components/Card';
import StockData from '../constants';
import { Layout } from '../../../config/routes';

const Looms = () => {
    const handleClick = (loomType) =>{
        localStorage.setItem('loomType',loomType);
    }
    const generateCardsHTML = () => {
        const menuItemsHTML = [];
        StockData.looms.forEach(((data, idx) => {
            menuItemsHTML.push(<Card key={idx}
                id={data.id}
                size={data.size}
                image={data.hasImage}
                imageSrc={data.imageSrc}
                content={<Link to={data.path} onClick={() => handleClick(data.type)} className='loomsCardTitle'>
                    <span>{data.title}</span>
                </Link>}
            />);
        }));
        return menuItemsHTML;
    };
    return (
        <Layout>
            <main id='loomsContainer'>
                <PageHeader title='Looms' placeholder='Stock > Looms' />
                <div className='flex-break'></div>
                <div className='loomsMenuContainer'>
                    {generateCardsHTML()}
                </div>
            </main>
        </Layout>
    )
}

export default Looms;
