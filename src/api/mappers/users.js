/* eslint-disable import/no-anonymous-default-export */
import {
  getFormatedDates,
  removeUndefinedKeys,
} from "../../utils/helpers";

export function fromAPI(apiUser) {
  const dates = getFormatedDates(
    removeUndefinedKeys({
      createdAt: apiUser.createdAt,
      updatedAt: apiUser.updatedAt,
      dateOfBirth: apiUser.dateOfBirth,
    })
  );

  return {
    user: removeUndefinedKeys({
      id: apiUser._id,
      email: apiUser.email,
      password: apiUser.password,
      fullName: apiUser.fullName,
      mobile: apiUser.mobile,
      address: apiUser.address,
      image: apiUser.image,
      note: apiUser.note,
      confessionPriest: apiUser.confessionPriest,
      church: apiUser.church,
      fatherMobileNumber: apiUser.fatherMobileNumber,
      motherMobileNumber: apiUser.motherMobileNumber,
      fatherConfessionPriest: apiUser.fatherConfessionPriest,
      motherConfessionPriest: apiUser.motherConfessionPriest,
      fatherJob: apiUser.fatherJob,
      motherJob: apiUser.motherJob,
      sisters: apiUser.sisters,
      brothers: apiUser.brothers,
      roleId: apiUser.roleId,
      groupId:apiUser.groupId,
      ...dates,
    }),
  };
}

export function fromAPIList(apiUsers) {
  let result = {
    users: [],
  };

  let allUsers = [];
  apiUsers.forEach((apiUser) => {
    const { user } = fromAPI(apiUser);
    allUsers.push(user);
  });

  result.users = allUsers;
  return result;
}

export default {
  fromAPI,
  fromAPIList,
};
