/*
 * @Author: your name
 * @Date: 2019-12-02 18:10:00
 * @LastEditTime: 2019-12-02 18:14:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \workPlace_react-music\cloud-music\src\commom\api.ts
 */
import axios from "./http";

export function login(phone: string, password: string) {
  return axios.get(`/login/cellphone?phone=${phone}&password=${password}`);
}
