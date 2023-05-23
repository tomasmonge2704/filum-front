import React from "react";
import {
  Text,
  Button,
  Container,
  Input,
  Grid,
  Tooltip,
  Loading,
  Spacer,
} from "@nextui-org/react";
import { CartContext } from "@/context/cartContext";
import { UserContext } from "@/context/userContext";
import Router from "next/router";
import { isMobile } from "react-device-detect";
import Model3d from "./model3d";
export default function ProductDetail({ product }) {
  const { addToCart } = React.useContext(CartContext);
  const { user } = React.useContext(UserContext);
  const [cantidad, setCantidad] = React.useState(1);
  React.useMemo(() => {
    if (product) {
      if (cantidad <= product.stock && cantidad >= 1) {
        product.cantidad = Number(cantidad);
      } else {
        setCantidad(product.stock);
      }
    }
  }, [cantidad]);

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleAddToCartCheckout = () => {
    addToCart(product);
    Router.push("/checkout");
  };

  return (
    <>
      {product ? (
        <Grid.Container gap={isMobile ? 1 : 4} justify="center">
          {!isMobile ? <></> : <Text h1>{product.nombre}</Text>}
          <Grid xs={isMobile ? 12 : 5}>
            <Model3d />
          </Grid>
          <Grid xs={isMobile ? 12 : 6}>
            <Container css={isMobile && { display: "grid" }}>
              {isMobile ? <></> : <Text h1>{product.nombre}</Text>}
              <Text size="$xl">${product.precio}</Text>
              <Text size="$xl">{product.descripcion}</Text>
              <Text size="$xl">Stock disponible: {product.stock}</Text>
              {!isMobile && <Spacer y={1} />}
              <Input
                labelLeft="Cantidad"
                width="160px"
                type="Number"
                value={cantidad}
                onChange={(e) => setCantidad(e.target.value)}
              />
              <Spacer y={isMobile ? 1 : 2} />
              {user.username == "Invitado" ? (
                <>
                <Tooltip
                  content={"Debes ingresar con tu usuario para disponer de esta funcionalidad"}
                  rounded
                  placement="rightStart"
                  color="primary"
                >
                  <Button disabled>Agregar al carrito</Button>
                </Tooltip>
                <Spacer y={1} />
                <Tooltip
                  content={"Debes ingresar con tu usuario para disponer de esta funcionalidad"}
                  rounded
                  placement="rightStart"
                  color="primary"
                >
                  <Button disabled>
                  Comprar
                </Button>
                </Tooltip>
                
                </>
              ) : (
                <>
                  <Button onPress={handleAddToCart}>Agregar al carrito</Button>
                  <Spacer y={1} />
                  <Button onPress={handleAddToCartCheckout}>
                    Comprar
                  </Button>
                </>
              )}
            </Container>
          </Grid>
        </Grid.Container>
      ) : (
        <Container
          css={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            height: "60vh",
          }}
        >
          <Loading />
        </Container>
      )}
    </>
  );
}
