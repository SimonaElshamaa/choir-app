/* eslint-disable import/no-anonymous-default-export */
import { toByIds } from "../../utils/helpers";

import { ADD_ATTENDANCE_SUCCESS, LIST_GROUP_ATTENDANCE_SUCCESS } from "./actions";
import { LOGOUT_USER_SUCCESS } from "../users/actions";
import { CHANGE_GROUP_REQUEST } from "../groups/actions";

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
    case LIST_GROUP_ATTENDANCE_SUCCESS:
      return {
        byId: toByIds(state.byId, payload.attendances),
      };
    case CHANGE_GROUP_REQUEST:
    case LOGOUT_USER_SUCCESS:
      return defaultState;
    default:
      return state;
  }
};
