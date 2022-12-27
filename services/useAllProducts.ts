import { useQuery } from "react-query";

import { ProductsApi } from "./api";

export function useAllProducts() {
  const {
    isLoading,
    data: allProducts,
    error,
  } = useQuery("products list", () => ProductsApi.getProducts(), {
    select({ data }) {
      return data;
    },
  });

  return {
    isLoading,
    allProducts,
    error,
  };
}
