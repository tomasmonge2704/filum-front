const API_URL = process.env.NEXT_PUBLIC_API_KEY;
import { UseCompraContext } from "@/utils/compraContextUtil";
export default function handler(req, res) {
    const {compra,setCompra} = UseCompraContext();
    console.log(req)
    const postCompra = async () => {
        try {
          const body = await compra;
          await fetch(`${API_URL}/api/compras`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authentication: `${localStorage.getItem("token")}`,
            },
            body,
          });
        } catch (error) {
          alert(error);
        }
      };
    
      if (compra.length !== 0) {
        postCompra();
      }
    res.status(200).json({ name: 'tomas Doe' })
  }