const local = (state) => state.attendances;
export const getGroupAttendance = (state) => local(state).byId;
