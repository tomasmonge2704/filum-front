import { Grid, Image, Button,Card,Text, Container } from "@nextui-org/react";
import Router from "next/router";
export default function CompraItem({ item, index }) {
  return (
    <Card isHoverable variant="bordered">
        <Card.Header>
        <Text css={{marginRight:"5px"}} >Fecha de la compra:</Text>
        <Text b>{item.fechaCompra}</Text>
        </Card.Header>
        <Card.Body>
    <Grid.Container
      key={index}
      gap={1}
      justify="center"
      css={{ borderTop: "5px Black" }}
    >
      <Grid xs={3}>
        <Image
          src={"https://nextui.org" + item.productData.imageURL}
          objectFit="cover"
          width="100%"
          height={150}
          css={{ borderRadius: "4%" }}
          alt={item.productData.nombre}
        />
      </Grid>
      <Grid xs={7}>
        <Container css={{ textAlign: "start",display:"grid" }}>
        {item.status == "Entregado" ? (<Text color="success">{item.status} | {item.fechaRecibido}</Text>) : (<Text color="primary">{item.status}</Text>)}
        <Text>{item.productData.nombre}</Text>
        <Text>${item.productData.precio}</Text>
        <Text>{item.productData.cantidad} unidades.</Text>
        <Text>
        {item.productData.descripcion.length > 20
            ? item.productData.descripcion.substring(0, 20) + "..."
            : item.productData.descripcion}
        </Text>
        </Container>
      </Grid>
      <Grid
        xs={2}
      >
        <Container css={{display:"grid"}}>
        <Button onClick={() => Router.push('/mis-compras/' + item._id)} shadow color="secondary" auto>
          Ver compra
        </Button>
        <Button onClick={() => Router.push('/producto/' + item.productData._id)} shadow color="primary" auto>
          Volver a Comprar
        </Button>
        </Container>
      </Grid>
    </Grid.Container>
    </Card.Body>
    </Card>
  );
}
