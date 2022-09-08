const initialState = {
  currentUser: JSON.parse(localStorage.getItem("currentUser")) || {},
};

const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      localStorage.setItem("currentUser", JSON.stringify(action.payload));
      return { ...state, currentUser: { ...action.payload } };
    case "REMOVE_USER":
      localStorage.removeItem("currentUser");
      return { ...state, currentUser: {} };
    case "GET_SONG_LIST_CURRENT":
      let newList = JSON.parse(JSON.stringify(action.payload));
      return {
        ...state,
        songList: newList,
      };
    default:
      return state;
  }
};

export default songReducer;
