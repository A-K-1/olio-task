const Reducer = (state, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return {
        ...state,
        itemData: action.payload.data,
      };
    case "ADD_CLICKED_ITEM":
      return {
        ...state,
        clickedItem: action.payload.clickedItem,
      };
    case "ADD_CLICKED_ITEM_LIST":
      return {
        ...state,
        clickedItems: action.payload.clickedItems,
      };
    default:
      return state;
  }
};

export default Reducer;
