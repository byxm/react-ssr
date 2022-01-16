import { CHANGE_HOME_LIST } from "./constants";

const changeHomeList = (list) => ({ type: CHANGE_HOME_LIST, list });

export const getHomeList = (server = false) => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/homelist').then((res) => {
      const { data } = res;
      return dispatch(changeHomeList(data));
    }).catch(err => {
      console.error('error------------', err)
    });
  };
};