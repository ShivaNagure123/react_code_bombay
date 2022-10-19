import axios from 'axios';
import getEndpoints from '../config/endpoints';

const stockManagementAPIs = {
    addStock: async (formData) => {
        try {
            const endpoint = getEndpoints().stockManagement.addStock;
            const body = formData;
            const response = await axios.post(endpoint, body);
            return response;
        } catch (e) {
            return e.response || e;
        }
    },
    getLoomsTableData: async (LoomType,Status) => {
        try {
            const endpoint = getEndpoints().stockManagement.getLoomsTableData;
            const body = {LoomType,Status};
            const response = await axios.post(endpoint, body);
            return response;
        } catch (e) {
            return e.response || e;
        }
    },
    getDobbyTableData: async (DobbyType) => {
        try {
            const endpoint = getEndpoints().stockManagement.getDobbyTableData;
            const body = { DobbyType };
            const response = await axios.post(endpoint, body);
            return response;
        } catch (e) {
            return e.response || e;
        }
    },
};

export default stockManagementAPIs;