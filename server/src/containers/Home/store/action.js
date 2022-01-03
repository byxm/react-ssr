import axios from "axios";

export const getHomeList = () => {
  return () => {
    axios.get("http://localhost:3001/posts").then((res) => {
      console.log("res---------", res);
    });
  };
};
