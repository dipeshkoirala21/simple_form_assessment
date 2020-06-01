import * as types from "./userdata.types";

export const setLoading = (loading) => ({
  type: types.SET_LOADING,
  payload: loading,
});

export const setUserData = (payload) => (dispatch) => {
  dispatch({
    type: types.SET_USER_DATA,
    payload,
  });
};
export const saveUsersData = (payload) => (dispatch) => {
  dispatch({
    type: types.SAVE_USERS_DATA,
    payload,
  });
};
export const setClearData = (payload) => (dispatch) => {
  dispatch({
    type: types.CLEAR_USER_DATA_FIELD,
    payload,
  });
};
