import { coursesConstants } from "../constants/CoursesConstants";

export function courses(state = {}, action) {
    switch (action.type) {
      case coursesConstants.GETALL_REQUEST:
        return {
          loading: true
        };
      case coursesConstants.GETALL_SUCCESS:
        return {
          items: action.courses
        };
      case coursesConstants.GETALL_FAILURE:
        return { 
          error: action.error
        };
      default:
        return state
    }
  }