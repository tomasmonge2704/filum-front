import { createContext, useState, useEffect } from "react";
const API_URL = process.env.NEXT_PUBLIC_API_KEY;

export const ProductsContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const getProducts = async (token) => {
    await fetch(`${API_URL}/api/producto`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authentication: `${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
       setProducts(data);
      });
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    getProducts(token);
  }, []);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
}
