import { Text, Spacer, Card, Button, Grid, Container } from "@nextui-org/react";
import React from "react";
import CartItem from "./cartItem";
export default function Cart({
  cart,
  total,
  removeFromCart,
  clearCart,
  changeCantidad,
}) {
  return (
    <Grid.Container gap={3} justify="center">
      <Grid xs={12}>
        <Text h1> Carrito</Text>
      </Grid>
      <Grid xs={8}>
        <Card isHoverable variant="bordered">
          <Card.Body css={{ textAlign: "center" }}>
            <Spacer y={2} />
            {cart.map((item, index) => (
              <CartItem
                key={index}
                changeCantidad={changeCantidad}
                item={item}
                index={index}
                removeFromCart={removeFromCart}
              />
            ))}
            <Spacer y={2} />
            <Container css={{ display: "flex", justifyContent: "center" }}>
              <Button bordered color="error" onClick={clearCart}>
                Clear Cart
              </Button>
            </Container>
          </Card.Body>
        </Card>
      </Grid>
      <Grid xs={4}>
        <Card isHoverable variant="bordered">
          <Card.Body>
          <Container css={{ display: "flex", justifyContent: "center" }}>
            <Text h3>Order Summary</Text>
            </Container>
            <Spacer y={2} />
            <Container css={{ display: "flex", justifyContent: "space-between" }}>
              <Text size="$xl">Order total: </Text>
              <Text size="$xl">${total}</Text>
            </Container>
            <Spacer y={2} />
            <Button bordered color="primary" auto>
              Checkout
            </Button>
          </Card.Body>
        </Card>
      </Grid>
    </Grid.Container>
  );
}
