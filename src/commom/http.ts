/*
 * @Author: your name
 * @Date: 2019-12-02 17:21:39
 * @LastEditTime: 2019-12-05 17:33:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \workPlace_react-music\cloud-music\src\utils\http.ts
 */
import axios from "axios";

axios.defaults.baseURL = 'https://www.mkq1.club/clound-music/';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';

// tslint:disable-next-line: only-arrow-functions
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
// tslint:disable-next-line: only-arrow-functions
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
// tslint:disable-next-line: only-arrow-functions
axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response.data;
// tslint:disable-next-line: only-arrow-functions
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

export default axios