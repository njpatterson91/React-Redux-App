import axios from "axios";

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";

export const fetchData = () => (dispatch) => {
  dispatch({ type: FETCH_DATA_START });
  axios
    .get(`https://api.github.com/users/odst0016/followers`)
    .then((res) => {
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
