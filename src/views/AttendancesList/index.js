// Redux
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import TableList from "./pages/TableList";

// actions
import {listGroupAttendance } from "../../store/attendances/actions";
import {search,listUsers} from "../../store/users/actions";
import {changeGroup} from "../../store/groups/actions";
import {getAll as getAllUsers, getCurrentUser} from "../../store/users/selectors";
import {getGroupAttendance} from "../../store/attendances/selectors";

import { actionWithPromise } from "../../middlewares/promises";
import { HistoryWarpper } from "../../utils/history";

const mapStateToProps = (state) => {
  return {
    users:getAllUsers(state),
    attendances:getGroupAttendance(state),
    role:getCurrentUser(state).roleId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeGroup:()=>{dispatch(changeGroup())},
    listUsers: (groupId) => {
      return dispatch(actionWithPromise(listUsers(groupId)));
    },
    search: (name, groupId) => {
      return dispatch(actionWithPromise(search(name,groupId)));
    },
    goToDashboard: () => HistoryWarpper.history.push("/"),
    listGroupAttendance:(groupId, date) => {
      return dispatch(actionWithPromise(listGroupAttendance(groupId, date)));
    },
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TableList)
);
