import {
  GET_LOGS,
  SET_LOADING,
  GET_LOADING,
  LOGS_ERROR,
  ADD_LOG
} from "./Types";

// !! This gets reset to be an axios call when backend is set up, use v 82 to restructer as well as previous projects
export const getLogs = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch("/Inventory");
    const data = await res.json();
    dispatch({
      type: GET_LOGS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data
    });
  }
};

export const addLog = log => async dispatch => {
  try {
    setLoading();
    const res = await fetch("/Inventory", {
      method: "POST",
      body: JSON.stringify(log),
      headers: { "Content-Type": "application/json" }
    });
    const data = await res.json();
    dispatch({
      type: ADD_LOG,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data
    });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
