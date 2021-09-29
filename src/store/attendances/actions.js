import {
  ADD_ATTENDANCE,
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

export const addAttendance = ({ date, user_id, group_id, attend, note }) => {
  return {
    type: ADD_ATTENDANCE_REQUEST,
    payload: {
      attendance: {
        date,
        user_id,
        group_id,
        attend,
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
