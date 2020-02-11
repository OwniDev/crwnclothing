import {UserActionTypes} from './user.types'

const INITIAL_STATE = {
  currentUser : null
}
// Since we have no state when the app is initialised, we need to pass an initial state so that we don't get an error
const userReducer = (state = INITIAL_STATE,  action) => {
  switch(action.type){
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser : action.payload
      };
    default :
      return state;
  }
}

export default userReducer;