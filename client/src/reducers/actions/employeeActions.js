import Axios from "axios";
import setAuthToken from "../../util/setToken";
import {
  GET_EMPS,
  ADD_EMP,
  DELETE_EMP,
  UPDATE_EMP,
  CLOCK_OUT,
  GET_IN,
  SET_LOADING,
  SETUSER,
  SIGN_IN_FAIL,
  SIGN_IN,
  EMP_ERROR
} from "./Types";
import M from "materialize-css/dist/js/materialize.min.js";

const config = {
  headers: {
    "Content-Type": "application/json"
  }
};

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

export const getClockedIn = () => async dispatch => {
  try {
    setLoading();
    const res = await Axios.get("/clockedIn");
    dispatch({
      type: GET_IN,
      payload: res.data
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: EMP_ERROR
    });
  }
};

const setUser = async () => {
  return async dispatch => {
    setAuthToken(localStorage.token);
    try {
      const res = await Axios.get("/Auth");
      dispatch({
        type: SETUSER,
        payload: res.data
      });
    } catch (error) {
      dispatch({ type: EMP_ERROR });
    }
  };
};

// export const clockIn = ({id}) => async dispatch => {
//   console.log(id);
//   try {
//     const res = await axios.post("/clockedIn", id, config);
//     console.log(res);
//     dispatch({
//       type: GET_IN,
//       payload: res.data
//     });
//   } catch (error) {
//     console.error(error.message);
//     dispatch({ type: EMP_ERROR });
//   }
// };

export const clockIn = id => async dispatch => {
  try {
    setLoading();
    const res = await Axios.post("/clockedIn", id, config);
    dispatch({
      type: GET_IN,
      payload: res.data
    });
  } catch (error) {
    dispatch({ type: EMP_ERROR, payload: error.response.status });
  }
};

export const signIn = ({ employee }) => async dispatch => {
  try {
    const res = await Axios.post("/Auth", employee, config);

    console.log(res);
    let id = await res.data.employee._id;
    console.log(id);

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
export const clockOut = id => async dispatch => {
  try {
    setLoading();
    Axios.delete(`/clockedIn/${id}`);
    dispatch({
      type: CLOCK_OUT,
      payload: id
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: EMP_ERROR
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
