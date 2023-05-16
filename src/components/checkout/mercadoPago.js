import { Card } from "@nextui-org/react";

export default function MercadoPagoCard ({total}) {
    const handleMercadoPago = () => {
        alert(total)
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