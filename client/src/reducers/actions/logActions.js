import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  SALE,
  RECEIVED,
  SEARCH_LOGS,
  UPDATE_LOG
} from "./Types";
import uuid from "uuid";

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
      payload: error.response.status
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
      payload: error.response.status
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
      payload: error.response.status
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
      payload: error.response.status
    });
  }
};

export const sale = log => async dispatch => {
  try {
    setLoading();
    const saleItem = {
      id: log.id,
      quantity: log.quantity,
      description: log.description,
      purchase_value: log.purchase_value,
      sale_price: log.sale_price,
      reorder_at: log.reorder_at,
      received_date: log.received_date,
      location: log.location,
      scannable: log.scannable
    };
    const res = await fetch(`/Inventory/${log.id}`, {
      method: "PUT",
      body: JSON.stringify(saleItem),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();
    const sale = {
      Sale_id: uuid(),
      description: data.description,
      Sale_date: new Date(),
      quantity: log.quantity,
      amount: log.quantity * data.sale_price
    };

    await fetch("/Sale", {
      method: "POST",
      body: JSON.stringify(sale),
      headers: { "Content-Type": "application/json" }
    });
    console.log(saleItem);
    dispatch({
      type: SALE,
      payload: saleItem
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.status
    });
  }
};

export const searchLogs = text => {
  return { type: SEARCH_LOGS, payload: text };
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
