import {
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./auth.actionTypes";

let token = localStorage.getItem("token");
const initialState = {
  isAuth: !!token,
  isLoading: false,
  isError: false,
  token: token,
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING: {
      return { ...state, isLoading: false, isError: false };
    }

    case LOGIN_SUCCESS: {
      localStorage.setItem("token", payload);
      return { ...state, isLoading: false, isAuth: true, isError: false };
    }

    case LOGIN_ERROR: {
      return { ...state, isLoading: false, isError: true };
    }

    case LOGOUT: {
      localStorage.removeItem("token");
      return {
        ...state,
        isAuth: false,
        token: "",
      };
    }
    
    default:
      return state;
  }
};
