// Redux
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import TableList from "./pages/TableList";

// actions
import { addAttendance, listGroupAttendance } from "../../store/attendances/actions";
import {search,listUsers} from "../../store/users/actions";
import {getAll as getAllUsers} from "../../store/users/selectors";
import {getGroupAttendance} from "../../store/attendances/selectors";

import { actionWithPromise } from "../../middlewares/promises";
import { HistoryWarpper } from "../../utils/history";

const mapStateToProps = (state) => {
  return {
    users:getAllUsers(state),
    attendance:getGroupAttendance(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addAttendance: (
      userId,
      date,
      attend,
      groupId,
      ) => {
      return dispatch(actionWithPromise(addAttendance(userId, date, attend, groupId)));
    },
    listUsers: (groupId) => {
      return dispatch(actionWithPromise(listUsers(groupId)));
    },
    search: (name, groupId) => {
      return dispatch(actionWithPromise(search(groupId)));
    },
    goToDashboard: () => HistoryWarpper.history.push("/"),
    listGroupAttendance:(date, groupId) => {
      return dispatch(actionWithPromise(listGroupAttendance(groupId, date)));
    },
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TableList)
);
