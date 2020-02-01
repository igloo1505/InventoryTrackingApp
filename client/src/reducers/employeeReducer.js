import {
  GET_EMPS,
  ADD_EMP,
  DELETE_EMP,
  UPDATE_EMP,
  SET_LOADING,
  EMP_ERROR
} from "../reducers/actions/Types";

const initialState = {
  employees: null,
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
