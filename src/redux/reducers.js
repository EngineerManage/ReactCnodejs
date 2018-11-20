/**
 * 初始化
 */

const initialState = {
  token: null,
  tab: ''
};

export default function OperateToken(state = initialState, action) {
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
    case 'CHOOSE_TAB':
      return {
        ...state,
        tab: action.tab
      }
    default:
      return state;
  }
}
