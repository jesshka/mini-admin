import { LocationActionsType } from '../reducers/Location/LocationSaga';
import { UserActionsType } from '../reducers/User/UserSaga';

declare global {
  interface Action {
    type: LocationActionsType | UserActionsType,
    value: any,
  }

  interface RootState {
    location: LocationReducer,
    user: UserReducer,
  }
}
