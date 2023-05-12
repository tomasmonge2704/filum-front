import {
  Container,
  Text,
  Grid,
  Spacer,
  Card,
  Checkbox,
} from "@nextui-org/react";
import { useState } from "react";
import Domicilio from "./domicilio";
import Cuenta from "./cuenta";
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
          <Cuenta cart={cart} total={total} />
        </Grid>
        <Grid xs={2} />
      </Grid.Container>
    </Container>
  );
}
