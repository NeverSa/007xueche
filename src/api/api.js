import axios from 'axios';
let base = "http://39.98.132.23/" ;
//数据库类型对应的服务器数查询
export const saveApply = (params = {}) => { return axios.post(`${base}/api/front/apply`,params) };
