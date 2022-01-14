import axios from "axios";
import { CHANGE_HOME_LIST } from "./constants";

const changeHomeList = (list) => ({ type: CHANGE_HOME_LIST, list });

export const getHomeList = () => {
  return (dispatch) => {
    return axios.get("/api/homelist").then((res) => {
      const { data } = res;
      return dispatch(changeHomeList(data));
    });
  };
};