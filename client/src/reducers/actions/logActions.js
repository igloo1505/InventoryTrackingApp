import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  SALE,
  GET_SALES,
  RECEIVED,
  SEARCH_LOGS,
  UPDATE_LOG
} from "./Types";
import uuid from "uuid";
import Axios from "axios";

const config = {
  headers: {
    "Content-Type": "application/json"
  }
};
// !! Get logs reset to use axios
export const getLogs = () => {
  return async dispatch => {
    setLoading();
    try {
      const res = await Axios.get("/Inventory");
      dispatch({
        type: GET_LOGS,
        payload: res.data
      });
    } catch (error) {
      dispatch({
        type: LOGS_ERROR
      });
    }
  };
};
export const getSales = () => {
  return async dispatch => {
    setLoading();
    try {
      const res = await Axios.get("/Sale");

      dispatch({
        type: GET_SALES,
        payload: res.data
      });
    } catch (error) {
      console.log(error);
    }
  };
};

//! ADD LOG TO BACKEND
// Works identically once express backend is setup
export const addLog = log => async dispatch => {
  try {
    setLoading();
    const res = await Axios.post("/Inventory", log, config);

    dispatch({
      type: ADD_LOG,
      payload: res.data
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
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  try {
    setLoading();
    const saleItem = {
      id: log.id,
      quantity: log.quantity,
      description: log.description,
      purchase_price: log.purchase_value,
      sale_price: log.sale_price,
      reorder_at: log.reorder_at,
      received_date: log.received_date,
      location: log.location,
      scannable: log.scannable
    };
    const sale = {
      item_id: log.id,
      Sale_id: uuid(),
      description: log.description,
      quantity: log.sale_quantity,
      amount: log.amount,
      day: log.day
    };
    const res = await Axios.put(`/Inventory/${log.id}`, saleItem, config);
    // const data = await res.json();

    const respo = await Axios.post("/Sale", sale, config);
    console.log(res.data);
    console.log(respo.data);
    dispatch({
      type: SALE,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.status
    });
  }
  clearCurrent();
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
