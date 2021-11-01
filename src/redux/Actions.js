import axios from "axios";
import { FETCH_APOD, FETCH_ERROR, SET_LOADING } from "./types";
import config from "../../config/config.json";

export const fetchApod = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=${config.apod_api_key}`
    );
    dispatch({
      type: FETCH_APOD,
      payload: res.data,
    });
    dispatch(setLoading(false));
  } catch (error) {
    setLoading(false);
    console.log(error);
  }
};

const setLoading = (loadState) => ({
  type: SET_LOADING,
  payload: loadState,
});
