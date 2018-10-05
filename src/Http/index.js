import axios from 'axios'
// axios.defaults.baseURL = 'http://www.weiyanwen.com:8081/dgjj-api';
// axios.defaults.baseURL = 'http://localhost:3030';
axios.defaults.baseURL = 'http://www.weiyanwen.com:8081/dgjj-api';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export default axios