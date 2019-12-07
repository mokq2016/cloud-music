/*
 * @Author: your name
 * @Date: 2019-12-06 12:26:42
 * @LastEditTime: 2019-12-06 12:27:36
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \workPlace_react-music\cloud-music\src\store\rootReducer.ts
 */
import { combineReducers } from 'redux'
import { loginReducer } from "./reducers/reduces";
const rootReducer  = combineReducers({
  loginReducer
})

export default rootReducer