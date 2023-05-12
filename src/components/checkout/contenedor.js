import {
  Container,
  Text,
  Grid,
  Spacer,
  Card,
  Checkbox,
  Button,
} from "@nextui-org/react";
import { useState } from "react";
import Domicilio from "./domicilio";
export default function CheckoutContenedor({ cart, total }) {
  const [selected, setSelected] = useState("a domicilio");
  return (
    <Container>
      <Spacer y={3} />
      <Grid.Container>
        <Grid xs={1} />
        <Grid xs={6}>
          <Container>
            <Domicilio tipoEnvio={selected} />
            <Spacer y={2} />
            <Container>
              <Text size={20}>Recibir compra</Text>
              <Spacer y={1} />
              <Card>
                <Card.Body>
                  <Checkbox
                    color="primary"
                    isSelected={selected == "a domicilio" ? true : false}
                    onChange={() => setSelected("a domicilio")}
                  >
                    Envio a Domicilio por correo
                  </Checkbox>
                </Card.Body>
              </Card>
            </Container>
            <Spacer y={2} />
            <Container>
              <Text size={20}>Retirar compra</Text>
              <Spacer y={1} />
              <Card>
                <Card.Body>
                  <Checkbox
                    color="primary"
                    isSelected={selected == "retiro local" ? true : false}
                    onChange={() => setSelected("retiro local")}
                  >
                    Retirar en nuestro domicilio
                  </Checkbox>
                </Card.Body>
              </Card>
            </Container>
          </Container>
        </Grid>
        <Grid xs={3}>
          <Card>
            <Card.Body>
              <Card variant="flat">
                <Card.Body>
                  <Container>
                    {cart.map((item, index) => (
                      <Container css={{ display: "flex", justifyContent: "space-between" }} key={index}>
                        <Text size="$xl">{item.nombre} </Text>
                        <Text size="$xl">${item.precio}</Text>
                      </Container>
                    ))}
                    <Spacer y={1} />
                    <div className="separator">
                        <hr className="line" style={{height:'2px',backgroundColor:'#adadad'}}/>
                    </div>
                    <Spacer y={1} />
                    <Container css={{ display: "flex", justifyContent: "space-between" }}>
                    <Text size="$xl">Pagás </Text>
                    <Text size="$xl">${total}</Text>
                    </Container>
                  </Container>
                </Card.Body>
              </Card>
              <Spacer y={1} />
              <Button>Continuar</Button>
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={2} />
      </Grid.Container>
    </Container>
  );
}
