/*
 * @Author: your name
 * @Date: 2019-12-05 18:09:28
 * @LastEditTime: 2019-12-06 17:39:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \workPlace_react-music\cloud-music\src\store\actions\actions.ts
 */
import * as types from "./actionTyes";
import { createAction} from "../common";

export const loginAction  = createAction(types.LOGIN,'userData')