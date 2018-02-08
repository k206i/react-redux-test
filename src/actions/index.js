import {
  SAVE_COMMENT,
  CHANGE_AUTH,
  FETCH_USERS,
} from './types';

export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment,
  }
}

export function authentificate(isLoggedIn) {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn,
  }
}

export function fetchUsers() {
  return {
    type: FETCH_USERS,
    payload: [
      { name: 'Колян' },
      { name: 'Паша' },
      { name: 'Даша' },
    ]
  };
}