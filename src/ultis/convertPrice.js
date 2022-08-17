export const convertPrice = (price) => {
  const milli = Math.floor(price / 1000000);
  const hund = (price % 1000000) / 1000;
  let newHund = "";

  if (milli === 0) {
    if (hund === 0) {
      return `0đ`;
    } else {
      if (hund.toString().length === 2) {
        newHund = `0${hund}`;
      } else if (hund.toString().length === 1) {
        newHund = `00${hund}`;
      } else {
        newHund = hund;
      }
      return `${milli}.${newHund}.000đ`;
    }
  } else {
    if (hund.toString().length === 2) {
      newHund = `0${hund}`;
    } else if (hund.toString().length === 1) {
      newHund = `00${hund}`;
    } else {
      newHund = hund;
    }
    return `${milli}.${newHund}.000đ`;
  }
};
