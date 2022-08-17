export const chooseSong = (index) => {
  return {
    type: "CHOOSE_SONG",
    payload: index,
  };
};

export const getSongListCurrent = (songList) => {
  return {
    type: "GET_SONG_LIST_CURRENT",
    payload: songList,
  };
};
