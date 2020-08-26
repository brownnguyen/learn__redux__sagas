import axios from 'axios';
axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://rem-rest-api.herokuapp.com/api/users';
export const getUser = () => {
    return axios.get('/user', {
        params: {
            limit: 1000
        }
    })
}