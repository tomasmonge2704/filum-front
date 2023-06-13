import {
  Text,
  Container,
  Spacer,
  Card,
  Row,
  Button,
  Image,
  useTheme
} from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import Router from "next/router";

export default function EmptyCart() {
  const { isDark } = useTheme();
  return (
    <Container xl>
      <Card css={{ $$cardColor: "none" }}>
        <Card.Body>
        <Image
            src="/emptyCart.png"
            objectFit="contain"
            width="100%"
            height={300}
            css={isDark && {filter:"invert()"}}
            alt="carritoVacio"
          />
          <Row justify="center" align="center">
            <Text
              h3
              size={20}
            >
              No tienes compras actualmente
            </Text>
          </Row>
          <Spacer y={1} />
          <Row justify="center" align="center">
            <Button
              shadow
              onPress={() => {
                Router.push("/productos");
              }}
              auto
            >
              Ver productos
            </Button>
          </Row>
          <Spacer y={2} />
                  </Card.Body>
      </Card>
    </Container>
  );
}
