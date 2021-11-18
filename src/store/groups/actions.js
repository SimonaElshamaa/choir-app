import {
  LIST_GROUPS,
  CHANGE_GROUP,
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

export const CHANGE_GROUP_REQUEST = getActionType(CHANGE_GROUP, REQUEST);

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

export const listGroupsFailure = (error = null) =>{
  return {
    type: LIST_GROUPS_FAILURE,
    payload: { error },
  };
}

export const changeGroup = ()=>{
  return {
    type: CHANGE_GROUP_REQUEST
  }
}
