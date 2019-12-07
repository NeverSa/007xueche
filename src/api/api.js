import axios from 'axios';
let base = "http://39.98.132.23";
let nonebase = "http://127.0.0.1:7001";
//数据库类型对应的服务器数查询
export const saveApply = (params = {}) => { return axios.post(`${base}/api/front/apply`, params) };
//驾校列表
export const querySchool = (params = {}) => { return axios.post(`${base}/api/front/query/school`, params) };

//获取科目一id列表
export const getSubject1IdList = (params = {}) => { return axios.get(`${nonebase}/api/subject1/byid`, { params }) };
//获取科目一的试题详情
export const getSubject1Question = (params = {}) => { return axios.get(`${nonebase}/api/subject1/detail`, { params }) };
//获取科目一试题分类
export const getCategorylist = (params = {}) => { return axios.get(`${nonebase}/api/subject1/getCategorylist`, { params }) };
//100道随机题
export const getExamlist = (params = {}) => { return axios.get(`${nonebase}/api/subject1/getExamlist`, { params }) };
//短信验证码
export const sendSms = (params = {}) => { return axios.post(`${base}/api/front/send/sms`, params ) };
//前台注册
export const register = (params = {}) => { return axios.post(`${base}/api/front/register`, params ) };
//登录
export const login = (params = {}) => { return axios.post(`${base}/api/front/login`, params ) };
//用户信息
export const userInfo = (params = {}) => { return axios.get(`${base}/api/front/user/info`, {params} ) };