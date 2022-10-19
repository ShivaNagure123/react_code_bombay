import React,{ useEffect, useState } from 'react'
import { Layout } from '../../../../../config/routes'
import PageHeader from '../../../../../components/PageHeader'
import Table from '../../../../../components/Table'
import StockData from '../../../constants';
import stockManagementAPIs from '../../../../../services/stock.service';

const LoomsTableFilter = () => {
    const LoomType = localStorage.getItem('loomType');
    const Status = localStorage.getItem('loomsBtnStatus');

    const [LoomsTableData, setLoomsTableData] = useState([]);
    useEffect(() => {
        const responseData = stockManagementAPIs.getLoomsTableData(LoomType,Status);
        responseData.then((res) => {
            console.log(res.data)
            setLoomsTableData(res.data)
        });
    }, [LoomType, Status]);
    return (
        <Layout>
            <main id='loomsTableContainer'>
                <PageHeader title='Looms' placeholder='Stock > Looms > Status > Table' />
                <div className='flex-break'></div>
                <div className='loomsFilterTableContainer'>
                    <Table id='looms-table'
                        headerData={StockData.loomsTableData.tableHeaderData} 
                        bodyData={LoomsTableData}
                        //footerData={StockData.loomsTableData.tableFooterData}
                    />
                </div>
                
            </main>
        </Layout>
    )
}

export default LoomsTableFilter;
