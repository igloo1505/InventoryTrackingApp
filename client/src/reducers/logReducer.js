import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG
} from "./actions/Types";

//!! initialize state pertaining to this specific log
const initialState = {
  logs: null,
  current: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_LOGS:
      return {
        ...state,
        logs: action.payload,
        loading: false
      };
    case ADD_LOG:
      return {
        ...state,
        logs: [...state.logs, action.payload],
        loading: false
      };
    case DELETE_LOG:
      return {
        ...state,
        logs: state.logs.filter(log => log.id !== action.payload),
        loading: false
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    case UPDATE_LOG:
      return {
        ...state,
        logs: state.logs.map(log =>
          log.id === action.payload.id ? action.payload : log
        )
      };
    case LOGS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
