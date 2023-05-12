import { Container, Text, Spacer, Card, Button } from "@nextui-org/react";
import React from "react";
export default function Cuenta({ cart, total }) {
  const [selected, setSelected] = React.useState(false);
  return (
    <Card>
      <Card.Body>
        {selected == true ? (
          <>
            <Button onClick={() => setSelected(false)}>Volver</Button>
            <Spacer y={1} />
            <Button>Pagar con mercado pago</Button>
            <Spacer y={1} />
            <Text >Acordar el pago luego de finalizar la compra</Text>
            <Button>Enviar compra</Button>
          </>
        ) : (
          <>
            <Card variant="flat">
              <Card.Body>
                <Container>
                  {cart.map((item, index) => (
                    <Container
                      css={{ display: "flex", justifyContent: "space-between" }}
                      key={index}
                    >
                      <Text size="$xl">{`${item.nombre} ${item.cantidad}u.`}</Text>
                      <Text size="$xl">${item.precio}</Text>
                    </Container>
                  ))}
                  <Spacer y={1} />
                  <div className="separator">
                    <hr
                      className="line"
                      style={{ height: "2px", backgroundColor: "#adadad" }}
                    />
                  </div>
                  <Spacer y={1} />
                  <Container
                    css={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Text size="$xl">Pagás </Text>
                    <Text size="$xl">${total}</Text>
                  </Container>
                </Container>
              </Card.Body>
            </Card>
            <Spacer y={1} />
            <Button onClick={() => setSelected(true)}>Continuar</Button>
          </>
        )}
      </Card.Body>
    </Card>
  );
}
