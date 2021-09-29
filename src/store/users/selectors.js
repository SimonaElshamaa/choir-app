const local = (state) => state.login;
export const getToken = (state) => local(state).token;
export const getLoginType = (state) => local(state).loginType;
