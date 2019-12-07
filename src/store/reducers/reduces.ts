/*
 * @Author: your name
 * @Date: 2019-12-05 18:25:25
 * @LastEditTime: 2019-12-06 16:03:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \workPlace_react-music\cloud-music\src\store\reducers\reduces.ts
 */
import * as actionTypes from "../actions/actionTyes";
import { createReducer } from "../common";

export const loginReducer =  createReducer(JSON.parse(sessionStorage.getItem('userData')|| '{}'),{
  [actionTypes.LOGIN](state:any,actions:any){
    const userData = {...state,...actions.userData}
    sessionStorage.setItem('userData',JSON.stringify(userData))
    return userData
  }
})