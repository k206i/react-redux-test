import {
  FETCH_USERS,
} from '../actions/types';

export default function usersReducer(state = [], action) {

  switch (action.type) {
    case FETCH_USERS:
      return [...state, ...action.payload.data];
  }

  return state;
}