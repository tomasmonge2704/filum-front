import Router from "next/router";
const API_URL = process.env.NEXT_PUBLIC_API_KEY;
import { useContext } from "react";
import { CompraContext } from "@/context/compraContext";
export default function handler(req, res) {
    const {compra,setCompra} = useContext(CompraContext);
    console.log(compra)
    async function postCompra() {
        try {
          const response = await fetch(`${API_URL}/api/compras`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authentication: `${localStorage.getItem("token")}`,
            },
            body,
          });
    
          const data = await response.json();
          Router.push(`/mis-compras/${data._id}`);
        } catch (error) {
          alert(error);
        }
      }
    res.status(200).json({ name: 'tomas Doe' })
  }