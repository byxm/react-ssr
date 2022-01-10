import { CHANGE_HOME_LIST } from "./constants";

const defaultState = {
  list: [],
  name: "simone1",
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_HOME_LIST:
      return {
        ...state,
        list: action.list,
      };
    default:
      return state;
  }
};
