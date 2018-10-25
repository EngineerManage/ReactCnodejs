/**
 * 添加/移除token
 */

export function addToken (tokenData) {
  return {
    type: 'ADD_TOKEN',
    payload: {
      token: tokenData,
    },
  };
}

export function removeToken () {
  return {
    type: 'REMOVE_TOKEN',
    payload: {
      token: null,
    },
  };
}
