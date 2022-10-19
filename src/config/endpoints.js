const getEndpoints = () => {
    const baseUrl = 'http://sandeepd.com';
    
    const endpoints = {
        authentication: {
            login: `${baseUrl}/API/login.php`,
        },
        stockManagement: {
            addStock: `${baseUrl}/API/addStock.php`,
            getLoomsTableData: `${baseUrl}/API/getLoomsTableData.php`,
            getDobbyTableData: `${baseUrl}/API/getDobbyTableData.php`,
        },
    };
    return endpoints;
};

export default getEndpoints;
