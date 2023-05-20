import { Card } from "@nextui-org/react";
import Router from "next/router";
import { useState } from "react";
import { initMercadoPago,Wallet } from '@mercadopago/sdk-react';

const API_URL = process.env.NEXT_PUBLIC_API_KEY;

export default function MercadoPagoCard({ envio, user, cart, total }) {
  const [preferenceId, setPreferenceId] = useState('');
  initMercadoPago(process.env.NEXT_PUBLIC_PUBLIC_KEY);
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
    {preferenceId ? (
      <Wallet initialization={{ preferenceId: preferenceId }} />
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
