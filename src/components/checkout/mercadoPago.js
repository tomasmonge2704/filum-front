import { Card } from "@nextui-org/react";
const API_URL = process.env.NEXT_PUBLIC_API_KEY;

export default function MercadoPagoCard ({total}) {
    const handleMercadoPago = () => {
        postCompra()
    }
    async function postCompra(){
      const body = JSON.stringify({
        "status": "Entregado",
        "datosComprador": {
            "username": "admin",
            "metodoPago": "Credito",
            "numeroCuenta": "1010049219412",
            "adress": {
                "calle": "juan dias de solis",
                "altura": "2326",
                "piso": "1 b"
            }
        },
        "datosVendedor": {
            "numeroCuenta": "1412412515212543",
            "nombreCuenta": "filumSA"
        },
        "productData": {
            "_id": "645568085f89a46ef70a4a1c",
            "nombre": "orange",
            "precio": 500,
            "imageURL": "/images/fruit-1.jpeg",
            "cantidad": 1,
            "descripcion": "adsaddssdadadadasdadadasdafdgdddfmnsjasdadghashhajgasdasdads"
        },
        "fechaCompra": "16/05/2023"
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
        <Card isHoverable variant="bordered" isPressable css={{ w: "100%", h: "100px" }} onClick={handleMercadoPago}>
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