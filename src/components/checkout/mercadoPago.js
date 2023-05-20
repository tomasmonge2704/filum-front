import { Card } from "@nextui-org/react";
import Router from "next/router";
import { useEffect, useState } from "react";
import Script from "next/script";
const API_URL = process.env.NEXT_PUBLIC_API_KEY;

export default function MercadoPagoCard({ envio, user, cart, total }) {
  const [preferenceId, setPreferenceId] = useState('');
  const body = JSON.stringify({
    status: "Nuevo",
    datosComprador: {
      username: user.username,
      metodoPago: "Credito",
      numeroCuenta: "1010049219412",
      envio,
      adress: user.adress,
    },
    datosVendedor: {
      numeroCuenta: "1412412515212543",
      nombreCuenta: "filumSA",
    },
    productos: cart,
    total,
  });
  useEffect(() => {
    const mp = new MercadoPago(process.env.NEXT_PUBLIC_PUBLIC_KEY);
    const bricksBuilder = mp.bricks();
    if (preferenceId) {
      bricksBuilder.create("wallet", "wallet_container", {
        initialization: {
          preferenceId: preferenceId,
        },
      });
    }
  }, [preferenceId]);
  const handleMercadoPago = async () => {
    try {
      const response = await fetch(`${API_URL}/api/mercadopago/create-preference`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authentication: `${localStorage.getItem("token")}`,
        },
        body,
      });
      const { preferenceId } = await response.json();
      setPreferenceId(preferenceId);
    } catch (error) {
      alert(error);
    }
  };

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
  return (<>
  <Script src="https://sdk.mercadopago.com/js/v2"></Script>
    {preferenceId ? (
      <div id="wallet_container"></div>
    ) : (
    <Card
      isHoverable
      variant="bordered"
      isPressable
      css={{ w: "100%", h: 120 }}
      onClick={handleMercadoPago}
    >
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src="/mercado-pago.png"
          width="100%"
          height="100%"
          objectFit="contains"
          alt="Card example background"
        />
        
      </Card.Body>
    </Card>
    )}
    </>
  );
}
