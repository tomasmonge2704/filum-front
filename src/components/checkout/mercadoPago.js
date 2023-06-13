import { Loading } from "@nextui-org/react";
import { useEffect, useState } from "react";
import Script from "next/script";
const API_URL = process.env.NEXT_PUBLIC_API_KEY;

export default function MercadoPagoCard({ compra }) {
  const [preferenceId, setPreferenceId] = useState("");
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (compra && token) {
      compra.token = token;
      async function createPreference() {
        try {
          const response = await fetch(
            `${API_URL}/api/mercadopago/create-preference`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authentication: `${token}`,
              },
              body: JSON.stringify(compra),
            }
          );
          const { preferenceId } = await response.json();
          setPreferenceId(preferenceId);
        } catch (error) {
          alert(error);
        }
      }
      createPreference();
    }
  }, [compra]);
  useEffect(() => {
    if (preferenceId && MercadoPago) {
      const mp = new MercadoPago(process.env.NEXT_PUBLIC_PUBLIC_KEY);
const bricksBuilder = mp.bricks();
bricksBuilder.create("wallet", "wallet_container", {
  initialization: {
    preferenceId: preferenceId,
  },
  customization: {
    texts: {
      action: 'buy',
      valueProp: 'Pagar con Mercado Pago'
    },
  },
});

      
    }
  }, [preferenceId]);

  return (
    <>
      <Script src="https://sdk.mercadopago.com/js/v2"></Script>
      {preferenceId ? <div id="wallet_container"></div> : <Loading />}
    </>
  );
}
