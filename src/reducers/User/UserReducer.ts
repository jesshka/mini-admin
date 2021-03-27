// Libraries
import { Reducer } from 'redux';
// Types
import { UserActionsType } from './UserSaga';

const initialState: UserReducer = {
  data: [],
  totalUsers: 0,
};

const reducer: Reducer<UserReducer, Action> = (state = initialState, action: Action): UserReducer => {
  switch (action.type) {
    case UserActionsType.FETCH_USERS_SUCCEED:
      return {
        ...state,
        data: action.value,
        totalUsers: action.value.length
      };
    case UserActionsType.FETCH_USERS_ERROR:
      return {
        ...state,
        data: action.value,
        totalUsers: action.value.length
      };
    default:
      return state;
  }
};

export default reducer;