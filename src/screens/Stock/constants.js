import supplierCardImg from '../../styles/images/supplierCardImg.png';
import { Link } from 'react-router-dom';

const stockData = [
    {
        id: 'looms',
        size: 'small',
        hasImage: true,
        imageSrc: supplierCardImg,
        content: <Link to='/stock/looms' className='stockCardTitle'>
                    <span>Looms</span>
                </Link>
    },
    {
        id: 'dobby',
        size: 'small',
        hasImage: true,
        imageSrc: supplierCardImg,
        content: <Link to='/stock/dobby' className='stockCardTitle'>
                    <span>Dobby</span>
                </Link>
    },
    {
        id: 'nutBolts',
        size: 'small',
        hasImage: true,
        imageSrc: supplierCardImg,
        content: <Link to='/stock/nutBolts' className='stockCardTitle'>
                    <span>Nuts & Bolts</span>
                </Link>
    },
    {
        id: 'other',
        size: 'small',
        hasImage: true,
        imageSrc: supplierCardImg,
        content: <Link to='/stock/other' className='stockCardTitle'>
                    <span>Other</span>
                </Link>
    }
];

export default stockData;
