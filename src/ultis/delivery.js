import apiClient from "../api/ApiConfig";

export const getStaff = async (id) => {
  try {
    const response = await apiClient.get(`/user/${id}`);
    const name = response.data.lastName + " " + response.data.firstName;
    return name;
  } catch (error) {
    console.log(error);
  }
};
