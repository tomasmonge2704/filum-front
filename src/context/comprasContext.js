import React, { createContext, useReducer } from "react";

const ComprasContext = createContext();

const initialState = {
  userCompras: [],
  isLoading: false,
  error: null,
};

const ACTIONS = {
  GET_USER_COMPRAS_START: "get_user_compras_start",
  GET_USER_COMPRAS_SUCCESS: "get_user_compras_success",
  GET_USER_COMPRAS_ERROR: "get_user_compras_error",
  POST_USER_COMPRA_START: "post_user_compra_start",
  POST_USER_COMPRA_SUCCESS: "post_user_compra_success",
  POST_USER_COMPRA_ERROR: "post_user_compra_error",
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_USER_COMPRAS':
          return { ...state, compras: action.payload, error: null };
        case 'POST_USER_COMPRA':
          return { ...state, compras: [...state.compras, action.payload], error: null };
        case 'SET_ERROR':
          return { ...state, error: action.payload };
        default:
          return state;
      }
};

const ComprasProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getUserCompras = async (username) => {
    dispatch({ type: ACTIONS.GET_USER_COMPRAS_START });
    try {
      const response = await fetch(`${API_URL}/api/compras/${username}`);
      const data = await response.json();
      dispatch({ type: ACTIONS.GET_USER_COMPRAS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: ACTIONS.GET_USER_COMPRAS_ERROR,
        payload: error.message,
      });
    }
  };

  const postUserCompra = async (compra) => {
    dispatch({ type: ACTIONS.POST_USER_COMPRA_START });
    try {
      const response = await fetch(`${API_URL}/api/compras/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(compra),
      });
      const data = await response.json();
      dispatch({ type: ACTIONS.POST_USER_COMPRA_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: ACTIONS.POST_USER_COMPRA_ERROR,
        payload: error.message,
      });
    }
  };

  return (
    <ComprasContext.Provider value={{ state, getUserCompras, postUserCompra }}>
      {children}
    </ComprasContext.Provider>
  );
};

export { ComprasContext, ComprasProvider };
