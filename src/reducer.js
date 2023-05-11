const reducer = (state, action) => {
  console.log("action: ", action);
  console.log("state:===> ", state);
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_STORIES":
      return {
        ...state,
        hits: action.payload.hits,
        isLoading: false,
        nbPages: action.payload.nbPages,
      };

    case "REMOVE_POST":
      return {
        ...state,
        hits: state.hits.filter((e) => e.objectID !== action.payload),
      };
    case "SEARCH_QUERY":
      return {
        ...state,
        query: action.payload,
      };
    case "NEXT_PAGE":
      let pageNumIcn = state.page +1;
      if (pageNumIcn >= state.nbPages) {
        pageNumIcn = 0;
      } 
      return {
        ...state,
        page: pageNumIcn,
      };
    case "PREV_PAGE":
      let pageNum = state.page -1;
      if (pageNum <= 0) {
        pageNum = 0;
      } 
      return {
        ...state,
        page: pageNum,
      };

    default:
      break;
  }
  return state;
};
export default reducer;
