/**
 * 添加/移除token
 */

export function addToken(tokenData) {
  return {
    type: 'ADD_TOKEN',
    token: tokenData.token,
  };
}

export function removeToken() {
  return {
    type: 'REMOVE_TOKEN',
    token: null
  };
}

export function chooseTab(value) {
  return {
    type: 'CHOOSE_TAB',
    tab: value
  }
}
