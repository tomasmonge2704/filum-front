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
      const body = compra.data.metadata;
      const response = await axios.post(`${API_URL}/api/compras`, {
        headers: {
          "Content-Type": "application/json",
          Authorization:`${compra.data.metadata.token}`,
        },
        body
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  res.status(200).json({ name: 'tomas Doe' });
}
