import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  SEARCH_LOGS,
  UPDATE_LOG
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

//! ADD LOG TO BACKEND
// Works identically once express backend is setup
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

export const deleteLog = id => async dispatch => {
  try {
    setLoading();
    await fetch(`/Inventory/${id}`, {
      method: "DELETE"
    });

    dispatch({
      type: DELETE_LOG,
      payload: id
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data
    });
  }
};

export const updateLog = log => async dispatch => {
  try {
    setLoading();
    const res = await fetch(`/Inventory/${log.id}`, {
      method: "PUT",
      body: JSON.stringify(log),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();

    dispatch({
      type: UPDATE_LOG,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data
    });
  }
};

export const searchLogs = text => async dispatch => {
  try {
    setLoading();
    const res = await fetch(`/Inventory?q=${text}`);
    const data = await res.json();
    dispatch({
      type: SEARCH_LOGS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data
    });
  }
};

export const setCurrent = log => {
  return {
    type: SET_CURRENT,
    payload: log
  };
};

export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT
  };
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
