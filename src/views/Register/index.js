// Redux
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import login from "./pages/register";

// actions
import { registerUser } from "../../store/users/actions";
import { actionWithPromise } from "../../middlewares/promises";
import { HistoryWarpper } from "../../utils/history";

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (user) => {
      const registerUserAction = registerUser(user);
      return dispatch(actionWithPromise(registerUserAction));
    },
    goToDashboard: () => HistoryWarpper.history.push("/"),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(login));
