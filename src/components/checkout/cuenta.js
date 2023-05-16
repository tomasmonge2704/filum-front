import { Container, Text, Spacer, Card, Button } from "@nextui-org/react";
import React from "react";
import CartItemView from "../carrito/cartItemView";
import ContactoCard from "./constactoCard";
import MercadoPagoCard from "./mercadoPago";
export default function Cuenta({ cart, total }) {
  const [selected, setSelected] = React.useState(false);
  return (
    <Card>
      <Card.Body>
        {selected == true ? (
          <>
            <Spacer y={1} />
            <Button shadow onClick={() => setSelected(false)}>Volver</Button>
            <Spacer y={2} />
            <MercadoPagoCard total={total}/>
            <Spacer y={1} />
          </>
        ) : (
          <>
            <Card css={{ $$cardColor: "none" }}>
              <Card.Body>
                <Container>
                {cart.map((item, index) => (
                    <>
                    <CartItemView item={item} index={index} />
                    <Spacer y={1} />
                    </>
                  ))}
                  <div className="separator">
                    <hr
                      className="line"
                      style={{ height: "2px", backgroundColor: "#adadad" }}
                    />
                  </div>
                  <Spacer y={1} />
                  <Container
                    css={{ display: "flex",padding:"0px" ,justifyContent: "space-between" }}
                  >
                    <Text size="$xl">Pagás </Text>
                    <Text size="$xl">${total}</Text>
                  </Container>
                </Container>
              </Card.Body>
            </Card>
            <Spacer y={1} />
            <Button shadow onClick={() => setSelected(true)}>Continuar</Button>
          </>
        )}
      </Card.Body>
    </Card>
  );
}
