import AttendancesApi from "../apis/attendancesapi";
import AttendancesMapper from "../mappers/attendances";
import {
  addAttendanceFailure,
  addAttendanceSuccess,
  listGroupAttendanceFailure,
  listGroupAttendanceSuccess,
} from "../../store/attendances/actions";

import ErrorsMapper from "../mappers/errors";

import { handleFailure } from "../handlers/failure";
import HTTPCodeException from "../handlers/HTTPCodeException";

export default class GroupsAdapter {
  constructor(driver) {
    this.attendancesApi = new AttendancesApi(driver);
  }

  addAttendance(attendance) {
    return new Promise((resolve) => {
      this.attendancesApi
        .add_attendance(attendance)
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
  get_attendances(date, groupId) {
    return new Promise((resolve) => {
      this.attendancesApi
        .get_attendances(date, groupId)
        .then(([status, body]) => {
          switch (status) {
            case 200: {
              const { attendance } = AttendancesMapper.fromAPIList(body.data);
              resolve(listGroupAttendanceSuccess(attendance));
              return;
            }
            default:
              throw new HTTPCodeException({
                status,
                body: ErrorsMapper.fromAPI(body),
              });
          }
        })
        .catch(handleFailure(resolve, listGroupAttendanceFailure));
    });
  }
}
