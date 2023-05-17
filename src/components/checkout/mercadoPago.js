import { Card } from "@nextui-org/react";
const API_URL = process.env.NEXT_PUBLIC_API_KEY;

export default function MercadoPagoCard ({envio,user,cart,total}) {
    const handleMercadoPago = () => {
        postCompra()
    }
    async function postCompra(){
      const body = JSON.stringify({
        "status": "Nuevo",
        "datosComprador": {
            "username": user.username,
            "metodoPago": "Credito",
            "numeroCuenta": "1010049219412",
            "envio":envio,
            "adress": user.adress
        },
        "datosVendedor": {
            "numeroCuenta": "1412412515212543",
            "nombreCuenta": "filumSA"
        },
        "productos":cart,
        "total":total
    })
      try {
        const response = await fetch(`${API_URL}/api/compras`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authentication: `${localStorage.getItem("token")}`,
          },
          body
        });
        const data = await response.json();
        alert(data)
      } catch (error) {
        alert(error);
      }
    }
    return(
        <Card isHoverable variant="bordered" isPressable css={{ w: "100%", h: 120 }} onClick={handleMercadoPago}>
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
      );
} 