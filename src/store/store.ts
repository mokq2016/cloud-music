/*
 * @Author: your name
 * @Date: 2019-12-06 12:24:53
 * @LastEditTime: 2019-12-06 12:28:30
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \workPlace_react-music\cloud-music\src\store\store.ts
 */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from "./rootReducer";

const store = () => createStore(rootReducer, applyMiddleware(thunk));

export default store;