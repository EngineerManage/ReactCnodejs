/**
 * 初始化
 */

const initialState = {
  token: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'ADD_TOKEN':
      return {
        ...state,
        token: action.token,
      };
    case 'REMOVE_TOKEN':
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
}
