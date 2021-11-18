/* eslint-disable import/no-anonymous-default-export */
import { toByIds } from "../../utils/helpers";
import { CHANGE_GROUP_REQUEST } from "../groups/actions";

import {
  ADD_USER_SUCCESS,
  LIST_USERS_SUCCESS,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER_SUCCESS,
} from "./actions";

const defaultState = {
  byId: {},
  token: "",
  loginType: "",
};

export default (state = defaultState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case LIST_USERS_SUCCESS:
      return {
        byId: toByIds(state.byId, payload.users),
      };
    case ADD_USER_SUCCESS:
      if (!payload.user) {
        return state;
      }
      return {
        byId: toByIds(state.byId, [payload.user]),
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        ...payload,
      };
    case CHANGE_GROUP_REQUEST:
    case LOGOUT_USER_SUCCESS:
      return defaultState;
    default:
      return state;
  }
};
