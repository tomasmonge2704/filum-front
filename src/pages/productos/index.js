import NavbarComponent from "@/components/navbar";
import { ProductsContext } from "@/context/productsContext";
import { Grid,Card,Row,Text,Spacer, Container } from "@nextui-org/react";
import { useContext } from 'react';
import Router from 'next/router';

export default function App() {
  const { products, setProducts } = useContext(ProductsContext);
  const handleClick = (id) => {
    Router.push('/producto/' + id)
  };
  return (
    <>
      <NavbarComponent page="/productos" />
      <Spacer y={3} />
      <Container>
      <Grid.Container gap={2} justify="flex-start">
      {products.map((item, index) => (
        <Grid xs={6} sm={3} key={index}>
          <Card isPressable onPress={() => handleClick(item._id)}>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src={"https://nextui.org" + item.imageURL}
                objectFit="cover"
                width="100%"
                height={140}
                alt={item.nombre}
              />
            </Card.Body>
            <Card.Footer css={{ justifyItems: "flex-start" }}>
              <Row wrap="wrap" justify="space-between" align="center">
                <Text b>{item.nombre}</Text>
                <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                  {item.precio}
                </Text>
              </Row>
            </Card.Footer>  
          </Card>
        </Grid>
      ))}
    </Grid.Container>
    </Container>
   </>
  );
}