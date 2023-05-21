const API_URL = process.env.NEXT_PUBLIC_API_KEY;
const mpaccesstoken = process.env.mpaccesstoken;
import axios from "axios";

export default function handler(req, res) {
    if(req.body.id){
    const compra = await axios.get(
        `https://api.mercadopago.com/v1/payments/${req.body.id}`,
        {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${mpaccesstoken}`,
          },
        }
      );
      console.log(compra)
    }
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
    res.status(200).json({ name: 'tomas Doe' })
  }