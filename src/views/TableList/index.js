// Redux
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import TableList from "./pages/TableList";

// actions
import { addAttendance } from "../../store/attendances/actions";
import {search,listUsers} from "../../store/users/actions";
import { actionWithPromise } from "../../middlewares/promises";
import { HistoryWarpper } from "../../utils/history";

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    addAttendance: (attendance) => {
      return dispatch(actionWithPromise(addAttendance(attendance)));
    },
    listUsers: (groupId) => {
      return dispatch(actionWithPromise(listUsers(groupId)));
    },
    search: (name, groupId) => {
      return dispatch(actionWithPromise(search(groupId)));
    },
    goToDashboard: () => HistoryWarpper.history.push("/"),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TableList)
);
