// Redux
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import login from "./pages/login";

// actions
import { loginUser } from "../../store/users/actions";
import { actionWithPromise } from "../../middlewares/promises";
import { HistoryWarpper } from "../../utils/history";

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmitLogin: (credintials) => {
      return dispatch(actionWithPromise(loginUser(credintials)));
    },
    goToDashboard: () => HistoryWarpper.history.push("/"),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(login));
