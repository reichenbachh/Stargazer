import { FETCH_APOD, FETCH_ERROR, SET_LOADING } from "./types";

const initialState = {
  loading: false,
  apod: {},
  error: null,
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_APOD:
      return {
        ...state,
        apod: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}

export default appReducer;
