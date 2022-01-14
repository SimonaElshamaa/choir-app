// Redux
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import UserProfile from "./pages/UserProfile";

// actions
import { addUser } from "../../store/users/actions";
import { actionWithPromise } from "../../middlewares/promises";
import { getCurrentUser} from "../../store/users/selectors";

// import { HistoryWarpper } from "../../utils/history";

const mapStateToProps = (state) => {
  return {
    role:getCurrentUser(state).roleId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (user) => {
      return dispatch(actionWithPromise(addUser(user)));
    },
    // goToDashboard: () => HistoryWarpper.history.push("/"),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(UserProfile)
);
