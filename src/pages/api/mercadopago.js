const API_URL = process.env.NEXT_PUBLIC_API_KEY;
const mpaccesstoken = process.env.mpaccesstoken;
import axios from "axios";

export default async function handler(req, res) {
  if (req.body.data && req.body.type === 'payment') {
    const compra = await axios.get(
      `https://api.mercadopago.com/v1/payments/${req.body.data.id}`,
      {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${mpaccesstoken}`,
        },
      }
    );
    try {
      const body = JSON.stringify(compra.data.metadata);
      const response = await fetch(`${API_URL}/api/compras`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authentication:compra.data.metadata.token,
        },
        body:body,
      });
      console.log(`${compra.data.metadata.token}`);
    } catch (error) {
      console.log(error);
    }
  }

  res.status(200).json({ name: 'tomas Doe' });
}
