import React from "react";
import {
  Text,
  Button,
  Container,
  Grid,
  Image,
  Loading,
  Dropdown,
  Spacer,
} from "@nextui-org/react";
import { CartContext } from "@/context/cartContext";
import Router from "next/router";
import { isMobile } from "react-device-detect";
export default function ProductDetail({ product }) {
  const { addToCart } = React.useContext(CartContext);
  const [selected, setSelected] = React.useState([1]);
  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );
  React.useMemo(() => {
    if (product) product.cantidad = Number(selectedValue);
  }, [selectedValue]);

  const handleAddToCart = () => {
    addToCart(product);
  };
  const handleAddToCartCheckout = () => {
    addToCart(product);
    Router.push('/checkout')
  };

  return (
    <>
      {product ? (
        <Grid.Container gap={isMobile ? 1 : 4} justify="center">
          {!isMobile ? (<></>) : (<Text h1>{product.nombre}</Text>)}
          <Grid xs={isMobile ? 12 : 5}>
            <Image
              src={"https://nextui.org" + product.imageURL}
              objectFit="cover"
              width={isMobile ? "90%" : "100%"}
              height={400}
              css={{ borderRadius: "4%" }}
              alt={product.nombre}
            />
          </Grid>
          <Grid xs={isMobile ? 12 : 6}>
            <Container>
              {isMobile ? (<></>) : (<Text h1>{product.nombre}</Text>)}
              <Text size="$xl">${product.precio}</Text>
              <Text size="$xl">{product.descripcion}</Text>
              <Spacer y={isMobile ? 1 : 2} />
              <Dropdown>
                <Dropdown.Button
                  light
                  color="default"
                  css={{ tt: "capitalize" }}
                >
                  Cantidad: {selectedValue}
                </Dropdown.Button>
                <Dropdown.Menu
                  aria-label="Single selection actions"
                  color="default"
                  variant="light"
                  disallowEmptySelection
                  selectionMode="single"
                  selectedKeys={selected}
                  onSelectionChange={setSelected}
                >
                  <Dropdown.Item key="1">1</Dropdown.Item>
                  <Dropdown.Item key="2">2</Dropdown.Item>
                  <Dropdown.Item key="3">3</Dropdown.Item>
                  <Dropdown.Item key="4">4</Dropdown.Item>
                  <Dropdown.Item key="5">5</Dropdown.Item>
                  <Dropdown.Item key="6">6</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Spacer y={isMobile ? 1 : 2} />
              <Button onPress={handleAddToCart}>Agregar al carrito</Button>
              <Spacer y={1} />
              <Button onPress={handleAddToCartCheckout}>Comprar</Button>
            </Container>
          </Grid>
        </Grid.Container>
      ) : (
        <Container css={{display:"flex",justifyContent:"center",alignContent:"center",height:"60vh"}}>
          <Loading />
        </Container>
      )}
    </>
  );
}
