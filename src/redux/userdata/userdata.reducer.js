import produce from "immer";
import * as types from "./userdata.types";

const INITIAL_STATE = {
  loading: false,
  isDarkTheme: false,
  isFirstLoad: true,
  data: {
    name: "",
    country: "",
    favPhone: "",
    contact: "",
  },
  users: [],
};

const reducer = (state = INITIAL_STATE, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.SET_LOADING:
        draft.loading = action.payload;
        break;
      case types.SET_USER_DATA:
        draft.data[action.payload.key] = action.payload.value;
        break;
      case types.CLEAR_USER_DATA_FIELD:
        draft.data = INITIAL_STATE.data;
        break;
      case types.SAVE_USERS_DATA:
        // console.log(action.payload, "from reducer");
        draft.users === []
          ? (draft.users = action.payload)
          : (draft.users = [...state.users, action.payload]);
        break;
    }
  });

export default reducer;
