import axios from 'axios';
let base = window.basApi ;
//数据库类型对应的服务器数查询
export const severCountByDbType = (params = {}) => { return axios.get(`${base}/monitor/serverMachine/severCountByDbType`,{params}) };
