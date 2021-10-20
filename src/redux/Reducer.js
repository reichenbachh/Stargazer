import { FETCH_APOD, FETCH_ERROR } from "./types";

const initialState = {
  loading: false,
  apod: {},
  error: null,
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return {
        ...state,
      };
  }
}

export default appReducer;
