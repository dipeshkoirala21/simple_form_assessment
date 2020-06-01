import { createSelector } from "reselect";

const selectUserData = (state) => state.userdata;

export const selectLoading = createSelector(
  [selectUserData],
  (userdata) => userdata.loading
);

export const selectData = createSelector(
  [selectUserData],
  (userdata) => userdata.data
);
export const selectAllUsersData = createSelector(
  [selectUserData],
  (userdata) => userdata.users
);
