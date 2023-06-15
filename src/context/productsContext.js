import { createContext, useState, useMemo } from "react";
const API_URL = process.env.NEXT_PUBLIC_API_KEY;

export const ProductsContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await fetch(`${API_URL}/api/producto`, {method: "GET"});
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  useMemo(() => {
    getProducts();
  }, []);

  const contextValue = useMemo(() => {
    return { products, setProducts };
  }, [products, setProducts]);

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
}

