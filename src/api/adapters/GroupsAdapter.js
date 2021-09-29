import GroupsApi from "../apis/groupsapi";
import GroupsMapper from "../mappers/groups";
import {
  listGroupsSuccess,
  listGroupsFailure,
} from "../../store/groups/actions";

import ErrorsMapper from "../mappers/errors";

import { handleFailure } from "../handlers/failure";
import HTTPCodeException from "../handlers/HTTPCodeException";

export default class GroupsAdapter {
  constructor(driver) {
    this.groupsApi = new GroupsApi(driver);
  }

  listGroups() {
    return new Promise((resolve) => {
      this.groupsApi
        .get_groups()
        .then(([status, body]) => {
          switch (status) {
            case 200: {
              const { groups } = GroupsMapper.fromAPIList(body.data);
              resolve(listGroupsSuccess(groups));
              return;
            }
            default:
              throw new HTTPCodeException({
                status,
                body: ErrorsMapper.fromAPI(body),
              });
          }
        })
        .catch(handleFailure(resolve, listGroupsFailure));
    });
  }
}
