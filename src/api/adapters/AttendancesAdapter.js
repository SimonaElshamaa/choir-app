import AttendancesApi from "../apis/attendancesapi";
import AttendancesMapper from "../mappers/attendances";
import {
  addAttendanceFailure,
  addAttendanceSuccess,
} from "../../store/attendances/actions";

import ErrorsMapper from "../mappers/errors";

import { handleFailure } from "../handlers/failure";
import HTTPCodeException from "../handlers/HTTPCodeException";

export default class GroupsAdapter {
  constructor(driver) {
    this.attendancesApi = new AttendancesApi(driver);
  }

  addAttendance(date, user_id, group_id, attend, note) {
    return new Promise((resolve) => {
      this.attendancesApi
        .add_attendance(date, user_id, group_id, attend, note)
        .then(([status, body]) => {
          switch (status) {
            case 200: {
              const { attendance } = AttendancesMapper.fromAPI(body.data);
              resolve(addAttendanceSuccess(attendance));
              return;
            }
            default:
              throw new HTTPCodeException({
                status,
                body: ErrorsMapper.fromAPI(body),
              });
          }
        })
        .catch(handleFailure(resolve, addAttendanceFailure));
    });
  }
}
