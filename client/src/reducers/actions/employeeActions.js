import axios from "axios";
import setAuthToken from "../../util/setToken";
import {
  GET_EMPS,
  ADD_EMP,
  DELETE_EMP,
  UPDATE_EMP,
  SET_LOADING,
  SETUSER,
  SIGN_IN_FAIL,
  SIGN_IN,
  EMP_ERROR
} from "./Types";
import M from "materialize-css/dist/js/materialize.min.js";

export const getEmployees = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch("/Employees");
    const data = await res.json();
    dispatch({
      type: GET_EMPS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: EMP_ERROR,
      payload: error.response.status
    });
  }
};

const setUser = async () => {
  return async dispatch => {
    setAuthToken(localStorage.token);
    try {
      const res = await axios.get("/Auth");
      dispatch({
        type: SETUSER,
        payload: res.data
      });
    } catch (error) {
      dispatch({ type: EMP_ERROR });
    }
  };
};

export const signIn = ({ employee }) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  try {
    const res = await axios.post("/Auth", employee, config);
    dispatch({
      type: SIGN_IN,
      payload: res.data
    });
    setAuthToken(localStorage.token);
    setUser();
  } catch (error) {
    dispatch({
      type: SIGN_IN_FAIL,
      payload: error.response.data
    });
  }
};

export const deleteEmployee = id => async dispatch => {
  try {
    setLoading();
    await fetch(`/Employees/${id}`, {
      method: "DELETE"
    });

    dispatch({
      type: DELETE_EMP,
      payload: id
    });
  } catch (error) {
    dispatch({
      type: EMP_ERROR,
      payload: error.response.json
    });
  }
};

export const addEmployee = employee => async dispatch => {
  try {
    setLoading();
    const res = await fetch("/Employees", {
      method: "POST",
      body: JSON.stringify(employee),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();
    dispatch({
      type: ADD_EMP,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: EMP_ERROR,
      payload: error.response.json
    });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
