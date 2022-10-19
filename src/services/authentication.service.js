import axios from 'axios';
import getEndpoints from '../config/endpoints';

const authenticationManagementAPIs = {
    login: async (username, password) => {
        try {
            const endpoint = getEndpoints().authentication.login;
            const body = { username, password };
            const response = await axios.post(endpoint, body);
            return response;
        } catch (e) {
            return e.response || e;
        }
    },
};

export default authenticationManagementAPIs;