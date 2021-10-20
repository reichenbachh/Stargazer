import axios from "axios";
import { FETCH_APOD, FETCH_ERROR } from "./types";
import config from "../../config/config.json";

export const fetchApod = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=${config.apod_api_key}`
    );
    console.log(res.data);
    dispatch({
      type: FETCH_APOD,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
