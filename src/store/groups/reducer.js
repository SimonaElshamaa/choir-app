import { toByIds } from "../../utils/helpers";

import { LIST_GROUPS_SUCCESS } from "./actions";
import { LOGOUT_USER_SUCCESS } from "../users/actions";

const defaultState = {
  byId: {},
};

export default (state = defaultState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case LIST_GROUPS_SUCCESS:
      return {
        byId: toByIds(state.byId, payload.groups),
      };
    case LOGOUT_USER_SUCCESS:
      return defaultState;
    default:
      return state;
  }
};
