import {
  GET_EMPS,
  ADD_EMP,
  DELETE_EMP,
  UPDATE_EMP,
  SET_LOADING,
  SIGN_IN,
  EMP_ERROR
} from "./Types";

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
export const signIn = ({ employee }) => async dispatch => {
  try {
    setLoading();
    const res = await fetch("/Auth", {
      method: "POST",
      body: JSON.stringify(employee),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();
    console.log(data);
    dispatch({
      type: SIGN_IN,
      payload: employee
    });
  } catch (error) {
    dispatch({
      type: EMP_ERROR,
      payload: error.response.status
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
      payload: error.response.status
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
