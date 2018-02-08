import {
  FETCH_USERS,
} from '../actions/types';

export default function usersReducer(satate = [], action) {
  switch (action.type) {
    case FETCH_USERS:
      return [...state, ...action.payload];
  }

  return state;
}