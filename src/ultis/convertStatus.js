export const convertStatus = (status) => {
  if (status === "STATUS0") {
    return `Chờ xử lý`;
  } else if (status === "STATUS1") {
    return `Đang giao`;
  } else {
    return `Hoàn thành`;
  }
};
