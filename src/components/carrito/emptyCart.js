import {
  Text,
  Container,
  Spacer,
  Card,
  Row,
  Button,
} from "@nextui-org/react";
import Router from "next/router";

export default function EmptyCart(){
    return(
          <Container xl>
            <Card css={{ $$cardColor: "none" }}>
              <Card.Body>
                <Row justify="center" align="center">
                  <Text h2 css={{ m: 0 }}>
                    El carrito esta vacio
                  </Text>
                  <Spacer y={3} />
                </Row>
                <Spacer y={2} />
                <Row justify="center" align="center">
                  <Button
                    shadow
                    onPress={() => {
                      Router.push("/productos");
                    }}
                    color="success"
                    auto
                  >
                    Seguir comprando
                  </Button>
                </Row>
              </Card.Body>
            </Card>
          </Container>
    )
}