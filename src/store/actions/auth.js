export const setUser = (currentUser) => {
  return {
    type: "SET_USER",
    payload: currentUser,
  };
};

export const removeUser = () => {
  return {
    type: "REMOVE_USER",
    payload: {},
  };
};

export const getSongListCurrent = (songList) => {
  return {
    type: "GET_SONG_LIST_CURRENT",
    payload: songList,
  };
};
