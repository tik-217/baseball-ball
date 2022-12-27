import axios from "axios";

axios.defaults.baseURL = "https://fakestoreapi.com";

export const ProductsApi = {
  async getProducts() {
    return axios.get("/products");
  },
};
