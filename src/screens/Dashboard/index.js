import React from 'react';
import PageHeader from '../../components/PageHeader';
import { Layout } from '../../config/routes';

const Dashboard = () => {
    return (
        <Layout>
            <main id='dbContainer'>
                <PageHeader title='Dashboard' placeholder='Home' />       
            </main>
        </Layout>
    )
}

export default Dashboard;
