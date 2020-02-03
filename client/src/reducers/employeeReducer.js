import {
  GET_EMPS,
  ADD_EMP,
  DELETE_EMP,
  UPDATE_EMP,
  SET_LOADING,
  SIGN_IN,
  SETUSER,
  SIGN_IN_FAIL,
  EMP_ERROR
} from "../reducers/actions/Types";
import M from "materialize-css/dist/js/materialize.min.js";

const initialState = {
  employees: null,
  authenticated: false,
  user: null,
  token: localStorage.getItem("token"),
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_EMPS:
      return {
        ...state,
        employees: action.payload,
        loading: false
      };
    case SIGN_IN: {
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        authenticated: true,
        user: action.payload.employee,
        loading: false
      };
    }
    case SETUSER:
      return {
        ...state,
        authenticated: true,
        user: action.payload,
        loading: false
      };
    case SIGN_IN_FAIL:
      localStorage.removeItem("token");
      M.toast({ html: "Sign-in failed" });
      return {
        ...state,
        token: null,
        authenticated: false,
        loading: false
      };

    case ADD_EMP:
      return {
        ...state,
        employees: [...state.employees, action.payload]
      };
    case DELETE_EMP:
      return {
        ...state,
        employees: state.employees.filter(
          employee => employee.id !== action.payload
        ),
        loading: false
      };
    case EMP_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
