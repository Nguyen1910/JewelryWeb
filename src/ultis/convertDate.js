import Moment from "moment";
export const convertDate = (date) => {
  const thisMoment = new Date(`${date.slice(0, 23)}-07:00`);
  const modify = thisMoment.toISOString();
  const modifySlice = modify.slice(0, 16);
  Moment.locale("en");
  const modifyFormat = modifySlice;
  return Moment(modifyFormat).format("DD/MM/YYYY  HH:mm");
};
