import React, { useEffect, useState } from 'react'
import { Layout } from '../../../../../config/routes'
import PageHeader from '../../../../../components/PageHeader'
import Table from '../../../../../components/Table'
import StockData from '../../../constants';
import stockManagementAPIs from '../../../../../services/stock.service';

const DobbyTableFilter = () => {
    const DobbyType = localStorage.getItem('dobbyType');

    const [DobbyTableData, setDobbyTableData] = useState([]);
    useEffect(() => {
        const responseData = stockManagementAPIs.getDobbyTableData(DobbyType);
        responseData.then((res) => {
            console.log(res.data)
            setDobbyTableData(res.data)
        });
    }, [DobbyType]);
    return (
        <Layout>
            <main id='dobbyTableContainer'>
                <PageHeader title='Dobby' placeholder='Stock > Dobby > Table' />
                <div className='flex-break'></div>
                <div className='dobbyFilterTableContainer'>
                    <Table id='dobby-table' 
                        headerData={StockData.loomsTableData.tableHeaderData}
                        bodyData={DobbyTableData}
                        //footerData={StockData.loomsTableData.tableFooterData}
                    />
                </div>

            </main>
        </Layout>
    )
}

export default DobbyTableFilter;
