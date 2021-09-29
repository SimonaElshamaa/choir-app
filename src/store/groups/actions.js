import {
  LIST_GROUPS,
  getActionType,
  REQUEST,
  SUCCESS,
  FAILURE,
} from "./actionTypes";

/*
 *  action types
 */
export const LIST_GROUPS_REQUEST = getActionType(LIST_GROUPS, REQUEST);
export const LIST_GROUPS_SUCCESS = getActionType(LIST_GROUPS, SUCCESS);
export const LIST_GROUPS_FAILURE = getActionType(LIST_GROUPS, FAILURE);

export const listGroups = () => {
  return {
    type: LIST_GROUPS_REQUEST,
  };
};

export const listGroupsSuccess = (groups = []) => {
  return {
    type: LIST_GROUPS_SUCCESS,
    payload: { groups },
  };
};

export function listGroupsFailure(error = null) {
  return {
    type: LIST_GROUPS_FAILURE,
    payload: { error },
  };
}
