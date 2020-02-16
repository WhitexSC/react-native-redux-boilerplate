import { DEFAULT_AUTHENTICATION_STATE } from "../utils/defaultStates";

const rootReducer = (state = DEFAULT_AUTHENTICATION_STATE, action) => {
  switch (action.type) {
    case "UPDATE_AUTH_DATA":
      return {
        ...state,
        ...action.payload
      }
    case "CLEAR_AUTH_DATA":
      return DEFAULT_AUTHENTICATION_STATE;
    default:
      return state;
  }
};

export default rootReducer;
