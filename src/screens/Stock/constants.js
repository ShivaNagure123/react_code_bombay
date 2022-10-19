import supplierCardImg from '../../styles/images/supplierCardImg.png';
import { Link } from 'react-router-dom';


const stockData ={ 
    stock:[
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
    ],
    looms: [
        {
            id: 'htv',
            size: 'small',
            hasImage: true,
            imageSrc: supplierCardImg,
            path: '/stock/looms/htv',
            title: 'H.T.V',
            type: 'htv'
        },
        {
            id: 'gtn',
            size: 'small',
            hasImage: true,
            imageSrc: supplierCardImg,
            path: '/stock/looms/gtn',
            title: 'G.T.N',
            type: 'gtn',
        },
        {
            id: 'edo',
            size: 'small',
            hasImage: true,
            imageSrc: supplierCardImg,
            path: '/stock/looms/edo',
            title: 'E.D.O',
            type: 'edo',
        },
        {
            id: 'semiEdo',
            size: 'small',
            hasImage: true,
            imageSrc: supplierCardImg,
            path: '/stock/looms/semiEdo',
            title: 'Semi E.D.O',
            type: 'semiEdo',
        }
    ],
    dobby: [
        {
            id: 'dobby1232',
            size: 'small',
            hasImage: true,
            imageSrc: supplierCardImg,
            path: '/stock/dobby/1232',
            title: '1232',
            type: '1232'
        },
        {
            id: '2232',
            size: 'small',
            hasImage: true,
            imageSrc: supplierCardImg,
            path: '/stock/dobby/2232',
            title: '2232',
            type: '2232',
        },
        {
            id: '2667',
            size: 'small',
            hasImage: true,
            imageSrc: supplierCardImg,
            path: '/stock/dobby/2667',
            title: '2667',
            type: '2667',
        },
    ],
    loomButtons: [
        {
            id: 'running',
            size: 'small',
            hasImage: false,
            imageSrc: '',
            title: 'Running',
        },
        {
            id: 'letoff',
            size: 'small',
            hasImage: false,
            imageSrc: '',
            title: 'Let-Off',
        },
        {
            id: 'takeup',
            size: 'small',
            hasImage: false,
            imageSrc: '',
            title: 'Take-Up',
        },
        {
            id: 'gearbox',
            size: 'small',
            hasImage: false,
            imageSrc: '',
            title: 'Gear-Box',
        },
        {
            id: 'undermotion',
            size: 'small',
            hasImage: false,
            imageSrc: '',
            title: 'Undermotion',
        },
        {
            id: 'wallAndBody',
            size: 'small',
            hasImage: false,
            imageSrc: '',
            title: 'wall & Body',
        },
        {
            id: 'elecard',
            size: 'small',
            hasImage: false,
            imageSrc: '',
            title: 'Ele-Card',
        },
        {
            id: 'belts',
            size: 'small',
            hasImage: false,
            imageSrc: '',
            title: 'Belts',
        },
        {
            id: 'tucking',
            size: 'small',
            hasImage: false,
            imageSrc: '',
            title: 'Tucking',
        },
        
    ],
    loomsTableData:{
        tableHeaderData:['S.No', 'Particular', 'Quantity', 'T-2', 'Status', 'Price-Range', 'Remarks'],
        tableFooterData: ['S.No', 'Particular' , 'Quantity', 'T-2', 'Status', 'Price-Range', 'Remarks'],
    },
    StockTypes:{
        loomsType:[
            {
              key:'htv',
              value:'H.T.V'
            },
            {
                key:'gtn',
                value:'G.T.N'
            },
            {
                key:'edo',
                value:'E.D.O'

            },
            {
                key:'semiEdo',
                value:'semi E.D.O'
            } 
        ],
        dobbyType:[
            {
                key: '1232',
                value: '1232'
            },
            {
                key: '2232',
                value: '2232'
            },
            {
                key: '2667',
                value: '2667'

            },
        ],
        statusType:[
            {
                key: 'running',
                value: 'Running'
            },
            {
                key: 'letoff',
                value: 'Let-Off'
            },
            {
                key: 'takeup',
                value: 'Take-Up'

            },
            {
                key: 'gearbox',
                value: 'Gear-Box'
            },
            {
                key: 'undermotion',
                value: 'Undermotion'
            },
            {
                key: 'wallAndBody',
                value: 'Wall & Body'

            },
            {
                key: 'eleCard',
                value: 'Ele-Card'
            },
            {
                key: 'belts',
                value: 'Belts'
            },
            {
                key: 'tucking',
                value: 'Tucking'
            },
            
        ],
        stockType4:[
            {
                key:'original',
                value:'Original'
            },
            {
                key: 'imported',
                value: 'Imported'
            },
            {
                key: 'chinaMade',
                value: 'China Made'
            },
            {
                key: 'repair',
                value: 'Repair'
            },
        ],
        
    }
};

export default stockData;
