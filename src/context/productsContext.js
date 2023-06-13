import { createContext, useState, useEffect, useMemo } from "react";
const API_URL = process.env.NEXT_PUBLIC_API_KEY;

export const ProductsContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  const getProducts = async (token) => {
    try {
      const response = await fetch(`${API_URL}/api/producto`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authentication: `${token}`,
        },
      });
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const [token, setToken] = useState("");
  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  useMemo(() => {
    if(token)getProducts(token);
  }, [token]);

  const contextValue = useMemo(() => {
    return { products, setProducts };
  }, [products, setProducts]);

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
}

