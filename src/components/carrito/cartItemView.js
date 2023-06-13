import React from "react";
import { Image, Grid,Container,Text } from "@nextui-org/react";

export default function CartItemView({ item, index }) {
  function pesificar (precio){
    return precio.toLocaleString("es-ES", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  }
  return (
        <Grid.Container
          gap={0}
          justify="center"
          key={index}
        >
          <Grid xs={4}>
            <Image
              src={"https://nextui.org" + item.imageURL}
              objectFit="cover"
              width="100%"
              height={80}
              css={{ borderRadius: "4%" }}
              alt={item.nombre}
            />
          </Grid>
          <Grid xs={8} css={{ textAlign: "start" }}>
          <Container
                    css={{ display: "grid",paddingTop:"0px",alignItems:"flex-start"}}
                  >
                    <Text size="$md">{item.nombre}</Text>
                    <Text size="$md">{item.cantidad} Unidades</Text>
                    <Text size="$md">{pesificar(item.precio)}</Text>
                  </Container>
          </Grid>
        </Grid.Container>
  );
}
