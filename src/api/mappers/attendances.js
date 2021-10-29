import {
  checkHasId,
  removeUndefinedKeys,
  uniqueEntities,
  getFormatedDates,
} from "../../utils/helpers";

export function fromAPI(apiAttendance) {
  checkHasId(apiAttendance);
  const dates = getFormatedDates(
    removeUndefinedKeys({
      createdAt: apiAttendance.createdAt,
      updatedAt: apiAttendance.updatedAt,
      date: apiAttendance.date,
    })
  );

  return {
    attendance: removeUndefinedKeys({
      id: apiAttendance._id,
      userId: apiAttendance.useId,
      groupId: apiAttendance.groupId,
      attend: apiAttendance.attend,
      note: apiAttendance.note,
      ...dates,
    }),
  };
}

export function fromAPIList(apiAttendances) {
  let result = {
    attendances: [],
  };

  let allAttendances = [];
  apiAttendances.forEach((apiAttendance) => {
    const { attendance } = fromAPI(apiAttendance);
    allAttendances.push(attendance);
  });
  result.attendances = uniqueEntities(allAttendances);
  return result;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fromAPI,
  fromAPIList,
};
