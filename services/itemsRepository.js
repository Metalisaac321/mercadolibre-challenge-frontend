import { axiosMeli } from './axiosInstance';

export const getItemsByQuery = async (query) => {
  return axiosMeli
    .get(`items`, {
      params: { q: query },
    })
    .then((response) => response.data);
};

export const getItemDetail = async (itemId) => {
  return axiosMeli.get(`items/${itemId}`).then((response) => response.data);
};
