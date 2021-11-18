const local = (state) => state.attendances;
export const getGroupAttendance = (state) => Object.values(local(state).byId);

