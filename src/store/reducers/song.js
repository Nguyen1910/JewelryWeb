const initialState = {};

const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHOOSE_SONG":
      let newIndexSongCurrent = action.payload;
      return { ...state, indexSongCurrent: newIndexSongCurrent };
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
