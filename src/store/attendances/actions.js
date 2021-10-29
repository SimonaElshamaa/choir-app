import {
  ADD_ATTENDANCE,
  LIST_GROUP_ATTENDANCE,
  getActionType,
  REQUEST,
  SUCCESS,
  FAILURE,
} from "./actionTypes";

/*
 *  action types
 */
export const ADD_ATTENDANCE_REQUEST = getActionType(ADD_ATTENDANCE, REQUEST);
export const ADD_ATTENDANCE_SUCCESS = getActionType(ADD_ATTENDANCE, SUCCESS);
export const ADD_ATTENDANCE_FAILURE = getActionType(ADD_ATTENDANCE, FAILURE);

export const LIST_GROUP_ATTENDANCE_REQUEST = getActionType(LIST_GROUP_ATTENDANCE, REQUEST);
export const LIST_GROUP_ATTENDANCE_SUCCESS = getActionType(LIST_GROUP_ATTENDANCE, SUCCESS);
export const LIST_GROUP_ATTENDANCE_FAILURE = getActionType(LIST_GROUP_ATTENDANCE, FAILURE);

export const addAttendance = ( userId = null, date = '', attend = false, groupId = null, note = '' ) => {

 return {
    type: ADD_ATTENDANCE_REQUEST,
    payload: {
      attendance: {
        userId,
        date,
        attend,
        groupId,
        note,
      },
    },
  };
};

export const addAttendanceSuccess = (attendance = {}) => {
  return {
    type: ADD_ATTENDANCE_SUCCESS,
    payload: { attendance },
  };
};

export function addAttendanceFailure(error = null) {
  return {
    type: ADD_ATTENDANCE_FAILURE,
    payload: { error },
  };
}

export const listGroupAttendance = (groupId = null, date = '' ) => {
  return {
    type: LIST_GROUP_ATTENDANCE_REQUEST,
    payload: {
      attendance: {groupId, date},
    },
  };
};

export const listGroupAttendanceSuccess = (attendances = []) => {
  return {
    type: LIST_GROUP_ATTENDANCE_SUCCESS,
    payload: { attendances },
  };
};

export function listGroupAttendanceFailure(error = null) {
  return {
    type: LIST_GROUP_ATTENDANCE_FAILURE,
    payload: { error },
  };
}
