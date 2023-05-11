import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";

let API = "http://hn.algolia.com/api/v1/search?";

const AppContext = createContext();
const initialState = {
  isLoading: true,
  query: "phone",
  nbPages: 0,
  page: 0,
  hits: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fechApiData = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({
        type: "GET_STORIES",
        payload: {
          hits: data.hits,
          nbPages: data.nbPages,
        },
      });
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const removePost = (post_Id) => {
    console.log("post_Id: ", post_Id);
    dispatch({ type: "REMOVE_POST", payload: post_Id });
  };

  const serchPost = (serchquery) => {
    dispatch({ type: "SEARCH_QUERY", payload: serchquery });
  };

  const getPrevPage = () => {
    dispatch({
      type: "PREV_PAGE",
    });
  };
  const getNextPage = () => {
    dispatch({
      type: "NEXT_PAGE",
    });
  };

  useEffect(() => {
    fechApiData(`${API}query=${state.query}&page=${state.page}`);
  }, [state.query,state.page]);

  return (
    <AppContext.Provider
      value={{ ...state, removePost, serchPost, getPrevPage, getNextPage }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobelContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobelContext };
