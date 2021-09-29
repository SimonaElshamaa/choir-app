import {
  getFormatedDates,
  removeUndefinedKeys,
  uniqueEntities,
} from "../../utils/helpers";

import groupsMapper from "./groups";

export function fromAPI(apiUser) {
  const dates = getFormatedDates(
    removeUndefinedKeys({
      createdAt: apiUser.createdAt,
      updatedAt: apiUser.updatedAt,
      date_of_birth: apiUser.date_of_birth,
    })
  );

  let { group } = apiUser.menu
    ? groupsMapper.fromAPI(apiUser.group)
    : undefined;

  return {
    user: removeUndefinedKeys({
      id: apiUser.id,
      email: apiUser.email,
      password: apiUser.password,
      full_name: apiUser.full_name,
      mobile: apiUser.mobile,
      address: apiUser.address,
      image: apiUser.image,
      note: apiUser.note,
      confession_priest: apiUser.confession_priest,
      church: apiUser.church,
      father_mobile_number: apiUser.father_mobile_number,
      mother_mobile_number: apiUser.mother_mobile_number,
      father_confession_priest: apiUser.father_confession_priest,
      mother_confession_priest: apiUser.mother_confession_priest,
      father_job: apiUser.father_job,
      mother_job: apiUser.mother_job,
      sisters: apiUser.sisters,
      brothers: apiUser.brothers,
      role_ids: apiUser.role_ids,
      group,
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

  result.groups = uniqueEntities(allUsers);
  return result;
}

export default {
  fromAPI,
  fromAPIList,
};
