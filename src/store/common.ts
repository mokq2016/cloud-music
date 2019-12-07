/*
 * @Author: your name
 * @Date: 2019-12-05 18:02:17
 * @LastEditTime: 2019-12-06 18:04:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 *
 */
export function createAction(type: string, ...argsNames: any[]) {
  return (...args: any[]) => {
    const action = { type };
    argsNames.forEach((argsName, index) => {
      action[argsName] = args[index];
    });
    return action;
  };
}

export function createReducer(initState: any, handlers: object) {
  return (state = initState, action: any) => {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };
}
