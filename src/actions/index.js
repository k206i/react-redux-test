import axios from 'axios';
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
  const request = axios.get('https://jsonplaceholder.typicode.com/users');

  return {
    type: FETCH_USERS,
    payload: request,
  };
}
