// Libraries
import { Reducer } from 'redux';
// Types
import { LocationActionsType } from './LocationSaga';

const initialState: LocationReducer = {
  data: [],
  totalLocations: 0,
};

const reducer: Reducer<LocationReducer, Action> = (state = initialState, action: Action): LocationReducer => {
  switch (action.type) {
    case LocationActionsType.FETCH_LOCATIONS:
      return {
        ...state,
        data: action.value,
        totalLocations: action.value.length
      };
    default:
      return state;
  }
};

export default reducer;