import { userConstants } from "../constants/UserConstants";

export function users(state = {}, action) {
    switch (action.type) {
      case userConstants.GETBYUSERNAMEL_REQUEST:
        return {
          loading: true
        };
      case userConstants.GETBYUSERNAME_SUCCESS:
        return {
          user: action.user
        };
      case userConstants.GETBYUSERNAME_FAILURE:
        return { 
          error: action.error
        };
      default:
        return state
    }
  }