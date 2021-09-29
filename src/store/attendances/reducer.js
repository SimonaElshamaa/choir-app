import { toByIds } from "../../utils/helpers";

import { ADD_ATTENDANCE_SUCCESS } from "./actions";
import { LOGOUT_USER_SUCCESS } from "../users/actions";

const defaultState = {
  byId: {},
};

export default (state = defaultState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_ATTENDANCE_SUCCESS:
      if (!payload.attendance) {
        return state;
      }
      return {
        byId: toByIds(state.byId, [payload.attendance]),
      };
    case LOGOUT_USER_SUCCESS:
      return defaultState;
    default:
      return state;
  }
};
